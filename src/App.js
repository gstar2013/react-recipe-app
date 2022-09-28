import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Recipes from './pages/Recepies';
import SingleRecipe from './pages/SingleRecipe';
import Default from './pages/Default';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {

  return (
    <Router>
      <main>
        {/* navbar */}
        <Navbar />
      <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/recipes' exact element={<Recipes />} />
      <Route path='/recipes/:id' element={<SingleRecipe />} />
      <Route path='*' element={<Default />} />


    </Routes>
    </main>
    </Router>
    
  );
};


export default App;
