import cn from 'classnames';

export const Tabs = ({ tabs, tabField, setTabField }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          className={cn({ 'is-active': tabField === tab })}
          data-cy="Tab"
        >
          <a
            onClick={() => setTabField(tab)}
            href={`#${tab.id}`}
            data-cy="TabLink"
          >
            {tab.title}
          </a>
        </li>
      ))}
      {/* <li className="is-active" data-cy="Tab">
        <a href="#tab-1" data-cy="TabLink">
          Tab 1
        </a>
      </li>

      <li data-cy="Tab">
        <a href="#tab-2" data-cy="TabLink">
          Tab 2
        </a>
      </li>

      <li data-cy="Tab">
        <a href="#tab-3" data-cy="TabLink">
          Tab 3
        </a>
      </li> */}
    </ul>
  </div>
);
