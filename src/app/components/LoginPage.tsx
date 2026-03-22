import { Box, Typography, TextField, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Google, ExpandMore } from '@mui/icons-material';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    // Mock login - in real app, validate credentials
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/');
  };

  const handleGoogleLogin = () => {
    // Mock Google login
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('loginMethod', 'google');
    navigate('/');
  };

  const handleCreateAccount = () => {
    navigate('/create-account');
  };

  const handleAccordionChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        backgroundColor: '#0a0a0a',
      }}
    >
      {/* Left Side - Logo and Release Notes */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#111111',
          display: 'flex',
          flexDirection: 'column',
          p: 8,
        }}
      >
        {/* Logo */}
        <Typography
          sx={{
            fontSize: '28px',
            fontWeight: 700,
            color: '#ffffff',
            mb: 8,
            letterSpacing: '-0.01em',
          }}
        >
          MyOwnNotes
        </Typography>

        {/* Release Notes Section */}
        <Box sx={{ maxWidth: '500px' }}>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: 600,
              color: '#e0e0e0',
              mb: 3,
            }}
          >
            Release Notes
          </Typography>

          {/* Accordion Item 1 - Expanded */}
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleAccordionChange('panel1')}
            sx={{
              backgroundColor: 'transparent',
              border: '1px solid #2a2a2a',
              borderRadius: '8px !important',
              mb: 2,
              '&:before': {
                display: 'none',
              },
              boxShadow: 'none',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: '#888888' }} />}
              sx={{
                color: '#ffffff',
                '& .MuiAccordionSummary-content': {
                  my: 1.5,
                },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#ffffff',
                  }}
                >
                  v2.1 - New Editor Features
                </Typography>
                <Typography
                  sx={{
                    fontSize: '13px',
                    color: '#666666',
                    mt: 0.5,
                  }}
                >
                  March 15, 2026
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                pt: 0,
                pb: 2,
                px: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: '14px',
                  color: '#a0a0a0',
                  lineHeight: 1.6,
                }}
              >
                Introducing a powerful new rich text editor with markdown support, inline code highlighting, and seamless table creation. Enhanced collaboration features now allow real-time note sharing and commenting.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Accordion Item 2 - Collapsed */}
          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleAccordionChange('panel2')}
            sx={{
              backgroundColor: 'transparent',
              border: '1px solid #2a2a2a',
              borderRadius: '8px !important',
              mb: 2,
              '&:before': {
                display: 'none',
              },
              boxShadow: 'none',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: '#888888' }} />}
              sx={{
                color: '#ffffff',
                '& .MuiAccordionSummary-content': {
                  my: 1.5,
                },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#ffffff',
                  }}
                >
                  v2.0 - Dark Mode
                </Typography>
                <Typography
                  sx={{
                    fontSize: '13px',
                    color: '#666666',
                    mt: 0.5,
                  }}
                >
                  February 28, 2026
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                pt: 0,
                pb: 2,
                px: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: '14px',
                  color: '#a0a0a0',
                  lineHeight: 1.6,
                }}
              >
                A complete visual overhaul with a beautiful dark mode interface designed to reduce eye strain during long writing sessions. Improved performance and reduced load times across all pages.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Accordion Item 3 - Collapsed */}
          <Accordion
            expanded={expanded === 'panel3'}
            onChange={handleAccordionChange('panel3')}
            sx={{
              backgroundColor: 'transparent',
              border: '1px solid #2a2a2a',
              borderRadius: '8px !important',
              mb: 2,
              '&:before': {
                display: 'none',
              },
              boxShadow: 'none',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: '#888888' }} />}
              sx={{
                color: '#ffffff',
                '& .MuiAccordionSummary-content': {
                  my: 1.5,
                },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#ffffff',
                  }}
                >
                  v1.9 - Collections & Tags
                </Typography>
                <Typography
                  sx={{
                    fontSize: '13px',
                    color: '#666666',
                    mt: 0.5,
                  }}
                >
                  January 10, 2026
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                pt: 0,
                pb: 2,
                px: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: '14px',
                  color: '#a0a0a0',
                  lineHeight: 1.6,
                }}
              >
                Organize your notes better with our new collections feature and custom tagging system. Create nested collections and use color-coded tags for quick visual identification.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Accordion Item 4 - Collapsed */}
          <Accordion
            expanded={expanded === 'panel4'}
            onChange={handleAccordionChange('panel4')}
            sx={{
              backgroundColor: 'transparent',
              border: '1px solid #2a2a2a',
              borderRadius: '8px !important',
              '&:before': {
                display: 'none',
              },
              boxShadow: 'none',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: '#888888' }} />}
              sx={{
                color: '#ffffff',
                '& .MuiAccordionSummary-content': {
                  my: 1.5,
                },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#ffffff',
                  }}
                >
                  v1.8 - Mobile App Launch
                </Typography>
                <Typography
                  sx={{
                    fontSize: '13px',
                    color: '#666666',
                    mt: 0.5,
                  }}
                >
                  December 5, 2025
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                pt: 0,
                pb: 2,
                px: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: '14px',
                  color: '#a0a0a0',
                  lineHeight: 1.6,
                }}
              >
                Take your notes anywhere with our new iOS and Android apps. Full sync across all devices with offline support for reading and editing on the go.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>

      {/* Right Side - Login Form */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#1a1a1a',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 8,
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '450px',
          }}
        >
          {/* Header */}
          <Typography
            sx={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#ffffff',
              mb: 1,
            }}
          >
            Welcome back
          </Typography>
          <Typography
            sx={{
              fontSize: '16px',
              color: '#888888',
              mb: 6,
            }}
          >
            Sign in to your account to continue
          </Typography>

          {/* Google Sign In Button */}
          <Button
            fullWidth
            variant="outlined"
            onClick={handleGoogleLogin}
            startIcon={<Google />}
            sx={{
              color: '#ffffff',
              borderColor: '#333333',
              backgroundColor: '#252525',
              py: 1.75,
              mb: 4,
              textTransform: 'none',
              fontSize: '15px',
              fontWeight: 600,
              '&:hover': {
                borderColor: '#444444',
                backgroundColor: '#2a2a2a',
              },
            }}
          >
            Sign in with Google
          </Button>

          {/* Divider */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 4,
            }}
          >
            <Box sx={{ flex: 1, height: '1px', backgroundColor: '#333333' }} />
            <Typography sx={{ fontSize: '14px', color: '#666666' }}>or</Typography>
            <Box sx={{ flex: 1, height: '1px', backgroundColor: '#333333' }} />
          </Box>

          {/* Email Field */}
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#e0e0e0',
                mb: 1.5,
              }}
            >
              Email
            </Typography>
            <TextField
              fullWidth
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#252525',
                  color: '#ffffff',
                  '& fieldset': {
                    borderColor: '#3a3a3a',
                  },
                  '&:hover fieldset': {
                    borderColor: '#4a4a4a',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#2196F3',
                  },
                },
                '& .MuiInputBase-input': {
                  fontSize: '15px',
                  py: 1.75,
                },
                '& .MuiInputBase-input::placeholder': {
                  color: '#666666',
                  opacity: 1,
                },
              }}
            />
          </Box>

          {/* Password Field */}
          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#e0e0e0',
                mb: 1.5,
              }}
            >
              Password
            </Typography>
            <TextField
              fullWidth
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleLogin();
                }
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#252525',
                  color: '#ffffff',
                  '& fieldset': {
                    borderColor: '#3a3a3a',
                  },
                  '&:hover fieldset': {
                    borderColor: '#4a4a4a',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#2196F3',
                  },
                },
                '& .MuiInputBase-input': {
                  fontSize: '15px',
                  py: 1.75,
                },
                '& .MuiInputBase-input::placeholder': {
                  color: '#666666',
                  opacity: 1,
                },
              }}
            />
          </Box>

          {/* Login Button */}
          <Button
            fullWidth
            variant="contained"
            onClick={handleLogin}
            sx={{
              backgroundColor: '#2196F3',
              color: '#ffffff',
              py: 1.75,
              mb: 3,
              textTransform: 'none',
              fontSize: '16px',
              fontWeight: 600,
              boxShadow: '0px 4px 12px rgba(33, 150, 243, 0.3)',
              '&:hover': {
                backgroundColor: '#1976D2',
                boxShadow: '0px 6px 16px rgba(33, 150, 243, 0.4)',
              },
            }}
          >
            Login
          </Button>

          {/* Forgot Password Link */}
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography
              sx={{
                fontSize: '14px',
                color: '#888888',
                cursor: 'pointer',
                transition: 'color 0.2s',
                '&:hover': {
                  color: '#2196F3',
                },
              }}
              onClick={() => alert('Forgot password feature coming soon!')}
            >
              Forgot Password?
            </Typography>
          </Box>

          {/* Create Account Button */}
          <Button
            fullWidth
            variant="outlined"
            onClick={handleCreateAccount}
            sx={{
              color: '#e0e0e0',
              borderColor: '#3a3a3a',
              py: 1.75,
              textTransform: 'none',
              fontSize: '16px',
              fontWeight: 600,
              '&:hover': {
                borderColor: '#4a4a4a',
                backgroundColor: 'rgba(255,255,255,0.02)',
              },
            }}
          >
            Create Account
          </Button>
        </Box>
      </Box>
    </Box>
  );
}