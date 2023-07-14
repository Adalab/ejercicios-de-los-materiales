//1. Importar los módulos de NPM que necesito
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mysql = require("mysql2/promise");
const cors = require("cors");

//2. Crear el servidor
const app = express();

//3. Configurar el servidor
app.use(cors());
app.use(express.json({ limit: "25mb" }));

//4.Arracamos el servidor en un puerto
const appPort = 4000;
app.listen(appPort, () => {
  console.log(`App listening at http://localhost:${appPort}`);
});

// static server
const staticServerPath = "./public";
app.use(express.static(staticServerPath));

//conexion a la base de datos
async function getConnection() {
  const connection = await mysql.createConnection({
    host: "localhost",
    database: "empleados",
    user: "root",
    password: "",
  });
  await connection.connect();

  console.log(
    `Conexión establecida con la base de datos (identificador=${connection.threadId})`
  );
  return connection;
}

//funciones de token
const generateToken = (payload) => {
  const token = jwt.sign(payload, "secret_key", { expiresIn: "1h" });
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, "secret_key");
    return decoded;
  } catch (err) {
    return null;
  }
};

const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  console.log(token);

  if (!token) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ error: "Token inválido" });
  }

  req.user = decoded;
  next();
};

//Endpoint Register
app.post("/api/register", async (req, res) => {
  const username = req.body.email;
  const password = req.body.password;
  console.log(password);

  const passwordHash = await bcrypt.hash(password, 10);
  console.log(passwordHash);

  let sql = "INSERT INTO user (email,password) VALUES (?,?)";
  let user = {
    username: username,
    passwordHash: passwordHash,
  };

  jwt.sign(user, "secret_key", async (err, token) => {
    if (err) {
      res.status(400).send({ msg: "Error" });
    } else {
      const connection = await getConnection();
      const [results, fields] = await connection.query(sql, [
        username,
        passwordHash,
      ]);
      connection.end();
      res.json({ msg: "success", token: token, id: results.insertId });
    }
  });
});

//Endpoint Login
app.post("/api/login", async (request, response) => {
  const body = request.body;

  //Buscar si el usuario existe en la bases de datos
  let sql = "SELECT * FROM user WHERE email= ?";
  const connection = await getConnection();
  const [users, fields] = await connection.query(sql, [body.email]);
  connection.end();
  const user = users[0];
  console.log(user);

  //verificar si la contraeña
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(body.password, user.password);

  //Sino existe el usuario o el password no es correcto
  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: "invalid username or password",
    });
  }

  //Crear el token para enviar al front
  const userForToken = {
    username: user.email,
    id: user.id,
  };
  const token = generateToken(userForToken);

  //enviar la respuesta correcta
  response.status(200).json({ token, email: user.email });
});

//get articles
app.get("/articles", authenticateToken, async (req, res) => {
  let sql = "SELECT * FROM article WHERE email = ?";

  const connection = await getConnection();
  const [articles, fields] = await connection.query(sql, [req.user.username]);
  connection.end();

  const response = {
    articles: articles,
  };
  res.json(response);
});

//close session
app.put("/api/logout", async (req, res) => {
  const authHeader = req.headers["authorization"];
  jwt.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
    if (logout) {
      res.send({ msg: "Has sido desconectado" });
    } else {
      res.send({ msg: "Error" });
    }
  });
});
