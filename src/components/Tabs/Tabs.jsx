import TabItem from './TabItem';

const Tabs = ({ setText, isActive, setIsActive, setValue, tabs }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(t => {
          return (
            <TabItem
              t={t}
              setText={setText}
              isActive={isActive}
              setIsActive={setIsActive}
              setValue={setValue}
              key={t.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
