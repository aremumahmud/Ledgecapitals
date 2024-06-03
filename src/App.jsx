import { useEffect, useState } from 'react'


// import './App.css'
import Home from './components/home'
import './css/responsive.css'
import loadImage from './utils/images.js';
import Loader from './components/loader';
function App() {

// Dynamically import all images from the 'images' directory
const images = import.meta.glob('/src/assets/*.{png,jpg,jpeg,svg}', { eager: true });

console.log(images)
  let [load , setLoading] = useState(true)
  useEffect(()=>{
   

    Promise.all(Object.values(images).map(img => loadImage(img.default)))
    .then(() => setLoading(false))
    .catch(err => console.error('Failed to load images', err));

  },[])
  return (
    <>
    {
      load && <Loader />
    }
    
     <Home />
    </>
  )
}

export default App
