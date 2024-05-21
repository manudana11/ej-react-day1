//rafce
import "./Home.css";

const Home = (props) => {
    const dishes = props.dishes;
    const carta = dishes.map(platillo => {
        return <div>
        <p>{platillo.name}</p>
        <p>{platillo.description}</p>
        <p>{platillo.price}</p>
    </div>
    })
  return (
    <div>
        {carta}
    </div>
  )
}

export default Home