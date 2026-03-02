import { theme } from './theme';

export const STATUSES = ['Working', 'On Vacation', 'Business Trip'];
export type Status = 'Working' | 'On Vacation' | 'Business Trip';

export const API_URL: string = import.meta.env.VITE_API_URL;

export const selectValueToColorMap = {
  Working: theme.palette.success.light,
  'On Vacation': theme.palette.error.light,
  'Business Trip': theme.palette.secondary.light,
};
