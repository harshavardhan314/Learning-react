function FirstComponent(props) {

    // Destructure the car object from props
    const {brand, model, year} = props.car;
  return (
    <h1>{brand} {model} {year}</h1>
   
  )
}

export default FirstComponent
