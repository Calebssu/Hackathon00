const express = require("express");
const cors = require("cors");
app = express();
app.use(cors());

const port = 3001;

const communities = [
    {
        id: 1,
        name: "Tournament Time",
        img: "https://api.logo.com/api/v2/images?logo=logo_41146cf2-911d-4a41-a3ab-9b15fe73d157&u=1713197075&width=500&height=400&fit=contain&margins=100&format=webp&quality=60"
    },
    {
        id: 2,
        name: "Programmers Playground",
        img: "https://api.logo.com/api/v2/images?logo=logo_c860052e-7283-44a9-8cb7-fecb78ee99db&u=1713207703&width=500&height=400&fit=contain&margins=100&format=webp&quality=60"
    },
    {
        id: 3,
        name: "Cycle Explorers",
        img: "https://api.logo.com/api/v2/images?logo=logo_23c5ee56-1037-4ef9-8f6f-54e6449205ab&u=1713207822&width=500&height=400&fit=contain&margins=100&format=webp&quality=60"
    }
];

app.get('/', (req, res) => {
    res.send(communities);
});

app.post('/', (req, res) => {
    const body = req.body;
    console.log(body);
    communities.push(body.value);
    res.send("ok");
})

app.put('/', (req, res) => {
    res.send()
})

app.delete('/', (req, res) => {
    res.send()
})

app.listen(port, () => {
    console.log("Server Started!")
    console.log(`This server is listening on port number ${port}.`)
});