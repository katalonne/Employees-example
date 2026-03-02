import { Suspense, lazy } from 'react';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';
import { Navbar, ErrorFallback } from './components';
import { CreateSearchFilterBlock, UsersGridSection } from './features';
import { theme } from './theme';
import { STATUSES } from './constants';
import { useUsersPage } from './hooks/useUsersPage';

const LazyFormDialog = lazy(() =>
  import('./components/FormDialog').then((module) => ({
    default: module.FormDialog,
  })),
);

function App() {
  const {
    filteredUsers,
    isLoading,
    isDialogOpen,
    isError,
    searchValue,
    selectedStatus,
    handleDialogOpen,
    handleDialogClose,
    handleSearchChange,
    handleStatusChange,
    handleStatusFilterChange,
  } = useUsersPage();

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ThemeProvider theme={theme}>
          <CssBaseline /> {/* Css Reset */}
          <Navbar logoText='Employees' logoutText='Log out' />
          <Container
            sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', pt: 4 }}
            maxWidth={false}
          >
            <Container disableGutters>
              <Suspense fallback={null}>
                {isDialogOpen && (
                  <LazyFormDialog
                    open={isDialogOpen}
                    onClose={handleDialogClose}
                    statuses={STATUSES}
                  />
                )}
              </Suspense>
              <CreateSearchFilterBlock
                onCreateClick={handleDialogOpen}
                searchValue={searchValue}
                onSearchChange={handleSearchChange}
                statuses={STATUSES}
                selectedStatus={selectedStatus}
                onStatusFilterChange={handleStatusFilterChange}
              />
              <br />
              <br />
              <UsersGridSection
                users={filteredUsers}
                isLoading={isLoading}
                isError={isError}
                statuses={STATUSES}
                onStatusChange={handleStatusChange}
              />
            </Container>
          </Container>
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
