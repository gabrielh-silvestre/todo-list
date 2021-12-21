import { Header } from './components/Header';
import { InputTask } from './components/InputTask';
import TaskList from './components/TaskList';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <div className="h-screen bg-gray-dark">
      <Header />
      <main>
        <InputTask />
        <TaskList />
      </main>
      <GlobalStyle />
    </div>
  );
}

export default App;
