import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Breadcrumbs } from '@mui/material';
import { ExpandMore, ChevronRight } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import ContactSupportModal from '../components/ContactSupportModal';

const faqs = [
  {
    id: 'faq1',
    question: 'How do I export my notes?',
    answer: 'You can export your notes by navigating to Settings > Export Data. Choose your preferred format (PDF, JSON, or Markdown) and select which notes you want to export. The export will be downloaded to your device automatically.',
  },
  {
    id: 'faq2',
    question: 'Can I collaborate with others on my notes?',
    answer: 'Yes! Premium users can share notes with team members and collaborate in real-time. Simply click the share button on any note and enter the email addresses of your collaborators.',
  },
  {
    id: 'faq3',
    question: 'How does the sync feature work?',
    answer: 'MyOwnNotes automatically syncs your notes across all your devices in real-time. Any changes you make are instantly saved to the cloud and pushed to your other devices within seconds.',
  },
  {
    id: 'faq4',
    question: 'What happens if I exceed my storage limit?',
    answer: 'If you reach your storage limit, you\'ll receive a notification to either delete old notes or upgrade to a higher-tier plan. Your existing notes will remain accessible, but you won\'t be able to create new ones until you free up space.',
  },
  {
    id: 'faq5',
    question: 'Is my data encrypted?',
    answer: 'Absolutely. All your notes are encrypted both in transit (using TLS) and at rest (using AES-256 encryption). We take your privacy and security seriously, and your data is never shared with third parties.',
  },
  {
    id: 'faq6',
    question: 'Can I recover deleted notes?',
    answer: 'Yes, deleted notes are moved to a trash folder where they remain for 30 days before permanent deletion. You can restore any note from the trash during this period by going to Settings > Trash.',
  },
  {
    id: 'faq7',
    question: 'How do I upgrade my plan?',
    answer: 'To upgrade your plan, go to Settings > Billing and select the plan that best fits your needs. You can upgrade or downgrade at any time, and changes take effect immediately.',
  },
  {
    id: 'faq8',
    question: 'Does MyOwnNotes work offline?',
    answer: 'Yes, MyOwnNotes has full offline support. You can create, edit, and view notes without an internet connection. Your changes will automatically sync once you\'re back online.',
  },
];

export default function FAQPage() {
  const [expanded, setExpanded] = useState<string>('faq1');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : '');
  };

  return (
    <Box
      sx={{
        maxWidth: '900px',
        margin: '0 auto',
        py: 4,
      }}
    >
      {/* Breadcrumb Navigation */}
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
          FAQs
        </Typography>
      </Breadcrumbs>

      {/* Page Title */}
      <Typography
        sx={{
          fontSize: '36px',
          fontWeight: 700,
          color: '#ffffff',
          mb: 5,
          letterSpacing: '-0.5px',
        }}
      >
        Frequently Asked Questions
      </Typography>

      {/* Accordion List */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {faqs.map((faq) => (
          <Accordion
            key={faq.id}
            expanded={expanded === faq.id}
            onChange={handleChange(faq.id)}
            sx={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px !important',
              boxShadow: 'none',
              '&:before': {
                display: 'none',
              },
              '&.Mui-expanded': {
                margin: 0,
                mb: 2,
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMore 
                  sx={{ 
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: 24,
                  }} 
                />
              }
              sx={{
                px: 3,
                py: 2,
                minHeight: '72px',
                '&.Mui-expanded': {
                  minHeight: '72px',
                },
                '& .MuiAccordionSummary-content': {
                  margin: '12px 0',
                  '&.Mui-expanded': {
                    margin: '12px 0',
                  },
                },
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.02)',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#ffffff',
                  letterSpacing: '-0.2px',
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                px: 3,
                pb: 3,
                pt: 0,
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <Typography
                sx={{
                  fontSize: '15px',
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.7,
                  mt: 2,
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Still Need Help Section */}
      <Box
        sx={{
          mt: 6,
          p: 4,
          backgroundColor: 'rgba(33, 150, 243, 0.08)',
          border: '1px solid rgba(33, 150, 243, 0.2)',
          borderRadius: '16px',
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#ffffff',
            mb: 1,
          }}
        >
          Still have questions?
        </Typography>
        <Typography
          sx={{
            fontSize: '15px',
            color: 'rgba(255,255,255,0.6)',
            mb: 3,
          }}
        >
          Our support team is ready to help you with anything you need.
        </Typography>
        <Typography
          onClick={() => setContactModalOpen(true)}
          sx={{
            fontSize: '15px',
            color: '#2196F3',
            cursor: 'pointer',
            fontWeight: 600,
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          Contact Support →
        </Typography>
      </Box>

      {/* Contact Support Modal */}
      <ContactSupportModal 
        open={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />
    </Box>
  );
}