import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempts: Infinity,
        timeout: 10000,
        transports: ['websocket'],
    };

    return io('real-time-code-editor-production-9d79.up.railway.app', options); // Ensure this matches your backend server's URL
};
