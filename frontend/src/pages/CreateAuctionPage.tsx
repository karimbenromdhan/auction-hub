import React, { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Text, Button, Card, Textarea } from '../components/atoms';
import { FormField, FileUpload } from '../components/molecules';
import { useCreateAuction } from '../hooks';
import { createAuctionSchema, ROUTES } from '../utils';

interface CreateAuctionFormData {
  title: string;
  description?: string;
  startingPrice: number;
  endTime: string;
}

function CreateAuctionPage() {
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const createMutation = useCreateAuction();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAuctionFormData>({
    resolver: yupResolver(createAuctionSchema),
  });

  const onSubmit = useCallback(async (data: CreateAuctionFormData) => {
    try {
      await createMutation.mutateAsync({
        ...data,
        image: imageFile || undefined,
      });
      navigate(ROUTES.MY_AUCTIONS);
    } catch (error) {
      // Error handled by mutation
    }
  }, [createMutation, imageFile, navigate]);
  
  const handleImageSelect = useCallback((file: File | null) => {
    setImageFile(file);
  }, []);
  
  const handleCancel = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  // Calculate minimum end time (1 hour from now)
  const minEndTime = useMemo(() => 
    new Date(Date.now() + 60 * 60 * 1000).toISOString().slice(0, 16),
    []
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Text variant="h2" className="mb-2">
              Create New Auction
            </Text>
            <Text variant="body" color="secondary">
              Fill in the details to list your item for auction
            </Text>
          </div>

          <Card padding="lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                label="Title"
                type="text"
                placeholder="Enter auction title"
                error={errors.title?.message}
                required
                {...register('title')}
              />

              <div>
                <Text variant="small" weight="medium" className="text-gray-700 mb-1">
                  Description
                </Text>
                <Textarea
                  placeholder="Describe your item..."
                  rows={4}
                  fullWidth
                  error={errors.description?.message}
                  {...register('description')}
                />
              </div>

              <FormField
                label="Starting Price"
                type="number"
                step="1"
                min="1"
                placeholder="Enter starting price"
                error={errors.startingPrice?.message}
                required
                {...register('startingPrice', { valueAsNumber: true })}
              />

              <FormField
                label="End Time"
                type="datetime-local"
                min={minEndTime}
                error={errors.endTime?.message}
                required
                {...register('endTime')}
              />

              <div>
                <Text variant="small" weight="medium" className="text-gray-700 mb-2">
                  Auction Image
                </Text>
                <FileUpload onFileSelect={handleImageSelect} />
              </div>

              <div className="flex space-x-4 pt-4">
                <Button
                  type="submit"
                  fullWidth
                  isLoading={createMutation.isPending}
                >
                  Create Auction
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  fullWidth
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CreateAuctionPage;
