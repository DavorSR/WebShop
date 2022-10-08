import './NavBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Search from '../Search/Search';

function NavBar(){



    return(
        <>
			<div id="top-header">
					<ul className="header-links pull-left">
						<li><a href="#"><FontAwesomeIcon className='icon' icon={faPhone} /> +021-95-51-84</a></li>
						<li><a href="#"><FontAwesomeIcon className='icon' icon={faEnvelope} /> email@email.com</a></li>
						<li><a href="#"><FontAwesomeIcon className='icon' icon={faMapMarker} /> 1734 Stonecoal Road</a></li>
					</ul>
					<ul className="header-links pull-right">
						<li><a href="#"><FontAwesomeIcon className='icon' icon={faDollarSign} /> USD</a></li>
						<li><a href="#"><FontAwesomeIcon className='icon' icon={faUser} /> My Account</a></li>
					</ul>
				</div>
                <Search />
        </>
    )
}

export default NavBar;