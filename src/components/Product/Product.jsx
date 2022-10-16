import "./Product.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faStar} from "@fortawesome/free-solid-svg-icons";
import{faHeart} from "@fortawesome/free-solid-svg-icons";
import{faEye} from "@fortawesome/free-solid-svg-icons";
import{faExchange} from "@fortawesome/free-solid-svg-icons";
import{faShoppingCart} from "@fortawesome/free-solid-svg-icons";


function Product(props) {

    const image = props.image;

  return (
    <>
      <div className="product">
        <div className="product-img">
          <img src={image} alt="" />
          <div className="product-label">
            <span className="new">NEW</span>
          </div>
        </div>
        <div className="product-body">
          <p className="product-category">{props?.category}</p>
          <h3 className="product-name">
            <NavLink to={`/product/${props.id}`}>{props?.title}</NavLink>
          </h3>
          <h4 className="product-price">
          ${props?.price} <del className="product-old-price"></del>
          </h4>
          <div className="product-rating">
          <FontAwesomeIcon className='icon' icon={faStar} />
          <FontAwesomeIcon className='icon' icon={faStar} />
          <FontAwesomeIcon className='icon' icon={faStar} />
          <FontAwesomeIcon className='icon' icon={faStar} />
          <FontAwesomeIcon className='icon' icon={faStar} />

          </div>
          <div className="product-btns">
            <button className="add-to-wishlist">
            <FontAwesomeIcon className='icon' icon={faHeart} />              <span className="tooltipp">add to wishlist</span>
            </button>
            <button className="add-to-compare">
            <FontAwesomeIcon className='icon' icon={faExchange} />              <span className="tooltipp">add to compare</span>
            </button>
            <button className="quick-view">
            <FontAwesomeIcon className='icon' icon={faEye} />              <span className="tooltipp">add to compare</span>
              <span className="tooltipp">quick view</span>
            </button>
          </div>
        </div>
        <div className="add-to-cart">
          <button className="add-to-cart-btn"> Add to
          <FontAwesomeIcon className='icon' icon={faShoppingCart} />          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
