import { useState, useMemo, useEffect, lazy, Suspense } from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { Layout } from './components/Layout';
import { PWAInstallPrompt } from './components/PWAInstallPrompt';

// ⚡ Bolt Optimization: Code Splitting
// What: Replaced static imports with React.lazy() for all main tab components.
// Why: The application previously loaded all routes (Dashboard, Portfolio, etc.)
//      on initial load, leading to a large main bundle and slower Time to Interactive.
// Impact: Reduces initial JavaScript payload significantly. The build chunk size warning
//         should now be resolved or greatly improved. Users only download code for the tab they visit.
const Dashboard = lazy(() => import('./components/Dashboard').then(m => ({ default: m.Dashboard })));
const Portfolio = lazy(() => import('./components/Portfolio').then(m => ({ default: m.Portfolio })));
const Dividends = lazy(() => import('./components/Dividends').then(m => ({ default: m.Dividends })));
const Settings = lazy(() => import('./components/Settings').then(m => ({ default: m.Settings })));

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
    let content;
    switch (activeTab) {
      case 'home': content = (
        <Dashboard
          onNavigateToImport={() => {
            setSettingsSection('data');
            setActiveTab('settings');
          }}
        />
      );
      break;
      case 'portfolio': content = <Portfolio />; break;
      case 'dividends': content = <Dividends />; break;
      case 'settings': content = (
        <Settings
          defaultSection={settingsSection}
          onImportSuccess={() => setActiveTab('home')}
          onNavigateToTimeline={() => setActiveTab('timeline')}
        />
      );
      break;
      default: content = (
        <Dashboard
          onNavigateToImport={() => {
            setSettingsSection('data');
            setActiveTab('settings');
          }}
        />
      );
      break;
    }
    return (
      <Suspense fallback={
        <div className="flex items-center justify-center h-[50vh] text-muted-foreground animate-pulse font-mono text-sm tracking-widest uppercase">
          Loading...
        </div>
      }>
        {content}
      </Suspense>
    );
  }, [activeTab, settingsSection]);

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent}
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
