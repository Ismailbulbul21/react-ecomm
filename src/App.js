import{BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <div className=''>
  
<Router>
<Nav/>
<Routes>


<Route path='/' element={<Home/>} />
<Route path='Cart' element={<Cart/>} />

</Routes>





</Router>














    </div>
  );
}

export default App;
