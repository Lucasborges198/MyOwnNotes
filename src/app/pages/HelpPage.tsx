import { Box, Typography, TextField, InputAdornment, Card, CardContent, Button } from '@mui/material';
import { Search, RocketLaunch, HelpOutline, Build } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import ContactSupportModal from '../components/ContactSupportModal';

export default function HelpPage() {
  const navigate = useNavigate();
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <Box
      sx={{
        maxWidth: '1200px',
        margin: '0 auto',
        py: 6,
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: 'center',
          mb: 8,
        }}
      >
        <Typography
          sx={{
            fontSize: '42px',
            fontWeight: 700,
            color: '#ffffff',
            mb: 4,
            letterSpacing: '-0.5px',
          }}
        >
          How can we help you?
        </Typography>

        {/* Search Bar */}
        <Box
          sx={{
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          <TextField
            fullWidth
            placeholder="Search for articles, guides, or FAQs..."
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: 'rgba(255,255,255,0.4)', fontSize: 24 }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(255,255,255,0.05)',
                color: '#ffffff',
                borderRadius: '12px',
                fontSize: '16px',
                py: 0.5,
                '& fieldset': {
                  borderColor: 'rgba(255,255,255,0.15)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(255,255,255,0.25)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#2196F3',
                  borderWidth: '2px',
                },
              },
              '& .MuiInputBase-input': {
                py: 2,
              },
              '& .MuiInputBase-input::placeholder': {
                color: 'rgba(255,255,255,0.4)',
                opacity: 1,
              },
            }}
          />
        </Box>
      </Box>

      {/* Categories Section */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 3,
          mb: 8,
        }}
      >
        {/* Card 1: Getting Started */}
        <Card
          onClick={() => navigate('/getting-started')}
          sx={{
            backgroundColor: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            cursor: 'pointer',
            transition: 'all 0.3s',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.06)',
              borderColor: 'rgba(255,255,255,0.15)',
              transform: 'translateY(-4px)',
              boxShadow: '0px 12px 32px rgba(0,0,0,0.3)',
            },
          }}
        >
          <CardContent
            sx={{
              p: 4,
              textAlign: 'center',
              '&:last-child': {
                pb: 4,
              },
            }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 64,
                height: 64,
                borderRadius: '16px',
                backgroundColor: 'rgba(33, 150, 243, 0.15)',
                mb: 3,
              }}
            >
              <RocketLaunch sx={{ fontSize: 32, color: '#2196F3' }} />
            </Box>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#ffffff',
                mb: 1.5,
              }}
            >
              Getting Started
            </Typography>
            <Typography
              sx={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.6,
              }}
            >
              Learn the basics of MyOwnNotes
            </Typography>
          </CardContent>
        </Card>

        {/* Card 2: FAQs */}
        <Card
          onClick={() => navigate('/faq')}
          sx={{
            backgroundColor: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            cursor: 'pointer',
            transition: 'all 0.3s',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.06)',
              borderColor: 'rgba(255,255,255,0.15)',
              transform: 'translateY(-4px)',
              boxShadow: '0px 12px 32px rgba(0,0,0,0.3)',
            },
          }}
        >
          <CardContent
            sx={{
              p: 4,
              textAlign: 'center',
              '&:last-child': {
                pb: 4,
              },
            }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 64,
                height: 64,
                borderRadius: '16px',
                backgroundColor: 'rgba(156, 39, 176, 0.15)',
                mb: 3,
              }}
            >
              <HelpOutline sx={{ fontSize: 32, color: '#9C27B0' }} />
            </Box>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#ffffff',
                mb: 1.5,
              }}
            >
              FAQs
            </Typography>
            <Typography
              sx={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.6,
              }}
            >
              Answers to common questions
            </Typography>
          </CardContent>
        </Card>

        {/* Card 3: Troubleshooting */}
        <Card
          onClick={() => navigate('/troubleshooting')}
          sx={{
            backgroundColor: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            cursor: 'pointer',
            transition: 'all 0.3s',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.06)',
              borderColor: 'rgba(255,255,255,0.15)',
              transform: 'translateY(-4px)',
              boxShadow: '0px 12px 32px rgba(0,0,0,0.3)',
            },
          }}
        >
          <CardContent
            sx={{
              p: 4,
              textAlign: 'center',
              '&:last-child': {
                pb: 4,
              },
            }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 64,
                height: 64,
                borderRadius: '16px',
                backgroundColor: 'rgba(255, 152, 0, 0.15)',
                mb: 3,
              }}
            >
              <Build sx={{ fontSize: 32, color: '#FF9800' }} />
            </Box>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#ffffff',
                mb: 1.5,
              }}
            >
              Troubleshooting
            </Typography>
            <Typography
              sx={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.6,
              }}
            >
              Fix bugs and sync issues
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Contact Support Section */}
      <Box
        sx={{
          backgroundColor: 'rgba(255,255,255,0.04)',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.08)',
          p: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: 600,
              color: '#ffffff',
              mb: 0.5,
            }}
          >
            Still need help?
          </Typography>
          <Typography
            sx={{
              fontSize: '15px',
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            Our team is here for you.
          </Typography>
        </Box>
        <Button
          variant="contained"
          onClick={() => setContactModalOpen(true)}
          sx={{
            backgroundColor: '#2196F3',
            color: '#ffffff',
            px: 4,
            py: 1.5,
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: 600,
            borderRadius: '10px',
            boxShadow: '0px 4px 12px rgba(33, 150, 243, 0.3)',
            '&:hover': {
              backgroundColor: '#1976D2',
              boxShadow: '0px 6px 16px rgba(33, 150, 243, 0.4)',
            },
          }}
        >
          Contact Support
        </Button>
      </Box>

      {/* Contact Support Modal */}
      <ContactSupportModal 
        open={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />
    </Box>
  );
}