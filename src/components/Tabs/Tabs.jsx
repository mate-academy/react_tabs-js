export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <>
    <div className="tabs is-boxed">
      <ul>
        { tabs.map(({ id, title, content }) => (
          <li
            key={id}
            className={id === selectedTab.id
              ? 'is-active'
              : null
            }
            data-cy="Tab"
          >
            <a
              href={`#${id}`}
              data-cy="TabLink"
              onClick={() => id !== selectedTab.id
                && onTabSelected({ id, title, content })}
            >
              {`${title}`}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div
      className="block"
      data-cy="TabContent"
    >
      {selectedTab.content}
    </div>
  </>
);
