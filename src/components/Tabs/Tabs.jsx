export const Tabs = ({ tabs, selectedTabId, setSelectedTabId }) => {
  const {
    id,
    title,
    content,
  } = tabs;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          <li data-cy="Tab">
            <a
              href={`#${id}`}
              data-cy="TabLink"
              onClick={() => setSelectedTabId('is-active')}
            >
              {title}
            </a>
          </li>
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};
