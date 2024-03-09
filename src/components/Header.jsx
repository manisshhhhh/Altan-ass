import { NavLink } from 'react-router-dom';

const Header = () => {
 
    return (
        <nav className='navbar'>           
            <ul>               
                <li>                 
                    <NavLink exact to="/" activeClassName="active" className='nav-link logo'>atlan</NavLink>            
                </li>         
                <li>          
                    <NavLink to="/featured" activeClassName="active" className='nav-link'>Featured Models</NavLink>        
                </li>      
                <li>
                    <NavLink to="/addModel" activeClassName="active" className='nav-link'>Add Model</NavLink>
                </li>
            </ul>
        </nav>
  );
  
}

export default Header
