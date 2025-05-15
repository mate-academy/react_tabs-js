export const Tabs = ({ tabs, activeTab }) => {
  return (
    <div className="block">
      {tabs.map(tab => (
        <div key={tab.id}>
          {activeTab === tab.id && (
            <div className="content" data-cy="TabContent">
              {tab.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
