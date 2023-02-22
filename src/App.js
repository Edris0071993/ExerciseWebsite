import { Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ExerciseDetails from './components/ExerciseDetails';
import Footer from './components/Footer';
function App() {
  return (
    <Box width="400px" sx={{width:{lx:"1488px"},m:"auto"} }>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetails/>} />
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
