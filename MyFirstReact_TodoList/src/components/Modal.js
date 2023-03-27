//this defines the format for the overlay display when the button in App.js from todo is clicked

function Modal(props) {

    function confirmHandler() {              {/**method 1 by defining the func and using below */}
        props.onConfirm()
    }

    return(
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn cancel" onClick={props.onCancel}>Cancel</button>  {/**method 2 by assigning the onclick directly to be used in todo.js */}
            <button className="btn" onClick={confirmHandler}>Confirm</button>
        </div>
    );
}

export default Modal;