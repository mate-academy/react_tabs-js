import { TabElement } from '../TabElement';

export const Tabs = ({ activeTabId, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <TabElement activeTabId={activeTabId} onTabSelected={onTabSelected} />
      </div>

      <div className="block" data-cy="TabContent">
        {activeTabId.content}
      </div>
    </div>
  );
};
