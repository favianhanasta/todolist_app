import React from "react";

class ModalEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="modal fade" id="edit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Add Produt</h5>
                                        <button type="button" className="btn close" data-dismiss="modal" aria-label="Close" onClick={this.props.btCancel}>
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                    <form>
                                        <div className="form-group">
                                        <label for="date">Date
                                            <input className="form-control" id="date" type="date" defaultValue={this.props.toDoList[this.props.selectedId].date} onChange={(event)=> this.handleInput(event.target.value, "editdate")}/>
                                        </label>
                                        </div>
                                        <div className="form-group">
                                        <label for="todo">To Do
                                            <input className="form-control" id="todo"type="text" defaultValue={this.props.toDoList[this.props.selectedId].todo} onChange={(event)=> this.handleInput(event.target.value, "editTodo")}/>
                                        </label>    
                                        </div>
                                        <div className="form-group">
                                        <label for="location">Location
                                            <input className="form-control" id="location"type="text" defaultValue={this.props.toDoList[this.props.selectedId].location} onChange={(event)=> this.handleInput(event.target.value, "editLocation")}/>
                                        </label>
                                        </div>
                                        <div className="form-group">
                                        <label for="note">Note
                                            <textarea className="form-control" id="note"type="text" defaultValue={this.props.toDoList[this.props.selectedId].note} onChange={(event)=> this.handleInput(event.target.value, "note")}/>
                                        </label>
                                    </div>
                                    </form>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={this.props.btCancel}>Close</button>
                                        <button type="button" class="btn btn-primary" onClick={this.btnSubmit}>Save changes</button>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
        );
    }
}
 
export default ModalEdit;