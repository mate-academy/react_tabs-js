import React from 'react';
import './Tabs.scss';
import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  selectedTab,
}) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={cn({ 'is-active': selectedTabId === tab.id })}
          >
            <a
              href={`#${selectedTabId}`}
              data-cy="TabLink"
              onClick={() => selectedTab(tab.title)}
            >
              {selectedTab && tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div
      className="block"
      data-cy="TabContent"
    >
      <>
        <p className="content">
          {selectedTabId && tabs.find(tab => tab.id === selectedTabId)?.content}
        </p>

        {selectedTabId === tabs[3]?.id && (
          <div className="surprise">
            <p className="surprise__text">
              Click on the picture and listen to this legendary song: `People
              are Strange` by The Doors
            </p>
            {/* eslint-disable-next-line max-len */}
            <a
              href="https://www.youtube.com/watch?v=AgHaGrZkkv4"
              className="surprise__link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                /* eslint-disable-next-line max-len */
                src="https://i.ytimg.com/vi/AgHaGrZkkv4/maxresdefault.jpg"
                alt="Album Cover"
                className="surprise__image"
              />
            </a>
          </div>
        )}
      </>
    </div>
  </div>
);
