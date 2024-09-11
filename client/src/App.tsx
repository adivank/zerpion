import "./App.css";
import Layout from "./Layout";
import { Products } from "./pages/products";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <Layout>
        <Products></Products>
        <Toaster></Toaster>
      </Layout>
    </>
  );
}

export default App;
