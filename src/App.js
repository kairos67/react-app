import logo from "./logo.svg";
import "./App.css";
// 컴포넌트
function Header() {
  return (
    <header>
      <h1>
        <a href="/">WEB</a>
      </h1>
    </header>
  );
}
function Nav() {
  return (
    <nav>
      <ol>
        <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">css</a>
        </li>
        <li>
          <a href="/read/3">js</a>
        </li>
      </ol>
    </nav>
  );
}
function Article() {
  return (
    <article>
      <h2>Welcome</h2>
      Hello,WEB~~~
    </article>
  );
}
function App() {
  return (
    <div>
      <Header></Header>
      <Header></Header>
      <Header></Header>
      <Nav></Nav>
      <Article>111222222222222222</Article>
    </div>
  );
}
//https://youtu.be/t9e3hMJ_s-c
export default App;
