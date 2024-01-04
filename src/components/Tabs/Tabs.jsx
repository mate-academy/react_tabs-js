import cn from 'classnames';

export const Tabs = ({
  tabs,
  choosed,
  setChoosed,
}) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <li
          className={cn({ 'is-active': tab.id === choosed.id })}
          data-cy="Tab"
          key={tab.id}
        >
          <a
            onClick={() => setChoosed(tab)}
            href={`#${tab.id}`}
            data-cy="TabLink"
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
