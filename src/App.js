import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'

function App() {

  const dispatch = useDispatch()
  const characters = useSelector(state => state.characters)
  console.log(characters)

  useEffect(getCharacters, [])
  
  const showCharacters = () => {return characters.map(  
    character => 
      <h1>{character.name}</h1>
      )}
    
  // const getCharacters = () => {fetch('https://rickandmortyapi.com/api/character/?page=7')
  //   .then(response => response.json())
  //   .then(({result}) => dispatch({
  //     type: "SET_CHARACTERS",
  //     characters: result
  //   }))}

    function getCharacters() {
    fetch('https://rickandmortyapi.com/api/character/?page=7')
      .then(response => response.json())
      .then(({results}) =>  dispatch({
        type: "SET_CHARACTERS",
        characters: results
    }))
  }
    
  return (
    <div className="App">
      {showCharacters()}
    </div>
  );
}

export default App;
