import logo from "./logo.svg";
import "./App.css";

function App() {
  let posts = { color: "cyan", fontSize: "50px" };
  function 함수() {
    return "  개발블로그";
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div style={posts} className={posts}>
          개발 Blog
        </div>
      </div>
      <img src={logo} />
      <h4>{posts + 함수()}</h4>
    </div>
  );
}

export default App;
