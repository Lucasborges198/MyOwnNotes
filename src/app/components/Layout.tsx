import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Avatar, IconButton, Typography, Menu, MenuItem, Divider } from '@mui/material';
import { HomeOutlined, CollectionsOutlined, SettingsOutlined, NotificationsOutlined, ChevronLeft, KeyboardArrowDown, ExitToApp, AccountCircle, HelpOutline } from '@mui/icons-material';
import { Outlet, useNavigate, useLocation } from 'react-router';
import { useState, useEffect, useRef } from 'react';
import LogoutModal from './LogoutModal';
import { useNotesStore } from '../stores/notesStore';

const primaryNavItems = [
  { text: 'Home', icon: <HomeOutlined />, path: '/' },
  { text: 'Collection', icon: <CollectionsOutlined />, path: '/collection' },
];

const secondaryNavItems = [
  { text: 'Notifications', icon: <NotificationsOutlined />, path: '/notifications' },
  { text: 'Settings', icon: <SettingsOutlined />, path: '/settings' },
];

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { fetchNotes } = useNotesStore();
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Check if user is logged in and load notes
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    fetchNotes();
  }, [navigate, fetchNotes]);

  const handleLogout = () => {
    setLogoutModalOpen(true);
  };

  const handleConfirmLogout = () => {
    setLogoutModalOpen(false);
    // Clear user data/tokens
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#1e1e1e' }}>
      {/* Left Sidebar */}
      <Box
        sx={{
          width: sidebarCollapsed ? '80px' : '250px',
          height: '100%',
          backgroundColor: '#1E1E1E',
          borderRight: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          flexDirection: 'column',
          py: 3,
          transition: 'width 0.3s ease',
        }}
      >
        {/* Logo Section */}
        <Box 
          sx={{ 
            px: 3, 
            mb: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: sidebarCollapsed ? 'center' : 'space-between',
          }}
        >
          {!sidebarCollapsed && (
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.5px',
              }}
            >
              MyOwnNotes
            </Typography>
          )}
          <IconButton 
            size="small"
            onClick={toggleSidebar}
            sx={{ 
              color: 'rgba(255,255,255,0.4)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.05)',
                color: 'rgba(255,255,255,0.6)',
              },
            }}
          >
            <ChevronLeft 
              fontSize="small" 
              sx={{
                transform: sidebarCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
              }}
            />
          </IconButton>
        </Box>

        {/* Primary Navigation */}
        <Box sx={{ px: 2, mb: 4 }}>
          <List sx={{ p: 0 }}>
            {primaryNavItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
                  <ListItemButton
                    onClick={() => navigate(item.path)}
                    sx={{
                      borderRadius: '10px',
                      py: 1.25,
                      px: 2,
                      backgroundColor: isActive ? 'rgba(33, 150, 243, 0.15)' : 'transparent',
                      justifyContent: sidebarCollapsed ? 'center' : 'flex-start',
                      '&:hover': {
                        backgroundColor: isActive 
                          ? 'rgba(33, 150, 243, 0.2)' 
                          : 'rgba(255,255,255,0.05)',
                      },
                    }}
                  >
                    <ListItemIcon 
                      sx={{ 
                        color: isActive ? '#2196F3' : 'rgba(255,255,255,0.6)',
                        minWidth: sidebarCollapsed ? 'auto' : 36,
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    {!sidebarCollapsed && (
                      <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{
                          sx: { 
                            fontSize: '15px',
                            fontWeight: isActive ? 600 : 500,
                            color: isActive ? '#2196F3' : 'rgba(255,255,255,0.85)',
                          },
                        }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>

        {/* Spacer to push bottom section down */}
        <Box sx={{ flex: 1 }} />

        {/* Secondary Navigation */}
        <Box sx={{ px: 2, mb: 3 }}>
          <List sx={{ p: 0 }}>
            {secondaryNavItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
                  <ListItemButton
                    onClick={() => navigate(item.path)}
                    sx={{
                      borderRadius: '10px',
                      py: 1.25,
                      px: 2,
                      backgroundColor: isActive ? 'rgba(33, 150, 243, 0.15)' : 'transparent',
                      justifyContent: sidebarCollapsed ? 'center' : 'flex-start',
                      '&:hover': {
                        backgroundColor: isActive 
                          ? 'rgba(33, 150, 243, 0.2)' 
                          : 'rgba(255,255,255,0.05)',
                      },
                    }}
                  >
                    <ListItemIcon 
                      sx={{ 
                        color: isActive ? '#2196F3' : 'rgba(255,255,255,0.6)',
                        minWidth: sidebarCollapsed ? 'auto' : 36,
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    {!sidebarCollapsed && (
                      <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{
                          sx: { 
                            fontSize: '15px',
                            fontWeight: isActive ? 600 : 500,
                            color: isActive ? '#2196F3' : 'rgba(255,255,255,0.85)',
                          },
                        }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>

        {/* User Profile Block */}
        <Box 
          sx={{ 
            mx: 2,
            px: sidebarCollapsed ? 1 : 2,
            py: 2,
            backgroundColor: 'rgba(255,255,255,0.04)',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: sidebarCollapsed ? 'center' : 'flex-start',
            gap: sidebarCollapsed ? 0 : 1.5,
            cursor: 'pointer',
            transition: 'all 0.2s',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.06)',
              borderColor: 'rgba(255,255,255,0.1)',
            },
          }}
          onClick={handleMenuOpen}
        >
          <Avatar
            src="https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwZXJzb24lMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDE0ODYwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            sx={{ 
              width: 40, 
              height: 40,
            }}
          />
          {!sidebarCollapsed && (
            <>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#ffffff',
                    lineHeight: 1.3,
                  }}
                >
                  Lucas
                </Typography>
                <Typography
                  sx={{
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.3,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  lucas@email.com
                </Typography>
              </Box>
              <KeyboardArrowDown 
                sx={{ 
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: '20px',
                }} 
              />
            </>
          )}
        </Box>

        {/* User Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          sx={{
            '& .MuiPaper-root': {
              backgroundColor: '#2A2A2A',
              borderRadius: '12px',
              boxShadow: '0px 8px 24px rgba(0,0,0,0.4)',
              minWidth: '220px',
              mt: -1,
              ml: sidebarCollapsed ? 1 : 2,
            },
            '& .MuiList-root': {
              py: 1,
            },
          }}
        >
          <MenuItem 
            onClick={() => {
              handleMenuClose();
              navigate('/profile');
            }}
            sx={{
              px: 2.5,
              py: 1.5,
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.08)',
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 36 }}>
              <AccountCircle sx={{ fontSize: 20, color: 'rgba(255,255,255,0.7)' }} />
            </ListItemIcon>
            <ListItemText 
              primary="Account Settings"
              primaryTypographyProps={{
                sx: {
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#ffffff',
                },
              }}
            />
          </MenuItem>
          
          <MenuItem 
            onClick={() => {
              handleMenuClose();
              navigate('/help');
            }}
            sx={{
              px: 2.5,
              py: 1.5,
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.08)',
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 36 }}>
              <HelpOutline sx={{ fontSize: 20, color: 'rgba(255,255,255,0.7)' }} />
            </ListItemIcon>
            <ListItemText 
              primary="Help & Support"
              primaryTypographyProps={{
                sx: {
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#ffffff',
                },
              }}
            />
          </MenuItem>
          
          <Divider sx={{ my: 1, backgroundColor: '#444' }} />
          
          <MenuItem 
            onClick={() => {
              handleMenuClose();
              handleLogout();
            }}
            sx={{
              px: 2.5,
              py: 1.5,
              '&:hover': {
                backgroundColor: 'rgba(244,67,54,0.1)',
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 36 }}>
              <ExitToApp sx={{ fontSize: 20, color: '#F44336' }} />
            </ListItemIcon>
            <ListItemText 
              primary="Log out"
              primaryTypographyProps={{
                sx: {
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#F44336',
                },
              }}
            />
          </MenuItem>
        </Menu>
      </Box>

      {/* Main Content Area */}
      <Box
        sx={{
          flex: 1,
          height: '100%',
          backgroundColor: '#1e1e1e',
          overflow: 'auto',
          p: 4,
        }}
      >
        <Outlet context={{ handleLogout }} />
      </Box>

      {/* Logout Modal */}
      <LogoutModal 
        open={logoutModalOpen}
        onClose={() => setLogoutModalOpen(false)}
        onConfirm={handleConfirmLogout}
      />
    </Box>
  );
}