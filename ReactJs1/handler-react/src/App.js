// import logo from './logo.svg';
import './App.css';
import Products from './component/Products'


const products = [
  {
    id: 101,
    title: 'tide',
    amount: 200,
    date: new Date(2011, 2, 3)

  },
  {
    id: 101,
    title: 'gadi',
    amount: 200,
    date: new Date(2011, 2, 3)

  },
  {
    id: 101,
    title: 'deepak',
    amount: 200,
    date: new Date(2011, 2, 3)

  },
  {
    id: 101,
    title: 'ujala',
    amount: 200,
    date: new Date(2011, 2, 3)
  },
];

function App() {
  return (
    <div className="App">
      <Products item={products}></Products>
    </div>
  );
}

export default App;
