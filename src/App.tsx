import { Header } from './components/Header'
import { InputTask } from './components/InputTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className='h-screen bg-gray-dark'>
      <Header />
      <InputTask />
      <TaskList />
    </div>
  );
}

export default App;
