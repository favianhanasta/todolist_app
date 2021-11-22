import React from "react";
import Table from "./Table";
import axios from "axios";

class FormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: "",
            todo: "",
            location:"",
            note:"",
            status:"",
            selectedIdx:null,
            toDoList :[]
         }
        }
         
    // menjalankan sebuah fungsi secara otomatis, pertama kali saat component atau page react js di render
    componentDidMount(){
        // fungsi yg digunakan untuk melakukan request data pertama kali ke backend
        this.getData();
    }

    getData = () =>{
        //Axios : melakukan request data ke banck-end atau API;
        axios.get("http://localhost:2000/todoList")
        .then((response)=>{
            console.log(response.data)
            // save data response kedalam state
            this.setState({toDoList:response.data})
        })
        .catch((err)=>{console.log(err)})
    }

    btnSubmit =()=>{
        let {date,todo,location,note}=this.state;
        axios.post("http://localhost:2000/todoList", {
            date,
            todo,
            location,
            note,
            status:"On Going"
        }).then((response)=>{
            // memanggil data terbaru untuk memperbarui data pada state
            this.getData()
            this.refs.date.value="";
            this.refs.todo.value="";
            this.refs.location.value="";
            this.refs.note.value="";
        })

        .catch((error)=>{
            console.log(error)
        })
    }

    btnEdit =(idx) =>{
        this.setState({ selectedIdx:idx })
    }

    btnDelete=(idx)=>{
        let temp = this.state.toDoList;
        temp.splice(idx,1)
        this.setState({ toDoList:temp})

    }

    

    printData = () =>{
        return this.state.toDoList.map((value,index)=>{
            if(this.state.selectedIdx == index){
            return (
                <div className="modal fade" id="edit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Add Produt</h5>
                                        <button type="button" className="btn close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                    <form>
                                        <div className="form-group">
                                        <label for="date">Date
                                            <input className="form-control" id="date" type="date" onChange={(event)=> this.handleInput(event.target.value, "editdate")}/>
                                        </label>
                                        </div>
                                        <div className="form-group">
                                        <label for="todo">To Do
                                            <input className="form-control" id="todo"type="text" defaultValue={value.todo} onChange={(event)=> this.handleInput(event.target.value, "editTodo")}/>
                                        </label>    
                                        </div>
                                        <div className="form-group">
                                        <label for="location">Location
                                            <input className="form-control" id="location"type="text" defaultValue={value.location} onChange={(event)=> this.handleInput(event.target.value, "editLocation")}/>
                                        </label>
                                        </div>
                                        <div className="form-group">
                                        <label for="note">Note
                                            <textarea className="form-control" id="note"type="text" defaultValue={value.note} onChange={(event)=> this.handleInput(event.target.value, "note")}/>
                                        </label>
                                    </div>
                                    </form>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" onClick={this.btnSubmit}>Save changes</button>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
            )
        }else {
            return (
                <tr>
                    <td>{index+1}</td>
                    <td>{value.date}</td>
                    <td>{value.todo}</td>
                    <td><img src={value.location} width="25%" alt="..."/></td>
                    <td>{value.note}</td>
                    <td>{value.status}</td>
                    <td>
                        <button className="btn btn-warning" data-toggle="modal" data-target="#edit" type="button" onClick={()=> this.btnEdit(index)}>Edit</button>
                        <button className="btn btn-danger" type="button" onClick={()=> this.btnDelete(index)}>Delete</button>
                    </td>
                </tr>
        )

        }
        })
    }

    // handle input per-element
    // handleInput =(event) =>{
    //     this.setState({ date: event.target.value})
    // }

    // handle dinamis bisa digunakan ke semua element input
    handleInput = (value,propState) =>{
        this.setState({ [propState]:value})

    }


    render() { 
    return (
        <div className="container-fluid">
            <div className="container-fluid d-flex justify-content-end my-2">
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addProduct">
                Add Product
            </button>
            <div className="modal fade" id="addProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Product</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        

                        <form>
                            <div className="form-group">
                                <label for="date">Date
                                    <input className="form-control" id="date" type="date" onChange={(event)=> this.handleInput(event.target.value, "date")} ref="date"/>
                                </label>
                            </div>
                            <div className="form-group">
                                <label for="todo">To Do
                                    <input className="form-control" id="todo"type="text" onChange={(event)=> this.handleInput(event.target.value, "todo")} ref="todo"/>
                                </label>    
                            </div>
                            <div className="form-group">
                                <label for="location">Location
                                    <input className="form-control" id="location" type="text" onChange={(event)=> this.handleInput(event.target.value, "location")} ref="location"/>
                                </label>
                            </div>
                            <div className="form-group">
                                <label for="note">Note
                                    <textarea className="form-control" id="note" type="text" onChange={(event)=> this.handleInput(event.target.value, "note")} ref="note"/>
                                </label>
                            </div>
                        </form>
                        <div className="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={this.btnSubmit}>Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="table">
                    <Table cetak={this.printData()}/>
            </div>
                

            
                
        </div>
        );
    }
}
 
export default FormPage;
