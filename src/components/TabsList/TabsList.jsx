export const TabsList = ({ tabs, TabSelect, setContent, active }) => {
  const setTab = (title, content, id) => {
    TabSelect(title, id);
    setContent(content);
  };

  const activ = active;

  return (
    <ul>
      {tabs.map(tab => (
        <li
          className={tab.id === activ ? 'is-active' : ''}
          data-cy="Tab"
          key={tab.id}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => setTab(tab.title, tab.content, tab.id)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
