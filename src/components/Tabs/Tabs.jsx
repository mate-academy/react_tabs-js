import classNames from "classnames";
export const Tabs = ({ tabs, activeTabId, onTabSelected}) => {
  const validActiveTabId = tabs.some(tab => tab.id === activeTabId) ? activeTabId : tabs[0].id;

  return (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li 
          className={classNames({"is-active": validActiveTabId === tab.id })} 
          data-cy="Tab"
          >
            <a 
            href={`#${tab.id}`} 
            data-cy="TabLink"
            onClick={()=>{
              if(tab.id !== validActiveTabId){
                onTabSelected(tab.id)
              }
            }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {tabs.find(tab=>tab.id===validActiveTabId)?.content}
    </div>
  </div>
)};
