import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempts: Infinity,
        timeout: 10000,
        transports: ['websocket'],
    };

    return io('https://real-time-code-editor-backedn.vercel.app', options); // Ensure this matches your backend server's URL
};
