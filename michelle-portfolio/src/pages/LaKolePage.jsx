import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';

function LaKolePage() {
  return (
    <PageLayout>
      <PageHeader />

      {/* Main Content */}
      <Box sx={{ maxWidth: '680px', mx: 'auto', mb: { xs: 6, md: 10 } }}>
        {/* Intro subtitle */}
        <Typography
          sx={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: { xs: '0.9rem', md: '1rem' },
            color: '#1c1c2e',
            textAlign: 'center',
            mb: 1.5,
          }}
        >
          Ichi-go Ichi-e (一期一会) is a Japanese idiom that translates to
        </Typography>

        {/* Main heading */}
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: '#1c1c2e',
            textAlign: 'center',
            fontSize: { xs: '2rem', md: '2.6rem' },
            letterSpacing: '0.01em',
            mb: { xs: 3, md: 4 },
          }}
        >
          &ldquo;one time, one meeting&rdquo;
        </Typography>

        {/* Body text block 1 */}
        <Typography
          sx={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: { xs: '0.92rem', md: '1rem' },
            color: '#1c1c2e',
            lineHeight: 1.75,
            mb: 2.5,
          }}
        >
          Rooted in the tradition of the Japanese tea ceremony, Ichi-go Ichi-e expresses a deep
          appreciation for the uniqueness of each moment, whether found in simple daily rituals or
          one-in-a-lifetime encounters. Each meeting is unrepeatable, making it all the more
          precious.
        </Typography>

        {/* Body text block 2 */}
        <Typography
          sx={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: { xs: '0.92rem', md: '1rem' },
            color: '#1c1c2e',
            lineHeight: 1.75,
            mb: { xs: 4, md: 5 },
          }}
        >
          This elegant set of five small bowls, offered in both warm and cool tones with gloss
          and matte textures, is designed to honor those moments. Depending on your mood, or even
          the time of day, you can choose a warm tone for cozy daytime moments or a cool tone for
          calm, evening reflections.
        </Typography>

        {/* Bowl image */}
        <Box
          sx={{
            width: '100%',
            mb: { xs: 4, md: 5 },
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src="/La_Kole_brand_identity.png"
            alt="Ichi-go Ichi-e set of five small bowls in warm and cool tones filled with fresh fruits"
            sx={{ width: { xs: '80%', md: '65%' }, height: 'auto', display: 'block' }}
          />
        </Box>

        {/* Body text block 3 */}
        <Typography
          sx={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: { xs: '0.92rem', md: '1rem' },
            color: '#1c1c2e',
            lineHeight: 1.75,
            mb: { xs: 4, md: 5 },
          }}
        >
          Perfect as a housewarming, farewell, host or hostess, thank-you, or self-gift, these
          bowls are just the right size for small bites, from nuts, fruits, and desserts to a
          scoop of ice cream, a sip of tea, or a beautifully plated appetizer.
        </Typography>

        {/* Closing tagline */}
        <Typography
          variant="h5"
          component="p"
          sx={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontWeight: 'bold',
            color: '#1c1c2e',
            textAlign: 'center',
            fontSize: { xs: '1.1rem', md: '1.35rem' },
            lineHeight: 1.5,
            letterSpacing: '0.01em',
          }}
        >
          Let these bowls accompany and elevate the little moments that matter.
        </Typography>
      </Box>
    </PageLayout>
  );
}

export default LaKolePage;
