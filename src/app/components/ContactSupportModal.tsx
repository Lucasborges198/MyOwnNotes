import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  IconButton, 
  TextField, 
  MenuItem, 
  Button,
  Box,
  Typography,
} from '@mui/material';
import { Close, AttachFile } from '@mui/icons-material';
import { useState } from 'react';

interface ContactSupportModalProps {
  open: boolean;
  onClose: () => void;
}

const categories = [
  { value: 'bug', label: 'Bug Report' },
  { value: 'billing', label: 'Billing & Payment' },
  { value: 'general', label: 'General Inquiry' },
  { value: 'feature', label: 'Feature Request' },
  { value: 'technical', label: 'Technical Support' },
];

export default function ContactSupportModal({ open, onClose }: ContactSupportModalProps) {
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log({ subject, category, description });
    
    // Reset form and close modal
    setSubject('');
    setCategory('');
    setDescription('');
    onClose();
  };

  const handleCancel = () => {
    // Reset form and close modal
    setSubject('');
    setCategory('');
    setDescription('');
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: '#1e1e1e',
          borderRadius: '16px',
          boxShadow: '0px 24px 48px rgba(0, 0, 0, 0.5)',
          backgroundImage: 'none',
        },
      }}
      BackdropProps={{
        sx: {
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
      }}
    >
      {/* Header */}
      <DialogTitle
        sx={{
          px: 4,
          pt: 3.5,
          pb: 1.5,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: '24px',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.3px',
                mb: 0.5,
              }}
            >
              Contact Support
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.5)',
                fontWeight: 400,
              }}
            >
              We typically respond within 24 hours.
            </Typography>
          </Box>
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
            <Close sx={{ fontSize: 22 }} />
          </IconButton>
        </Box>
      </DialogTitle>

      {/* Content */}
      <DialogContent
        sx={{
          px: 4,
          py: 2,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Subject Input */}
          <Box>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.9)',
                mb: 1,
              }}
            >
              Subject
            </Typography>
            <TextField
              fullWidth
              placeholder="Brief description of your issue"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  color: '#ffffff',
                  borderRadius: '10px',
                  fontSize: '15px',
                  '& fieldset': {
                    borderColor: '#555555',
                  },
                  '&:hover fieldset': {
                    borderColor: '#777777',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#2196F3',
                    borderWidth: '2px',
                  },
                },
                '& .MuiInputBase-input': {
                  py: 1.75,
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'rgba(255,255,255,0.35)',
                  opacity: 1,
                },
              }}
            />
          </Box>

          {/* Category Dropdown */}
          <Box>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.9)',
                mb: 1,
              }}
            >
              Category
            </Typography>
            <TextField
              fullWidth
              select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Select a category"
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  color: '#ffffff',
                  borderRadius: '10px',
                  fontSize: '15px',
                  '& fieldset': {
                    borderColor: '#555555',
                  },
                  '&:hover fieldset': {
                    borderColor: '#777777',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#2196F3',
                    borderWidth: '2px',
                  },
                },
                '& .MuiSelect-select': {
                  py: 1.75,
                },
                '& .MuiSelect-icon': {
                  color: 'rgba(255,255,255,0.5)',
                },
              }}
              SelectProps={{
                displayEmpty: true,
                renderValue: (value) => {
                  if (!value) {
                    return (
                      <Typography sx={{ color: 'rgba(255,255,255,0.35)' }}>
                        Select a category
                      </Typography>
                    );
                  }
                  return categories.find((cat) => cat.value === value)?.label;
                },
                MenuProps: {
                  PaperProps: {
                    sx: {
                      backgroundColor: '#2a2a2a',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      mt: 1,
                      '& .MuiMenuItem-root': {
                        color: '#ffffff',
                        fontSize: '15px',
                        py: 1.5,
                        px: 2,
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.08)',
                        },
                        '&.Mui-selected': {
                          backgroundColor: 'rgba(33, 150, 243, 0.15)',
                          '&:hover': {
                            backgroundColor: 'rgba(33, 150, 243, 0.2)',
                          },
                        },
                      },
                    },
                  },
                },
              }}
            >
              {categories.map((cat) => (
                <MenuItem key={cat.value} value={cat.value}>
                  {cat.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          {/* Description Textarea */}
          <Box>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.9)',
                mb: 1,
              }}
            >
              Description
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={6}
              placeholder="Describe your issue in detail..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  color: '#ffffff',
                  borderRadius: '10px',
                  fontSize: '15px',
                  '& fieldset': {
                    borderColor: '#555555',
                  },
                  '&:hover fieldset': {
                    borderColor: '#777777',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#2196F3',
                    borderWidth: '2px',
                  },
                },
                '& .MuiInputBase-input': {
                  py: 1.75,
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'rgba(255,255,255,0.35)',
                  opacity: 1,
                },
              }}
            />
          </Box>

          {/* Attach Screenshot */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer',
              width: 'fit-content',
              '&:hover': {
                '& .attach-text': {
                  color: 'rgba(255,255,255,0.8)',
                },
                '& .attach-icon': {
                  color: 'rgba(255,255,255,0.7)',
                },
              },
            }}
          >
            <AttachFile 
              className="attach-icon"
              sx={{ 
                fontSize: 18, 
                color: 'rgba(255,255,255,0.5)',
                transition: 'color 0.2s',
              }} 
            />
            <Typography
              className="attach-text"
              sx={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.6)',
                transition: 'color 0.2s',
              }}
            >
              Attach screenshot (optional)
            </Typography>
          </Box>
        </Box>
      </DialogContent>

      {/* Footer */}
      <DialogActions
        sx={{
          px: 4,
          pb: 3.5,
          pt: 2,
          gap: 2,
        }}
      >
        <Button
          onClick={handleCancel}
          sx={{
            color: 'rgba(255,255,255,0.6)',
            textTransform: 'none',
            fontSize: '15px',
            fontWeight: 600,
            px: 2,
            '&:hover': {
              color: 'rgba(255,255,255,0.9)',
              backgroundColor: 'transparent',
            },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          disabled={!subject || !category || !description}
          sx={{
            backgroundColor: '#2196F3',
            color: '#ffffff',
            px: 3.5,
            py: 1.25,
            textTransform: 'none',
            fontSize: '15px',
            fontWeight: 600,
            borderRadius: '10px',
            boxShadow: '0px 4px 12px rgba(33, 150, 243, 0.3)',
            '&:hover': {
              backgroundColor: '#1976D2',
              boxShadow: '0px 6px 16px rgba(33, 150, 243, 0.4)',
            },
            '&.Mui-disabled': {
              backgroundColor: 'rgba(33, 150, 243, 0.3)',
              color: 'rgba(255,255,255,0.4)',
              boxShadow: 'none',
            },
          }}
        >
          Send Message
        </Button>
      </DialogActions>
    </Dialog>
  );
}