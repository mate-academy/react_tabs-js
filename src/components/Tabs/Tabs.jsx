import cn from 'classnames';

export const Tabs = ({ selectedTabId, setselectedTabId, tabs }) => (
  <ul>
    {
      tabs.map(tab => (
        <li
          key={tab.id}
          className={cn({ 'is-active': tab.id === selectedTabId })}
          data-cy="Tab"
          onClick={ () => { setselectedTabId(tab.id)}}
        >
          <a href={`#${tab.id}`} data-cy="TabLink">{tab.title}</a>
        </li>
      ))}
  </ul>
);
