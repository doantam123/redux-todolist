import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoAction';

function App() {
  const [todo,setTodo] = useState();
  const dispatch = useDispatch();
  const Todo = useSelector(state => state.Todo)

  const {todos} = Todo;

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(AddTodoAction(todo))
  }

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  }


  return (
    <div className="App">

      <header className="App-header">
        Todo List App of Đoàn Tâm
      </header>
      <form onSubmit={handleSubmit}>
        <input
        onChange={(e) => setTodo(e.target.value)}
         placeholder='Enter what do want to do' />
        <button type='submit'>
          Go
        </button>
      </form>

      <ul className='allTodo'>
        {
          todos && todos.map((t) => (
            <li key={t.id} className='oneTodo'>
            <span className='textTodo'>{t.todo}</span>
            <button
            onClick={() => removeHandler(t)}
            >Delete</button>
          </li>
          ))
        }    
      </ul>

    </div>
  );
}

export default App;
