export const Tab = ({ tab }) => (
  <li className="is-active" data-cy="Tab">
    <a href={`#${tab.id}`} data-cy="TabLink">
      {tab.title}
    </a>
  </li>
);
