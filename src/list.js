import React from 'react';
const List = ({ items, removeItem, editItem }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;


        return ( 
  <div className='ouputcontainer'>
     <h3 className='addeditem'  >{title}</h3>
        <div  className='btn-container'>
           <button   type='button'  className='edt-delete-btn'  id="edit"
             onClick={() => editItem(id)} >  
               edit 
              </button>

              <button  type='button' className='edt-delete-btn'
                onClick={() => removeItem(id)}
              > delete
              </button>
              </div> 
         </div>
        );
      })}
    </div>
  );
};

export default List;