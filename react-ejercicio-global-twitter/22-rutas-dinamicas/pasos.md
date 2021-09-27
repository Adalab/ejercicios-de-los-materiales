# Pasos para crear rutas dinámicas:

## 1º Navegar a la ruta adecuada:

1. Al clickar un tweet > navegar a la ruta `/tweets/:tweetId`.

## 2º Obtener los datos del tweet actual:

1. Obtener el `tweetId` del tweet desde la ruta `/tweets/:tweetId`.
1. Obtener el tweet a partir del id y del array de tweets.

## 3º Renderizar el detalle con los datos del tweet actual:

1. Cuando estemos en la ruta `/tweets/:tweetId` > renderizar el componente `<TweetDetail />`.
1. Pasar el tweet al componente `<TweetDetail />`.
1. **Importante:** comprobar si el tweet existe.