import { Tab } from '../Tab/Tab';

export const Tabs = ({ tabs, selectedTab, handleTabClick }) => (
  <ul>
    {tabs.map(tab => (
      <Tab
        key={tab.id}
        tab={tab}
        isActive={selectedTab.id === tab.id}
        handleTabClick={() => handleTabClick(tab)}
      />
    ))}
  </ul>
);
