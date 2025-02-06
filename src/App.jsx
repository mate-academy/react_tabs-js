import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

// Define tabs array with id, title, and content
export const tabList = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

// Tabs component: stateless and controlled by props
const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  // Set the first tab as active if activeTabId does not match any tab id
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === activeTab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => {
                  // Prevent default link behavior (no page reload)
                  e.preventDefault();
                  // Call onTabSelected only if the tab is not active
                  if (tab.id !== activeTab.id) {
                    onTabSelected(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content} {/* Render content of the active tab */}
      </div>
    </div>
  );
};

// Main App component that manages the active tab state
export const App = () => {
  const [activeTabId, setActiveTabId] = React.useState('tab-1'); // Default active tab is the first one

  // Callback to handle tab selection
  const handleTabSelected = id => {
    setActiveTabId(id); // Set new active tab when user clicks a non-active tab
  };

  const activeTab = tabList.find(tab => tab.id === activeTabId) || tabList[0]; // Ensure fallback to the first tab

  return (
    <div className="section">
      <h1 className="title">Selected tab is {activeTab.title}</h1>{' '}
      {/* Display the title of the active tab */}
      <Tabs
        tabs={tabList}
        activeTabId={activeTabId}
        onTabSelected={handleTabSelected}
      />
    </div>
  );
};
