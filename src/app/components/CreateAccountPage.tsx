import { Box, Typography, TextField, Button, IconButton, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Google, Visibility, VisibilityOff, AutoAwesome, CloudSync, Code } from '@mui/icons-material';

export default function CreateAccountPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleCreateAccount = () => {
    if (!formData.fullName || !formData.email || !formData.password) {
      alert('Please fill in all fields');
      return;
    }
    if (formData.password.length < 8) {
      alert('Password must be at least 8 characters');
      return;
    }
    // Mock account creation - in real app, send to backend
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', formData.fullName);
    localStorage.setItem('userEmail', formData.email);
    navigate('/');
  };

  const handleGoogleSignup = () => {
    // Mock Google signup
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', 'Google User');
    localStorage.setItem('loginMethod', 'google');
    navigate('/');
  };

  const handleDiscordSignup = () => {
    // Mock Discord signup
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', 'Discord User');
    localStorage.setItem('loginMethod', 'discord');
    navigate('/');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        backgroundColor: '#0a0a0a',
      }}
    >
      {/* Left Side - Branding & Value Propositions */}
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
            mb: 12,
            letterSpacing: '-0.01em',
          }}
        >
          MyOwnNotes
        </Typography>

        {/* Value Propositions */}
        <Box
          sx={{
            maxWidth: '500px',
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
          }}
        >
          {/* Value Prop 1 */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
            <Box
              sx={{
                backgroundColor: 'rgba(33, 150, 243, 0.1)',
                borderRadius: '12px',
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <AutoAwesome sx={{ color: '#2196F3', fontSize: 32 }} />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#ffffff',
                  mb: 1,
                }}
              >
                Organize easily
              </Typography>
              <Typography
                sx={{
                  fontSize: '15px',
                  color: '#888888',
                  lineHeight: 1.6,
                }}
              >
                Effortlessly categorize and structure your notes with intuitive collections and tags
              </Typography>
            </Box>
          </Box>

          {/* Value Prop 2 */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
            <Box
              sx={{
                backgroundColor: 'rgba(255, 152, 0, 0.1)',
                borderRadius: '12px',
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CloudSync sx={{ color: '#FF9800', fontSize: 32 }} />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#ffffff',
                  mb: 1,
                }}
              >
                Sync everywhere
              </Typography>
              <Typography
                sx={{
                  fontSize: '15px',
                  color: '#888888',
                  lineHeight: 1.6,
                }}
              >
                Access your notes seamlessly across all devices with real-time cloud synchronization
              </Typography>
            </Box>
          </Box>

          {/* Value Prop 3 */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
            <Box
              sx={{
                backgroundColor: 'rgba(244, 67, 54, 0.1)',
                borderRadius: '12px',
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Code sx={{ color: '#F44336', fontSize: 32 }} />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#ffffff',
                  mb: 1,
                }}
              >
                Markdown ready
              </Typography>
              <Typography
                sx={{
                  fontSize: '15px',
                  color: '#888888',
                  lineHeight: 1.6,
                }}
              >
                Write with powerful markdown support and syntax highlighting for code snippets
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Right Side - Sign Up Form */}
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
            Create Account
          </Typography>
          <Typography
            sx={{
              fontSize: '16px',
              color: '#888888',
              mb: 5,
            }}
          >
            Get started with MyOwnNotes today
          </Typography>

          {/* Google Sign Up Button */}
          <Button
            fullWidth
            variant="outlined"
            onClick={handleGoogleSignup}
            startIcon={<Google />}
            sx={{
              color: '#ffffff',
              borderColor: '#333333',
              backgroundColor: '#252525',
              py: 1.75,
              mb: 2,
              textTransform: 'none',
              fontSize: '15px',
              fontWeight: 600,
              '&:hover': {
                borderColor: '#444444',
                backgroundColor: '#2a2a2a',
              },
            }}
          >
            Continue with Google
          </Button>

          {/* Discord Sign Up Button */}
          <Button
            fullWidth
            variant="outlined"
            onClick={handleDiscordSignup}
            startIcon={
              <Box
                component="svg"
                sx={{ width: 20, height: 20 }}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
              </Box>
            }
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
                borderColor: '#5865F2',
                backgroundColor: 'rgba(88, 101, 242, 0.1)',
              },
            }}
          >
            Continue with Discord
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
            <Typography sx={{ fontSize: '14px', color: '#666666' }}>OR</Typography>
            <Box sx={{ flex: 1, height: '1px', backgroundColor: '#333333' }} />
          </Box>

          {/* Full Name Field */}
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#e0e0e0',
                mb: 1.5,
              }}
            >
              Full Name
            </Typography>
            <TextField
              fullWidth
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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

          {/* Password Field with Eye Toggle */}
          <Box sx={{ mb: 5 }}>
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
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a password (min. 8 characters)"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              variant="outlined"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleCreateAccount();
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={togglePasswordVisibility}
                      edge="end"
                      sx={{
                        color: '#666666',
                        '&:hover': {
                          color: '#888888',
                        },
                      }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
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

          {/* Sign Up Button */}
          <Button
            fullWidth
            variant="contained"
            onClick={handleCreateAccount}
            sx={{
              backgroundColor: '#2196F3',
              color: '#ffffff',
              py: 1.75,
              mb: 4,
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
            Sign Up
          </Button>

          {/* Already have an account */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              sx={{
                fontSize: '14px',
                color: '#888888',
              }}
            >
              Already have an account?{' '}
              <Typography
                component="span"
                sx={{
                  color: '#2196F3',
                  cursor: 'pointer',
                  fontWeight: 600,
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
                onClick={() => navigate('/login')}
              >
                Log in
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}