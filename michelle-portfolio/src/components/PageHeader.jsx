import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

/**
 * Shared page header.
 * isHome — true on the homepage: name is a plain heading, subtitle includes
 *           "Marketing Assistant", nav shows only "About".
 *           false on project pages: name is a link back to "/", nav shows
 *           "Portfolio" + "About".
 */
function PageHeader({ isHome = false }) {
  const subtitle = isHome ? 'Copy Writer, Marketing Assistant' : 'Copy Writer';

  const nameBlock = (
    <Box>
      <Typography
        variant="h5"
        component={isHome ? 'h1' : 'span'}
        sx={{
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontWeight: 'normal',
          color: '#1c1c2e',
          letterSpacing: '0.01em',
          lineHeight: 1.2,
          display: 'block',
          mb: 0.5,
        }}
      >
        Michelle Huang
      </Typography>
      <Typography
        sx={{
          fontSize: '0.6rem',
          letterSpacing: '0.18em',
          color: '#444',
          textTransform: 'uppercase',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );

  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        mb: { xs: 5, md: 7 },
      }}
    >
      {isHome ? (
        nameBlock
      ) : (
        <Box
          component={RouterLink}
          to="/"
          sx={{ textDecoration: 'none', '&:hover': { opacity: 0.7 }, transition: 'opacity 0.2s' }}
        >
          {nameBlock}
        </Box>
      )}

      <Box sx={{ display: 'flex', gap: 3, mt: 0.25 }}>
        {!isHome && (
          <Link
            component={RouterLink}
            to="/"
            underline="none"
            sx={{
              color: '#1c1c2e',
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontWeight: 'normal',
              fontSize: '1rem',
              '&:hover': { opacity: 0.6 },
              transition: 'opacity 0.2s',
            }}
          >
            Portfolio
          </Link>
        )}
        <Link
          href="#about"
          underline="none"
          sx={{
            color: '#1c1c2e',
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontWeight: 'normal',
            fontSize: '1rem',
            '&:hover': { opacity: 0.6 },
            transition: 'opacity 0.2s',
          }}
        >
          About
        </Link>
      </Box>
    </Box>
  );
}

export default PageHeader;
