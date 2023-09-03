import classNames from 'classnames';
import { getSelectedTab } from '../../helper';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = getSelectedTab(tabs, selectedTabId);

  const ARE_IDS_EQUAL = tab => tab.id === selectedTab.id;

  const handleTabClick = (tab) => {
    if (!ARE_IDS_EQUAL(tab)) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title, content }) => (
            <li
              key={id}
              data-cy="Tab"
              className={classNames({
                'is-active': ARE_IDS_EQUAL({ id }),
              })}
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick({ id, title, content })}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
