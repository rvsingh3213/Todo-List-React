import React, { Component } from 'react';
import TodoItem from './TodoItem';
export default class TodoList extends Component {
render() {
  const {items,clearList,handleDelete,handleEdit}=this.props;
  return (
    <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>

        {
            items.map(item =>{
              return <TodoItem key={item.id} 
              title={item.title}
              /* we cannot pass handleDelete like this
                  handleDelete={handleDelete(item.id)}   ---> we are right away invoking this method
                  so what we need to do is
                  we need to create an arrow function and need to implicit return a reference through
                  an Arrow function
              */
              handleDelete={()=>handleDelete(item.id)}
              handleEdit={()=>handleEdit(item.id)}
              />
            })
        }
      
      <button type="button" className="btn btn-danger text-capitalize mt-5" onClick={clearList}>clear list</button>

    </ul>
          
        );
        }
}
