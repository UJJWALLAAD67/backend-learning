import express from "express";
import router from "./route.js";

const app = express();

const PORT = 3000;
app.use(express.json());



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("this is about route");
});

app.get("/contact", (req, res) => {
  res.send("this is contact route");
});

// app.get("/user", (req, res) => {
//   res.send("this is user's route");
// });
// app.get("/user/:username", (req, res) => {
//   const name = req.params.username;
//   res.send(`Hello ${name.toUpperCase()}`);
// });

app.get("/search", (req, res) => {
  const query = req.query.q;
  res.send(`searching for ${query}`);
});
app.use("/user", router);

app.post("/users", (req, res) => {
  const { name, email } = req.body;
  res.json({
    message: `user ${name} with email ${email} created successfully`,
  });
});

app.put("/users/:id", (req, res) => {
  const userID = req.params.id;
  const { name, email } = req.body;
  res.json({
    message: `User ${userID}  ${name} with email ${email} updated successfully`,
  });
});

app.delete("/users/:id", (req, res) => {
  const userID = req.params.id;
  res.json({
    message: `user with id ${userID} has been deleted successfully`,
  });
});

app.get("/users/things/:name/:id", (req, res) => {
  const { id, name } = req.params;
  res.json({
    message: `user created with user id ${id} , and username ${name}`,
  });
});

// app.get("*", (req, res) => {
//   res.status(404).send("Error: Page Not Found");
// });


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});