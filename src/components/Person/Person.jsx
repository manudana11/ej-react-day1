//rafce
import "./Person.css"

const Person = (props) => {
  return (
    <div>
      <h2>Person</h2>
      <p>Nombre: {props.person.name}</p>
      <p>Surname: {props.person.surname}</p>
      <p>Age: {props.person.age}</p>
    </div>
  )
}

export default Person