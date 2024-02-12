import express from "express";
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
    
}
);

app.get("/about", (req, res) => {
    res.send("<h1>About</h1> <p>This is the about page</p>");
    
}
);
app.get("/contact", (req, res) => {
    res.send("<h1>Contact</h1> <p>Phone: 123456789</p> ");
    
}
);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    }
);

