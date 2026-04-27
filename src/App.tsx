import { useState, useMemo, useEffect, lazy, Suspense } from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { Layout } from './components/Layout';
import { PWAInstallPrompt } from './components/PWAInstallPrompt';

// Lazy load top-level tab components for code splitting
const Dashboard = lazy(() => import('./components/Dashboard').then(module => ({ default: module.Dashboard })));
const Portfolio = lazy(() => import('./components/Portfolio').then(module => ({ default: module.Portfolio })));
const Dividends = lazy(() => import('./components/Dividends').then(module => ({ default: module.Dividends })));
const Settings = lazy(() => import('./components/Settings').then(module => ({ default: module.Settings })));




function AppContent() {
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem('activeTab') || 'home';
  });
  const [settingsSection, setSettingsSection] = useState<any>(null);

  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
    window.history.replaceState(null, '', `?tab=${activeTab}`);
    // Reset section when changing tabs to avoid sticking to a sub-page
    if (activeTab !== 'settings') {
      setSettingsSection(null);
    }
  }, [activeTab]);

  const renderContent = useMemo(() => {
    switch (activeTab) {
      case 'home': return (
        <Dashboard
          onNavigateToImport={() => {
            setSettingsSection('data');
            setActiveTab('settings');
          }}
        />
      );
      case 'portfolio': return <Portfolio />;
      case 'dividends': return <Dividends />;
      case 'settings': return (
        <Settings
          defaultSection={settingsSection}
          onImportSuccess={() => setActiveTab('home')}
          onNavigateToTimeline={() => setActiveTab('timeline')}
        />
      );
      default: return (
        <Dashboard
          onNavigateToImport={() => {
            setSettingsSection('data');
            setActiveTab('settings');
          }}
        />
      );
    }
  }, [activeTab, settingsSection]);

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      <Suspense fallback={<div className="flex h-full items-center justify-center p-8"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
        {renderContent}
      </Suspense>
    </Layout>
  );
}

import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <PortfolioProvider>
        <AppContent />
        <PWAInstallPrompt />
      </PortfolioProvider>
    </ThemeProvider>
  );
}

export default App;
