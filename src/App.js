import Header from './Mycomponent/Header';
import {Routes, Route} from 'react-router-dom'
import  Mlone  from './comp/Mlone';
import  Mltwo  from './comp/Mltwo';
import Mlthree from './comp/Mlthree';



function App() {
  return (   
    <>
      <Header title = "MY PROJECTS"/>
      <Routes>
        <Route path='ml1' element = {<Mlone/>}/>
        <Route path='ml2' element = {<Mltwo/>}/>
        <Route path='ml3' element = {<Mlthree/>}/>
      </Routes>
    </>
  );
}

export default App;
