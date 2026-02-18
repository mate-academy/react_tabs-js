
export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
const active = tabs.find(t => t.id === activeTabId) || tabs[0];


  return (
     <div
       data-cy="TabsComponent"
     >

    <div className="tabs is-boxed">

        <ul>
          {tabs.map(tab => (
        <li
          className={active.id === tab.id?'is-active':''}
          data-cy="Tab"
          key={tab.id}
         >
          <a onClick={() => tab.id !== active.id?onTabSelected(tab.id):null}
            href={`#${tab.id}`} data-cy="TabLink">
            {tab.title}
          </a>
        </li>
         ))}
      </ul>

    </div>

  <div className="block" data-cy="TabContent">
    {active.content}
  </div>

    </div>

  )
};
