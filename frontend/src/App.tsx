import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import HomePage from "./pages/HomePage";
import { Layout } from "./pages/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
