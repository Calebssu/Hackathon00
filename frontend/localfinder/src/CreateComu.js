import "./App.css";
import Communities from "./Communities";
import axios from "axios";

function CreateComu() {
    //Proof of concept
    return (
        <div>
            <h1 style={{color: "white", marginBottom: "1%"}}>Post a community here!</h1>
            <h3 style={{color: "darkred", marginBottom: "6%"}}>(Proof of concept. Does not actually function)</h3>
            <form onSubmit={event => {
                event.preventDefault();
            }}>
                <input id="text1" type="text" placeholder="Name Of Community" />
                <br />
                <input id="text1" type="text" placeholder="Image of Community" />
                <br />
                <button style={{fontSize: "1.5rem", marginTop: "3%"}}>Submit</button>
            </form>
        </div>
    );
}

export default CreateComu;