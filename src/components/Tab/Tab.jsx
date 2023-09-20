import classnames from 'classnames';

export const Tab = ({ tab, selected, onTabSelected }) => {
  const { id, title } = tab;

  return (
    <li
      className={classnames(id === selected ? 'is-active' : '')}
      data-cy="Tab"
    >
      <a
        href={`#${id}`}
        data-cy="TabLink"
        onClick={() => onTabSelected(id)}
      >
        {title}
      </a>
    </li>
  );
};
