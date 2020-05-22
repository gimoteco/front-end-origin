import * as React from 'react';
import * as Style from './Segment.styles';

interface SegmentProps {
  children: {
    top: React.ReactNode;
    bottom: React.ReactNode;
  };
}

function Segment({ children: { top, bottom } }: SegmentProps) {
  return (
    <Style.SegmentWrapper>
      <Style.UpWrapper>{top}</Style.UpWrapper>
      <Style.DownWrapper>{bottom}</Style.DownWrapper>
    </Style.SegmentWrapper>
  );
}

export default React.memo(Segment);
