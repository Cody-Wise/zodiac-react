import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Main from './Main/Main.js';
import { zodiacs } from './data.js';
// import './custom.scss';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className='App'>
      <Header name='Cody' />
      <Button bsClass='btn-custom'>Primary</Button>

      <Main zodiacs={zodiacs} />

      <Footer year='2022' />
      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
    </div>
  );
}

export default App;
