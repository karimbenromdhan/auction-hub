import * as Yup from 'yup';

// Email validation
export const emailSchema = Yup.string()
  .email('Invalid email address')
  .required('Email is required');

// Password validation
export const passwordSchema = Yup.string()
  .min(8, 'Password must be at least 8 characters')
  .required('Password is required');

// Login schema
export const loginSchema = Yup.object({
  email: emailSchema,
  password: passwordSchema,
});

// Register schema
export const registerSchema = Yup.object({
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

// Create auction schema
export const createAuctionSchema = Yup.object({
  title: Yup.string()
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title must be less than 100 characters')
    .required('Title is required'),
  description: Yup.string()
    .max(500, 'Description must be less than 500 characters')
    .optional(),
  startingPrice: Yup.number()
    .min(1, 'Starting price must be at least $1')
    .required('Starting price is required'),
  endTime: Yup.string()
    .required('End time is required')
    .test('is-future', 'End time must be in the future', (value) => {
      if (!value) return false;
      return new Date(value) > new Date();
    }),
  image: Yup.mixed().optional(),
});

// Place bid schema
export const placeBidSchema = Yup.object({
  amount: Yup.number()
    .min(1, 'Bid amount must be at least $1')
    .required('Bid amount is required'),
});

// Validate file type
export const isValidImageFile = (file: File): boolean => {
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
  return validTypes.includes(file.type);
};

// Validate file size (5MB max)
export const isValidFileSize = (file: File, maxSizeMB: number = 5): boolean => {
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  return file.size <= maxSizeBytes;
};
