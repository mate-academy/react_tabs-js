import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { useState } from 'react';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  let CopyTabs = [...tabs];
  debugger;

  const [activeTabId, setActiveTabId] = useState(CopyTabs[0].id);
  const activeTab = CopyTabs.find(tab => tab.id === activeTabId || CopyTabs[0]);
  console.log(activeTab);
  console.log(activeTab.title);

  return (
    <div className="section">
      <h1 className="title">Selected tab is {activeTab.title}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <Tabs
            tabs={CopyTabs}
            activeTabId={activeTabId}
            onTabSelected={setActiveTabId}
          />
        </div>

        <div className="block" data-cy="TabContent">
          {activeTab.content}
        </div>
      </div>
    </div>
  );
};

// export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
//   const isTabIdValid = tabs.some(tab => tab.id === activeTabId);
//   return (
//     <ul>
//       {tabs.map((tab, index) => {
//         const isActive = isTabIdValid
//           ? tab.id === activeTabId
//           : index === 0;
//         return (
//           <li
//             className={classNames({ 'is-active': isActive })}
//             data-cy="Tab"
//             key={tab.id}
//             onClick={() => {
//               if (!isActive) {
//                 onTabSelected(tab.id);
//               }
//             }}
//           >
//             <a href={`#${tab.id}`} data-cy="TabLink">
//               {tab.title}
//             </a>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };
