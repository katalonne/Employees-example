import { type FallbackProps } from 'react-error-boundary';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ErrorFallback = ({ error }: FallbackProps | any) => {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error || error?.message}</pre>
    </div>
  );
};
