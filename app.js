const app = require("express")();
const db = require("./db.json");
const bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))


//get all users
app.get("/users", (req, res) => {
    console.log("Request is received...");
    res.send(200, {
        db
    })
})

//get a user with its id
app.get("/users/:id", (req, res) => {
    if(isNaN(req.params.id)){
        res.send(400, {
            message: "Unprocessible Entry"
        })
    } else {
        const user = db.find(u =>  u.id == req.params.id)
        if(user){
            res.send(200, user)
        } else {
            res.send(404, {
                message: "User Not Found"
            })
        }
    }
})

// add a new user
app.post("/users", (req, res) => {
    const newUser = {
        id: new Date().getTime(),
        full_name: req.body.full_name,
        country: req.body.country,
        email: req.body.email,
        created_at: new Date()
    };
    db.push(newUser)
    res.send(newUser)
})

// Update values of user
app.patch("/users/:id", (req, res) => {
    if(isNaN(req.params.id)){
        res.send(400, {
            message: "Unprocessible Entry"
        })
    } else {
        const user = db.find(u => u.id == req.params.id)
        if(user){
            Object.keys(req.body).forEach(key => {
                user[key] = req.body[key];
            })
            res.send(200, user)
        } else {
            res.send(404, {
                message: "User Not Found"
            })
        }
    }
})
app.delete("/users/:id", (req, res) => {

})

app.listen(process.env.PORT || 3000, () => {
    console.log("The server is running...");
})
