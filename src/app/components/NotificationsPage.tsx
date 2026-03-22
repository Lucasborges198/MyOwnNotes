import { Box, Typography } from '@mui/material';
import { NotificationsNone } from '@mui/icons-material';

export default function NotificationsPage() {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: '24px',
          fontWeight: 700,
          color: '#ffffff',
          mb: 4,
        }}
      >
        Notifications
      </Typography>

      {/* Empty State */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
        }}
      >
        <NotificationsNone
          sx={{
            fontSize: '80px',
            color: '#888888',
            opacity: 0.4,
            mb: 2,
          }}
        />
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: 700,
            color: '#888888',
            mb: 1,
          }}
        >
          No notifications yet
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            color: '#888888',
          }}
        >
          You're all caught up!
        </Typography>
      </Box>
    </Box>
  );
}
