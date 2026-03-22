import { Box, Typography, Modal, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

interface KeyboardShortcutsModalProps {
  open: boolean;
  onClose: () => void;
}

interface Shortcut {
  action: string;
  keys: string[];
}

interface ShortcutCategory {
  category: string;
  shortcuts: Shortcut[];
}

const Keycap = ({ keyName }: { keyName: string }) => (
  <Box
    sx={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '32px',
      height: '28px',
      px: 1.5,
      backgroundColor: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.15)',
      borderRadius: '6px',
      fontSize: '13px',
      fontWeight: 600,
      color: '#ffffff',
      letterSpacing: '0.3px',
      textTransform: 'uppercase',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    }}
  >
    {keyName}
  </Box>
);

export default function KeyboardShortcutsModal({ open, onClose }: KeyboardShortcutsModalProps) {
  const shortcutCategories: ShortcutCategory[] = [
    {
      category: 'Global Actions',
      shortcuts: [
        { action: 'Create new note', keys: ['Ctrl', 'N'] },
        { action: 'Search notes', keys: ['Ctrl', 'K'] },
        { action: 'Open settings', keys: ['Ctrl', ','] },
        { action: 'Toggle sidebar', keys: ['Ctrl', 'B'] },
        { action: 'Open notifications', keys: ['Ctrl', 'Shift', 'N'] },
      ],
    },
    {
      category: 'Editor',
      shortcuts: [
        { action: 'Save note', keys: ['Ctrl', 'S'] },
        { action: 'Bold text', keys: ['Ctrl', 'B'] },
        { action: 'Italic text', keys: ['Ctrl', 'I'] },
        { action: 'Underline text', keys: ['Ctrl', 'U'] },
        { action: 'Insert link', keys: ['Ctrl', 'K'] },
        { action: 'Undo', keys: ['Ctrl', 'Z'] },
        { action: 'Redo', keys: ['Ctrl', 'Y'] },
      ],
    },
    {
      category: 'Navigation',
      shortcuts: [
        { action: 'Go to home', keys: ['G', 'H'] },
        { action: 'Go to collections', keys: ['G', 'C'] },
        { action: 'Go to settings', keys: ['G', 'S'] },
        { action: 'Previous note', keys: ['Alt', '←'] },
        { action: 'Next note', keys: ['Alt', '→'] },
      ],
    },
    {
      category: 'Organization',
      shortcuts: [
        { action: 'Add tag', keys: ['Ctrl', 'T'] },
        { action: 'Set priority: Casual', keys: ['Ctrl', '1'] },
        { action: 'Set priority: Important', keys: ['Ctrl', '2'] },
        { action: 'Set priority: Crucial', keys: ['Ctrl', '3'] },
        { action: 'Archive note', keys: ['E'] },
        { action: 'Delete note', keys: ['Del'] },
      ],
    },
  ];

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '90%',
          maxWidth: '800px',
          maxHeight: '85vh',
          backgroundColor: '#1E1E1E',
          borderRadius: '16px',
          boxShadow: '0 24px 48px rgba(0,0,0,0.6)',
          outline: 'none',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 5,
            py: 4,
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <Typography
            sx={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.5px',
            }}
          >
            Keyboard Shortcuts
          </Typography>
          <IconButton
            onClick={onClose}
            sx={{
              color: 'rgba(255,255,255,0.5)',
              '&:hover': {
                color: 'rgba(255,255,255,0.8)',
                backgroundColor: 'rgba(255,255,255,0.05)',
              },
            }}
          >
            <Close sx={{ fontSize: 24 }} />
          </IconButton>
        </Box>

        {/* Scrollable Content */}
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            px: 5,
            py: 4,
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(255,255,255,0.15)',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.25)',
              },
            },
          }}
        >
          {shortcutCategories.map((category, categoryIndex) => (
            <Box key={categoryIndex} sx={{ mb: categoryIndex < shortcutCategories.length - 1 ? 5 : 0 }}>
              {/* Category Title */}
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  mb: 3,
                }}
              >
                {category.category}
              </Typography>

              {/* Shortcuts List */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {category.shortcuts.map((shortcut, shortcutIndex) => (
                  <Box
                    key={shortcutIndex}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      py: 1.5,
                      px: 2,
                      borderRadius: '8px',
                      transition: 'background-color 0.2s',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.03)',
                      },
                    }}
                  >
                    {/* Action Description */}
                    <Typography
                      sx={{
                        fontSize: '15px',
                        color: 'rgba(255,255,255,0.7)',
                        fontWeight: 400,
                      }}
                    >
                      {shortcut.action}
                    </Typography>

                    {/* Keycaps */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      {shortcut.keys.map((key, keyIndex) => (
                        <Box key={keyIndex} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Keycap keyName={key} />
                          {keyIndex < shortcut.keys.length - 1 && (
                            <Typography
                              sx={{
                                fontSize: '14px',
                                color: 'rgba(255,255,255,0.4)',
                                fontWeight: 500,
                              }}
                            >
                              +
                            </Typography>
                          )}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Footer Padding */}
        <Box sx={{ py: 3 }} />
      </Box>
    </Modal>
  );
}
