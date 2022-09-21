import classes from '../Header/Header.module.css';


const Header = () => {
    return (
       <div className={classes.headerContainer}>
            <div className={classes.innerHeader}>
                <header className={classes.header}>Welcome🎉 to your To-Do List</header>
                <button className={classes.taskButton}><span>+</span> create task</button>
            </div>
       </div>
    );
  }
  
  export default Header;