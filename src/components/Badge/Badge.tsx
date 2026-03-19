import React from 'react';
import './Badge.scss';

type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default' }) => {
  return (
    <span className={`badge badge--${variant}`}>
      {children}
    </span>
  );
};
