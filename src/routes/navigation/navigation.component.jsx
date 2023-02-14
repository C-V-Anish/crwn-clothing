import { Fragment } from "react";
import { Outlet,Link } from "react-router-dom"; 
import './navigation.component.scss'
import { ReactComponent as Crwnlogo } from '../../assets/crown.svg'
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/fiebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const {currentUser}=useContext(UserContext);


  console.log(currentUser);
    return (<Fragment>
      <div className="nav-bar">
        <Link className="nav-logo" to='/'>
            <Crwnlogo className="logo" />
        </Link>
        <div className="nav-links">
            <Link className="nav-link" to='/shop'>SHOP</Link>
            {currentUser ? <span className="nav-link" onClick={signOutUser}>{' '}SIGN OUT{' '}</span>:<Link className="nav-link" to='/auth'>SIGN IN</Link> }
            <CartIcon/>
        </div>
        <CartDropdown/>
      </div>
      <Outlet/>
    </Fragment>
    );
  }

export default Navigation;