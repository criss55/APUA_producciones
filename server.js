const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
// Archivo protegido donde se guardarán los datos. Usamos CSV para fácil lectura por el administrador.
const DATA_FILE = path.join(__dirname, 'admin_datos_voluntarios.csv');

// Crear encabezados del CSV si el archivo no existe
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, 'Fecha de Alta,Nombre,Correo Electronico\n', 'utf8');
}

const server = http.createServer((req, res) => {
    // Configurar CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    // Endpoint seguro para recibir los datos del formulario
    if (req.method === 'POST' && req.url === '/api/guardar') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        
        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                // Sanitizar limpieza básica de comas para no romper el formato CSV
                const nombre = data.nombre ? data.nombre.replace(/,/g, '') : 'Desconocido';
                const correo = data.correo ? data.correo.replace(/,/g, '') : 'Desconocido';
                
                // Formatear Fecha local
                const fecha = new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' });

                // Almacenarlo en nuestro archivo interno ordenado (Append)
                const lineaCsv = `"${fecha}","${nombre}","${correo}"\n`;
                fs.appendFileSync(DATA_FILE, lineaCsv, 'utf8');

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, message: 'Tus datos han sido registrados con éxito.' }));
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, message: 'La petición enviada es inválida.' }));
            }
        });
    } else {
        // Servidor estático básico para servir el HTML, CSS y JS
        let filePath = '.' + decodeURIComponent(req.url.split('?')[0]);
        if (filePath === './') {
            filePath = './index.html';
        }

        const extname = String(path.extname(filePath)).toLowerCase();
        const mimeTypes = {
            '.html': 'text/html',
            '.js': 'text/javascript',
            '.css': 'text/css',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml',
        };

        const contentType = mimeTypes[extname] || 'application/octet-stream';

        fs.readFile(filePath, (error, content) => {
            if (error) {
                if(error.code == 'ENOENT'){
                    res.writeHead(404);
                    res.end('Archivo no encontrado');
                } else {
                    res.writeHead(500);
                    res.end('Error del servidor: ' + error.code);
                }
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, 'utf-8');
            }
        });
    }
});

server.listen(PORT, () => {
    console.log(`=================================================`);
    console.log(`🎬 Servidor de APUA Producciones iniciado`);
    console.log(`🌐 Navega a: http://localhost:${PORT}`);
    console.log(`🔒 Los datos de voluntarios se recopilan en:`);
    console.log(`   ${DATA_FILE}`);
    console.log(`=================================================`);
});
