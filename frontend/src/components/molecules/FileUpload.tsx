import React, { useRef, useState } from 'react';
import { Button, Text, Image } from '../atoms';
import { isValidImageFile, isValidFileSize, formatFileSize } from '../../utils';
import { FileUploadProps } from '@/interfaces';
import { DEFAULT_FILE_UPLOAD_PROPS } from '../constants';

function FileUpload(props: FileUploadProps) {
  const { onFileSelect, accept, maxSizeMB, error } = { ...DEFAULT_FILE_UPLOAD_PROPS, ...props };
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [fileError, setFileError] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError('');

    if (!file) {
      clearFile();
      return;
    }

    // Validate file type
    if (!isValidImageFile(file)) {
      setFileError('Please select a valid image file (JPG, PNG, GIF, WEBP)');
      clearFile();
      return;
    }

    // Validate file size
    if (!isValidFileSize(file, maxSizeMB)) {
      setFileError(`File size must be less than ${maxSizeMB}MB`);
      clearFile();
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    setFileName(file.name);
    onFileSelect(file);
  };

  const clearFile = () => {
    setPreview(null);
    setFileName('');
    onFileSelect(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
      />

      {preview ? (
        <div className="relative">
          <div className="w-full h-48 rounded-lg overflow-hidden border-2 border-gray-300">
            <Image src={preview} alt="Preview" className="w-full h-full object-cover" />
          </div>
          <div className="mt-2 flex items-center justify-between">
            <Text variant="small" color="secondary" className="truncate">
              {fileName}
            </Text>
            <Button variant="danger" size="sm" onClick={clearFile}>
              Remove
            </Button>
          </div>
        </div>
      ) : (
        <div
          onClick={handleClick}
          className="w-full h-48 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors"
        >
          <svg className="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <Text variant="body" color="secondary" className="mb-1">
            Click to upload image
          </Text>
          <Text variant="small" color="secondary">
            PNG, JPG, GIF, WEBP up to {maxSizeMB}MB
          </Text>
        </div>
      )}

      {(error || fileError) && (
        <Text variant="small" color="danger" className="mt-2">
          {error || fileError}
        </Text>
      )}
    </div>
  );
}

export default FileUpload;
