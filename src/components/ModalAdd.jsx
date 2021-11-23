import React from "react";

class ModalAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
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
                                    <input className="form-control" id="date" type="date" onChange={(event)=> this.props.handleInput(event.target.value, "date")} value={this.props.date}/>
                                </label>
                            </div>
                            <div className="form-group">
                                <label for="todo">To Do
                                    <input className="form-control" id="todo"type="text" onChange={(event)=> this.props.handleInput(event.target.value, "todo")} value={this.props.todo}/>
                                </label>    
                            </div>
                            <div className="form-group">
                                <label for="location">Location
                                    <input className="form-control" id="location" type="text" onChange={(event)=> this.props.handleInput(event.target.value, "location")}  value={this.props.location}/>
                                </label>
                            </div>
                            <div className="form-group">
                                <label for="note">Note
                                    <textarea className="form-control" id="note" type="text" onChange={(event)=> this.props.handleInput(event.target.value, "note")}  value={this.props.note}/>
                                </label>
                            </div>
                        </form>
                        <div className="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={this.props.btSubmit}>Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
         );
    }
}
 
export default ModalAdd;