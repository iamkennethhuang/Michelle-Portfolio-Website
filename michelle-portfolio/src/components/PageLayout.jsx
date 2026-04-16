import Box from '@mui/material/Box';
import PageFooter from './PageFooter';

function PageLayout({ children }) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#c9dcea',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ flex: 1, px: { xs: 4, sm: 6, md: '7%' }, pt: { xs: 5, md: 7 }, pb: 4 }}>
        {children}
      </Box>
      <PageFooter />
    </Box>
  );
}

export default PageLayout;
