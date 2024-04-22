import { useState } from 'react';
import { TabsList } from '../TabsList/TabsList';

export const Tabs = ({ tabs, setTab, active }) => {
  const [contents, setContents] = useState(tabs[0].content);

  const handleContents = content => {
    setContents(content);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <TabsList
          tabs={tabs}
          TabSelect={setTab}
          setContent={handleContents}
          active={active}
        />
      </div>

      <div className="block" data-cy="TabContent">
        {contents}
      </div>
    </div>
  );
};
