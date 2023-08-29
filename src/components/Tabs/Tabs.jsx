export const Tabs = ({ value, setValue, tabs }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(x => (
          <li
            className={`${value.id === x.id ? 'is-active' : null}`}
            data-cy="Tab"
            key={x.id}
          >
            <a 
              href={`#${x.id}`} 
              data-cy="TabLink"
              onClick={() => setValue(x)}
            >
              {x.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {value.content}
    </div>
  </div>
);
