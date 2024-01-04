import cn from 'classnames';

export const Tab = ({ tab, activeTab, onTabChange }) => (
  <li className={cn({ 'is-active': activeTab.id === tab.id })} data-cy="Tab">
    <a
      href={`#${tab.id}`}
      data-cy="TabLink"
      onClick={() => {
        onTabChange(tab);
      }}
    >
      {tab.title}
    </a>
  </li>
);
