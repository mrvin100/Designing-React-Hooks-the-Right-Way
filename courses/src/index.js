import ReactDOM from "react-dom";

const Home = () => {
  return <h1>Home Page</h1>;
};

const Product = () => {
  return <h1>Product Page</h1>;
};
const Route = ({ home }) => {
  return home ? <Home /> : <Product />;
};

function App() {
  const home = true;
  return <Route home={home} />;
}

export default App;
const rootEl = document.getElementById("root");
ReactDOM.render(<App />, rootEl);
