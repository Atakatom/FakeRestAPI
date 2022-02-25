const app = require("express")();
const db = require("./db.json");
const bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))

app.get("/users", (req, res) => {
    console.log("Request is received...");
    res.send(200, {
        db
    })
})
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
app.post("/users", (req, res) => {})
app.patch("/users", (req, res) => {})
app.delete("/users/:id", (req, res) => {})

app.listen(process.env.PORT || 3000, () => {
    console.log("The server is running...");
})
