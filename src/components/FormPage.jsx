import React from "react";
import Table from "./Table";
import axios from "axios";
import ModalAdd from "./ModalAdd";
import ModalEdit from "./ModalEdit";

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
            this.setState({
                date: "",
                todo: "",
                location:"",
                note:"",
            })
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
                        <button className="btn btn-danger my-2" type="button" onClick={()=> this.btnDelete(index)}>Delete</button>
                    </td>
                </tr>
        )
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

    btnCancel =()=>{
        this.setState({selectedIdx:null})
    }

    render() { 
    return (
        <div className="container-fluid">
            <ModalAdd
            handleInput={this.handleInput}
            date={this.state.date}
            todo={this.state.todo}
            location={this.state.location}
            note={this.state.note}
            btSubmit={this.btnSubmit}/>
        {
            this.state.toDoList.length > 0 && this.state.selectedIdx != null ?
            <ModalEdit 
                selectedId ={ this.state.selectedIdx}
                toDoList = {this.state.toDoList}
                btCancel = {this.btnCancel}
            /> :null
        }
            <div className="table">
                <Table cetak={this.printData()}/>
            </div>
                

            
                
        </div>
        );
    }
}
 
export default FormPage;
