import { ServerResponse } from "http";



function sendJson(res: ServerResponse, data: object, statusCode: number = 200): void {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
}

export default sendJson;