import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar.jsx' //calls navbar component
import Header from './components/Header.jsx' //calls Header component
import Footer from './components/Footer.jsx' //calls footer componet
import Content from './components/Content.jsx' //calls content component
import Read from './components/Read.jsx' //calls content component
import Create from './components/Create.jsx' //calls content component


export default function App() { 
  return (
    <>
      <NavigationBar />
      <Routes> 
        <Route path="/" element={<Content />} />
        <Route path="/read" element={<Read/>} /> 
        <Route path="/create" element={<Create/>} />
      </Routes>
    </>
  );
}