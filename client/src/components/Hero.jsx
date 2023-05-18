import React from 'react'
import classes from '../components/Hero.module.css'
import buttonImg from '../assets/pet-taxi.png'

const Hero = () => {
    // const RedWhats = (
        
    // )
    
    
    return (
        <div className={classes.Hero}>
            <section className={classes.container}>
                <h1 className={classes.title}>Carona Animal</h1>
                <p className={classes.textP}>Onde há carona animal há amor!</p>  
                <div className={classes.divButton}>
                    {/* <button className={classes.button} onClick={RedWhats}>
                    </button> */}
                    <img className={classes.butImg} src={buttonImg} alt="" />
                    
                
                </div>
                 
            </section>
                  
        </div>
    )
} 

export default Hero