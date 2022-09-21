import classes from '../Main/Main.module.css';
import Header from '../Header/Header';
import Card from '../Card/Card';



function Main() {
    return (
      <div className={classes.main}>
       <Header />
       <Card />
      </div>
    );
  }
  
  export default Main;
  