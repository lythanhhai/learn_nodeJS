import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
function App() {
  return (
    <div className="App">
      {/* <button
        type="button"
        className="button"
        onClick={() => {
          axios
            .get("http://localhost:5000/auth/google")
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        }}
      >
        Login with Google
      </button> */}
      <a href="http://localhost:5000/auth/google">Login with google</a>
    </div>
  );
}

export default App;
