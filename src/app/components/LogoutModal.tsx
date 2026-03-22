import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Button,
} from '@mui/material';
import { ExitToApp } from '@mui/icons-material';

interface LogoutModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function LogoutModal({ open, onClose, onConfirm }: LogoutModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      PaperProps={{
        sx: {
          width: '460px',
          backgroundColor: '#1f1f1f',
          borderRadius: '16px',
          boxShadow: '0px 24px 64px rgba(0,0,0,0.5)',
        },
      }}
      sx={{
        '& .MuiBackdrop-root': {
          backgroundColor: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(8px)',
        },
      }}
    >
      <DialogContent sx={{ p: 0 }}>
        <Box sx={{ p: 5, textAlign: 'center' }}>
          {/* Icon - Minimalist exit icon */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 3,
            }}
          >
            <ExitToApp 
              sx={{ 
                fontSize: 48, 
                color: 'rgba(255,255,255,0.4)',
              }} 
            />
          </Box>

          {/* Title */}
          <Typography
            sx={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#ffffff',
              mb: 2,
              letterSpacing: '-0.3px',
            }}
          >
            Log out of MyOwnNotes?
          </Typography>

          {/* Subtitle/Description */}
          <Typography
            sx={{
              fontSize: '15px',
              color: 'rgba(255,255,255,0.6)',
              mb: 5,
              lineHeight: 1.6,
              px: 2,
            }}
          >
            Are you sure you want to log out? You will need to enter your credentials to access your notes again.
          </Typography>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={onClose}
              sx={{
                color: 'rgba(255,255,255,0.8)',
                borderColor: 'rgba(255,255,255,0.2)',
                borderRadius: '10px',
                py: 1.5,
                textTransform: 'none',
                fontSize: '15px',
                fontWeight: 600,
                transition: 'all 0.2s',
                '&:hover': {
                  borderColor: 'rgba(255,255,255,0.3)',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: '#ffffff',
                },
              }}
            >
              Cancel
            </Button>
            <Button
              fullWidth
              variant="contained"
              onClick={onConfirm}
              sx={{
                backgroundColor: '#F44336',
                color: '#ffffff',
                borderRadius: '10px',
                py: 1.5,
                textTransform: 'none',
                fontSize: '15px',
                fontWeight: 600,
                boxShadow: '0px 4px 12px rgba(244, 67, 54, 0.3)',
                transition: 'all 0.2s',
                '&:hover': {
                  backgroundColor: '#D32F2F',
                  boxShadow: '0px 6px 16px rgba(244, 67, 54, 0.4)',
                },
              }}
            >
              Log out
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
