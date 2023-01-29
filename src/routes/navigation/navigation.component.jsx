import { Fragment } from "react";
import { Outlet,Link } from "react-router-dom"; 
import './navigation.component.scss'
import { ReactComponent as Crwnlogo } from '../../assets/crown.svg'

const Navigation = () => {
    return (<Fragment>
      <div className="nav-bar">
        <Link className="nav-logo" to='/'>
            <Crwnlogo className="logo" />
        </Link>
        <div className="nav-links">
            <Link className="nav-link" to='/shop'>SHOP</Link>
            <Link className="nav-link" to='/auth'>SIGN IN</Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>
    );
  }

export default Navigation;