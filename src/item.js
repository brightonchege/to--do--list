import React, { useState, useEffect } from 'react';
import List from './list';
  const localstore = () => {
    let list = localStorage.getItem('list');
    if (list) {
      return (list = JSON.parse(localStorage.getItem('list')));
    } else {
      return [];
    }
  };
  function Todolistadding() {
    const [name, setName] = useState('');
    const [list, setList] = useState(localstore());
    const [Editing, setEditing] = useState(false);
    const [editID, setEditID] = useState(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!name) {
     } else if (name && Editing) {
        setList(
          list.map((item) => {
            if (item.id === editID) {
              return { ...item, title: name };
            }
            return item;
          })
        );
        setName('');
        setEditID(null);
        setEditing(false);
      } else {
        const newItem = { title: name };
        setList([...list, newItem]);
        setName('');
      }
    };
    const clearList = () => {
      setList([]);
    };
    const removeItem = (id) => {
      setList(list.filter((item) => item.id !== id));
    };
    const editItem = (id) => {
      const itemselected = list.find((item) => item.id === id);
      setEditing(true);
      setEditID(id);
      setName(itemselected.title);
    };
    useEffect(() => {
      localStorage.setItem('list', JSON.stringify(list));
    }, [list]);



    
    return (
<div className="App">
  <div class="project-container">
    <div class="sub-container">
      <h1 class="project-heading" > To do list    </h1>
       <header class="project-header">
          <input type="text" class="project-input" placeholder=' Type and Add anything'
             value={name}
               onChange={(e) => setName(e.target.value)}
      />
           <button 
           onClick={handleSubmit} id="add-button"
            class="add-button"
             type="submit"
             ><h3>
                {Editing ? 'edit' : 'add'}</h3></button>
         </header>
         <header class="middlepart"> 
         
          {list.length > 0 && (
           <div className='outputcontainer'>
          <List items={list} removeItem={removeItem} editItem={editItem} /> </div>) }
          </header>

         <header class="endpart">
          <button class="clearall"  onClick={clearList} ><h3> Clear all</h3></button>
           </header>
         </div>
       </div>
       
    </div>
 
    );
  }
  
  export default Todolistadding;
