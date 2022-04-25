import './App.css';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Main from './Main/Main.js';
import { zodiacs } from './data.js';


function App() {
  return (
    <div className="App">
      <Header
        name='Cody'/>

      <Main
        zodiacs = {zodiacs}/>
      
      <Footer
        year='2022'
      />
      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
    </div>
  );
}

export default App;
