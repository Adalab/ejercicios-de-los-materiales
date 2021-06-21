/*
Hemos creado este servicio para gestionar las rutas.

Necesitamos este servicio porque react-router-dom solo permite gestionar
rutas cuando es la usuaria la que pulsa en un link.

Si queremos cambiar de rutas en función de un dato necesitamos hacerlo a través
del window.location https://developer.mozilla.org/es/docs/Web/API/Window/location

*/
const redirect = path => {
  // cambiar la ruta actual
  window.location.replace(`#${path}`);
};

const reload = path => {
  // refrescar la página
  window.location.reload();
};

const objToExport = {
  redirect: redirect,
  reload: reload
};

export default objToExport;
