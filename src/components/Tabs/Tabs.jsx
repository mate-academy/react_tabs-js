import 'bulma/css/bulma.css';
import cn from 'classnames';

export const Tabs = ({ tabs, id, setChange }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(table => (
          <li
            className={cn({
              'is-active': id === table.id,
            })}
            data-cy="Tab"
            key={table.id}
          >
            <a
              href={`#${table.id}`}
              data-cy="TabLink"
              onClick={() => id !== table.id && setChange(table.id)}
            >
              {table.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {tabs.find(tab => tab.id === id).content}
    </div>
  </div>
);
