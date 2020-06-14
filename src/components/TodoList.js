
import React, { Component } from "react";
import TodoItem from "./TodoItem";
import {connect} from 'react-redux';
import * as actionTypes from '../store/actions/actions';

class TodoList extends Component {
  render() {
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {this.props.todo.map((item,index) => {
          return (
            <TodoItem
            key={index}
            id={item.id}
            title={item.title} 
            />
          );
        })}

        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={this.props.onClearList}
        >
          clear list
        </button>
      </ul>
    );
  }
 
}
const mapStateToProps=state=>{
    return{
        todo :  state.tdr.todo
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        onClearList:()=>{dispatch(actionTypes.clearAll())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);