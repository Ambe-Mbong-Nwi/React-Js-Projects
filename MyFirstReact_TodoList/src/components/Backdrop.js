//note that the onclick func works only on standard(buttton) not our defined components(backdrop). to apply it to the backdrop we must add code as below
//div has onClick since it is standard.1. We include the props in our defined func
//2. We take the onclick from a div and forward to be used in the onClickd func in Todo.js

function Backdrop(props) {
    return(
        <div className="backdrop" onClick={props.onClickd}/>   /*self-closing tag bcos it has no content we just need the styles */
    );
}

export default Backdrop;