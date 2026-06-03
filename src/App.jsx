import React, { useState } from 'react'; // Adicionado o useState aqui
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import tabsFromServer from './tabsFromServer.json';
import { Tabs } from './components/Tabs';

function getPreparedTabs(tabList) {
  return [...tabList]; // Deixando a cópia simples como você fez
}

export const App = () => {
  const visibleTabs = getPreparedTabs(tabsFromServer);

  // 1. Criando o estado para controlar qual ID de aba está ativo
  const [activeTabId, setActiveTabId] = useState(visibleTabs[0]?.id || 0);

  // 2. Encontrando a aba ativa atual para conseguir pegar o título dela no <h1>
  const currentActiveTab =
    visibleTabs.find(tab => tab.id === activeTabId) || visibleTabs[0];

  return (
    <main className="main">
      <div className="section">
        {/* Requisito 8: Mostrar o título da aba ativa no h1 do App */}
        {currentActiveTab && (
          <h1 className="title">Selected tab is {currentActiveTab.title}</h1>
        )}

        {/* Passando as props com os nomes exatos exigidos pelo exercício */}
        <Tabs
          tabs={visibleTabs}
          activeTabId={activeTabId}
          onTabSelected={id => setActiveTabId(id)}
        />
      </div>
    </main>
  );
};
