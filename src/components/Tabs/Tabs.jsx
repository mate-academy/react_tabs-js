import cn from "classnames";

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <>
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={cn({ "is-active": tab.id === selectedTab.id })}
            onClick={() => {
              if (selectedTab !== tab) {
                onTabSelected(tab);
              }
            }}
            data-cy="Tab"
          >
            <a href={`#${tab.id}`} data-cy="TabLink">
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className="block" data-cy="TabContent">
      {selectedTab.content}
    </div>
  </>
);
