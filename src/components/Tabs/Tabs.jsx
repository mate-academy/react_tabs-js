import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const isTabIdValid = tabs.some(tab => tab.id === activeTabId);

  return (
    <ul>
      {tabs.map((tab, index) => {
        const isActive = isTabIdValid ? tab.id === activeTabId : index === 0;

        return (
          <li
            className={classNames({ 'is-active': isActive })}
            data-cy="Tab"
            key={tab.id}
            onClick={() => {
              if (!isActive) {
                onTabSelected(tab.id);
              }
            }}
          >
            <a href={`#${tab.id}`} data-cy="TabLink">
              {tab.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

// const [activeTabId, setActiveTabId] = useState(tabs[0].id);
// const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];
// return (
//   <div className="section">
//     <h1 className="title">
//       Selected tab is {activeTab.title}
//     </h1>
//     <div data-cy="TabsComponent">
//       <div className="tabs is-boxed">
//         <Tabs
//           tabs={tabs}
//           activeTabId={activeTabId}
//           onTabSelected={setActiveTabId}
//         />
//       </div>
//       <div className="block" data-cy="TabContent">
//         {activeTab.content}
//       </div>
//     </div>
//   </div>
// );
