import Header from "./component/Header";
import Content from "./component/Content";
import Footer from "./component/Footer";
function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
