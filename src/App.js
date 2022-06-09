import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Main from './Main/Main.js';
import { zodiacs } from './data.js';
// import './custom.scss';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';

<link
  rel='stylesheet'
  href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
/>;
<link
  rel='stylesheet'
  href='https://fonts.googleapis.com/icon?family=Material+Icons'
/>;

// import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className='App'>
      <Header name='Cody' />

      <Main zodiacs={zodiacs} />

      <Footer year='2022' />
      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
    </div>
  );
}

export default App;
