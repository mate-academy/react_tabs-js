// import React from 'react';

// export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
//   const handleTabClick = (event, tabId) => {
//     event.preventDefault();
//     if (tabId !== activeTabId) {
//       onTabSelected(tabId);
//     }
//   };

//   return (
//     <div>
//       <div className="tabs is-boxed">
//         <ul>
//           {tabs.map(tab => (
//             <li
//               key={tab.id}
//               className={activeTabId === tab.id ? 'is-active' : ''}
//               data-cy="Tab"
//             >
//               <a
//                 href={`#${tab.id}`}
//                 data-cy="TabLink"
//                 onClick={event => handleTabClick(event, tab.id)}
//               >
//                 {tab.title}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="block" data-cy="TabContent">
//         {tabs.find(tab => tab.id === activeTabId)?.content}
//       </div>
//     </div>
//   );
// };

import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const handleTabClick = (event, tabId) => {
    event.preventDefault();
    if (tabId !== activeTabId) {
      onTabSelected(tabId);
    }
  };

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={selectedTab.id === tab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={event => handleTabClick(event, tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
