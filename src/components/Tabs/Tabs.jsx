import React, { useState, useMemo } from 'react';
// Assuming 'bulma/css/bulma.css' and '@fortawesome/fontawesome-free/css/all.css' are available in the environment
// The original prompt also referenced './App.scss', which I will omit as custom CSS can be included via style attributes or class names.

/**
 * Array of tab objects used in the application.
 */
export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

/**
 * Renders a set of tabs and the content for the currently active tab.
 * This component is stateless and relies entirely on props.
 *
 * @param {Object} props - The component props.
 * @param {Array<Object>} props.tabs - Array of tab objects { id, title, content }.
 * @param {string} props.activeTabId - The ID of the currently active tab.
 * @param {function(string): void} props.onTabSelected - Callback fired when a new tab is selected.
 */
export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  // 1. Determine the currently active tab object.
  // If activeTabId does not match any tab, default to the first tab in the array.
  const currentActiveTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  /**
   * Handles the click event on a tab link.
   * Calls onTabSelected only if the clicked tab is not the one currently active.
   * @param {React.MouseEvent<HTMLAnchorElement>} e - The click event.
   * @param {string} id - The ID of the clicked tab.
   */
  const handleTabClick = (e, id) => {
    e.preventDefault();
    if (id !== currentActiveTab.id) {
      onTabSelected(id);
    }
  };

  return (
    <div data-cy="TabsComponent">
      {/* Tab List Rendering (<ul>) */}
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              // Add 'is-active' class if this tab is the current active tab
              className={tab.id === currentActiveTab.id ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={(e) => handleTabClick(e, tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Active Tab Content Rendering */}
      <div className="block" data-cy="TabContent">
        {currentActiveTab.content}
      </div>
    </div>
  );
};

/**
 * The main application component that manages the active tab state.
 */
export const App = () => {
  // Initialize state with the ID of the first tab
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  // Find the currently active tab object to display its title and content
  // Defaults to the first tab if activeTabId is somehow invalid or initial (handles the requirement)
  const activeTab = useMemo(() => (
    tabs.find(tab => tab.id === activeTabId) || tabs[0]
  ), [activeTabId]);

  /**
   * Callback to update the active tab ID in the state.
   * @param {string} id - The ID of the newly selected tab.
   */
  const handleTabSelected = (id) => {
    setActiveTabId(id);
  };

  return (
    <div className="section">
      {/* H1 Title requirement: "Selected tab is Tab X" */}
      <h1 className="title">
        Selected tab is {activeTab.title}
      </h1>

      {/* Render the stateless Tabs component, passing down state and handler */}
      <Tabs
        tabs={tabs}
        activeTabId={activeTabId}
        onTabSelected={handleTabSelected}
      />
    </div>
  );
};

export default App;

