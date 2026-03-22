import { createBrowserRouter, redirect } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Collection from './components/Collection';
import SettingsPage from './components/SettingsPage';
import NotificationsPage from './components/NotificationsPage';
import ProfilePage from './components/ProfilePage';
import LoginPage from './components/LoginPage';
import CreateAccountPage from './components/CreateAccountPage';
import HelpPage from './pages/HelpPage';
import FAQPage from './pages/FAQPage';
import GettingStartedPage from './pages/GettingStartedPage_NEW';
import TroubleshootingPage from './pages/TroubleshootingPage';

// Redirect component for /support -> /help
function SupportRedirect() {
  window.location.href = '/help';
  return null;
}

export const router = createBrowserRouter([
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'create-account',
    element: <CreateAccountPage />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'collection', element: <Collection /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: 'notifications', element: <NotificationsPage /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'help', element: <HelpPage /> },
      { path: 'support', element: <SupportRedirect /> },
      { path: 'faq', element: <FAQPage /> },
      { path: 'getting-started', element: <GettingStartedPage /> },
      { path: 'troubleshooting', element: <TroubleshootingPage /> },
    ],
  },
]);