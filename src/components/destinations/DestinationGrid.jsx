import React, { useEffect, useRef, useState } from 'react';
import PageContainer from '../layout/PageContainer';
import DestinationCard from '../destination/DestinationCard';

const DestinationGrid = ({ destinations }) => {
  const [visible, setVisible] = useState(false);
  const prevLength = useRef(destinations.length);

  // Trigger fade-in animation whenever results change
  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 60);
    prevLength.current = destinations.length;
    return () => clearTimeout(t);
  }, [destinations]);

  return (
    <PageContainer className="py-10">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}
      >
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </PageContainer>
  );
};

export default DestinationGrid;
