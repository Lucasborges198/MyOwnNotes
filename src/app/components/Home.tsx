import { Box, IconButton, Button, Card, CardContent, Typography, Chip, TextField, InputAdornment } from '@mui/material';
import { Edit, Search } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import CreateNoteModal from './CreateNoteModal';
import ViewNoteModal from './ViewNoteModal';
import { useNotesStore } from '../stores/notesStore';
import type { Note } from '../stores/notesStore';

function formatDate(isoString: string): string {
  const date = new Date(isoString);
  const diff = Math.floor((Date.now() - date.getTime()) / 86400000);
  if (diff === 0) return 'Today';
  if (diff === 1) return 'Yesterday';
  return `${diff} days ago`;
}

const priorityColors = {
  casual: '#2196F3',
  important: '#FF9800',
  crucial: '#F44336',
};



const truncateText = (text: string, maxLength: number = 20) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export default function Home() {
  const { notes, fetchNotes } = useNotesStore();
  const [modalOpen, setModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  const filteredNotes = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.tag.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleCardClick = (note: Note) => {
    setSelectedNote(note);
    setViewModalOpen(true);
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Top Header - Title, Search, Create Button */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 4,
          mb: 4,
          pb: 3,
          borderBottom: '1px solid #2a2a2a',
        }}
      >
        {/* Page Title */}
        <Typography
          sx={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#ffffff',
            flexShrink: 0,
          }}
        >
          All Notes
        </Typography>

        {/* Search Bar */}
        <TextField
          placeholder="Search notes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          variant="outlined"
          sx={{
            flex: 1,
            maxWidth: '500px',
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#232323',
              color: '#ffffff',
              borderRadius: '12px',
              '& fieldset': {
                borderColor: '#333333',
              },
              '&:hover fieldset': {
                borderColor: '#444444',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#2196F3',
              },
            },
            '& .MuiInputBase-input': {
              fontSize: '15px',
              py: 1.5,
            },
            '& .MuiInputBase-input::placeholder': {
              color: '#666666',
              opacity: 1,
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: '#666666' }} />
              </InputAdornment>
            ),
          }}
        />

        {/* Create Note Button */}
        <Button
          variant="contained"
          startIcon={<Edit />}
          onClick={() => setModalOpen(true)}
          sx={{
            backgroundColor: '#2196F3',
            color: '#ffffff',
            px: 3,
            py: 1.5,
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: '15px',
            fontWeight: 600,
            flexShrink: 0,
            boxShadow: '0px 4px 12px rgba(33, 150, 243, 0.3)',
            '&:hover': {
              backgroundColor: '#1976D2',
              boxShadow: '0px 6px 16px rgba(33, 150, 243, 0.4)',
            },
          }}
        >
          Create Note
        </Button>
      </Box>

      {/* Uniform Grid of Note Cards */}
      <Box 
        sx={{ 
          flex: 1, 
          overflow: 'auto',
          px: 0.5,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 3,
            pb: 3,
          }}
        >
          {filteredNotes.map((note) => (
            <Card
              key={note.id}
              onClick={() => handleCardClick(note)}
              sx={{
                backgroundColor: '#1f1f1f',
                border: '1px solid #2a2a2a',
                borderRadius: '12px',
                height: '200px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  borderColor: '#3a3a3a',
                  boxShadow: '0px 8px 24px rgba(0,0,0,0.3)',
                },
              }}
            >
              <CardContent 
                sx={{ 
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:last-child': {
                    pb: 3,
                  },
                }}
              >
                {/* Title */}
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#ffffff',
                    mb: 2,
                    lineHeight: 1.4,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {note.title}
                </Typography>

                {/* Content Excerpt - Clamped to 3 lines */}
                <Typography
                  sx={{
                    fontSize: '14px',
                    color: '#a0a0a0',
                    lineHeight: 1.6,
                    mb: 3,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    flex: 1,
                  }}
                >
                  {note.content}
                </Typography>

                {/* Footer - Pushed to Bottom */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 2,
                    mt: 'auto',
                  }}
                >
                  {/* Tag Pill */}
                  <Chip
                    label={note.tag}
                    size="small"
                    sx={{
                      backgroundColor: priorityColors[note.priority],
                      color: '#ffffff',
                      fontSize: '12px',
                      fontWeight: 600,
                      height: '24px',
                      borderRadius: '12px',
                      '& .MuiChip-label': {
                        px: 1.5,
                      },
                    }}
                  />

                  {/* Timestamp */}
                  <Typography
                    sx={{
                      fontSize: '12px',
                      color: '#666666',
                      flexShrink: 0,
                    }}
                  >
                    {formatDate(note.created_at)}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Create Note Modal */}
      <CreateNoteModal open={modalOpen} onClose={() => setModalOpen(false)} />
      
      {/* View Note Modal */}
      <ViewNoteModal 
        open={viewModalOpen} 
        onClose={() => setViewModalOpen(false)} 
        note={selectedNote}
      />
    </Box>
  );
}