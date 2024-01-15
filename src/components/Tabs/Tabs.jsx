export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <div className="section">
    <h1 className="title">Selected tab is {selectedTab.title}</h1>

    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              className={selectedTab === tab ? "is-active" : ""}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (selectedTab !== tab) {
                    onTabSelected(tab);
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
        {selectedTab.content}
      </div>
    </div>
  </div>
);

/*
 <li className="is-active" data-cy="Tab">
              <a
                href="#tab-2"
                data-cy="TabLink"
                onClick={(event) => {
                  setselectedTab(
                    event.target.getAttribute("href").substring(1)
                  );

                  // event.currentTarget.classList.add("is-active");
                }}
              >
                Tab 2
              </a>
            </li>

            <li data-cy="Tab">
              <a href="#tab-3" data-cy="TabLink">
                Tab 3
              </a>
            </li>

*/
