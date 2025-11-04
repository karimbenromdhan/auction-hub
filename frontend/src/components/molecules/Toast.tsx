import React, { useEffect } from 'react';
import { Text, Button } from '../atoms';
import { ToastProps } from '@/interfaces';
import { DEFAULT_TOAST_PROPS, TOAST_TYPE_STYLES, TOAST_ICONS, CLOSE_ICON_SMALL } from '../constants';

function Toast(props: ToastProps) {
  const { id, type, message, onClose, duration } = { ...DEFAULT_TOAST_PROPS, ...props };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);


  return (
    <div className={`${TOAST_TYPE_STYLES[type]} text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-3 min-w-[300px] max-w-md animate-slide-in`}>
      <div className="flex-shrink-0">{TOAST_ICONS[type]}</div>
      <Text variant="small" className="flex-1 text-white">
        {message}
      </Text>
      <Button
        onClick={() => onClose(id)}
        variant="outline"
        size="sm"
        className="!bg-transparent !border-0 !p-1 !min-w-0 flex-shrink-0 text-white hover:text-gray-200 !shadow-none"
        ariaLabel="Close notification"
      >
        {CLOSE_ICON_SMALL}
      </Button>
    </div>
  );
}

export default Toast;
