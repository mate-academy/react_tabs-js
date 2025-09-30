export const Tabs = ({ tabs }) => {
  <div className="block" data-cy="TabContent">
    {tabs.map(tab => (
      <div
        key={tab.id}
        id={tab.id}
        className={`content ${tab.id === 'tab-1' ? '' : 'is-hidden'}`}
      >
        <p>{tab.content}</p>
      </div>
    ))}
  </div>;
};
