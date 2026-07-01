const Header = (props) => {
  console.log(props)

  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercise}</p>
  )
}


const Content = (props) => {
  console.log(props)

  return (
  <div>
    <Part name={props.cont[0].name} exercise= {props.cont[0].exercise} />
    <Part name={props.cont[1].name} exercise= {props.cont[1].exercise} />
    <Part name={props.cont[2].name} exercise= {props.cont[2].exercise} />
    
   </div>
  )
  
   
}


const Total = (props) => {
  console.log(props)
  
  return (
    <p> Number of exercises {props.total[0] + props.total[1] + props.total[2]} </p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamental of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const allExercises = [{name :part1, exercise: exercises1}, {name:part2, exercise:exercises2}, {name:part3, exercise:exercises3}]
  console.log(allExercises)

  return (
    <div>
      <Header course={course} />
      <Content cont = {allExercises} />
      <Total total={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

export default App