import React, { Component } from 'react';

export default class TodoInput extends Component {
  render() {
    const {item,handleChange,handleSubmit,editItem}=this.props;
  
  return (
      <div className="card card-body my-3">
<form onSubmit={handleSubmit}>
    <div className="input-group">
      <div className="input-group-prepend">
          <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book"></i> 
          </div>
      </div>
      <input type="text" className="form-control text-capitalize"
              placeholder="add todo item"
              value={item}
              onChange={handleChange}
              />
    </div>
    <button type="submit" class={
      editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"
    }>
      {
        /*here we are using JSX so that we can dynamically return */
        editItem ? "edit item" : "add item"
      }
    </button>
</form>
</div>
  );
}
}
