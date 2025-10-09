
export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
    const handleClick = (event, id) => {
        event.preventDefault();
        onTabSelected(id);
      }
    const activeTab = tabs.find(tab => tab.id === activeTabId);  
    
    return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
        {
        tabs.map(tab => (
          <li 
          key={tab.id}
          className={activeTabId === tab.id ? 'is-active' : ''} data-cy="Tab"
          >
            <a href={`#${tab.id}`} data-cy="TabLink" 
            onClick={(event) =>{
              handleClick(event, tab.id); 
            } }>
              {tab.title}
            </a>
          </li>
        ))
      }
          
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
      {activeTab.content}
      </div>
    </div>
    );
};