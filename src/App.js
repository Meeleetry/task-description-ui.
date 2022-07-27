import './App.css';
import React,{useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle'; 
// import "react-datepicker/dist/react-datepicker.css";
import DateTimePicker from 'react-datetime-picker';
import TodoList from './components/TodoList';
import Dropdown from './components/Dropdown';

const App = () => {
  const initialState = JSON.parse(localStorage.getItem('todos')) || []; 
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  const [selected, setSelected]=useState('Assign User');
  const [value, onChange] = useState(new Date());
  const shoot = (a) => {
    alert(a);
  }
 

  useEffect(() =>{ 
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return ( 
  <div className='container'>

    <div className='app-wrapper'>
      <div>
        <Header/>
      </div>
      <div>
        <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}/>
      </div>
      <div>
        <TodoList todos={todos} 
        setTodos ={setTodos}
        setEditTodo = {setEditTodo} 
        />
        <div className='deep'>
          <h3>Date : Time</h3>
          <DateTimePicker onChange={onChange} value={value} />
        </div>
          <div>
            <Dropdown selected={selected} setSelected={setSelected}/>
          </div>
        <div className='sc'>
            <button onClick={() => shoot("Responsive!")}>Submit</button>
        
            <button onClick={() => shoot("Responsive")}>Cancel</button>  
        </div>
      </div>
    </div>
    
  </div>
  );
  
}

export default App;
