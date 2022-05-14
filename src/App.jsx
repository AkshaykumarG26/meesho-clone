import './App.css';
import { CategoryNavbar } from './components/Navbar/CategoryNavbar';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CategoryNavbar/>
    </div>
  );
}

export default App;
