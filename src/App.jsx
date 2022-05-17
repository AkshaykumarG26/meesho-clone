import './App.css';
import { Home } from './components/Home/Home';
import { CategoryNavbar } from './components/Navbar/CategoryNavbar';
import { Navbar } from './components/Navbar/Navbar';
// import { Products } from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <Products /> */}
    </div>
  );
}

export default App;
