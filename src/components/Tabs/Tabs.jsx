
export const Tabs = ({
    tabs,
    activeTabId,
    onTabSelected
}) => {

    const activeSearch = tabs.find(tab => tab.id === activeTabId) || tabs[0]

    const selctActive = (click) => {
        if (click === activeSearch.id) {

        } else {
            onTabSelected(click);
        }
    }

    return (

        <div data-cy="TabsComponent">
            <div className="tabs is-boxed">
                <ul> {
                    tabs.map(tab =>
                        <li key={tab.id}
                            className=
                            {activeSearch.id === tab.id && "is-active"}
                            data-cy="Tab">
                            <a href={`#${tab.id}`}
                                onClick={(event) => {
                                    event.preventDefault(); // Canceled action 
                                    selctActive(tab.id)  // Call my function 
                                }}
                                data-cy="TabLink">
                                {tab.title}
                            </a>
                        </li>
                    )}
                </ul>
            </div>

            <div className="block" data-cy="TabContent">
                {activeSearch.content}
            </div>
        </div >
    )
}


//Если id неверный:
// 	•	UI должен вести себя так, будто активна первая вкладка.

// Не только по контенту,
// но и по классу is-active.