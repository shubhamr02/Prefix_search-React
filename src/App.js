import "./App.css";
import Container from "react-bootstrap/Container";
import ProductTable from "./Components/ProductTable";

function App() {
  return (
    <div className="App">
      <Container>
        <ProductTable />
      </Container>
    </div>
  );
}

export default App;
