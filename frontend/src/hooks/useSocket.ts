import { useEffect, useState } from 'react';
import { socketService } from '../services';
import { useAuthStore } from '../store';

export const useSocket = () => {
  const { token, isAuthenticated } = useAuthStore();
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (isAuthenticated && token) {
      // Connect socket
      const socket = socketService.connect(token);
      
      socket.on('connect', () => {
        setIsConnected(true);
      });

      socket.on('disconnect', () => {
        setIsConnected(false);
      });

      return () => {
        socketService.disconnect();
        setIsConnected(false);
      };
    } else {
      socketService.disconnect();
      setIsConnected(false);
    }
  }, [isAuthenticated, token]);

  return {
    isConnected,
    socket: socketService.getSocket(),
  };
};
