import { useState } from 'react';
import { tabs } from '../../api/tabs';

export const Tabs = ({ newTabs, setCurrentTab }) => {
  const [message, setMessage] = useState(tabs[0].content);

  const handleClick = tab => {
    setMessage(tab.content);
    setCurrentTab(tab.title);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {newTabs.map(tab => {
            return (
              <li
                className={tab.isActive ? 'is-active' : ''}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  onClick={() => handleClick(tab)}
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {message}
      </div>
    </div>
  );
};
