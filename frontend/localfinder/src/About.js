import './App.css';

function About() {
    return (
        <div>
            {console.log(`React "Reacted" to the useState`)}
            <h1 style={{ color: 'white' }}>About us</h1>
            <br />
            <p id='aboutText'>Welcome to Community Finder, your compass to the vibrant heartbeat of local connections! At Community Finder, we believe that belonging starts with finding your tribe, and that's where we come in.

                With our innovative platform, we're on a mission to bridge the gap between individuals and the communities that resonate with their passions, interests, and values. Whether you're a newcomer to town, a longtime resident seeking new experiences, or simply looking to expand your social circle, Community Finder is your trusted guide.

                From bustling urban centers to cozy rural enclaves, we've curated a diverse array of groups, clubs, and organizations just waiting to welcome you with open arms. Whether you're into outdoor adventures, art and culture, fitness and wellness, or anything in between, there's a community here with your name on it.

                Join us in rediscovering the power of connection, one local community at a time. Let's build meaningful relationships, foster shared experiences, and create a tapestry of belonging that enriches lives and strengthens communities. Welcome to Community Finder – where belonging begins!
            </p>
        </div>
    );
}

export default About;