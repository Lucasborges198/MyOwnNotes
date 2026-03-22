import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  TextField,
  Button,
  Chip,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { useState } from 'react';
import { useNotesStore } from '../stores/notesStore';

interface CreateNoteModalProps {
  open: boolean;
  onClose: () => void;
}

const priorityColors = {
  casual: '#2196F3',
  important: '#FF9800',
  crucial: '#F44336',
};

export default function CreateNoteModal({ open, onClose }: CreateNoteModalProps) {
  const { addNote } = useNotesStore();
  const [title, setTitle] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>(['#work']);
  const [priority, setPriority] = useState('important');
  const [content, setContent] = useState('');

  const handleSave = async () => {
    if (!title.trim() || !content.trim()) return;
    await addNote({
      title: title.trim(),
      content: content.trim(),
      tag: tags.join(', '),
      priority: priority as 'casual' | 'important' | 'crucial',
    });
    setTitle('');
    setTags(['#work']);
    setContent('');
    setPriority('important');
    onClose();
  };

  const handleTagKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      const newTag = tagInput.startsWith('#') ? tagInput : `#${tagInput}`;
      setTags([...tags, newTag]);
      setTagInput('');
      e.preventDefault();
    }
  };

  const handleDeleteTag = (tagToDelete: string) => {
    setTags(tags.filter(tag => tag !== tagToDelete));
  };

  const handlePriorityChange = (event: React.MouseEvent<HTMLElement>, newPriority: string | null) => {
    if (newPriority !== null) {
      setPriority(newPriority);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      PaperProps={{
        sx: {
          width: '600px',
          backgroundColor: '#1f1f1f',
          borderRadius: '16px',
          p: 0,
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
        <Box sx={{ p: 5 }}>
          {/* Header */}
          <Typography
            sx={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#ffffff',
              mb: 4,
            }}
          >
            Create New Note
          </Typography>

          {/* Title Input */}
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.7)',
                mb: 1.5,
              }}
            >
              Title
            </Typography>
            <TextField
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              variant="outlined"
              placeholder="Enter note title"
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  color: '#ffffff',
                  borderRadius: '10px',
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
                  fontSize: '15px',
                  py: 1.75,
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'rgba(255,255,255,0.3)',
                  opacity: 1,
                },
              }}
            />
          </Box>

          {/* Tags Input with Visual Chips */}
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.7)',
                mb: 1.5,
              }}
            >
              Tags
            </Typography>
            <Box
              sx={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.15)',
                p: 1.5,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
                alignItems: 'center',
                minHeight: '56px',
                '&:focus-within': {
                  borderColor: '#2196F3',
                  borderWidth: '2px',
                  padding: 'calc(1.5 * 8px - 1px)',
                },
              }}
            >
              {/* Display existing tags as chips */}
              {tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  onDelete={() => handleDeleteTag(tag)}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(33, 150, 243, 0.2)',
                    color: '#2196F3',
                    fontSize: '13px',
                    fontWeight: 600,
                    height: '28px',
                    borderRadius: '8px',
                    '& .MuiChip-deleteIcon': {
                      color: 'rgba(33, 150, 243, 0.7)',
                      fontSize: '18px',
                      '&:hover': {
                        color: '#2196F3',
                      },
                    },
                  }}
                />
              ))}
              
              {/* Input for new tags */}
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagKeyDown}
                placeholder={tags.length === 0 ? "Type and press Enter..." : ""}
                style={{
                  flex: 1,
                  minWidth: '120px',
                  border: 'none',
                  outline: 'none',
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  fontSize: '15px',
                  padding: '4px',
                }}
              />
            </Box>
          </Box>

          {/* Priority Selector - Pill-shaped buttons */}
          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.7)',
                mb: 1.5,
              }}
            >
              Priority
            </Typography>
            <ToggleButtonGroup
              value={priority}
              exclusive
              onChange={handlePriorityChange}
              sx={{
                display: 'flex',
                gap: 1.5,
                '& .MuiToggleButtonGroup-grouped': {
                  border: 'none',
                  borderRadius: '10px !important',
                  flex: 1,
                },
              }}
            >
              <ToggleButton
                value="casual"
                sx={{
                  px: 3,
                  py: 1.5,
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '2px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.6)',
                  textTransform: 'none',
                  fontSize: '15px',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(33, 150, 243, 0.15)',
                    border: `2px solid ${priorityColors.casual}`,
                    color: priorityColors.casual,
                    '&:hover': {
                      backgroundColor: 'rgba(33, 150, 243, 0.2)',
                    },
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.08)',
                  },
                }}
              >
                Casual
              </ToggleButton>
              <ToggleButton
                value="important"
                sx={{
                  px: 3,
                  py: 1.5,
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '2px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.6)',
                  textTransform: 'none',
                  fontSize: '15px',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(255, 152, 0, 0.15)',
                    border: `2px solid ${priorityColors.important}`,
                    color: priorityColors.important,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 152, 0, 0.2)',
                    },
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.08)',
                  },
                }}
              >
                Important
              </ToggleButton>
              <ToggleButton
                value="crucial"
                sx={{
                  px: 3,
                  py: 1.5,
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '2px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.6)',
                  textTransform: 'none',
                  fontSize: '15px',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(244, 67, 54, 0.15)',
                    border: `2px solid ${priorityColors.crucial}`,
                    color: priorityColors.crucial,
                    '&:hover': {
                      backgroundColor: 'rgba(244, 67, 54, 0.2)',
                    },
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.08)',
                  },
                }}
              >
                Crucial
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>

          {/* Content Text Area - Large and spacious */}
          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.7)',
                mb: 1.5,
              }}
            >
              Content
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={10}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              variant="outlined"
              placeholder="Write your note here..."
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  color: '#ffffff',
                  borderRadius: '10px',
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
                  fontSize: '15px',
                  lineHeight: 1.7,
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'rgba(255,255,255,0.3)',
                  opacity: 1,
                },
              }}
            />
          </Box>

          {/* Footer - Right-aligned actions */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, pt: 2 }}>
            <Button
              variant="text"
              onClick={onClose}
              sx={{
                color: 'rgba(255,255,255,0.6)',
                px: 3,
                py: 1.25,
                textTransform: 'none',
                fontSize: '15px',
                fontWeight: 500,
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: 'rgba(255,255,255,0.8)',
                },
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleSave}
              sx={{
                backgroundColor: '#2196F3',
                color: '#ffffff',
                px: 4,
                py: 1.25,
                textTransform: 'none',
                fontSize: '15px',
                fontWeight: 600,
                borderRadius: '8px',
                boxShadow: '0px 4px 12px rgba(33, 150, 243, 0.3)',
                '&:hover': {
                  backgroundColor: '#1976D2',
                  boxShadow: '0px 6px 16px rgba(33, 150, 243, 0.4)',
                },
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
