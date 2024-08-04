function Header({course}){
    return(
      <>
        <h1>{course}</h1>
      </>
    )
}

function Content({parts}){
  return(
    <>
     <Part part={parts[0].part} exercises={parts[0].exercise} />
     <Part part={parts[1].part} exercises={parts[1].exercise} />
     <Part part={parts[2].part} exercises={parts[2].exercise} />
    </>
  )
}

function Part({part, exercises}){
  return(
    <>
      <p>
        {part} {exercises}
      </p>
    </>
  )
}

function Total({exerTot}){
  return(
    <div>
    <p>Number of exercises {exerTot}</p>
    </div>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const parts =[
    {part: "Fundamentals of React", exercise: 10},
    {part: "Using props to pass data", exercise: 7},
    {part: "State of a component", exercise: 14}
  ]
  console.log(parts)
  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total  exerTot={parts[0].exercise + parts[1].exercise + parts[2].exercise}/>
    </div>
  )
}

export default App