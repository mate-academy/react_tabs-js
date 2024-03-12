import cn from 'classnames';

export const Tabs = ({ tabs, onTabSelected, selectedTab }) => {
  return tabs.map(tab => (
    <li
      data-cy="Tab"
      className={cn({ 'is-active': selectedTab === tab })}
      key={tab.id}
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={() => onTabSelected(tab)}
      >
        {tab.title}
      </a>
    </li>
  ));
};
