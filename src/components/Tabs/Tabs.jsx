
import cn from 'classnames';


export const Tabs = ({ tab, nameTable, textTable, nameTab }) => {
  if (!tab) {
    return null;
  }
  const { id, title, content } = tab

  return (

    <li
      className={cn({ 'is-active': nameTab === title })}
      data-cy="Tab"
      >
      <a onClick={() => {
        nameTable(title)
        textTable(content)
      } }
        href={`#${id}`}
        data-cy="TabLink">
        {title}
      </a>
    </li>
  )
};
