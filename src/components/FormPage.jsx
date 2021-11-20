import React from "react";
import Table from "./Table";

class FormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            toDoList :[
                {
                    id:1,
                    date:"2021-11-18",
                    todo:"Intro ReactJS",
                    location:"https://images.unsplash.com/photo-1563461660947-507ef49e9c47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
                    note:"Prepare VSCode, NodeJS and CRA",
                    status:"Done"
                }
            ]
         }
        }
        
        
    btnSubmit =()=>{
        let toDoList=this.state.toDoList
        toDoList.push({
            date : this.refs.date.value,
            todo : this.refs.todo.value,
            location : this.refs.location.value,
            note : this.refs.note.value,
            status : "Done"
        })
        console.log(this.state.toDoList)
        this.setState({toDoList})
        console.log(toDoList)
        this.refs.date.value="";
        this.refs.todo.value="";
        this.refs.location.value="";
        this.refs.note.value="";

        
    }

    printData = () =>{
        return this.state.toDoList.map((value,index)=>{
            return (
                <tr>
                    <td>{index+1}</td>
                    <td>{value.date}</td>
                    <td>{value.todo}</td>
                    <td><img src={value.location} width="25%" alt="..."/></td>
                    <td>{value.note}</td>
                    <td>{value.status}</td>
                </tr>
            )
        })
    }



    render() { 
    return (
            <div className="container-fluid d-flex">
                <div className="row">
                    <div className="col-2">
                    <form className="m-2">
                        <label for="date">Date
                        <input id="date" type="date" ref="date"/>
                        </label>
                        <label for="todo">To Do
                        <input id="todo"type="text" ref="todo" />
                        </label>
                        <label for="location">Location
                        <input id="location" type="text" ref="location" />
                        </label>
                        <label for="note">Note
                        <textarea id="note" type="text" ref="note"/>
                        </label>
                        <button type="button"className="btn btn-primary mt-2" onClick={this.btnSubmit}> Submit</button>
                    </form>
                    </div>

                </div>
                <div className="col-10 ">
                    <Table cetak={this.printData()}/>
                </div>

            
                
            </div>
         );
    }
}
 
export default FormPage;