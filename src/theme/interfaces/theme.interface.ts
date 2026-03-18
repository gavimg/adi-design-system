
import { UserPreferences } from '@gadagi/types';

export type Theme = UserPreferences['theme'];

export interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}