'use client';

import CountUp from 'react-countup';

export const Counter = ({ amount }: { amount: number }) => {
  return (
    <div className='w-full'>
        <CountUp 
            duration={1.5}
            decimals={2}
            decimal='.'
            prefix='₹ '
            end={amount}
        />
    </div>
  );
};
