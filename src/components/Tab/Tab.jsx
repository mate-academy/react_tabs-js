import { useRef, useEffect } from 'react';
import cn from 'classnames';

export const Tab = ({ id, title, tabActiveIdVar, changeTabFromTab }) => {
  const tabActiveIdVarFromApp = tabActiveIdVar;
  const myRef = useRef(null);

  function passId() {
    changeTabFromTab(id);
  }

  useEffect(() => {
    myRef.current.addEventListener('click', passId);

    return () => {
      myRef.current.removeEventListener('click', passId);
    };
  }, []);

  return (
    <li
      ref={myRef}
      className={cn({
        'is-active': id === tabActiveIdVarFromApp,
      })}
      data-cy="Tab"
    >
      <a href={`#${id}`} data-cy="TabLink">
        {title}
      </a>
    </li>
  );
};
