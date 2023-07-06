import React, { useState } from 'react';
import classnames from 'classnames';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [value, setValue] = useState('tab-1');
  const [titleH1, setTitleH1] = useState('Tab 1');
  const [text, setText] = useState('Some text 1');

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${titleH1}`}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(({ id, title, content }) => {
              const isSelected = id === value;

              return (
                <li
                  key={id}
                  data-cy="Tab"
                  className={classnames({
                    'is-active': isSelected,
                  })}
                >
                  <a
                    href={`#${id}`}
                    data-cy="TabLink"
                    onClick={() => {
                      setValue(id);
                      setTitleH1(title);
                      setText(content);
                    }}
                  >
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {text}
        </div>
      </div>
    </div>
  );
};
