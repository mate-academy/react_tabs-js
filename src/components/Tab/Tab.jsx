import classNames from 'classnames';

export const Tab = ({
  tab,
  curent,
  setCurent,
}) => {
  const tabClassName = classNames(
    '',
    { 'is-active': curent.id === tab.id },
  );
  const tabLink = `#${tab.id}`;

  return (
    <li className={tabClassName} data-cy="Tab">
      <a
        href={tabLink}
        data-cy="TabLink"
        onClick={() => {
          setCurent(tab);
        }}
      >
        {tab.title}
      </a>
    </li>
  );
};
