import net from "net";
import { getOriginOptions } from "./GetOrigin";

export class AppTCPSocketClient {

    private origin: net.Socket | undefined;

    constructor( 
        private readonly socket: net.Socket 
    ) {        
        this.socket.on("data", this.onData );
        this.socket.on("end", this.onEnd );
        this.socket.on("close", this.onClose );
        this.socket.on("error", this.onError );
    }

    onData( data: Buffer ) {
        if ( this.origin ) this.origin.write( data );

        this.origin = net.createConnection( getOriginOptions( data ), () => {
            this.origin?.on("data", data => this.socket.write( data ));
            this.origin?.on("error", this.onError );
            this.origin?.on("end", () => this.socket.end() );
            this.origin?.on("close", () => this.socket.end() );
        });
    }

    onEnd() {
        this.origin?.end();
    }

    onClose() {
        
    }

    onError( err: Error ) {
        console.error( err );
    }

}