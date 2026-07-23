const Tabs = ({ setText, isActive, setIsActive, setValue, tabs }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(t => {
          return (
            <li
              key={t.id}
              className={isActive === t.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${t.id}`}
                onClick={() => {
                  setText(t.content);
                  setValue(t.title);
                  setIsActive(t.id);
                }}
                data-cy="TabLink"
              >
                {t.content}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
