import React from 'react';

const TabItem = ({ t, isActive, setText, setIsActive, setValue }) => {
  return (
    <li
      key={t.id}
      className={isActive === t.id ? 'is-active' : ''}
      data-cy="Tab"
    >
      <a
        href={`#${t.id}`}
        onClick={() => {
          setText(t.content);
          setValue(t.title);
          setIsActive(t.id);
        }}
        data-cy="TabLink"
      >
        {t.content}
      </a>
    </li>
  );
};

export default TabItem;
