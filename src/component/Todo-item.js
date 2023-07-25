
import React,{useState} from 'react';

function Todoitem() {
    const [todos, setTodos] = useState([]);
    const [newtodo, setNewTodos] = useState("");
  const handleAddTodo=()=>{
        if (newtodo.trim()!== "") 
       {
        setTodos([...todos,{text:newtodo.trim(),checked:false}]);
        setNewTodos("");
            
        }
    };
    const handleDeleteTodo=(index)=> {
 const newTodos=[...todos];
 newTodos.splice(index, 1);
 setTodos(newTodos);
  };
 const handletoggleTodo=(index)=> {
    const newTodos=[...todos];
    newTodos[index].checked=!newTodos[index].checked;
    setTodos(newTodos);
  };

  return (
    <div className='main'> 
    <h1> <i class="bi bi-card-checklist"></i>To-Do List</h1>
    <input type="text"
    className='text'
      value={newtodo} 
       onChange={(e) => setNewTodos(e.target.value)}  />
       
       <button className='add' onClick={handleAddTodo}>Add</button>
       <ul>
       {todos.map((todo,index) => (
      <li key={index}>
     <input type='checkbox' 
     checked={todo.checked} 
     onChange={()=> handletoggleTodo(index)} />
     <span style={
        {
            textDecoration:todo.checked?"line-through":"none"
        }
     }>
     {todo.text}</span>
     <button  className='remove' onClick={()=>handleDeleteTodo(index)} >REMOVE</button>
    </li>
       )) }
    
    
   </ul>
    </div>
  );
}

export default Todoitem