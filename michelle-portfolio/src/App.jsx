import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import PageHeader from './components/PageHeader';
import { portfolioItems, projectRoutes } from './data/portfolio';
import './App.css';

function App() {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <PageHeader isHome />

      {/* Portfolio Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
          gap: { xs: 1.5, md: 2 },
          mb: { xs: 6, md: 10 },
        }}
      >
        {portfolioItems.map((item) => (
          <Box
            key={item.id}
            onClick={() => projectRoutes[item.id] && navigate(projectRoutes[item.id])}
            sx={{
              aspectRatio: '1',
              overflow: 'hidden',
              cursor: 'pointer',
              bgcolor: '#b0c4d4',
              position: 'relative',
              '& img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.4s ease',
              },
              '&:hover img': {
                transform: 'scale(1.03)',
              },
              '& .hover-overlay': {
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'rgba(201, 220, 234, 0.72)',
                opacity: 0,
                transition: 'opacity 0.4s ease',
                px: 2,
              },
              '&:hover .hover-overlay': {
                opacity: 1,
              },
            }}
          >
            {item.src && <img src={item.src} alt={item.alt} loading="lazy" />}
            <Box className="hover-overlay">
              <Typography
                sx={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontWeight: 'normal',
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  color: '#1c1c2e',
                  textAlign: 'center',
                  lineHeight: 1.25,
                  letterSpacing: '0.02em',
                }}
              >
                {item.label}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </PageLayout>
  );
}

export default App;
