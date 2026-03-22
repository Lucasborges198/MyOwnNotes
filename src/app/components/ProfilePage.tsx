import { Box, Typography, Avatar, Button, TextField } from '@mui/material';
import { useState } from 'react';

export default function ProfilePage() {
  const [fullName, setFullName] = useState('Lucas Anderson');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleUploadPicture = () => {
    // Handle file upload logic
    console.log('Upload picture clicked');
  };

  const handleSaveProfile = () => {
    console.log('Save profile changes');
  };

  const handleUpdatePassword = () => {
    console.log('Update password');
  };

  const handleDeleteAccount = () => {
    console.log('Delete account');
  };

  return (
    <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
      {/* Page Title */}
      <Typography
        sx={{
          fontSize: '32px',
          fontWeight: 700,
          color: '#ffffff',
          mb: 5,
        }}
      >
        Profile
      </Typography>

      {/* Section 1: Profile */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '30% 70%',
          gap: 6,
          py: 5,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Left Column */}
        <Box>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#ffffff',
              mb: 1,
            }}
          >
            Profile
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.6,
            }}
          >
            Update your personal information and profile picture
          </Typography>
        </Box>

        {/* Right Column */}
        <Box>
          {/* Avatar and Upload Button */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
            <Avatar
              src="https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwZXJzb24lMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDE0ODYwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              sx={{
                width: 80,
                height: 80,
              }}
            />
            <Button
              variant="outlined"
              onClick={handleUploadPicture}
              sx={{
                color: '#ffffff',
                borderColor: 'rgba(255,255,255,0.2)',
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: 500,
                px: 3,
                py: 1,
                borderRadius: '8px',
                '&:hover': {
                  borderColor: 'rgba(255,255,255,0.3)',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                },
              }}
            >
              Upload new picture
            </Button>
          </Box>

          {/* Full Name Input */}
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#ffffff',
                mb: 1,
              }}
            >
              Full Name
            </Typography>
            <TextField
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              fullWidth
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: '#ffffff',
                  borderRadius: '8px',
                  '& fieldset': {
                    borderColor: 'rgba(255,255,255,0.1)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255,255,255,0.2)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#2196F3',
                  },
                },
                '& .MuiInputBase-input': {
                  fontSize: '15px',
                  py: 1.5,
                },
              }}
            />
          </Box>

          {/* Save Changes Button */}
          <Button
            variant="contained"
            onClick={handleSaveProfile}
            sx={{
              backgroundColor: '#2196F3',
              color: '#ffffff',
              textTransform: 'none',
              fontSize: '15px',
              fontWeight: 600,
              px: 4,
              py: 1.25,
              borderRadius: '8px',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#1976D2',
                boxShadow: '0px 4px 12px rgba(33, 150, 243, 0.3)',
              },
            }}
          >
            Save Changes
          </Button>
        </Box>
      </Box>

      {/* Section 2: Password */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '30% 70%',
          gap: 6,
          py: 5,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Left Column */}
        <Box>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#ffffff',
              mb: 1,
            }}
          >
            Password
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.6,
            }}
          >
            Update your password to keep your account secure
          </Typography>
        </Box>

        {/* Right Column */}
        <Box>
          {/* Current Password */}
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#ffffff',
                mb: 1,
              }}
            >
              Current Password
            </Typography>
            <TextField
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter current password"
              fullWidth
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: '#ffffff',
                  borderRadius: '8px',
                  '& fieldset': {
                    borderColor: 'rgba(255,255,255,0.1)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255,255,255,0.2)',
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
                  color: 'rgba(255,255,255,0.3)',
                  opacity: 1,
                },
              }}
            />
          </Box>

          {/* New Password */}
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#ffffff',
                mb: 1,
              }}
            >
              New Password
            </Typography>
            <TextField
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              fullWidth
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: '#ffffff',
                  borderRadius: '8px',
                  '& fieldset': {
                    borderColor: 'rgba(255,255,255,0.1)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255,255,255,0.2)',
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
                  color: 'rgba(255,255,255,0.3)',
                  opacity: 1,
                },
              }}
            />
          </Box>

          {/* Update Password Button */}
          <Button
            variant="contained"
            onClick={handleUpdatePassword}
            sx={{
              backgroundColor: '#2196F3',
              color: '#ffffff',
              textTransform: 'none',
              fontSize: '15px',
              fontWeight: 600,
              px: 4,
              py: 1.25,
              borderRadius: '8px',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#1976D2',
                boxShadow: '0px 4px 12px rgba(33, 150, 243, 0.3)',
              },
            }}
          >
            Update Password
          </Button>
        </Box>
      </Box>

      {/* Section 3: Danger Zone */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '30% 70%',
          gap: 6,
          py: 5,
        }}
      >
        {/* Left Column */}
        <Box>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#ffffff',
              mb: 1,
            }}
          >
            Delete Account
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.6,
            }}
          >
            Permanently delete your account and all your data
          </Typography>
        </Box>

        {/* Right Column */}
        <Box>
          {/* Warning Box */}
          <Box
            sx={{
              backgroundColor: 'rgba(244, 67, 54, 0.08)',
              border: '1px solid rgba(244, 67, 54, 0.3)',
              borderRadius: '10px',
              p: 3,
              mb: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.85)',
                lineHeight: 1.6,
                mb: 2,
              }}
            >
              Once you delete your account, there is no going back. Please be certain.
            </Typography>
            <Typography
              sx={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.6,
              }}
            >
              All your notes, collections, and personal data will be permanently removed from our servers.
            </Typography>
          </Box>

          {/* Delete Account Button */}
          <Button
            variant="outlined"
            onClick={handleDeleteAccount}
            sx={{
              color: '#F44336',
              borderColor: 'rgba(244, 67, 54, 0.5)',
              textTransform: 'none',
              fontSize: '15px',
              fontWeight: 600,
              px: 4,
              py: 1.25,
              borderRadius: '8px',
              '&:hover': {
                borderColor: '#F44336',
                backgroundColor: 'rgba(244, 67, 54, 0.1)',
              },
            }}
          >
            Delete Account
          </Button>
        </Box>
      </Box>
    </Box>
  );
}