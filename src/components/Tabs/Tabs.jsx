export const Tabs = ({ tabs, onTabClick, someID, someContent }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li key={tab.id} className={tab.id === someID ? 'is-active' : ''} data-cy="Tab">
              <a
                href={`#${tab.id}`}
                onClick={() => onTabClick(tab.title, tab.id, tab.content)}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};
