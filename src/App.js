// function App() {
//   const greeting = "Hi!"
//   const dom = <h1>{greeting}</h1>;
//   return (
//     dom
//   );
// }
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 15},
    {name: "Jiro", age: 12},
  ]
  return (
    <div>
      {
        profiles.map((profile, index)=> {
          return <User name={profile.name} age={profile.age} key={index}></User>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi! My name is {props.name}, and {props.age} years old.</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
export default App;
