import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Chip,
  IconButton,
} from '@mui/material';
import { Close } from '@mui/icons-material';

interface Note {
  id: number;
  title: string;
  content: string;
  tag: string;
  priority: 'casual' | 'important' | 'crucial';
}

interface ViewNoteModalProps {
  open: boolean;
  onClose: () => void;
  note: Note | null;
}

const priorityColors = {
  casual: '#2196F3',
  important: '#FF9800',
  crucial: '#F44336',
};

const priorityLabels = {
  casual: 'Casual',
  important: 'Important',
  crucial: 'Crucial',
};

export default function ViewNoteModal({ open, onClose, note }: ViewNoteModalProps) {
  if (!note) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      PaperProps={{
        sx: {
          width: '500px',
          backgroundColor: '#232323',
          borderRadius: '12px',
          boxShadow: '0px 8px 32px rgba(0,0,0,0.4)',
        },
      }}
      sx={{
        '& .MuiBackdrop-root': {
          backgroundColor: 'rgba(0,0,0,0.5)',
        },
      }}
    >
      <DialogContent sx={{ p: 0 }}>
        <Box sx={{ position: 'relative', p: 3 }}>
          {/* Close Button */}
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              color: '#888888',
              '&:hover': {
                color: '#ffffff',
                backgroundColor: 'rgba(255,255,255,0.05)',
              },
            }}
          >
            <Close />
          </IconButton>

          {/* Title */}
          <Typography
            sx={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#ffffff',
              mb: 2,
              pr: 4,
            }}
          >
            {note.title}
          </Typography>

          {/* Priority Badge */}
          <Box sx={{ mb: 3 }}>
            <Chip
              label={priorityLabels[note.priority]}
              sx={{
                backgroundColor: priorityColors[note.priority],
                color: '#ffffff',
                fontSize: '13px',
                fontWeight: 600,
                height: '24px',
              }}
            />
          </Box>

          {/* Content */}
          <Typography
            sx={{
              fontSize: '15px',
              color: '#cccccc',
              lineHeight: 1.6,
              mb: 3,
              whiteSpace: 'pre-wrap',
            }}
          >
            {note.content}
          </Typography>

          {/* Tag */}
          <Box sx={{ pt: 2, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <Chip
              label={note.tag}
              size="small"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: '#e0e0e0',
                fontSize: '13px',
              }}
            />
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}