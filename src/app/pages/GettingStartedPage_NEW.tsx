import { Box, Typography, Breadcrumbs, Button, Card, CardContent, Chip } from '@mui/material';
import { ChevronRight, PlayCircle, Bolt, Keyboard, OpenInNew } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const articles = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'creating-first-note', title: 'Creating your first note' },
  { id: 'tags-categories', title: 'Using tags & categories' },
  { id: 'markdown-basics', title: 'Markdown basics' },
];

export default function GettingStartedPage() {
  const [activeArticle, setActiveArticle] = useState('introduction');
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
          Getting Started
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
              onClick={() => navigate('/help')}
              sx={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                '&:hover': {
                  color: 'rgba(255,255,255,0.7)',
                },
              }}
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
              {activeArticle === 'introduction' 
                ? 'Introduction' 
                : activeArticle === 'tags-categories'
                ? 'Organization'
                : activeArticle === 'markdown-basics'
                ? 'Formatting'
                : 'Getting Started'}
            </Typography>
          </Breadcrumbs>

          {/* Conditional Content based on activeArticle */}
          {activeArticle === 'introduction' ? (
            <>
              {/* Introduction Article */}
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
                Welcome to MyOwnNotes
              </Typography>

              {/* Welcoming Paragraph */}
              <Typography
                sx={{
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.8,
                  mb: 5,
                }}
              >
                MyOwnNotes is your personal productivity companion, designed to help you capture,
                organize, and access your thoughts with ease. Whether you're managing daily tasks,
                planning projects, or storing important information, MyOwnNotes provides a seamless
                experience across all your devices. Get started with the quick links below to boost
                your productivity.
              </Typography>

              {/* Quick Link Cards */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 3,
                  mb: 5,
                }}
              >
                {/* Quick Start Card */}
                <Card
                  onClick={() => setActiveArticle('creating-first-note')}
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      borderColor: 'rgba(33, 150, 243, 0.4)',
                      transform: 'translateY(-4px)',
                      boxShadow: '0px 8px 24px rgba(0,0,0,0.3)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '10px',
                        backgroundColor: 'rgba(33, 150, 243, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2.5,
                      }}
                    >
                      <Bolt sx={{ fontSize: 24, color: '#2196F3' }} />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#ffffff',
                        mb: 1,
                        letterSpacing: '-0.2px',
                      }}
                    >
                      Quick Start
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        color: 'rgba(255,255,255,0.6)',
                        lineHeight: 1.6,
                      }}
                    >
                      Learn how to create your first note and start organizing your thoughts in minutes.
                    </Typography>
                  </CardContent>
                </Card>

                {/* Keyboard Shortcuts Card */}
                <Card
                  onClick={() => navigate('/settings')}
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    position: 'relative',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      borderColor: 'rgba(33, 150, 243, 0.4)',
                      transform: 'translateY(-4px)',
                      boxShadow: '0px 8px 24px rgba(0,0,0,0.3)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '10px',
                        backgroundColor: 'rgba(33, 150, 243, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2.5,
                      }}
                    >
                      <Keyboard sx={{ fontSize: 24, color: '#2196F3' }} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Typography
                        sx={{
                          fontSize: '18px',
                          fontWeight: 700,
                          color: '#ffffff',
                          letterSpacing: '-0.2px',
                        }}
                      >
                        Keyboard Shortcuts
                      </Typography>
                      <OpenInNew sx={{ fontSize: 16, color: 'rgba(255,255,255,0.4)' }} />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        color: 'rgba(255,255,255,0.6)',
                        lineHeight: 1.6,
                      }}
                    >
                      View all shortcuts in settings to navigate and work faster across the app.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </>
          ) : activeArticle === 'creating-first-note' ? (
            <>
              {/* Creating First Note Article */}
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
                Creating your first note
              </Typography>

              {/* Introduction */}
              <Typography
                sx={{
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.8,
                  mb: 5,
                }}
              >
                Welcome to MyOwnNotes! Creating your first note is quick and easy. Follow these simple steps to get started and begin organizing your thoughts in no time.
              </Typography>

              {/* Step-by-step Guide */}
              <Box sx={{ mb: 5 }}>
                {/* Step 1 */}
                <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
                  <Typography
                    sx={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#2196F3',
                      minWidth: '24px',
                    }}
                  >
                    1.
                  </Typography>
                  <Box>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#ffffff',
                        mr: 1,
                      }}
                    >
                      Click the "Create Note" button
                    </Typography>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '16px',
                        color: 'rgba(255,255,255,0.7)',
                        lineHeight: 1.8,
                      }}
                    >
                      — Look for the blue "+ New Note" button in the top-right corner of your dashboard. Click it to open a blank note editor.
                    </Typography>
                  </Box>
                </Box>

                {/* Step 2 */}
                <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
                  <Typography
                    sx={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#2196F3',
                      minWidth: '24px',
                    }}
                  >
                    2.
                  </Typography>
                  <Box>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#ffffff',
                        mr: 1,
                      }}
                    >
                      Add a title
                    </Typography>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '16px',
                        color: 'rgba(255,255,255,0.7)',
                        lineHeight: 1.8,
                      }}
                    >
                      — Give your note a descriptive title. This helps you find it later when searching or browsing your collection.
                    </Typography>
                  </Box>
                </Box>

                {/* Step 3 */}
                <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
                  <Typography
                    sx={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#2196F3',
                      minWidth: '24px',
                    }}
                  >
                    3.
                  </Typography>
                  <Box>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#ffffff',
                        mr: 1,
                      }}
                    >
                      Write your content
                    </Typography>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '16px',
                        color: 'rgba(255,255,255,0.7)',
                        lineHeight: 1.8,
                      }}
                    >
                      — Start typing in the main editor area. Use the toolbar to format text, add lists, insert links, or apply Markdown syntax if enabled.
                    </Typography>
                  </Box>
                </Box>

                {/* Step 4 */}
                <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
                  <Typography
                    sx={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#2196F3',
                      minWidth: '24px',
                    }}
                  >
                    4.
                  </Typography>
                  <Box>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#ffffff',
                        mr: 1,
                      }}
                    >
                      Choose a category
                    </Typography>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '16px',
                        color: 'rgba(255,255,255,0.7)',
                        lineHeight: 1.8,
                      }}
                    >
                      — Select a priority level (Casual, Important, or Crucial) to color-code your note. This visual system helps you quickly identify what matters most.
                    </Typography>
                  </Box>
                </Box>

                {/* Step 5 */}
                <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
                  <Typography
                    sx={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#2196F3',
                      minWidth: '24px',
                    }}
                  >
                    5.
                  </Typography>
                  <Box>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#ffffff',
                        mr: 1,
                      }}
                    >
                      Save and close
                    </Typography>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '16px',
                        color: 'rgba(255,255,255,0.7)',
                        lineHeight: 1.8,
                      }}
                    >
                      — Your note is automatically saved to the cloud. Simply close the editor to return to your dashboard where your new note will appear in the grid.
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Video Player Placeholder */}
              <Box
                sx={{
                  width: '100%',
                  height: '500px',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 5,
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderColor: 'rgba(255,255,255,0.12)',
                    '& .play-icon': {
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                {/* Dark tinted background */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      'linear-gradient(135deg, rgba(33, 150, 243, 0.08) 0%, rgba(156, 39, 176, 0.08) 100%)',
                  }}
                />

                {/* Play button */}
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2.5,
                  }}
                >
                  <PlayCircle
                    className="play-icon"
                    sx={{
                      fontSize: 96,
                      color: '#2196F3',
                      filter: 'drop-shadow(0px 8px 24px rgba(33, 150, 243, 0.5))',
                      transition: 'transform 0.3s',
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: '#ffffff',
                      letterSpacing: '-0.2px',
                    }}
                  >
                    Watch Tutorial Video
                  </Typography>
                </Box>
              </Box>

              {/* Next Article Button */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  pt: 4,
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Button
                  onClick={() => setActiveArticle('tags-categories')}
                  sx={{
                    color: '#2196F3',
                    textTransform: 'none',
                    fontSize: '15px',
                    fontWeight: 600,
                    px: 3,
                    py: 1.5,
                    borderRadius: '10px',
                    '&:hover': {
                      backgroundColor: 'rgba(33, 150, 243, 0.08)',
                    },
                  }}
                >
                  Next: Using tags & categories →
                </Button>
              </Box>
            </>
          ) : activeArticle === 'tags-categories' ? (
            <>
              {/* Tags & Categories Article - Content from original file */}
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
                Organize with Tags & Categories
              </Typography>

              {/* Content abbreviated for brevity - keeping the same structure */}
              <Typography
                sx={{
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                MyOwnNotes provides powerful organization tools to help you categorize and find your notes quickly. Use tags to group related notes and priority categories to highlight what matters most.
              </Typography>

              <Typography
                sx={{
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.8,
                  mb: 6,
                }}
              >
                Tags act as flexible labels that can be applied to any note, while priority categories help you visually distinguish between casual notes, important information, and crucial tasks at a glance.
              </Typography>

              {/* UI Showcase Section */}
              <Box
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  p: 5,
                  mb: 6,
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
                  UI Showcase
                </Typography>

                {/* Tag Examples */}
                <Box sx={{ mb: 5 }}>
                  <Typography
                    sx={{
                      fontSize: '16px',
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.9)',
                      mb: 2.5,
                    }}
                  >
                    Tags
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.6)',
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    Use tags to categorize your notes by topic, project, or any custom grouping. Click a tag to view all related notes.
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                    {['#work', '#personal', '#ideas', '#meeting-notes', '#project-alpha'].map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        sx={{
                          backgroundColor: 'rgba(33, 150, 243, 0.15)',
                          color: '#64B5F6',
                          border: '1px solid rgba(33, 150, 243, 0.3)',
                          fontSize: '14px',
                          fontWeight: 500,
                          px: 1,
                          '&:hover': {
                            backgroundColor: 'rgba(33, 150, 243, 0.25)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                {/* Priority Categories */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: '16px',
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.9)',
                      mb: 2.5,
                    }}
                  >
                    Priority Categories
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.6)',
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    Each note can have a priority level indicated by a colored border. This visual system helps you quickly identify important information.
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {/* Casual Priority */}
                    <Box
                      sx={{
                        backgroundColor: 'rgba(255,255,255,0.02)',
                        borderLeft: '2px solid #2196F3',
                        borderRadius: '10px',
                        p: 3,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            backgroundColor: '#2196F3',
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: '15px',
                            fontWeight: 600,
                            color: '#ffffff',
                          }}
                        >
                          Casual (Blue)
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: '14px',
                          color: 'rgba(255,255,255,0.6)',
                          lineHeight: 1.6,
                        }}
                      >
                        For general notes, ideas, and everyday thoughts.
                      </Typography>
                    </Box>

                    {/* Important Priority */}
                    <Box
                      sx={{
                        backgroundColor: 'rgba(255,255,255,0.02)',
                        borderLeft: '2px solid #FF9800',
                        borderRadius: '10px',
                        p: 3,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            backgroundColor: '#FF9800',
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: '15px',
                            fontWeight: 600,
                            color: '#ffffff',
                          }}
                        >
                          Important (Orange)
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: '14px',
                          color: 'rgba(255,255,255,0.6)',
                          lineHeight: 1.6,
                        }}
                      >
                        For notes that need attention or are moderately time-sensitive.
                      </Typography>
                    </Box>

                    {/* Crucial Priority */}
                    <Box
                      sx={{
                        backgroundColor: 'rgba(255,255,255,0.02)',
                        borderLeft: '2px solid #F44336',
                        borderRadius: '10px',
                        p: 3,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            backgroundColor: '#F44336',
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: '15px',
                            fontWeight: 600,
                            color: '#ffffff',
                          }}
                        >
                          Crucial (Red)
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: '14px',
                          color: 'rgba(255,255,255,0.6)',
                          lineHeight: 1.6,
                        }}
                      >
                        For critical tasks, urgent deadlines, and high-priority information.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Next Article Button */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  pt: 4,
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Button
                  onClick={() => setActiveArticle('markdown-basics')}
                  sx={{
                    color: '#2196F3',
                    textTransform: 'none',
                    fontSize: '15px',
                    fontWeight: 600,
                    px: 3,
                    py: 1.5,
                    borderRadius: '10px',
                    '&:hover': {
                      backgroundColor: 'rgba(33, 150, 243, 0.08)',
                    },
                  }}
                >
                  Next: Markdown basics →
                </Button>
              </Box>
            </>
          ) : (
            <>
              {/* Markdown Basics Article - Simplified version */}
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
                Markdown Formatting Guide
              </Typography>

              <Typography
                sx={{
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Markdown is a lightweight markup language that allows you to format text using simple, readable syntax. MyOwnNotes supports standard Markdown formatting to help you create beautifully structured notes without taking your hands off the keyboard.
              </Typography>

              <Typography
                sx={{
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.8,
                  mb: 6,
                }}
              >
                Below is a quick reference guide showing the raw Markdown syntax on the left and how it renders in your notes on the right. Master these basics to take your note-taking to the next level.
              </Typography>

              {/* Markdown Cheat Sheet */}
              <Box
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  p: 5,
                  mb: 6,
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
                  Markdown Cheat Sheet
                </Typography>

                <Typography
                  sx={{
                    fontSize: '16px',
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.8,
                  }}
                >
                  Use **bold** for emphasis, *italic* for subtle highlights, and `code` for technical terms. Create headings with #, lists with -, and links with [text](url) syntax.
                </Typography>
              </Box>

              {/* Back to Top Button */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  pt: 4,
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Button
                  onClick={() => setActiveArticle('introduction')}
                  sx={{
                    color: '#2196F3',
                    textTransform: 'none',
                    fontSize: '15px',
                    fontWeight: 600,
                    px: 3,
                    py: 1.5,
                    borderRadius: '10px',
                    '&:hover': {
                      backgroundColor: 'rgba(33, 150, 243, 0.08)',
                    },
                  }}
                >
                  ← Back to Introduction
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}
