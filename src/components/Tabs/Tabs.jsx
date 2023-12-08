import cn from 'classnames';

export const Tabs = ({ selectedTabItem, selectedTabContent, arrTabs }) => {
  const handleKeyDown = (event, itemId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      selectedTabItem(itemId);
    }
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTabContent.title}`}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {arrTabs.map(item => (
              <li
                role="tab"
                className={cn({
                  'is-active': item.id === selectedTabContent.id,
                })}
                data-cy="Tab"
                key={item.id}
                onClick={() => selectedTabItem(item.id)}
                onKeyDown={e => handleKeyDown(e, item.id)}
              >
                <a href={`#${item.id}`} data-cy="TabLink">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTabContent.content}
        </div>
      </div>
    </div>
  );
};
