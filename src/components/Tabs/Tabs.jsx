/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <li
            key={tab.id}
            className={classNames({ 'is-active': tab.id === activeTabId })}
            data-cy="Tab"
            onClick={() => {
              if (tab.id !== activeTabId) {
                onTabSelected(tab.id);
              }
            }}
          >
            <a href={`#${tab.id}`} data-cy="TabLink">
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
