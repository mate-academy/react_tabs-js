/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import cn from 'classnames';

export const Tabs = ({ selectedTabId, setselectedTabId, tabs }) => (
  <ul>
    {
      tabs.map(tab => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <li
          key={tab.id}
          className={cn({ 'is-active': tab.id === selectedTabId })}
          data-cy="Tab"
          onClick={() => {
            setselectedTabId(tab.id);
          }}
        >
          <a href={`#${tab.id}`} data-cy="TabLink">{tab.title}</a>
        </li>
      ))}
  </ul>
);
