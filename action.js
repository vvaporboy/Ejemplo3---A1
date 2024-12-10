const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Ruta completa a la base de datos SQLite
const dbPath = 'C:\\Desarrollo\\Ejemplo3---A1\\BD\\Base_Datos.db';  // Ruta absoluta a la base de datos SQLite

function verificarCredenciales(email, password) {
    return new Promise((resolve, reject) => {
        // Conectar a la base de datos SQLite
        const db = new sqlite3.Database(dbPath, (err) => {
            if (err) {
                return reject('Error al conectar a la base de datos: ' + err.message);
            }
        });

        db.get('SELECT * FROM usuarios WHERE email = ? AND password = ?', [email, password], (err, row) => {
            if (err) {
                db.close();
                return reject('Error al consultar la base de datos: ' + err.message);
            }

            if (row) {
                resolve(true);
            } else {
                resolve(false);
            }

            // Cerrar la base de datos después de la consulta
            db.close();
        });
    });
}

module.exports = { verificarCredenciales };