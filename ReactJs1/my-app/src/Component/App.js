import Tour from './Components/Tour'
import './App.css';
import { useState } from 'react'
import data from './Data'


function App() {
  const [tour, setTour] = useState(data)

  function removeTour(id) {
    const newTour = tour.filter(tour => tour.id !== id)
    setTour(newTour);

  }
  if (tour.length === 0) {
    return (
      <div className='lst-div'>
        <h4 className='lst-heading'>No Tour Left</h4>
        <button className='lst-btn' onClick={() => setTour(data)}>Refresh</button>
      </div>
    )
  }

  return (
    <>

      <Tour tour={tour} removeTour={removeTour} ></Tour>
    </>

  );
}

export default App;
