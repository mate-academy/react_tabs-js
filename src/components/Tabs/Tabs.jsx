export const Tabs = ({ tabs, selectedTab }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          <li className="is-active" data-cy="Tab">
            <a href="#tab-1" data-cy="TabLink">
              Tab 1
            </a>
          </li>

          <li data-cy="Tab">
            <a href="#tab-2" data-cy="TabLink">
              Tab 2
            </a>
          </li>

          <li data-cy="Tab">
            <a href="#tab-3" data-cy="TabLink">
              Tab 3
            </a>
          </li>
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
