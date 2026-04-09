import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import './App.css';

const portfolioItems = [
  { id: 1, alt: 'La Kole brand identity', src: '/La_Kole_brand_identity.png', label: 'La Kole' },
  { id: 2, alt: 'Desk flatlay with pen and papers', src: '/Desk_flatlay_with_pen_and_papers.png', label: 'PICUS' },
  { id: 3, alt: 'Herbal tea product packaging', src: '/Herbal_tea_product_packaging.png', label: 'GRØN' },
  { id: 4, alt: 'Chili oil sauce in a bowl', src: '/Chili_oil_sauce_in_a_bowl.png', label: 'Kana Kitchen' },
  { id: 5, alt: 'Soy sauce bottle with ceramic cup', src: '/Soy_sauce_bottle_with_ceramic_cup.png', label: 'Hanabusa Soy Sauce' },
  { id: 6, alt: 'Coffee drip bag in white mug', src: '/Coffee_drip_bag_in_white_mug.png', label: 'Tokyo Coffee' },
  { id: 7, alt: 'Dried citrus orange peels', src: '/Dried_citrus_orange_peels.png', label: 'Kankitsu Lab' },
  { id: 8, alt: 'Seeds and grains in hands', src: '/Seeds_and_grains_in_hands.png', label: 'BEISIST SHONAI' },
];

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z" />
  </svg>
);

function App() {
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

        {/* Header */}
        <Box
          component="header"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: { xs: 5, md: 7 },
          }}
        >
          <Box>
            <Typography
              variant="h5"
              component="h1"
              sx={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontWeight: 'normal',
                color: '#1c1c2e',
                letterSpacing: '0.01em',
                lineHeight: 1.2,
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
              Copy Writer, Marketing Assistant
            </Typography>
          </Box>

          <Link
            href="#about"
            underline="none"
            sx={{
              color: '#1c1c2e',
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontWeight: 'normal',
              fontSize: '1rem',
              mt: 0.25,
              '&:hover': { opacity: 0.6 },
              transition: 'opacity 0.2s',
            }}
          >
            About
          </Link>
        </Box>

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
      </Box>

      {/* Footer */}
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
          href="https://linkedin.com/in/michelle-huang"
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
          href="mailto:michelle@example.com"
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
    </Box>
  );
}

export default App;
