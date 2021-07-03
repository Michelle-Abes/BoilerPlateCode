// // ---------------------------------node.js server code-----------------------------------
// import http from "http";

// const server = http.createServer((req, res) => {
//   console.log("HTTP server running");
//   res.setHeader("Content-Type", "text/html");
//   res.end("<h1>Hellloooo</h1>");
// });

// server.listen(3000);

// // ---------------------------------express server code-----------------------------------
// import express from "express";

// const app = express();

// app.get("/", (req, res) => {
//   res.send("Helllooo");
// });

// app.post("/", (req, res) => {
//   res.send("Thanks for posting that!");
// });

// app.listen(3000, () => console.log("server is running on Port 3000"));

// // ---------------------------------middleware-----------------------------------
// import express from "express";

// const app = express();

// //text
// app.use(express.urlencoded({ extended: true }));

// //json
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("hello");
// });

// app.post("/", (req, res) => {
//   const name = req.body.name;
//   const obj = req.body;
//   res.send("Thanks for posting that!");
// });

// app.listen(3000);

// // ---------------------------------Passing static files-----------------------------------
// import express from "express";

// const app = express();

// app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.send(index.html, index.css);
// });

// app.listen(3000);

// // ---------------------------------3rd party api data----------------------------------
// import express from "express";
// import fetch from "node-fetch";

// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Helllooo");
// });

// // using fetch
// app.post("/", (req, res) => {
//   const url = "https://jsonplaceholder.typicode.com/users";

//   fetch(url)
//     .then((response) => response.json())
//     .then((userData) => console.log(userData));
//   res.send("Bye");
// });

// axios
// .get("https://jsonplaceholder.typicode.com/users")
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err));

// // using Promise
// app.post("/", (req, res) => {
//   const urls = [
//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/comments",
//     "https://jsonplaceholder.typicode.com/users",
//   ];
//   Promise.all(
//     urls.map((url) => {
//       return fetch(url)
//         .then((response) => response.json())
//         .then((userData) => console.log(userData));
//     })
//   );
//   res.send("Bye");
// });

// // using Promise - ASYNC Await
// app.post("/", (req, res) => {
//   const urls = [
//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/comments",
//     "https://jsonplaceholder.typicode.com/users",
//   ];
//   const getData = async () => {
//     const [posts, comments, users] = await Promise.all(
//       urls.map(async (url) => {
//         const response = await fetch(url);
//         return response.json();
//       })
//     );
//   };
//   console.log(getData());
//   res.send("Bye");
// });

// app.listen(3000, () => console.log("server is running on Port 3000"));

// // ---------------------------------mongoose-----------------------------------
// // ATLAS_URI=mongodb+srv://userName:<Password>@cluster0.ttobx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });
// const connection = mongoose.connection;

// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });

// //Create Schema
// const Schema = mongoose.Schema;

// // userSchema
// const userSchema = new Schema(
//   {
//     username: { type: String, required: true },
//     age: { type: Number, required: true },
//   },
//   {
//     timestamps: true,
//   }
// );

// // Create User Model
// const User = mongoose.model("User", userSchema);

// const newUser = {
//   username: this.state.username,
//   age: this.state.age,
// };
// console.log(newUser);

// // To connect the frontend to the backend
// axios
//   .post("http://localhost:5000/users/add", newUser)
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// // Front end code to save to DB
// applicationCache.post("/add", (req, res) => {
//   const username = req.body.username;
//   //  create a new instance of User
//   const newUser = new User({ username });

//   newUser
//     .save() //save new user to DB
//     .then(() => res.json("User added!"))
//     .catch((err) => res.status(400).json("Error: " + err));

//   User.find(); // to find all the users from db
// });

// // ---------------------------------postgreSQL-----------------------------------

// // ---------------------------------xxxxx-----------------------------------

// // ---------------------------------css flexbox-----------------------------------

// .images{
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center
// }

// // ---------------------------------css grids-----------------------------------
// using fr
//.container{
//     display:grid;
//     justify-items:start
//     grid-template-column: 1fr 1fr 2fr
// }

