import {useState} from 'react';
import styles from "./Header.module.scss";
import {Link, NavLink,} from 'react-router-dom';
import { FaTimes} from 'react-icons/fa';
import {HiOutlineMenuAlt3} from 'react-icons/hi';
import logo from '../../assets/Final Logo white_ .png'


const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");




const  Header = () => {
    const hideMenu = () => {
        setShowMenu(false);
      };

    const [showMenu, setShowMenu] = useState();

    const toggleMenu = ()=>{
      setShowMenu(!showMenu)

    };
    return (
        <header>
            <div className={styles.header}>
            <div className={styles.logo}>
                
                <Link to='/' >               
              
                   <img className='headerImg' src={logo} alt='logo'/>
           
               </Link>    
               
               </div>  
                <nav className={
              showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
            }>
              <div className={
                showMenu
                  ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                  : `${styles["nav-wrapper"]}`
              } 
              onClick={hideMenu}>
             
              </div>
              <div className={styles["header-right"]}>
               <ul onClick={hideMenu}>
                
              <li className={styles["logo-mobile"]}>
                {/* {logo} */}
                <FaTimes size={22} color="#fff" onClick={hideMenu} />
                
              </li>
              
              
              <li>
                <NavLink to="/project" className={activeLink} on>
                    {/* classname={(state)=>console.log(state)} */}
                 Project
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className={activeLink} >
                  Services
                </NavLink>
              </li>
              <li>
              <NavLink to="/about"  className={activeLink} >
                    About us
                  </NavLink>
              </li>
              <li>
              <NavLink to="/contact" className={activeLink} >
                    Contact us
                  </NavLink>
              </li>
            </ul>
            </div>
           
            
                </nav>
                
                <div className={styles['menu-icon']}>
  <HiOutlineMenuAlt3 size={25} onClick={toggleMenu} />
</div>
            </div>
        </header>
      )
    }
    


export default Header;