export const Tabs = ({
  tab: { id, title, content }, setValue, value,
}) => (
  <li data-cy="Tab" className={value === id ? 'is-active' : ''}>
    <a
      href={`#${id}`}
      data-cy="TabLink"
      onClick={(event) => {
        event.preventDefault(setValue(id));
      }}
    >
      {title}
    </a>
  </li>
);
