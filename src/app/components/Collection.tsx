import { Box, Typography, Card, CardContent, Chip, IconButton } from '@mui/material';
import { Add, NotificationImportant } from '@mui/icons-material';
import { useState, useEffect } from 'react';
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



interface CategorySectionProps {
  title: string;
  color: string;
  notes: Note[];
  showEmpty?: boolean;
  onCardClick: (note: Note) => void;
  onAddClick?: () => void;
}

function CategorySection({ title, color, notes, showEmpty, onCardClick, onAddClick }: CategorySectionProps) {
  return (
    <Box sx={{ mb: 5 }}>
      {/* Section Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 3,
        }}
      >
        {/* Title + Counter */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: 600,
              color: '#ffffff',
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            ({notes.length})
          </Typography>
        </Box>

        {/* Add Button */}
        <IconButton
          onClick={onAddClick}
          sx={{
            color: 'rgba(255,255,255,0.5)',
            padding: '6px',
            '&:hover': {
              color: color,
              backgroundColor: `${color}20`,
            },
          }}
        >
          <Add sx={{ fontSize: '20px' }} />
        </IconButton>
      </Box>

      {/* Cards Grid */}
      {notes.length > 0 ? (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 3,
          }}
        >
          {notes.map((note) => (
            <Card
              key={note.id}
              onClick={() => onCardClick(note)}
              sx={{
                backgroundColor: '#1f1f1f',
                border: '1px solid #2a2a2a',
                borderLeft: `2px solid ${color}`,
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
                  borderLeftColor: color,
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
                      backgroundColor: color,
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
      ) : showEmpty ? (
        // Premium Empty State Card
        <Card
          sx={{
            backgroundColor: 'transparent',
            border: '2px dashed rgba(255,255,255,0.15)',
            borderRadius: '12px',
            height: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            '&:hover': {
              borderColor: 'rgba(255,255,255,0.25)',
              backgroundColor: 'rgba(255,255,255,0.02)',
            },
          }}
          onClick={onAddClick}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {/* Icon */}
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '12px',
                backgroundColor: 'rgba(244, 67, 54, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <NotificationImportant sx={{ color: color, fontSize: '24px' }} />
            </Box>

            {/* Text CTA */}
            <Typography
              sx={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.5)',
                fontWeight: 500,
              }}
            >
              Create a crucial note
            </Typography>
          </Box>
        </Card>
      ) : null}
    </Box>
  );
}

export default function Collection() {
  const { notes, fetchNotes } = useNotesStore();
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  const handleCardClick = (note: Note) => {
    setSelectedNote(note);
    setViewModalOpen(true);
  };

  const handleAddClick = () => {
    console.log('Add note clicked');
    // TODO: Open create note modal
  };

  return (
    <Box>
      {/* Page Title */}
      <Typography
        sx={{
          fontSize: '32px',
          fontWeight: 700,
          color: '#ffffff',
          mb: 5,
        }}
      >
        Collection
      </Typography>

      {/* Category Sections */}
      <Box sx={{ maxWidth: '100%' }}>
        <CategorySection 
          title="Casual" 
          color={priorityColors.casual} 
          notes={notes.filter(n => n.priority === 'casual')} 
          onCardClick={handleCardClick}
          onAddClick={handleAddClick}
        />
        <CategorySection 
          title="Important" 
          color={priorityColors.important} 
          notes={notes.filter(n => n.priority === 'important')} 
          onCardClick={handleCardClick}
          onAddClick={handleAddClick}
        />
        <CategorySection 
          title="Crucial" 
          color={priorityColors.crucial} 
          notes={notes.filter(n => n.priority === 'crucial')} 
          showEmpty 
          onCardClick={handleCardClick}
          onAddClick={handleAddClick}
        />
      </Box>

      {/* View Note Modal */}
      <ViewNoteModal 
        open={viewModalOpen} 
        onClose={() => setViewModalOpen(false)} 
        note={selectedNote}
      />
    </Box>
  );
}
