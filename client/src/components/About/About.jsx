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
            Foi criado com o objetivo de facilitar sua vida e ajudar 
            seu pet a manter sua rotina mesmo com os compromissos de seus donos.
          </li>
          <li className={classes.servicesLi}> Excelentes profissionais que amam os AUamigos </li>
          <li className={classes.servicesLi}> Valores acessiveis </li>
          <li className={classes.servicesLi}> Reduz o estress e o acalma </li>
          <li className={classes.servicesLi}> Melhorias de sistemas imunológicos </li>
        </div>
        <div className={classes.test}>
          <h2 className={classes.services}>Carona Animal</h2>
          <li className={classes.servicesLi}>
            {" "}
            Foi criado com o objetivo de facilitar sua vida, em casos de emergencia ou um passeio
            que gostaria de fazer com o seu AUmigo, mas nao tem carro? conte conosco
          </li>
          <li className={classes.servicesLi}>
            {" "}
            Oferecemos a melhor experiencia com qualidade{" "}
          </li>
          <li className={classes.servicesLi}>
            {" "}
            Conforto e segurança acima de tudo{" "}
          </li>{" "}
          <li className={classes.servicesLi}>
            {" "}
            Higienização do veiculo ao fim de cada viagem
          </li>
          <li className={classes.servicesLi}>
            {" "}
            Temos Carona Animal askfoasn dauhsudh uhdu
          </li>
          <li className={classes.servicesLi}>
            {" "}
            Preços acessiveis{" "}
          </li>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default About;
