export const Tabs = ({tabs, activeTabId, onTabSelected}) => {
  const currentTub = tabs.find(tab => tab.id === activeTabId) || tabs[0]

  return (
    <>
    <ul>
   {tabs.map(tab => (
    <li
    key = {tab.id}
    className = {tab.id === currentTub.id ? 'is-active': ''}
    data-cy ="Tab"
    >
    <a
    href={`#${tab.id}`}
    data-cy="TabLink"
    onClick={()=>
    {
      if (tab.id !== currentTub.id){
      onTabSelected(tab.id);
     }
    }}
    >
      {tab.title}
      </a>
    </li>
  ))}
   </ul>
   <div className="block" data-cy= "TabContent">
    {currentTub.content}
   </div>
   </>
  )
};
