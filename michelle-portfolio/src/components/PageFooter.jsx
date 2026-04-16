import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { LinkedInIcon, MailIcon } from './icons';

function PageFooter() {
  return (
    <Box
      component="footer"
      sx={{
        px: { xs: 4, sm: 6, md: '7%' },
        py: { xs: 3, md: 4 },
        display: 'flex',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Link
        href="#resume"
        underline="none"
        sx={{
          color: '#1c1c2e',
          fontFamily: 'system-ui, sans-serif',
          fontSize: '0.95rem',
          '&:hover': { opacity: 0.6 },
          transition: 'opacity 0.2s',
        }}
      >
        Resume
      </Link>

      <Link
        href="https://www.linkedin.com/in/michelle-huang-4139451a3"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: '#1c1c2e',
          display: 'flex',
          alignItems: 'center',
          '&:hover': { opacity: 0.6 },
          transition: 'opacity 0.2s',
        }}
        aria-label="LinkedIn"
      >
        <LinkedInIcon />
      </Link>

      <Link
        href="mailto:michelle.jh@icloud.com"
        sx={{
          color: '#1c1c2e',
          display: 'flex',
          alignItems: 'center',
          '&:hover': { opacity: 0.6 },
          transition: 'opacity 0.2s',
        }}
        aria-label="Email"
      >
        <MailIcon />
      </Link>
    </Box>
  );
}

export default PageFooter;
