const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Configurar el middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Cambia esto según tu configuración
    password: '', // Cambia esto según tu configuración
    database: 'ContactDB.db'
});

db.connect(err => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos exitosa');
});

// Ruta para manejar el envío del formulario
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    const query = 'INSERT INTO ContactMessages (name, email, message) VALUES (?, ?, ?)';
    db.query(query, [name, email, message], (err, result) => {
        if (err) {
            console.error('Error al insertar los datos:', err);
            res.status(500).send('Error al guardar el mensaje');
            return;
        }
        res.status(200).send('Mensaje enviado correctamente');
    });
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});