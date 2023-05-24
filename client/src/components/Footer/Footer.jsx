import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <h2 className={classes.h2}>Carona Animal</h2>

        <p className={classes.p1}>
          <span className={classes.quote}>
            "Tudo feito com amor para que voce e seu pet alcance seu destino da
            melhor forma possivel."
          </span>
          <span className={classes.owner}>- Pamela </span>
          <span className={classes.address}>
            Rua Americo Angélico, 81, São Paulo | Contato: 11980295927
          </span>
        </p>
      </div>
      <small className={classes.small}>
        Created by !Cube Studio {new Date().getFullYear()} - Carona Animal -
        Todos os direitos reservados
      </small>
    </footer>
  );
};

export default Footer;
