export const Tabs = ({ tab, select, set }) => {
  const check = tab.id === select;
  let condition = '';

  if (check) {
    condition = 'go';
  }

  return (
    <li key={tab.id} data-cy="Tab" className={condition && 'is-active'}>
      <a href={`#${tab.id}`} data-cy="TabLink" onClick={() => set(tab.id)}>
        {tab.title}
      </a>
    </li>
  );
};
