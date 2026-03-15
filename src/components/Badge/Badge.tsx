import React from 'react';
import { colors, spacing, typography } from '../../tokens';

type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
}

const badgeColors: Record<BadgeVariant, { bg: string; text: string }> = {
  default: { bg: colors.neutral[100],  text: colors.neutral[600] },
  success: { bg: colors.success[100],  text: '#15803d' },
  warning: { bg: colors.warning[100],  text: '#92400e' },
  danger:  { bg: colors.danger[100],   text: '#b91c1c' },
  info:    { bg: colors.primary[100],  text: colors.primary[700] },
};

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default' }) => {
  const { bg, text } = badgeColors[variant];
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: `${spacing[0]} ${spacing[2]}`,
        borderRadius: '9999px',
        fontSize: typography.fontSize.xs,
        fontWeight: typography.fontWeight.medium,
        background: bg,
        color: text,
      }}
    >
      {children}
    </span>
  );
};
