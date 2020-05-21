import * as React from 'react';
import * as Style from './Card.styles';

interface CardProps {
  title: string;
  icon: React.ReactNode;
  subtitle: string;
  children: React.ReactNode;
}

function Card({ title, icon, subtitle, children }: CardProps) {
  return (
    <Style.CardWrapper>
      <Style.CardHeaderWrapper>
        {icon}
        <Style.CardTitle>{title}</Style.CardTitle>
        <Style.CardSubtitle>{subtitle}</Style.CardSubtitle>
      </Style.CardHeaderWrapper>
      {children}
    </Style.CardWrapper>
  );
}

export default React.memo(Card);
