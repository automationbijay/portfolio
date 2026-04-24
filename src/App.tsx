import { useState, useMemo, useEffect, lazy, Suspense } from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { Layout } from './components/Layout';
const Dashboard = lazy(() => import('./components/Dashboard').then(m => ({ default: m.Dashboard })));
const Portfolio = lazy(() => import('./components/Portfolio').then(m => ({ default: m.Portfolio })));
const Dividends = lazy(() => import('./components/Dividends').then(m => ({ default: m.Dividends })));
const Settings = lazy(() => import('./components/Settings').then(m => ({ default: m.Settings })));
import { PWAInstallPrompt } from './components/PWAInstallPrompt';




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
      <Suspense fallback={<div className="p-8 flex justify-center"><div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full"></div></div>}>
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
