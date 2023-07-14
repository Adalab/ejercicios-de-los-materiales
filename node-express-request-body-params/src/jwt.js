//1. Importar los módulos de NPM que necesito
const express = require("express");
const jwt = require("jsonwebtoken"); //para crear tokens
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



//middlewares
const generateToken = (payload) => {
  const token = jwt.sign(payload, "secreto", { expiresIn: "1h" });
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, "secreto");
    return decoded;
  } catch (err) {
    return null;
  }
};

//middleware para proteger las rutas
const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];

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

//conexion a la base de datos
async function getConnection() {
  const connection = await mysql.createConnection({
    host: "sql.freedb.tech",
    database: "freedb_projects-adalab",
    user: "freedb_root-adalab",
    password: "Kc8vbqDh74#*uBz",
  });
  await connection.connect();

  console.log(
    `Conexión establecida con la base de datos (identificador=${connection.threadId})`
  );
  return connection;
}

//Endpoints
//listado de usuarios
app.get("/users", authenticateToken, async (req, res) => {
  let sql = "SELECT * FROM user";
  const connection = await getConnection();
  const [users, fields] = await connection.query(sql);
  connection.end();

  const response = {
    users: users,
  };
  res.json(response);
});

//Crear un usuario
 
app.post("/api/register", async (req, res) => {
    const username = req.body.email;
    const password = req.body.password;
    const passwordHash = await bcrypt.hash(password, 10);
  
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

//Login//Login
app.post("/api/login", async (request, response) => {
    const body = request.body;
  
    //Buscar si el usuario existe en la bases de datos
    let sql = "SELECT * FROM user WHERE email= ?";
    const connection = await getConnection();
    const [users, fields] = await connection.query(sql, [body.email]);
    connection.end();
    const user = users[0];
    console.log(user); 
  
    const passwordCorrect =
      user === null
        ? false
        : await bcrypt.compare(body.password, user.password);
  
    //Sino existe el usuario o el password no es correcto
    if (!(user && passwordCorrect)) {
      return response.status(401).json({
        error: "invalid username or password",
      });
    }
    const userForToken = {
      username: user.username,
      id: user.id,
    };
  
    //Crear el token para enviar al front
    const token = generateToken(userForToken);
  
    //enviar la respuesta correcta
    response
      .status(200)
      .json({ token, username: user.username, name: user.name });
  });
  
  

//get articles
//get articles
app.get("/articles", authenticateToken, async (req, res) => {

    let sql = "SELECT * FROM article WHERE email = ?";
    console.log(req.user);
  
    const connection = await getConnection();
    const [articles, fields] = await connection.query(sql, [req.user.username]);
    connection.end();
  
    const response = {
        articles: articles,
    };
    res.json(response);
  });

//close sessión
app.put("/api/logout" ,async (req, res) => {
    const authHeader = req.headers["authorization"];
    jwt.sign(authHeader, "", { expiresIn: 1 } , (logout, err) => {
       if (logout) {
          res.send({msg : 'Has sido desconectado' });
       } else {
          res.send({msg:'Error'});
       }
    });
  
});