// using repeat
//.container{
//     display:grid;
//     justify-items:start
//     grid-template-column: repeat(auto-fill, minmax(200px,1fr))
// }

// using span
//.container{
//     display:grid;
//     grid-column:span 2;
//     grid-row: 1/3;
//     justify-self: start;
//     align-self: end;
// }
// // ---------------------------------css media query-----------------------------------
// .main_nav{
//     display:flex;
//     margin:0
// }
// @media only sreen and (max-width:600px){
//     .main-nav{
//         font-size: 0.5em;
//         padding:0
//     }
// }

// // ------------------------------------react class components-------------------------------------

// class App extends React.Component{
//     render(){
//         return
//             <h1> {this.props.count} </h1>
//     }
// }

// // ---------------------------------react functional components-----------------------------------

//  // -------- Components --------
//  function App(props){
//     return(
//         <div>
//             <h1> {props.count} </h1>
//             <button onClick={increase}> + </button>
//         </div>
//     );
// }

// ReactDOM.render(<App count={1}/>, getElementsByID("root"))

// // ---------------------------------react class-state-----------------------------------
// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   increment() {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={() => this.increment()}>
//           Increment!
//         </button>
//         <h1>Current Count: {this.state.count}</h1>
//       </div>
//     );
//   }
// }

// // ---------------------------------react hooks-state-----------------------------------
// import React, { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   function increase() {
//     setCount(count + 1);
//   }
//   return (
//     <div>
//       <h1> {count} </h1>
//       <button onClick={increase}> + </button>
//     </div>
//   );
// };

// // ---------------------------------redux-----------------------------------
// import { createStore } from "redux";

// const initialState = {
//   posts: [{ id: 1, title: "Test Post" }],
//   signUpModal: {
//     open: false,
//   },
// };

// const reducer = (state = initialState, action) => {
//   if (action.type === "ADD_POST") {
//     const updatedState = {
//       ...state,
//       posts: state.posts.concat(action.payload),
//     };
//     return updatedState;
//   }
//   return state;
// };

// const store = createStore(reducer);

// console.log(store);
// console.log(store.getState());

// const action = {
//   type: "ADD_POST",
//   payload: {
//     id: 1,
//     title: "How to Use Redux",
//   },
// };

// store.dispatch(action);
// console.log(store.getState());

// export default store;
// // ---------------------------------react redux-----------------------------------
// // src/store.js
// import { createStore } from 'redux'

// const initialState = {
//   posts: [{id: 1, title: 'Test Post'}],
//   loginModal: {
//     open: false
//   }
// }

// const reducer = (state = initialState, action) => {
//   if (action.type === 'ADD_POST') {
//     return Object.assign({}, state, {
//       posts: state.posts.concat(action.payload)
//     })
//   }

//   return state
// }

// const store = createStore(reducer)

// export default store;

// //src/App.js
// import React from "react";
// import "./App.css";
// import { connect } from "react-redux";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       value: "",
//       postId: 2,
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     this.props.dispatch({
//       type: "ADD_POST",
//       payload: { id: this.state.postId, title: this.state.value },
//     });

//     this.setState({ postId: this.state.postId + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <header>
//           <form onSubmit={this.handleSubmit}>
//             <input
//               type="text"
//               value={this.state.value}
//               onChange={this.handleChange}
//             />
//             <div>
//               <button type="submit" onClick={this.handleSubmit}>
//                 Submit
//               </button>
//             </div>
//           </form>
//           <ul>
//             {this.props.posts.map((post) => (
//               <li key={post.id}>{post.title}</li>
//             ))}
//           </ul>
//         </header>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return { posts: state.posts };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     dispatch,
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

// // ---------------------------------webpack config-----------------------------------
// const path = require("path");

// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     filename: "app.js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   devServer: {
//     contentBase: path.join(__dirname, "dist"),
//     port: 9000,
//   },
//   mode: "development",
// };

// // ---------------------------------this-----------------------------------

// The JavaScript "this" keyword refers to the object it belongs to.

// "WHICH OBJIECT ENV YOU'RE WORKING IN"

//  // - method - this is owner object
//  // - alone - global object
//  // - function - global object
//  // - event - the element that trigged
