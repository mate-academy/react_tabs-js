import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
	// Найти индекс активной вкладки
	const activeIndex = tabs.findIndex(tab => tab.id === activeTabId);
	const currentIndex = activeIndex === -1 ? 0 : activeIndex;
	const activeTab = tabs[currentIndex];

	const handleTabClick = (tab, idx) => (e) => {
		e.preventDefault();
		if (idx !== currentIndex && typeof onTabSelected === 'function') {
			onTabSelected(tab.id);
		}
	};

	return (
		<>
			<ul>
				{tabs.map((tab, idx) => (
					<li
						key={tab.id}
						data-cy="Tab"
						className={idx === currentIndex ? 'is-active' : ''}
					>
						<a
							data-cy="TabLink"
							href={`#${tab.id}`}
							onClick={handleTabClick(tab, idx)}
						>
							{tab.title}
						</a>
					</li>
				))}
			</ul>
			<div className="block" data-cy="TabContent">
				{activeTab?.content}
			</div>
		</>
	);
};
