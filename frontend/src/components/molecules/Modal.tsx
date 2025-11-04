import React, { useEffect } from 'react';
import { Text, Button } from '../atoms';
import { ModalProps } from '@/interfaces';
import { MODAL_SIZE_CLASSES, CLOSE_ICON_LARGE } from '../constants';

function Modal(props: ModalProps) {
  const { isOpen, onClose, title, children, footer, size = 'md' } = props;
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className={`relative bg-white rounded-lg shadow-xl ${MODAL_SIZE_CLASSES[size]} w-full`}>
          {/* Header */}
          {title && (
            <div className="flex items-center justify-between p-6 border-b">
              <Text variant="h3">{title}</Text>
              <Button
                onClick={onClose}
                variant="outline"
                size="sm"
                className="!bg-transparent !border-0 !p-1 !min-w-0 text-gray-400 hover:text-gray-600 !shadow-none"
                ariaLabel="Close modal"
              >
                {CLOSE_ICON_LARGE}
              </Button>
            </div>
          )}

          {/* Body */}
          <div className="p-6">
            {children}
          </div>

          {/* Footer */}
          {footer && (
            <div className="flex items-center justify-end space-x-3 p-6 border-t bg-gray-50 rounded-b-lg">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
