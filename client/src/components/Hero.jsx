import { useState } from 'react'
import classes from '../components/Hero.module.css'
import buttonImg from '../assets/pet-taxi.png'

const Hero = () => {
  const [img, setImg] = useState(false)  
  
  
  return (
    <div className={classes.Hero}>
      <section className={classes.container}>
        <h1 className={classes.title}>Carona Animal</h1>
        <p className={classes.textP}>Onde há carona animal há amor!</p>
        <div onMouseLeave={() => setImg(false)}  className={classes.divButton}>
        {!img? (<button className={`${classes.button} ${img ? setImg : ""}` }
            onMouseEnter={() => setImg(true) }
            >
            Saiba mais
          </button>) :
          (
            <img src={buttonImg} alt="" />
          )}
        </div>
      </section>

    </div>
  )
}

export default Hero