const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname,'public')));

let posts = [
    {
        id: uuidv4(),
        username: "Jayesh",
        content: "Just finished reading 'Clean Code' by Robert C. Martin. It's a game-changer for writing maintainable code!"
    },
    {
        id: uuidv4(),
        username: "Alex",
        content: "Exploring the new features in ES2024. The new pattern matching syntax looks promising!"
    },
    {
        id:  uuidv4(),
        username: "Jordan",
        content: "Had a great time attending the JavaScript conference. Learned a lot about the future of frameworks and tooling."
    },
    {
        id:  uuidv4(),
        username: "Sam",
        content: "Working on a personal project using Node.js and Express. Excited about building my first full-stack application!"
    },
    {
        id:  uuidv4(),
        username: "Taylor",
        content: "Just started learning about machine learning. The basics of neural networks are fascinating!"
    }
];




app.get("/posts" , ( req , res ) => {
    res.render("index.ejs",{ posts });
});
app.get("/posts/new" , ( req , res ) => {
    res.render("new.ejs");
});
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ username, content,id });
    res.redirect("/posts");
});
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id === id);
    if (post) {
        res.render("show.ejs", { post });
    } else {
        res.status(404).send("Post not found");
    }
});
app.patch('/posts/:id', (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find(p => p.id === id);
    if (post) {
        post.content = newContent;  // Use the newContent variable here
        res.redirect(`/posts/${id}`);
    } else {
        res.status(404).send('Post not found');
    }
});

app.get('/posts/:id/edit', (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id === id);
    if (post) {
        res.render('edit', { post });
    } else {
        res.status(404).send('Post not found');
    }
});
app.delete('/posts/:id', (req, res) => {
    const { id } = req.params;
    const index = posts.findIndex(p => p.id === id);
    if (index !== -1) {
        posts.splice(index, 1); // Remove the post from the array
        res.redirect('/posts');
    } else {
        res.status(404).send('Post not found');
    }
});




app.listen(port , () => {
    console.log(`Listening Port : ${port}`);
});