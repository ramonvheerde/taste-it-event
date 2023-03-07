import "./App.css";

function App() {
  return (
    <div className='shopping-list'>
      <h2>Boodschappenlijstje</h2>
      <form>
        <input type='text' placeholder='Item toevoegen' />
        <button className='add' type='submit'>
          Toevoegen
        </button>
      </form>
      <ul>
        <li>
          <span>Appels</span>
          <button className='remove'>Verwijder</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
