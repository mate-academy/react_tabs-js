export const Tabs = ({ selected, tabs, sendTitle }) => {
  const obj = tabs.find(item => item.id === selected);

  sendTitle(obj.title);

  return (
    <div className="block" data-cy="TabContent">
      {obj.content}
    </div>
  );
};
