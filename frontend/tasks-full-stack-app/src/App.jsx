import './App.css'
import Home from './components/Home';
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm';
import TaskDetails from './components/TaskDetails';
import { Route, Routes } from 'react-router-dom';
import Nav from './common/Nav';
import Footer from './common/Footer';

function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/tasks' element={<TaskList />} />
        <Route path='/tasks/:id' element={<TaskDetails />} />
        <Route path='/tasks/new' element={<TaskForm />} />
        <Route path='/tasks/:id/edit' element={<TaskForm />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
