fetch('http://localhost:3000/')
  .then(response => response.json())
  .then(data => {
    console.log('Data:', data);
  });

fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then(data => {
    console.log('Data:', data);
  });
