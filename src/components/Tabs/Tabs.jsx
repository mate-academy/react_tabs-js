import { Tab } from '../Tab';

export const Tabs = ({ tabs, selected, onTabSelected }) => {
  const { content } = tabs.find(item => item.id === selected) || {};

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(
            item => (
              <Tab
                tab={item}
                selected={selected}
                onTabSelected={onTabSelected}
                key={item.id}
              />
            ),
          )}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content ?? ''}
      </div>
    </div>
  );
};
