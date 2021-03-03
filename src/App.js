import './App.css';
import Header from './Components/Header';
import Hello from './Components/Hello';

function App() {
  return (
    <div className="app">

      {/* Header */}
      <Header/>
      

      <div className="app__body">
        <Hello/>
      </div>
      {/*Hello */}
      {/*About Me */}
      {/*Projects */}
      {/*Footer */}
    </div>
  );
}

export default App;
