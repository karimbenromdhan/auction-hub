import React from 'react';
import { Text } from '../atoms';
import { SPINNER_SIZE_CLASSES } from '../constants';
import { LoadingSpinnerProps } from '@/interfaces';

function LoadingSpinner(props: LoadingSpinnerProps) {
  const { size = 'md', fullScreen = false, message } = props;

  const spinner = (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`${SPINNER_SIZE_CLASSES[size]} animate-spin text-blue-600 border-t-primary-600 rounded-full`}
      />
      {message && <Text as="p" className="mt-4 text-sm text-gray-600">{message}</Text>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
}

export default LoadingSpinner;
