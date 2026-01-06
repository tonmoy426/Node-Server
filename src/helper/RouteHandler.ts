import { IncomingMessage, ServerResponse } from "node:http";

type RouteHandler = (req: IncomingMessage, res: ServerResponse) => void;
const routes: Map<string,Map<string, RouteHandler>> = new Map();

function addRoute(path: string, handler: RouteHandler) {
    if (!routes.has(path)) routes.set(path, new Map());
    routes.get(path)!.set("GET", handler);
}
