import React from 'react';
import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let defaultTab = tabs[0];
  const activeTab = tabs.find(({ id }) => id === activeTabId);

  if (activeTab) {
    defaultTab = activeTab;
  }

  const activatedTabId = defaultTab.id;
  const tabTitle = defaultTab.title;
  const tabContent = defaultTab.content;

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${tabTitle}`}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(({ id, title }) => (
              <li
                key={id}
                className={classNames({
                  'is-active': id === activatedTabId,
                })}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={event => {
                    const isTabActive =
                      event.currentTarget.parentElement.classList.contains(
                        'is-active',
                      );

                    if (!isTabActive) {
                      onTabSelected(id);
                    }
                  }}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
          );
        </div>

        <div className="block" data-cy="TabContent">
          {tabContent}
        </div>
      </div>
    </div>
  );
};
