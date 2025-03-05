import React, { useState } from 'react';
import { Tabs } from './Tabs';
import './App.css';

const tabsData = [
    { id: 1, title: 'Tab 1', content: 'Content of Tab 1' },
    { id: 2, title: 'Tab 2', content: 'Content of Tab 2' },
    { id: 3, title: 'Tab 3', content: 'Content of Tab 3' },
];

function App() {
    const [activeTabId, setActiveTabId] = useState(tabsData[0].id); // Default to the first tab

    const handleTabSelected = (id) => {
        setActiveTabId(id);
    };

    const activeTabTitle = tabsData.find(tab => tab.id === activeTabId)?.title || tabsData[0].title;

    return (
        <div className="App">
            {/* Dynamic title with the active tab */}
            <h1 className="App__title">Selected tab is {activeTabTitle}</h1>

            {/* Pass tabs, activeTabId, and callback to the Tabs component */}
            <Tabs
                tabs={tabsData}
                activeTabId={activeTabId}
                onTabSelected={handleTabSelected}
            />
        </div>
    );
}

export default App;
