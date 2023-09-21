import classnames from 'classnames';

export const Tab = ({ tab, selectedTabId, selected, onTabSelected }) => (
  <li
    data-cy="Tab"
    className={
      classnames({ 'is-active': tab.id === selected.id })
    }
  >
    <a
      href={`#${tab.id}`}
      data-cy="TabLink"
      onClick={() => selectedTabId !== tab.id && onTabSelected(tab)}
    >
      {tab.title}
    </a>
  </li>
);
