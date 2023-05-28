import classes from "../About/About.module.css";

const About = () => {
  return (
    <section className={classes.container} id="About">
      {/* <h1 className={classes.h1}>Serviços</h1> */}
      {/* <div className={classes.about}> */}
      {/* <p className={classes.aboutP}>
          Meu nome é Pamela tenho 37 anos, sou muito sonhadora e com muita
          garra, tenho um amor incondicional por animais. E com esse amor surgiu
          a ideia de desenvolver um aplicativo de taxi pet para aquelas pessoas
          que enfrentam desafios para levar o seu pet em um passeio, viajens,
          veterinário, ou ate mesmo em pet shop, e amam e querem o melhor para
          eles, tendo preservação a segurança e o conforto acima de tudo. E é
          então que surge o app carona animal vindo para facilitar a sua vida
          podendo ficar cada vez mais proximo do seu animal de extimação.
        </p> */}
      {/* <h2 className={classes.services}>Serviços prestados</h2> */}
      <div className={classes.testContainer}>
        <div className={classes.test}>
          <h2 className={classes.services}>Pet Walker</h2>

          <li className={classes.servicesLi}>
            {" "}
            Temos passeadores para o seu pet
          </li>
          <li className={classes.servicesLi}> Temos Carona Animal </li>
          <li className={classes.servicesLi}> Temos Carona Animal </li>
          <li className={classes.servicesLi}> Temos Carona Animal </li>
          <li className={classes.servicesLi}> Temos Carona Animal </li>
        </div>
        <div className={classes.test}>
          <h2 className={classes.services}>Carona Animal</h2>
          <li className={classes.servicesLi}>
            {" "}
            Temos passeadores para o seu pet
          </li>
          <li className={classes.servicesLi}>
            {" "}
            Temos Carona Animal dkaosfjas dasjida disajd{" "}
          </li>
          <li className={classes.servicesLi}>
            {" "}
            Temos Carona Animal fsjaifjna{" "}
          </li>{" "}
          <li className={classes.servicesLi}>
            {" "}
            Temos Carona Animal djasijabf asuhdabshdj dhsuhd dsh sakdnjan
          </li>
          <li className={classes.servicesLi}>
            {" "}
            Temos Carona Animal askfoasn dauhsudh uhdu
          </li>
          <li className={classes.servicesLi}>
            {" "}
            Temos Carona Animal dajis dhua{" "}
          </li>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default About;
