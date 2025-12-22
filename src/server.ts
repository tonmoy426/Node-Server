import http, { IncomingMessage, Server, ServerResponse } from 'http';
import path from 'path';

const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log("server is running...")
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/json' });
        res.end(JSON.stringify({ message: 'Hello, World!',
            path: req.url,
        }));
    }
});





server.listen(5000, () => {
    console.log(`Server is listening on port ${5000}`);
});