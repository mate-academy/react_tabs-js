export const Tabs = ({
  tabs,
  selectedTab,
  setSelectedTab,
  message,
  setMessage,
}) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li className={selectedTab === tab.title && 'is-active'} data-cy="Tab">
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => {
              setSelectedTab(tab.title);
              setMessage(tab.content);
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
