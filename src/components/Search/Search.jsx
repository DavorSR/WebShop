import './Search.css';
import logo from '../Images/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faHeart} from "@fortawesome/free-solid-svg-icons";
import{faShoppingCart} from "@fortawesome/free-solid-svg-icons";

function Search(){


    return (
        <>
         <div className="search">
                    {/* <!-- LOGO --> */}
                        <div className="search-logo">
                            <a href="/" className="logo">
                                <img src={logo} alt="" />
                            </a>
                        </div>
                  
                    {/* <!-- /LOGO -->

                    <!-- SEARCH BAR --> */}

                        <div className="search-field">
                            <form action="get">
                                <select className="input-select">
                                    <option value="0">All Categories</option>
                                    <option value="1">Category 1</option>
                                    <option value="2">Category 2</option>
                                </select>
                                <input placeholder="Search here" className="input"/>
                                <button className="search-btn">Search</button>
                            </form>
                    </div>


                        <div className="search-ctn">
                            <div>
                                <a href="/">
                                <FontAwesomeIcon className='icon' icon={faHeart} />
                                    <span>Your Wishlist</span>
                                    <div className="qty">2</div>
                                </a>
                            </div>

                            <div className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                <FontAwesomeIcon className='icon' icon={faShoppingCart} />
                                    <span>Your Cart</span>
                                    <div className="qty">3</div>
                                </a>
                                
                                </div>
                            </div>
                            {/* <!-- /Cart --> */}

                           
                        </div>
                    {/* <!-- /ACCOUNT --> */}
              
           
        
        </>
    )


}

export default Search;