import net from 'net';

export const getOriginOptions = ( data: Buffer ): net.NetConnectOpts => {
    return { host: 'localhost', port: 80 };
}