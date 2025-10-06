import { useState, useMemo } from 'react';
import { Tabs } from './components/Tabs/Tabs';

const tabsData = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [activeTabId, setActiveTabId] = useState(tabsData[0].id);

  const activeTab = useMemo(() => {
    return tabsData.find(tab => tab.id === activeTabId) || tabsData[0];
  }, [activeTabId]);

  return (
    <div className="section p-6 max-w-3xl mx-auto">
      <h1 className="title mb-6">Selected tab is {activeTab.title}</h1>

      <Tabs
        tabs={tabsData}
        activeTabId={activeTabId}
        onTabSelected={setActiveTabId}
      />
    </div>
  );
};
