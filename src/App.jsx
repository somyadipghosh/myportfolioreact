import React, { useEffect, useState } from 'react'
import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { getImageUrl } from './utils'



const App = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
      const toggleVisibility = () => {
          if (window.scrollY > 100) {  
              setIsVisible(true);
          } else {
              setIsVisible(false);
          }
      };

      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />

      <a href="#"><img src={getImageUrl("otherimgs/uparrow.png")} alt="uparrow" className={styles.UpArrow} style={{ opacity: isVisible ? 1 : 0, pointerEvents: isVisible ? "auto" : "none" }}/></a>
    </div>
  )
}

export default App
