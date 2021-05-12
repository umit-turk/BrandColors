import React from 'react';
import {getContrastYIQ} from '../helpers';

function Copied({color}) {
    return (
        <div className="copied" style={{'--bgColor': `#${color}`, '--textColor': `#${getContrastYIQ}`}}>
          Copied #{color} to Clipboard
        </div>
    )
}

export default Copied
