import cn from 'classnames';

export const Tabs = ({ selectTab, allTab, byClick }) => (
  <>
    <div className="tabs is-boxed">
      <ul>
        {allTab.map(tab => (
          <li
            key={tab.id}
            className={cn({
              'is-active': selectTab === tab.id,
            })}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => byClick(tab.id)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {allTab.find(tab => tab.id === selectTab)?.content}
    </div>
  </>
);
