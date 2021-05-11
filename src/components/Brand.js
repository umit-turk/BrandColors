import React, { useContext } from 'react'
import {getContrastYIQ} from '../helpers';
import MainContext from '../MainContext'
import ClipboardButton from 'react-clipboard.js';


function Brand({brand}) {

    const {setSelectedBrands, selectedBrands} = useContext(MainContext)

    const toggleSelected = () => {
        if(selectedBrands.includes(brand.slug)){
            setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))// olanı çıkartmış olduk.
        } else {
            setSelectedBrands([...selectedBrands, brand.slug])
        }
    }

    return (
        <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`}>
            <h5 onClick={toggleSelected}>{brand.title}</h5>
            <div className="brand-colors">
                {brand.colors.map(color => (
                    <ClipboardButton data-clipboard-text={color} component="span"  style={{'--bgColor':`#${color}`, '--textColor':`${getContrastYIQ(color)}`}}>
                    {color}
                    </ClipboardButton>
                    
                ))}
            </div>
        </div>
    )
}

export default Brand
