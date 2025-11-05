import { Card, Text } from '../../atoms';
import { SellerInfoProps } from '../../../interfaces/molecules';

function SellerInfo({ seller }: SellerInfoProps) {
  return (
    <Card padding="lg">
      <Text variant="h4" className="mb-4">
        Seller Information
      </Text>
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
          <Text variant="h4" className="text-white">
            {seller?.email?.[0].toUpperCase() || 'U'}
          </Text>
        </div>
        <div>
          <Text variant="body" weight="medium">
            {seller?.email || 'Unknown'}
          </Text>
          <Text variant="small" color="secondary">
            Seller
          </Text>
        </div>
      </div>
    </Card>
  );
}

export default SellerInfo;
