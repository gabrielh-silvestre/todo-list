import { Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { TaskDetail } from './pages/TaskDetail';

function App() {
  return (
    <div className="h-screen bg-gray-dark">
      <Header />
      <main>
        <Switch>
          <Route path="/task" render={TaskDetail} />
          <Route exact path="/" render={Home} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
