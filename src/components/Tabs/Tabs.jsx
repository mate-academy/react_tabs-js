import cn from 'classnames';
import { useState } from 'react';
import { tabs } from '../../constants';

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    if (activeTab === tab.id) {
      setActiveTab(null); // Если текущая вкладка уже активна, деактивируем её
    } else {
      setActiveTab(tab.id); // Иначе, устанавливаем новую активную вкладку
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': activeTab === tab.id })}
            >
              <a
                href={tab.id}
                data-cy="TabLink"
                onClick={() => handleTabClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};
