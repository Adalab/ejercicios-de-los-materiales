## Ejercicio para el pair programming

Por petición de alumnas de promociones pasadas, hemos creado un ejercicio para que puedas programarlo día a día con tu pareja durante el horario de pair programming.

En estos materiales encontraréis el enunciado de las tareas que debéis hacer cada día.

Es obligatorio que lo hagáis en la hora de pair programming porque:

- Aquí os enseñamos trucos y buenas prácticas.
- Cuando a mitad de módulo cambies de pareja tendrás que seguir trabajando sobre tu ejercicio o el de tu nueva pareja.

## Enunciado del ejercicio (primera parte)

Todo el mundo sabe cómo se juega al ahorcado, pero aún así vamos a especificar lo que debemos hacer en el ejercicio. Os contamos lo que haremos en la primera parte del módulo. Cuando lleguemos a la lección del **Router** os contaremos la segunda parte.

![](./assets/images/react_ejercicio_ahorcado_enunciado-01.gif)

1. Al arrancar la página, el juego debe obtener una palabra aleatoria de una API. Esta palabra es la que la jugadora debe adivinar.
   1. Una vez la API nos devuelve la palabra aleatoria debemos pintar en el apartado **Solución** varios guiones bajos para indicar a la jugadora la longitud de la palabra que debe adivinar.
1. Cuando la usuaria escriba una letra en **Escribe una letra** tendremos que:
   1. Actualizar la **Solución**:
      - Si la letra escrita por la jugadora está entre las letras de la palabra buscada debemos mostrar las letras acertadas encima de los guiones correspondientes.
   1. Actualizar **Las letras falladas**:
      - Si la letra escrita por la jugadora no está entre las letras de la palabra buscada debemos pintarla en este apartado.
   1. Actualizar el ahorcado:
      - Si la letra escrita por la jugadora no está entre las letras de la palabra buscada debemos actualizar el CSS del ahorcado para que las líneas se pongan blancas.

Ahora que ya conocemos el enunciado vamos a ver los ejercicios que hay que hacer cada día

## Ejercicios

### 1. Crear un proyecto nuevo

Empezaremos lógicamente por crear un proyecto nuevo, para lo cual:

1. Cread un repositorio en GitHub llamado `promo-X-module-3-pair-Y-sprint-1-hangman-game`.
   - Cambiad la `X` por tu promo y la `Y` por tu número de pareja.
   - Cread el repo en **la organización de Adalab**.
   - Clonadlo en vuestros equipos.
1. Cread un nuevo proyecto de React dentro del repo clonado.
   - Si queréis podéis hacerlo con `create-react-app` o con un `react-starter-kit`.
1. Arrancadlo y poneos a programar.

### 2. Migrar HTML y Sass

Para ahorraros tiempo os hemos preparado el HTML y Sass del ejercicio. De esta forma, solo tenéis que programar en React.

1. [Descargad este ejercicio](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/react-juego-de-ahorcado/00-enunciado) y arrancadlo.
1. Migrad el HTML y el Sass a vuestro nuevo proyecto de React.

