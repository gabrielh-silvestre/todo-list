import { Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="h-screen bg-gray-dark">
      <Header />
      <Switch>
        <Route path="/" render={Home} />
      </Switch>
    </div>
  );
}

export default App;
