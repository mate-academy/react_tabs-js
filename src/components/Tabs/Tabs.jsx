import { Tab } from '../Tab/Tab';

export const Tabs = ({
  tabs,
  curent,
  // visibleContent,
  setCurent,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              tab={tab}
              curent={curent}
              setCurent={setCurent}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {curent.content}
      </div>
    </div>
  );
};
