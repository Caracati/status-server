const express = require('express');
const app = express();

// Ruta que devuelve una respuesta HTTP 200 OK
app.get('/ok', (req, res) => {
  res.status(200).send('OK - Web server received a successful response');
});

// Ruta que devuelve una respuesta HTTP 201 Created
app.get('/created', (req, res) => {
  res.status(201).send('Created - Web server received a resource creation request');
});

// Ruta que devuelve una respuesta HTTP 204 No Content
app.get('/nocontent', (req, res) => {
  res.status(204).send();
});

// Ruta que devuelve una respuesta HTTP 400 Bad Request
app.get('/badrequest', (req, res) => {
  res.status(400).send('Bad Request - Web server received an invalid request');
});

// Ruta que devuelve una respuesta HTTP 401 Unauthorized
app.get('/unauthorized', (req, res) => {
  res.status(401).send('Unauthorized - Web server received an unauthorized request');
});

// Ruta que devuelve una respuesta HTTP 403 Forbidden
app.get('/forbidden', (req, res) => {
  res.status(403).send('Forbidden - Web server received a forbidden request');
});

// Ruta que devuelve una respuesta HTTP 404 Not Found
app.get('/notfound', (req, res) => {
  res.status(404).send('Not Found - Web server could not find the requested resource');
});

// Ruta que devuelve una respuesta HTTP 500 Internal Server Error
app.get('/internalerror', (req, res) => {
  res.status(500).send('Internal Server Error - Web server encountered an error');
});

// Ruta que devuelve una respuesta HTTP 502 Bad Gateway
app.get('/badgateway', (req, res) => {
  res.status(502).send('Bad Gateway - Web server received an invalid response');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
