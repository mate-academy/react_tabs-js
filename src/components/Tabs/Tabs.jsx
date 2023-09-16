import cn from 'classnames';
import { TabContent } from './TabContent/TabContent';

export const Tabs = ({ states, tabs, selectedTitle, selectedContent }) => (
  <div className="section">
    <h1 className="title">
      <>Selected tab is </>
      {selectedTitle}
    </h1>

    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={cn('li', {
                'is-active': selectedTitle === tab.title,
              })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  states(tab.title, tab.content);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {tabs.map(tab => (
        tab.content === selectedContent ? (
          <TabContent content={tab.content} />
        ) : (
          ''
        )
      ))}

    </div>
  </div>
);
