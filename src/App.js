import './App.css';
import About from './Components/About';
import Header from './Components/Header';
import Hello from './Components/Hello';
import Project from './Components/Project';
import Experience from './Components/Experience';

function App() {
  return (
    <div className="app">

      {/* Header */}
      <Header/>
      

      <div className="app__body">
        <Hello/>
        <About/>
        <Project/>
        <Experience/>
      </div>
      {/*Skills */}
      {/*Footer */}
    </div>
  );
}

export default App;
