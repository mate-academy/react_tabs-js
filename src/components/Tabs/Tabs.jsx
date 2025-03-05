import React from 'react';
import './Tabs.css';

export function Tabs({ tabs, activeTabId, onTabSelected }) {
    // Find the active tab, default to the first tab if `activeTabId` does not match
    const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

    return (
        <div className="Tabs">
            {/* Render tabs as a list */}
            <ul className="Tabs__list">
                {tabs.map(tab => (
                    <li
                        key={tab.id}
                        className={`Tabs__tab ${tab.id === activeTab.id ? 'is-active' : ''}`}
                        data-cy="Tab"
                    >
                        <a
                            href={`#tab-${tab.id}`}
                            data-cy="TabLink"
                            onClick={(event) => {
                                event.preventDefault(); // Prevent default anchor behavior
                                if (tab.id !== activeTabId) {
                                    onTabSelected(tab.id); // Call callback only for non-active tab
                                }
                            }}
                        >
                            {tab.title}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Render content of the active tab */}
            <div className="Tabs__content" data-cy="TabContent">
                {activeTab.content}
            </div>
        </div>
    );
}
