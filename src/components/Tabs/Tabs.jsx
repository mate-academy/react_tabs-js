export const Tabs = ({
  tab: { id = 'tab-1', title, content }, setValue, value,
}) => (
  <li data-cy="Tab" className={value === id ? 'is-active' : ''}>
    <a
      href={`#${id}`}
      data-cy="TabLink"
      onClick={() => setValue(id)}
    >
      {title}
    </a>
  </li>
);
