import classNames from "classnames";
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

export const Tabs = ({tabs, activeTabId, onTabSelected}) => {
  const activeTab = tabs.find(item => item.id === activeTabId) || tabs[0]
  return (
    <>
      <ul>
        {tabs.map(tab => (
          <li data-cy="Tab" key={tab.id} className={classNames({ "is-active": activeTab.id === tab.id })}>
            <a data-cy="TabLink" onClick={activeTabId !== tab.id ? () => onTabSelected(tab.id) : undefined} href={`#${tab.id}`}>
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </>
  )
};
