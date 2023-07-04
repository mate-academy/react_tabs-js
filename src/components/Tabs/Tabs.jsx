export const TabContent = ({ selectedTab }) => (
  <div className="block" data-cy="TabContent">
    {selectedTab.content}
  </div>
);
