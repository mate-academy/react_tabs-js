import cn from 'classnames';

export const Tabs = ({ tabs, choosedTab, setChoosedTab }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': tab.title === choosedTab })}
              data-cy="Tab"
            >
              <a
                href={tab.id}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault();
                  setChoosedTab(tab.title);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.title === choosedTab).content}
      </div>
    </div>
  );
};
