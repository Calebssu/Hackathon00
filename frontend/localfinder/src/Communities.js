import './App.css';

const Communities = props => {
    let name = props.name;
    let pic = props.pic;
    
    return (
        <div className="community-card">
        <img src={pic} alt={name} onClick={() => alert("Placeholder, descriptions would go here (Not in alert box but instead onclick).")} />
        <h3>{name}</h3>
      </div>
    );
};

export default Communities;