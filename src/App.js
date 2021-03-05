import './App.css';
import About from './Components/About';
import Header from './Components/Header';
import Hello from './Components/Hello';
import Project from './Components/Project';

function App() {
  return (
    <div className="app">

      {/* Header */}
      <Header/>
      

      <div className="app__body">
        <Hello/>
        <About/>
        <Project/>
      </div>
      {/*Skills */}
      {/*Footer */}
    </div>
  );
}

export default App;
