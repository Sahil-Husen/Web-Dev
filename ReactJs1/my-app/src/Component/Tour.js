import Card from '../Components/Card'

function Tour({tour,removeTour}) {
   return (
    <>
   <div className='container'>
   <h1>
        Tour by Sahil
    </h1>
    <div className='cards'>
         {
            tour.map((tour)=>{
                return <Card {...tour} removeTour={removeTour}></Card>
            })
         }
    </div>
   </div>
</>
   )
}
export default Tour;