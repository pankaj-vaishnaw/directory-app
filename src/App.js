
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Adduser from './pages/Adduser';
import RetrieveData from './pages/RetrieveData';
// import { useState } from 'react';
// import dummyData from './components/dummydata'
function App() {
  // const [userList,setUserList]=useState(dummyData);

  return (

    <>
    <Navbar />
    <Main />
    <Routes>
        <Route path='/' element={<Adduser  />} />
        <Route path='/RetrieveData' element={<RetrieveData />} />
      
      
      </Routes>
    </>
    
  );
}

export default App;
