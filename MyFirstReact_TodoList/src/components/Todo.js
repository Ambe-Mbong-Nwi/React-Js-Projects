//components start with capital letters(custom) to differentiate them from the built in html elements
//props help us accept different parameters in different func components so we can reuse components.
//props is a javascript object where all the attributes added on the different components reside as properties and values.
//{} signal dynamic java script and used by props
//note tat the text we want is inputed in the App.js.

//there's no need for eventlisteners just add 'onClick' prop attribute to the button for a click event.
//u can then either write a func there or direct it to a func u wrote somewhere else.
//note that to avoid execution of the func before clicking just write func name without ()

//states help us regulate which display we want. it's a react hook
//importing from reacts does not need ./ bcos it's a third party library
//useState always returns an array with 2 elements. the first is the present state, and the second is used to change the present state
//note that the onclick func works only on standard(buttton) not our defined components(backdrop). to apply it to the backdrop we must add code as below

import { useState } from "react";

import Modal from './Modal';
import Backdrop from './Backdrop';


function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);         {/**first call it directly in the component func. so initally false=> modal is closed */}

    function openModal() {              {/**func called when button is clicked */}
        setModalIsOpen(true);     {/**true=> modal state has changed and is now open*/}
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    return(
        <div className="card">
            <h2>{props.text}</h2>           {/*using props*/}
            <div className="actions">
                <button className="btn" onClick={openModal}>Delete</button>       {/**onClick event */}
            </div>
            {/*{ modalIsOpen ? <Modal /> : null}     {/**if modalisopen is true, display else don't display anything */}
            { modalIsOpen && <Modal onCancel={closeModal} onConfirm={closeModal}/> }            {/**shortcut. ie if both conditions are true, return the second value */}
            { modalIsOpen && <Backdrop onClickd={closeModal}/>}
        </div>
    );
}

export default Todo;