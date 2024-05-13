// import logo from './logo.svg';
import './App.css';
import NewProduct from './component/NewProduct';
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

//  Child to parent accessing
function Ahadler(data){
  console.log("I am inside Ahandler afds")
  console.log(data)
}

function App() {
  return (
    <div className="App">
      {/* here onA={Ahandler} is used to DEMONSTRATE THE CHILD TO PARENT OBJECT ACCESSING */}
      <NewProduct onA={Ahadler}></NewProduct>
   
      <Products item={products} ></Products>
    </div>
  );
}

export default App;
