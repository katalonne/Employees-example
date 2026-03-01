import { theme } from "./theme";

export const STATUSES = ['Working', 'On Vacation', 'Business Trip']

export const selectValueToColorMap = {
  'Working': theme.palette.success.light,
  'On Vacation': theme.palette.error.light,
  'Business Trip': theme.palette.secondary.light,
}