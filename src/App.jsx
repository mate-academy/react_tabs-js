// Importações necessárias para o funcionamento do componente
import React, { useState } from 'react'; // Hook useState para gerenciar estado
import 'bulma/css/bulma.css'; // Framework CSS Bulma para estilização
import '@fortawesome/fontawesome-free/css/all.css'; // Ícones do FontAwesome
import './App.scss'; // Estilos específicos do componente App
import { Tabs } from './components/Tabs/Tabs'; // Componente de Tabs customizado

// Array de dados das abas - cada aba possui id único, título e conteúdo
export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

// Componente principal da aplicação
export const App = () => {
  // Estado para controlar qual aba está ativa - inicia com a primeira aba
  const [activeTabID, setActiveTabID] = useState(tabs[0].id);

  // Busca o título da aba ativa baseado no ID, com fallback para a primeira aba
  const activeTabTitle =
    tabs.find(tab => tab.id === activeTabID)?.title || tabs[0].title;

  // Renderização do componente
  return (
    <div className="section">
      {/* Título que mostra qual aba está selecionada */}
      <h1 className="title">Selected tab is {activeTabTitle}</h1>
      {/* Componente Tabs com props: dados das abas, ID ativa e função de callback */}
      <Tabs
        tabs={tabs}
        activeTabId={activeTabID}
        onTabSelected={setActiveTabID}
      />
    </div>
  );
};
