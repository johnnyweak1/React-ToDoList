import React from "react";
import TodoItem from './TodoItem'
import InputArea from './InputArea'

function App() {
  
  
  const [items, setItems] = React.useState([])

  

  function addItem(item, fn)
  {
    setItems(function (prevItems)
    {
        return ([...prevItems, item])
    })
    fn("")
  }

  function deleteItem(id){
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      })
    })
  }
  
  
  
    return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem}/>
      <div>
        <ul>
            {items.map((item, index) => <TodoItem key={index} id={index} text={item} onClick={deleteItem}/>)}
        </ul>
      </div>
    </div>
  );
}

export default App;