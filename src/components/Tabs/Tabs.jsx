import cn from "classnames";

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {

    return (
        <>
            {tabs.map(({id, title}) => (
                <li 
                    key={id}
                    className={cn({'is-active' : id === activeTabId})}
                    data-cy="Tab"
                >
                    <a
                        href={`#${id}`}
                        data-cy="TabLink"
                        onClick={() => (
                            (activeTabId !== id) 
                            && onTabSelected(id)
                        )}
                    >
                        {title}
                    </a>
                </li>
            ))}
        </>
    )
};
