import React, {Component} from 'react';
import { get } from 'https';

export class TodoForm extends Component {

    constructor(){
        super();
        this.addTask = this.addTask.bind(this);
    }
    addTask(e){

        e.preventDefault();
        const inp = document.getElementById('todoInput');
        const val = inp.value;
        inp.value = "";
        this.props.addTask(val);     
        console.log(val);
    }

    render(){   

        return(
            <div>
                <div className="todo type1">
                    <form className="input-wrapper" onSubmit={this.addTask}>
                     <input id="todoInput"  type="text" className="add-todo"  name="add-todo" placeholder="What needs to be done?" />
                    </form>
                </div>
                 <button type="button" className="add-btn" onClick={this.addTask}/>
            </div>
        );
    }
}
