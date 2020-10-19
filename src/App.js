import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state={
    items:[],
    id: uuidv4() ,
    item:"",
    editItem:false
  };

  handleChange= (e)=>{
    this.setState({
      item:e.target.value
    })
  };

  handleSubmit= (e) =>{
      e.preventDefault();

      //taking values and putting them into new item
      const newItem={
        id:this.state.id,
        title :this.state.item 
      }
   
     // console.log(newItem);
      const updatedItems=[...this.state.items,newItem];

      // so after this we need to setState for next item
      this.setState({
            items: updatedItems,
            item:"",
            id:uuidv4(),
            editItem:false
      });
  };

  //Clear List Method
  clearList = ()=>{
    //console.log("method clearList");
    this.setState({
        items:[]
    });
  } ;

  //for deleting single item
  handleDelete = (id)=>{
    const filteredItems= this.state.items.filter(item=> item.id!=id)

    // so after filtering we need to change the items into state
    this.setState({
      items: filteredItems
    });
  };
  
  //Method for Edit pen
  handleEdit= id=>{
    const filteredItems=this.state.items.filter(item=>item.id!=id)

    const editItem=this.state.items.find(item=> item.id==id)
    
    console.log(editItem);

    this.setState({
      items:filteredItems,
      item:editItem.title,
      id:id,
      editItem:true
    })

  };

  render(){
  return (
  <div className="container">
    <div className="row">
      <div className="col-10  mx-auto col-md-8 mt-4">
        <h3 className="text-capitalize text-center">todo input</h3>
      <TodoInput
        item={this.state.item}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        editItem={this.state.editItem}

      />
      <TodoList items={this.state.items} clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
      
      />
      </div>
    </div>
  </div>
  );
}
}

export default App;
