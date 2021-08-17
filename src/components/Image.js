// Image Component  
import React, {useState, useContext} from 'react';
import {Context} from '../Context'
import PropTyoes from 'prop-types';

function Image({className, img}) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)


    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite"  onClick={() => toggleFavorite(img.id)} />
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)} />
        }
    }

    // const cartIcon = hovered && <i className="ri-add-circle-line favorite"></i>

    return(
        <div 
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon()}
            {/* {cartIcon} */}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool.isRequired
    })
}

export default Image