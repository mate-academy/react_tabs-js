export function Tab({ title, id, isActive, selectTab }) {
  return (
    <li className={`${isActive ? 'is-active' : null}`} data-cy="Tab">
      <a
        href={`#${id}`}
        data-cy="TabLink"
        onClick={!isActive ? selectTab : null}
      >
        {title}
      </a>
    </li>
  );
}
