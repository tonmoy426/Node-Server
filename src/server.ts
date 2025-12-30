import http, { IncomingMessage, Server, ServerResponse } from 'http';
import path from 'path';
import config from './config';

const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log("server is running...")
    //root route
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/json' });
        res.end(JSON.stringify({
            message: 'Hello, World!',
            path: req.url,
        })
     );
    }
    //about route
    if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/json' });
        res.end(JSON.stringify({
            message: 'This is the about page',
            path: req.url,
        }));
    }
});






server.listen(config.port, () => {
    console.log(`Server is listening on port ${config.port}`);
}); 