import React, { ButtonHTMLAttributes } from 'react';
import { colors, spacing, typography } from '../../tokens';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
type ButtonSize    = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
}

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: { padding: `${spacing[1]} ${spacing[3]}`, fontSize: typography.fontSize.sm },
  md: { padding: `${spacing[2]} ${spacing[4]}`, fontSize: typography.fontSize.base },
  lg: { padding: `${spacing[3]} ${spacing[6]}`, fontSize: typography.fontSize.lg },
};

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary:   { background: colors.primary[600], color: '#fff', border: 'none' },
  secondary: { background: 'transparent', color: colors.primary[600], border: `1px solid ${colors.primary[600]}` },
  danger:    { background: colors.danger[500], color: '#fff', border: 'none' },
  ghost:     { background: 'transparent', color: colors.neutral[600], border: 'none' },
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  children,
  disabled,
  style,
  ...rest
}) => {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[2],
    borderRadius: '6px',
    fontWeight: typography.fontWeight.medium,
    fontFamily: typography.fontFamily.sans,
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled || loading ? 0.6 : 1,
    width: fullWidth ? '100%' : undefined,
    transition: 'opacity 0.15s, transform 0.1s',
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...style,
  };

  return (
    <button style={baseStyle} disabled={disabled || loading} {...rest}>
      {loading ? 'Loading...' : children}
    </button>
  );
};
