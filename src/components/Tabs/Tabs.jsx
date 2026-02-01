/**
 * Componente Tabs - Renderiza abas clicáveis e seu conteúdo.
 * Este componente é STATELESS (sem estado interno).
 *
 * @param {Object} props
 * @param {Array} props.tabs - Array de objetos { id, title, content }
 * @param {string} props.activeTabId - ID da aba atualmente ativa
 * @param {Function} props.onTabSelected - Callback(id) executado ao selecionar aba diferente
 */
export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  // Encontra a aba ativa pelo ID; usa primeira aba como fallback se ID inválido
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];
  const activeId = activeTab ? activeTab.id : null;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              // Aplica classe 'is-active' apenas na aba selecionada (estilo Bulma)
              className={tab.id === activeId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  // Só dispara callback se clicar em aba DIFERENTE da atual
                  // Evita re-renderizações desnecessárias
                  if (tab.id !== activeId) {
                    onTabSelected(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Área de conteúdo: exibe o content da aba ativa */}
      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : ''}
      </div>
    </>
  );
};
