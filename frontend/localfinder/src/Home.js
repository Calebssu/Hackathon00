import './App.css';

function Home(props) {

    return (
        <div>
            <h1 style={{color: "white"}}>Homepage</h1>
            <h3 style={{color: "white"}}>Click the images to learn more!</h3>
            {props.comu}
        </div>
    );
}

export default Home;