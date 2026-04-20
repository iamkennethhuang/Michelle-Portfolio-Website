import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';

function HanabusaSoySaucePage() {
  return (
    <PageLayout>
      <PageHeader />

      {/* Hero text */}
      <Box sx={{ mb: { xs: 15, md: 20 }, mt: { xs: 10, md: 15 } }}>
        <Typography
          component="p"
          sx={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: { xs: '1.05rem', md: '1.1rem' },
            color: '#1c1c2e',
            lineHeight: 1.6,
          }}
        >
          For{' '}
          <Box
            component="span"
            sx={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontWeight: 'bold',
              fontSize: { xs: '2.8rem', md: '3.8rem' },
              lineHeight: 1,
              mx: 0.5,
            }}
          >
            200
          </Box>{' '}
          years,
        </Typography>
        <Typography
          component="p"
          sx={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontWeight: 'bold',
            fontSize: { xs: '1rem', md: '1.15rem' },
            color: '#1c1c2e',
            mt: 0.5,
          }}
        >
          a nostalgic taste that has brought generations together at the table.
        </Typography>
      </Box>

      {/* Section 1: Soy sauce bowl image + brand name */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 4, md: 6 },
          alignItems: 'center',
          mb: { xs: 6, md: 9 },
        }}
      >
        <Box
          component="img"
          src="/Hanabusa_soy_sauce_bowl.png"
          alt="Soy sauce in a traditional Japanese ceramic bowl with Japanese calligraphy"
          sx={{ width: '85%', height: 'auto', display: 'block' }}
        />

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: 'fit-content', mx: 'auto' }}>
          <Typography
            sx={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontWeight: 'bold',
              fontSize: { xs: '1.25rem', md: '1.4rem' },
              color: '#1c1c2e',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              mb: 1,
            }}
          >
            Hanabusa Soy Sauce
          </Typography>
          <Typography
            sx={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: { xs: '1rem', md: '1.1rem' },
              color: '#1c1c2e',
              letterSpacing: '0.06em',
              fontWeight: 'bold',
              width: '100%',
              textAlign: 'center',
            }}
          >
            ハナブサ醤油
          </Typography>
        </Box>
      </Box>

      {/* Section 2: Body text + seeds/grains image */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 4, md: 6 },
          alignItems: 'center',
          mb: { xs: 6, md: 9 },
        }}
      >
        <Typography
          sx={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: { xs: '0.9rem', md: '0.95rem' },
            color: '#1c1c2e',
            lineHeight: 2,
          }}
        >
          Hanabusa Soy Sauce preserves traditional, non-mechanized methods unchanged since the
          1960s, with nearly every step carried out by skilled craftsmen. Using domestically
          sourced ingredients, soybeans and rice from the Shonai region, it remains deeply
          committed to quality and authenticity.
        </Typography>

        <Box
          component="img"
          src="/Seeds_and_grains_in_hands.png"
          alt="Seeds and grains from the Shonai region used in Hanabusa Soy Sauce"
          sx={{ width: '90%', height: 'auto', display: 'block' }}
        />
      </Box>

      {/* Section 3: Soy sauce bottles + fermentation text */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 4, md: 6 },
          alignItems: 'center',
          mb: { xs: 6, md: 10 },
        }}
      >
        <Box
          component="img"
          src="/Soy_sauce_bottle_with_ceramic_cup.png"
          alt="Hanabusa Soy Sauce bottles"
          sx={{ width: '80%', height: 'auto', display: 'block' }}
        />

        <Typography
          sx={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: { xs: '0.9rem', md: '0.95rem' },
            color: '#1c1c2e',
            lineHeight: 2,
          }}
        >
          With soy sauce aged for over one year and red miso matured for more than two, each
          product develops through a slow, careful fermentation that brings out deep, rich flavor.
        </Typography>
      </Box>
    </PageLayout>
  );
}

export default HanabusaSoySaucePage;
