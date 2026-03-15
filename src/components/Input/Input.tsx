import React, { InputHTMLAttributes } from 'react';
import { colors, spacing, typography } from '../../tokens';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  hint,
  fullWidth = false,
  id,
  style,
  ...rest
}) => {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

  const inputStyle: React.CSSProperties = {
    display: 'block',
    width: fullWidth ? '100%' : undefined,
    padding: `${spacing[2]} ${spacing[3]}`,
    fontSize: typography.fontSize.base,
    fontFamily: typography.fontFamily.sans,
    borderRadius: '6px',
    border: `1px solid ${error ? colors.danger[500] : colors.neutral[200]}`,
    outline: 'none',
    background: '#fff',
    color: colors.neutral[900],
    ...style,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[1] }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{ fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.medium, color: colors.neutral[600] }}
        >
          {label}
        </label>
      )}
      <input id={inputId} style={inputStyle} {...rest} />
      {error && (
        <span style={{ fontSize: typography.fontSize.xs, color: colors.danger[500] }}>{error}</span>
      )}
      {hint && !error && (
        <span style={{ fontSize: typography.fontSize.xs, color: colors.neutral[400] }}>{hint}</span>
      )}
    </div>
  );
};
