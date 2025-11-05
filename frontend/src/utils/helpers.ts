export const getImageUrl = (imageUrl?: string): string => {
  if (!imageUrl) {
    return '/placeholder-image.jpg';
  }

  if (imageUrl.startsWith('http')) {
    return imageUrl;
  }

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
  return `${API_URL}${imageUrl}`;
};

export const isAuctionActive = (endTime: string): boolean => {
  return new Date(endTime) > new Date();
};
