import "./App.css";
import Header from "./components/Header/Header";
import Feed from "./components/Feed";

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="feeed">
        <Feed />
      </div>
      <footer className="moreInsurance">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
