import cn from 'classnames';
import 'bulma/css/bulma.css';

export const Tab = ({ id, title, tabActiveIdVar, changeTabFromTab }) => {
  const tabActiveIdVarFromApp = tabActiveIdVar;

  return (
    <button
      type="button"
      onClick={() => {
        changeTabFromTab(id);
      }}
    >
      <li
        className={cn({
          'is-active': id === tabActiveIdVarFromApp,
        })}
        data-cy="Tab"
      >
        <a href={`#${id}`} data-cy="TabLink">
          {title}
        </a>
      </li>
    </button>
  );
};
