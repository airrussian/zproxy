import net from "net";
import tls from "tls";

import { AppTCPSocketClient } from "./AppTCPSocketClient";
import { AppTLSSocketClient } from "./AppTLSSocketClient";

const APP_TCP_PORT = process.env.APP_TCP_PORT;
const DEV_TCP_PORT = process.env.DEV_TCP_PORT;

const APP_TSL_PORT = process.env.APP_TSL_PORT;
const DEV_TSL_PORT = process.env.DEV_TSL_PORT;

net.createServer(socket => new AppTCPSocketClient( socket )).listen(APP_TCP_PORT);

net.createServer(socket => {

}).listen(DEV_TCP_PORT);

net.createServer(tls => {

}).listen(APP_TSL_PORT);

net.createServer(tls => {

}).listen(DEV_TSL_PORT);
