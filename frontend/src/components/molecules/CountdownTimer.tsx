import React from 'react';
import { useCountdown } from '../../hooks';
import { Badge, Text } from '../atoms';
import { formatCountdown } from '../../utils';
import { CountdownTimerProps } from '@/interfaces';

function CountdownTimer(props: CountdownTimerProps) {
  const { endTime, onExpire } = props;
  const { days, hours, minutes, seconds, isExpired } = useCountdown(endTime);
  
  React.useEffect(() => {
    if (isExpired && onExpire) {
      onExpire();
    }
  }, [isExpired, onExpire]);

  if (isExpired) {
    return <Badge variant="danger">Auction Ended</Badge>;
  }

  return (
    <div className="flex items-center space-x-2">
      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <Text variant="small" weight="medium" color="secondary">
        {formatCountdown(days, hours, minutes, seconds)}
      </Text>
    </div>
  );
}

export default CountdownTimer;
