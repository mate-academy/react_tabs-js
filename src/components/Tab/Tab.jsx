export const Tab = ({ id, title, isActive, onClick }) => (
  <li className={isActive ? 'is-active' : ''} data-cy="Tab">
    <a href={`#${id}`} data-cy="TabLink" onClick={() => onClick()}>
      {title}
    </a>
  </li>
);
