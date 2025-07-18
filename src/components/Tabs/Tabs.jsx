import React from 'react';
import './Tabs.scss';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => (
  <div role="tablist">
    {tabs.map(tab => (
      <button
        key={tab.id}
        data-cy="tab-button"
        type="button"
        role="tab"
        aria-selected={tab.id === activeTabId}
        onClick={() => onTabSelected(tab.id)}
        className={`tab-button ${tab.id === activeTabId ? 'active' : ''}`}
      >
        {tab.title}
      </button>
    ))}
  </div>
);
