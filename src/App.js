// function App() {
//   const greeting = "Hi!"
//   const dom = <h1>{greeting}</h1>;
//   return (
//     dom
//   );
// }

const App = () => {
  return (
    <div>
      <Cat></Cat>
      <Cat></Cat>
      <Cat></Cat>
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}
export default App;
