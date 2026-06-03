export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  // 1. Encontra a aba ativa primeiro
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {/* 2. O MAP AGORA SÓ MULTIPLICA OS <li> (BOTÕES DAS ABAS) */}
          {tabs.map(tab => {
            // Verifica se essa aba do loop é a aba ativa
            const isActive = tab.id === activeTab.id;

            return (
              <li
                key={tab.id}
                className={isActive ? 'is-active' : ''} // Requisito 3: adiciona a classe se for ativa
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`} // Requisito 5: link dinâmico para o ID
                  data-cy="TabLink"
                  onClick={event => {
                    event.preventDefault(); // Evita que a página role por causa do href

                    // Requisito 7: Só chama se o usuário clicar em uma aba NÃO ativa
                    if (!isActive) {
                      onTabSelected(tab.id);
                    }
                  }}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 3. UMA ÚNICA CAIXA DE CONTEÚDO FORA DO MAP */}
      <div className="block" data-cy="TabContent">
        {/* Mostra apenas o conteúdo da aba que descobrimos estar ativa lá em cima */}
        {activeTab && activeTab.content}
      </div>
    </div>
  );
};
