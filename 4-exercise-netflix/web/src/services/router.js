const redirect = path => {
  window.location.replace(`#${path}`);
};

const reload = path => {
  window.location.reload();
};

const objToExport = {
  redirect: redirect,
  reload: reload
};

export default objToExport;
