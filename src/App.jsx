import ContainerProds from "./components/ContainerProds/ContainerProds";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";

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
