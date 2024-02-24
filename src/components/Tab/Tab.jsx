import cn from 'classnames';
import 'bulma/css/bulma.css';

export const Tab = ({ tab, activeTab, changeTabFromTab }) => {
  return (
    <button
      type="button"
      onClick={() => {
        changeTabFromTab(tab);
      }}
    >
      <li
        className={cn({
          'is-active': tab.id === activeTab.id,
        })}
        data-cy="Tab"
      >
        <a href={`#${tab.id}`} data-cy="TabLink">
          {tab.title}
        </a>
      </li>
    </button>
  );
};
