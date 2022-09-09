import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Layout from "./Layout/Layout";
import CountryDetail from "./Pages/CountryDetail";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country-detail" element={<CountryDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
