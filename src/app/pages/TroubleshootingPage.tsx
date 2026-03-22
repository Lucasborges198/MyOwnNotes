import { Box, Typography, Breadcrumbs, IconButton, Divider } from '@mui/material';
import { ChevronRight, ThumbUp, ThumbDown, Warning } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const articles = [
  { id: 'notes-not-syncing', title: 'Notes not syncing' },
  { id: 'password-reset', title: 'Password reset issues' },
  { id: 'export-failed', title: 'Export failed' },
];

export default function TroubleshootingPage() {
  const [activeArticle, setActiveArticle] = useState('notes-not-syncing');
  const [feedbackGiven, setFeedbackGiven] = useState<'yes' | 'no' | null>(null);

  const handleFeedback = (type: 'yes' | 'no') => {
    setFeedbackGiven(type);
  };

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        backgroundColor: '#121212',
        overflow: 'hidden',
      }}
    >
      {/* Left Sidebar - Navigation */}
      <Box
        sx={{
          width: '25%',
          backgroundColor: '#1a1a1a',
          borderRight: '1px solid rgba(255,255,255,0.08)',
          p: 4,
          overflowY: 'auto',
        }}
      >
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: 700,
            color: '#ffffff',
            mb: 4,
            letterSpacing: '-0.3px',
          }}
        >
          Troubleshooting
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {articles.map((article) => (
            <Box
              key={article.id}
              onClick={() => setActiveArticle(article.id)}
              sx={{
                px: 2.5,
                py: 1.75,
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                backgroundColor:
                  activeArticle === article.id
                    ? 'rgba(33, 150, 243, 0.15)'
                    : 'transparent',
                '&:hover': {
                  backgroundColor:
                    activeArticle === article.id
                      ? 'rgba(33, 150, 243, 0.2)'
                      : 'rgba(255,255,255,0.04)',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: activeArticle === article.id ? 600 : 500,
                  color:
                    activeArticle === article.id
                      ? '#2196F3'
                      : 'rgba(255,255,255,0.7)',
                  transition: 'color 0.2s',
                }}
              >
                {article.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Main Content Area */}
      <Box
        sx={{
          width: '75%',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            maxWidth: '900px',
            width: '100%',
            margin: '0 auto',
            px: 6,
            py: 5,
            flex: 1,
          }}
        >
          {/* Breadcrumb */}
          <Breadcrumbs
            separator={<ChevronRight sx={{ fontSize: 16, color: 'rgba(255,255,255,0.4)' }} />}
            sx={{
              mb: 4,
              '& .MuiBreadcrumbs-separator': {
                mx: 1,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                '&:hover': {
                  color: 'rgba(255,255,255,0.7)',
                },
              }}
              onClick={() => navigate('/help')}
            >
              Support
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                color: '#2196F3',
                fontWeight: 500,
              }}
            >
              Troubleshooting
            </Typography>
          </Breadcrumbs>

          {/* Article Title */}
          <Typography
            sx={{
              fontSize: '40px',
              fontWeight: 700,
              color: '#ffffff',
              mb: 4,
              letterSpacing: '-0.5px',
              lineHeight: 1.2,
            }}
          >
            Fixing sync issues across devices
          </Typography>

          {/* Article Content */}
          <Box sx={{ mb: 5 }}>
            <Typography
              sx={{
                fontSize: '16px',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              If your notes aren't syncing properly across your devices, follow these
              troubleshooting steps to resolve the issue. Most sync problems can be fixed
              within a few minutes.
            </Typography>

            {/* Step-by-step Guide */}
            <Box sx={{ mb: 4 }}>
              {/* Step 1 */}
              <Box sx={{ mb: 3.5 }}>
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#ffffff',
                    mb: 1.5,
                    letterSpacing: '-0.2px',
                  }}
                >
                  1. Check your internet connection
                </Typography>
                <Typography
                  sx={{
                    fontSize: '16px',
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.8,
                  }}
                >
                  Ensure that all your devices have a stable internet connection. Try opening
                  a web browser to confirm you can access other websites. If your connection
                  is unstable, try switching between Wi-Fi and mobile data.
                </Typography>
              </Box>

              {/* Step 2 */}
              <Box sx={{ mb: 3.5 }}>
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#ffffff',
                    mb: 1.5,
                    letterSpacing: '-0.2px',
                  }}
                >
                  2. Force refresh the application
                </Typography>
                <Typography
                  sx={{
                    fontSize: '16px',
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.8,
                  }}
                >
                  Close the MyOwnNotes app completely and reopen it. On mobile devices, swipe
                  the app away from your recent apps list. On desktop, quit the application
                  entirely and restart it. This forces the app to reconnect to our servers and
                  pull the latest data.
                </Typography>
              </Box>

              {/* Step 3 */}
              <Box sx={{ mb: 3.5 }}>
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#ffffff',
                    mb: 1.5,
                    letterSpacing: '-0.2px',
                  }}
                >
                  3. Check your account status
                </Typography>
                <Typography
                  sx={{
                    fontSize: '16px',
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.8,
                  }}
                >
                  Navigate to Settings → Account to verify that you're signed in with the
                  correct account on all devices. If you're logged into different accounts,
                  your notes won't sync between them.
                </Typography>
              </Box>

              {/* Step 4 */}
              <Box sx={{ mb: 3.5 }}>
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#ffffff',
                    mb: 1.5,
                    letterSpacing: '-0.2px',
                  }}
                >
                  4. Verify sync settings are enabled
                </Typography>
                <Typography
                  sx={{
                    fontSize: '16px',
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.8,
                  }}
                >
                  Go to Settings → Sync and ensure that "Auto-sync" is turned on. If it's
                  disabled, your notes will only sync manually when you trigger a sync action.
                </Typography>
              </Box>

              {/* Step 5 */}
              <Box sx={{ mb: 3.5 }}>
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#ffffff',
                    mb: 1.5,
                    letterSpacing: '-0.2px',
                  }}
                >
                  5. Clear app cache
                </Typography>
                <Typography
                  sx={{
                    fontSize: '16px',
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.8,
                  }}
                >
                  Navigate to Settings → Advanced → Clear Cache. This removes temporary files
                  that might be causing sync conflicts. Your notes won't be deleted, but the
                  app will re-download fresh data from the cloud.
                </Typography>
              </Box>
            </Box>

            {/* Warning Box */}
            <Box
              sx={{
                backgroundColor: 'rgba(255, 152, 0, 0.08)',
                borderLeft: '4px solid #FF9800',
                borderRadius: '8px',
                p: 3,
                mb: 4,
                display: 'flex',
                gap: 2,
              }}
            >
              <Warning sx={{ color: '#FF9800', fontSize: 24, flexShrink: 0, mt: 0.25 }} />
              <Box>
                <Typography
                  sx={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#FF9800',
                    mb: 1,
                  }}
                >
                  Important Note
                </Typography>
                <Typography
                  sx={{
                    fontSize: '15px',
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.7,
                  }}
                >
                  If you've made changes to the same note on multiple devices while offline,
                  you may see a sync conflict. In this case, the app will prompt you to choose
                  which version to keep. Always review both versions carefully before making a
                  decision.
                </Typography>
              </Box>
            </Box>

            {/* Additional Content */}
            <Typography
              sx={{
                fontSize: '16px',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              If you've followed all these steps and your notes still aren't syncing, please
              contact our support team. We'll investigate the issue and help you get back on
              track as quickly as possible.
            </Typography>
          </Box>

          {/* Feedback Section */}
          <Box sx={{ pt: 4, mt: 4, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <Divider sx={{ mb: 3, borderColor: 'rgba(255,255,255,0.08)' }} />
            
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.8)',
                }}
              >
                Was this article helpful?
              </Typography>

              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton
                  onClick={() => handleFeedback('yes')}
                  sx={{
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '10px',
                    px: 2.5,
                    py: 1,
                    backgroundColor:
                      feedbackGiven === 'yes'
                        ? 'rgba(76, 175, 80, 0.15)'
                        : 'transparent',
                    borderColor:
                      feedbackGiven === 'yes'
                        ? '#4CAF50'
                        : 'rgba(255,255,255,0.15)',
                    '&:hover': {
                      backgroundColor: 'rgba(76, 175, 80, 0.1)',
                      borderColor: '#4CAF50',
                    },
                  }}
                >
                  <ThumbUp
                    sx={{
                      fontSize: 20,
                      color: feedbackGiven === 'yes' ? '#4CAF50' : 'rgba(255,255,255,0.6)',
                      mr: 1,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: feedbackGiven === 'yes' ? '#4CAF50' : 'rgba(255,255,255,0.6)',
                    }}
                  >
                    Yes
                  </Typography>
                </IconButton>

                <IconButton
                  onClick={() => handleFeedback('no')}
                  sx={{
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '10px',
                    px: 2.5,
                    py: 1,
                    backgroundColor:
                      feedbackGiven === 'no'
                        ? 'rgba(244, 67, 54, 0.15)'
                        : 'transparent',
                    borderColor:
                      feedbackGiven === 'no'
                        ? '#F44336'
                        : 'rgba(255,255,255,0.15)',
                    '&:hover': {
                      backgroundColor: 'rgba(244, 67, 54, 0.1)',
                      borderColor: '#F44336',
                    },
                  }}
                >
                  <ThumbDown
                    sx={{
                      fontSize: 20,
                      color: feedbackGiven === 'no' ? '#F44336' : 'rgba(255,255,255,0.6)',
                      mr: 1,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: feedbackGiven === 'no' ? '#F44336' : 'rgba(255,255,255,0.6)',
                    }}
                  >
                    No
                  </Typography>
                </IconButton>
              </Box>
            </Box>

            {/* Thank You Message */}
            {feedbackGiven && (
              <Box
                sx={{
                  mt: 3,
                  p: 2.5,
                  backgroundColor: 'rgba(33, 150, 243, 0.08)',
                  borderRadius: '10px',
                  textAlign: 'center',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '15px',
                    color: 'rgba(255,255,255,0.8)',
                  }}
                >
                  Thank you for your feedback! We're constantly working to improve our documentation.
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}