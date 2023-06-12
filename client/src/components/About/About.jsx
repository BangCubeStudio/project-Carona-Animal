import classes from "../About/About.module.css";

const About = () => {
  return (
    <section className={classes.container} id="About">
      <div className={classes.testContainer}>
        <div className={classes.test}>
          <h2 className={classes.services}>Pet Walker</h2>

          <li className={classes.servicesLi}>
            {" "}
            Serviço de passeadores para o seu aumigo
          </li>
          <li className={classes.servicesLi}> Excelentes profissionais que amam o que faz</li>
          <li className={classes.servicesLi}> Valores acessíveis </li>
          <li className={classes.servicesLi}> Reduz o estress e o acalma </li>
          <li className={classes.servicesLi}> Melhorias de sistemas imunológicos </li>
        </div>
        <div className={classes.test}>
          <h2 className={classes.services}>Carona Animal</h2>
          <li className={classes.servicesLi}>
            {" "}
            Serviço de táxi para você e seu aumigo
            </li>
          <li className={classes.servicesLi}>
            {" "}
            Oferecemos a melhor experiência com qualidade{" "}
          </li>
          <li className={classes.servicesLi}>
            {" "}
            Conforto e segurança acima de tudo{" "}
          </li>{" "}
          <li className={classes.servicesLi}>
            {" "}
            Higienização do veículo ao fim de cada viagem
          </li>
          <li className={classes.servicesLi}>
            {" "}Valores acessíveis{" "}
          </li>
        </div>
      </div>
    </section>
  );
};

export default About;
