import { productsData } from "./data/products";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/header";
import Layout from "./components/layout/layout";
import Hero from "./components/hero/hero";
import ContainerProds from "./components/containerProds/containerProds";
function App() {
  return (
    <>
      <Header />
      <Layout>
        <Hero />
        <ContainerProds />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
