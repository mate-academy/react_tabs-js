import cn from 'classnames';
import { TabContent } from './TabContent/TabContent';

export const Tabs = ({ onTabSelect, tabs, selectedTab }) => {
  const sendTab = (tab) => {
    onTabSelect(tab);
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTab.title}`}
      </h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                data-cy="Tab"
                className={cn('li', {
                  'is-active': selectedTab.title === tab.title,
                })}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={(e) => {
                    if (tab.title !== selectedTab.title) {
                      sendTab(tab);
                    }
                  }}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <TabContent
          content={selectedTab.content}
          key={tabs.id}
        />

      </div>
    </div>
  );
};
