import { Tab } from '../Tab';
import { getActiveTabContent } from '../../helpers/getActiveTabContent';

export const Tabs = ({ tabs, tabActiveIdVar, changeTabFromTabs }) => {
  const contentActive = getActiveTabContent(tabs, tabActiveIdVar);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <Tab
                key={id}
                id={id}
                title={title}
                tabActiveIdVar={tabActiveIdVar}
                changeTabFromTab={e => {
                  changeTabFromTabs(e);
                }}
              />
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {contentActive}
      </div>
    </div>
  );
};
