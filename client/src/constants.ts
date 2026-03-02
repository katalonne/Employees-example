import { theme } from './theme';

export type Status = 'Working' | 'On Vacation' | 'Lunch Time' | 'Business Trip';
export type StatusFilterOption = Status | 'All';
export const STATUSES: readonly Status[] = ['Working', 'On Vacation', 'Lunch Time', 'Business Trip'];

export const API_URL: string = import.meta.env.VITE_API_URL;

export const selectValueToColorMap = {
  Working: theme.palette.success.light,
  'On Vacation': theme.palette.error.light,
  'Lunch Time': theme.palette.warning.light,
  'Business Trip': theme.palette.secondary.light,
};
