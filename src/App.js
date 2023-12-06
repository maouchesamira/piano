import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Professeurs from './containers/Professeurs';
import Lessons from './containers/Lessons';
import Contact from './containers/Contact';
import Navbar from './components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material';
import './index.css';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#800000',
      },
      secondary: {
        main: '#ffffff',
      },
      warning: {
        main: '#e8362c',
      },
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Lessons' element={<Lessons />}></Route>
          <Route path='/Professeurs' element={<Professeurs />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
