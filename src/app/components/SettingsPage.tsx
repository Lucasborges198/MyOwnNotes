import { Box, Typography, Switch, Chip, ToggleButtonGroup, ToggleButton, Select, MenuItem, Button } from '@mui/material';
import { AutoAwesome, Groups, Keyboard } from '@mui/icons-material';
import { useState } from 'react';
import KeyboardShortcutsModal from './KeyboardShortcutsModal';

export default function SettingsPage() {
  const [theme, setTheme] = useState('dark');
  const [noteAI, setNoteAI] = useState(true);
  const [markdownEnabled, setMarkdownEnabled] = useState(false);
  const [codeLanguage, setCodeLanguage] = useState('TypeScript');
  const [language, setLanguage] = useState('English');
  const [spellcheckEnabled, setSpellcheckEnabled] = useState(true);
  const [shortcutsModalOpen, setShortcutsModalOpen] = useState(false);

  const handleThemeChange = (event: React.MouseEvent<HTMLElement>, newTheme: string | null) => {
    if (newTheme !== null) {
      setTheme(newTheme);
    }
  };

  const handleExportNotes = () => {
    console.log('Export notes as JSON');
  };

  return (
    <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
      {/* Page Title */}
      <Typography
        sx={{
          fontSize: '32px',
          fontWeight: 700,
          color: '#ffffff',
          mb: 5,
        }}
      >
        Settings
      </Typography>

      {/* Section 1: Theme */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '30% 70%',
          gap: 6,
          py: 5,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Left Column */}
        <Box>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#ffffff',
              mb: 1,
            }}
          >
            Theme
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.6,
            }}
          >
            Choose how MyOwnNotes looks to you
          </Typography>
        </Box>

        {/* Right Column */}
        <Box>
          <ToggleButtonGroup
            value={theme}
            exclusive
            onChange={handleThemeChange}
            sx={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: '10px',
              p: 0.5,
              border: '1px solid rgba(255,255,255,0.1)',
              '& .MuiToggleButtonGroup-grouped': {
                border: 'none',
                '&:not(:first-of-type)': {
                  marginLeft: '4px',
                },
              },
            }}
          >
            <ToggleButton
              value="system"
              sx={{
                px: 3,
                py: 1,
                color: 'rgba(255,255,255,0.6)',
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: 500,
                borderRadius: '8px',
                '&.Mui-selected': {
                  backgroundColor: '#2196F3',
                  color: '#ffffff',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#1976D2',
                  },
                },
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.08)',
                },
              }}
            >
              System
            </ToggleButton>
            <ToggleButton
              value="light"
              sx={{
                px: 3,
                py: 1,
                color: 'rgba(255,255,255,0.6)',
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: 500,
                borderRadius: '8px',
                '&.Mui-selected': {
                  backgroundColor: '#2196F3',
                  color: '#ffffff',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#1976D2',
                  },
                },
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.08)',
                },
              }}
            >
              Light
            </ToggleButton>
            <ToggleButton
              value="dark"
              sx={{
                px: 3,
                py: 1,
                color: 'rgba(255,255,255,0.6)',
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: 500,
                borderRadius: '8px',
                '&.Mui-selected': {
                  backgroundColor: '#2196F3',
                  color: '#ffffff',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#1976D2',
                  },
                },
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.08)',
                },
              }}
            >
              Dark
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>

      {/* Section 2: NoteAI Assistant */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '30% 70%',
          gap: 6,
          py: 5,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Left Column */}
        <Box>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#ffffff',
              mb: 1,
            }}
          >
            NoteAI Assistant
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.6,
            }}
          >
            Let AI help organize and enhance your notes
          </Typography>
        </Box>

        {/* Right Column */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Switch
            checked={noteAI}
            onChange={(e) => setNoteAI(e.target.checked)}
            sx={{
              '& .MuiSwitch-switchBase.Mui-checked': {
                color: '#2196F3',
              },
              '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                backgroundColor: '#2196F3',
              },
            }}
          />
          <AutoAwesome 
            sx={{ 
              color: noteAI ? '#2196F3' : 'rgba(255,255,255,0.3)',
              fontSize: '20px',
              transition: 'color 0.2s',
            }} 
          />
          <Typography
            sx={{
              fontSize: '15px',
              color: noteAI ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.5)',
              fontWeight: 500,
              transition: 'color 0.2s',
            }}
          >
            Enable smart categorization
          </Typography>
        </Box>
      </Box>

      {/* Section 3: Workspaces & Groups */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '30% 70%',
          gap: 6,
          py: 5,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Left Column */}
        <Box>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#ffffff',
              mb: 1,
            }}
          >
            Workspaces & Groups
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.6,
            }}
          >
            Collaborate with your team
          </Typography>
        </Box>

        {/* Right Column - Coming Soon */}
        <Box
          sx={{
            backgroundColor: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            p: 4,
            display: 'flex',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: '10px',
              backgroundColor: 'rgba(33, 150, 243, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Groups sx={{ color: '#2196F3', fontSize: '24px' }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#ffffff',
                }}
              >
                Coming Soon
              </Typography>
              <Chip
                label="Beta"
                size="small"
                sx={{
                  backgroundColor: 'rgba(33, 150, 243, 0.2)',
                  color: '#2196F3',
                  fontSize: '11px',
                  fontWeight: 700,
                  height: '20px',
                  borderRadius: '6px',
                  '& .MuiChip-label': {
                    px: 1,
                  },
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.6,
              }}
            >
              Share notes with your team. Available soon.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Section 4: Editor Preferences */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '30% 70%',
          gap: 6,
          py: 5,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Left Column */}
        <Box>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#ffffff',
              mb: 1,
            }}
          >
            Editor Preferences
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.6,
            }}
          >
            Customize your writing experience
          </Typography>
        </Box>

        {/* Right Column */}
        <Box>
          {/* Markdown Toggle */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 3,
            }}
          >
            <Switch
              checked={markdownEnabled}
              onChange={(e) => setMarkdownEnabled(e.target.checked)}
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: '#2196F3',
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                  backgroundColor: '#2196F3',
                },
              }}
            />
            <Typography
              sx={{
                fontSize: '15px',
                color: markdownEnabled ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.5)',
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
            >
              Enable Markdown Support
            </Typography>
          </Box>

          {/* Code Language Dropdown */}
          <Box>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#ffffff',
                mb: 1.5,
              }}
            >
              Default Code Snippet Language
            </Typography>
            <Select
              value={codeLanguage}
              onChange={(e) => setCodeLanguage(e.target.value)}
              fullWidth
              sx={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '8px',
                color: '#ffffff',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255,255,255,0.1)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255,255,255,0.2)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#2196F3',
                },
                '& .MuiSelect-select': {
                  fontSize: '14px',
                  fontWeight: 500,
                  py: 1.5,
                },
                '& .MuiSvgIcon-root': {
                  color: 'rgba(255,255,255,0.5)',
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: '#2a2a2a',
                    borderRadius: '8px',
                    mt: 0.5,
                    '& .MuiMenuItem-root': {
                      color: '#ffffff',
                      fontSize: '14px',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.08)',
                      },
                      '&.Mui-selected': {
                        backgroundColor: 'rgba(33, 150, 243, 0.2)',
                        '&:hover': {
                          backgroundColor: 'rgba(33, 150, 243, 0.3)',
                        },
                      },
                    },
                  },
                },
              }}
            >
              <MenuItem value="TypeScript">TypeScript</MenuItem>
              <MenuItem value="JavaScript">JavaScript</MenuItem>
              <MenuItem value="Angular">Angular</MenuItem>
              <MenuItem value="Python">Python</MenuItem>
              <MenuItem value="Java">Java</MenuItem>
              <MenuItem value="C++">C++</MenuItem>
              <MenuItem value="Ruby">Ruby</MenuItem>
              <MenuItem value="Go">Go</MenuItem>
            </Select>
          </Box>
        </Box>
      </Box>

      {/* Section 5: Language & Region */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '30% 70%',
          gap: 6,
          py: 5,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Left Column */}
        <Box>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#ffffff',
              mb: 1,
            }}
          >
            Language & Region
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.6,
            }}
          >
            App localization
          </Typography>
        </Box>

        {/* Right Column */}
        <Box>
          {/* Language Dropdown */}
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#ffffff',
                mb: 1.5,
              }}
            >
              Language
            </Typography>
            <Select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              fullWidth
              sx={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '8px',
                color: '#ffffff',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255,255,255,0.1)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255,255,255,0.2)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#2196F3',
                },
                '& .MuiSelect-select': {
                  fontSize: '14px',
                  fontWeight: 500,
                  py: 1.5,
                },
                '& .MuiSvgIcon-root': {
                  color: 'rgba(255,255,255,0.5)',
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: '#2a2a2a',
                    borderRadius: '8px',
                    mt: 0.5,
                    '& .MuiMenuItem-root': {
                      color: '#ffffff',
                      fontSize: '14px',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.08)',
                      },
                      '&.Mui-selected': {
                        backgroundColor: 'rgba(33, 150, 243, 0.2)',
                        '&:hover': {
                          backgroundColor: 'rgba(33, 150, 243, 0.3)',
                        },
                      },
                    },
                  },
                },
              }}
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Spanish">Spanish</MenuItem>
              <MenuItem value="French">French</MenuItem>
              <MenuItem value="German">German</MenuItem>
              <MenuItem value="Italian">Italian</MenuItem>
              <MenuItem value="Portuguese">Portuguese</MenuItem>
              <MenuItem value="Japanese">Japanese</MenuItem>
              <MenuItem value="Chinese">Chinese</MenuItem>
            </Select>
          </Box>

          {/* Spellcheck Toggle */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Switch
              checked={spellcheckEnabled}
              onChange={(e) => setSpellcheckEnabled(e.target.checked)}
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: '#2196F3',
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                  backgroundColor: '#2196F3',
                },
              }}
            />
            <Typography
              sx={{
                fontSize: '15px',
                color: spellcheckEnabled ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.5)',
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
            >
              Enable Spellcheck
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Section 6: Data & Privacy */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '30% 70%',
          gap: 6,
          py: 5,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Left Column */}
        <Box>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#ffffff',
              mb: 1,
            }}
          >
            Data & Privacy
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.6,
            }}
          >
            Manage your notes
          </Typography>
        </Box>

        {/* Right Column */}
        <Box>
          <Button
            variant="outlined"
            onClick={handleExportNotes}
            sx={{
              color: '#ffffff',
              borderColor: 'rgba(255,255,255,0.2)',
              textTransform: 'none',
              fontSize: '14px',
              fontWeight: 500,
              px: 3,
              py: 1.25,
              borderRadius: '8px',
              '&:hover': {
                borderColor: 'rgba(255,255,255,0.3)',
                backgroundColor: 'rgba(255,255,255,0.05)',
              },
            }}
          >
            Export all notes (JSON)
          </Button>
        </Box>
      </Box>

      {/* Section 7: Productivity */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '30% 70%',
          gap: 6,
          py: 5,
        }}
      >
        {/* Left Column */}
        <Box>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#ffffff',
              mb: 1,
            }}
          >
            Productivity
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.6,
            }}
          >
            Speed up your workflow
          </Typography>
        </Box>

        {/* Right Column */}
        <Box>
          <Button
            variant="outlined"
            startIcon={<Keyboard sx={{ fontSize: 18 }} />}
            onClick={() => setShortcutsModalOpen(true)}
            sx={{
              color: '#ffffff',
              borderColor: 'rgba(255,255,255,0.2)',
              textTransform: 'none',
              fontSize: '14px',
              fontWeight: 500,
              px: 3,
              py: 1.25,
              borderRadius: '8px',
              '&:hover': {
                borderColor: 'rgba(255,255,255,0.3)',
                backgroundColor: 'rgba(255,255,255,0.05)',
              },
            }}
          >
            View Keyboard Shortcuts
          </Button>
        </Box>
      </Box>

      {/* Keyboard Shortcuts Modal */}
      <KeyboardShortcutsModal
        open={shortcutsModalOpen}
        onClose={() => setShortcutsModalOpen(false)}
      />
    </Box>
  );
}