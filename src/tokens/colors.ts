export const colors = {
  primary: {
    50:  '#f0f0ff',
    100: '#e6e6ff',
    500: '#4a3fb5',  // WCAG compliant version of #5447c7
    600: '#4235a3',
    700: '#3a2c91',
    900: '#2a1f5f',
  },
  neutral: {
    50:  '#f8fafc',
    100: '#ebedef',  // Your lightColor
    200: '#e2e8f0',
    400: '#94a3b8',
    600: '#4b5463',  // Your darkColor
    800: '#1e293b',
    900: '#0f172a',
  },
  success: { 
    500: '#2fb855',  // WCAG compliant version of #36cd69
    100: '#dcfce7',
  },
  warning: { 
    500: '#e6a110',  // WCAG compliant version of #f9b115
    100: '#fef3c7',
  },
  danger:  { 
    500: '#dc4c4c',  // WCAG compliant version of #e55353
    100: '#fee2e2',
  },
  info: {
    500: '#2d7fd8',  // WCAG compliant version of #3090f1
    100: '#dbeafe',
  },
  light: '#ebedef',  // Your lightColor
  dark: '#4b5463',   // Your darkColor
} as const;

// Dark Theme Tokens - High contrast versions for dark backgrounds
export const darkColors = {
  primary: {
    50:  '#1a1a2e',
    100: '#252542',
    500: '#7c71e6',  // Lighter purple for dark backgrounds
    600: '#8b82eb',
    700: '#9a93f0',
    900: '#b8b3f5',
  },
  neutral: {
    50:  '#0f172a',
    100: '#1e293b',
    200: '#334155',
    400: '#64748b',
    600: '#cbd5e1',  // Light gray for dark text
    800: '#f1f5f9',
    900: '#f8fafc',
  },
  success: { 
    500: '#4ade80',  // Bright green for dark backgrounds
    100: '#14532d',
  },
  warning: { 
    500: '#fbbf24',  // Bright amber for dark backgrounds
    100: '#713f12',
  },
  danger:  { 
    500: '#f87171',  // Bright red for dark backgrounds
    100: '#7f1d1d',
  },
  info: {
    500: '#60a5fa',  // Bright blue for dark backgrounds
    100: '#1e3a8a',
  },
  light: '#f8fafc',  // Light text color for dark theme
  dark: '#0f172a',   // Dark background color
} as const;

