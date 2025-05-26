import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';
import { tabs } from './tabsFromServer';

export const App = () => {
  return <Tabs tabs={tabs} />;
};
