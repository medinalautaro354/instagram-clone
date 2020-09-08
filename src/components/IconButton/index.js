import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const IconButton = ({ size, icon, style }) => {
    return (
        <TouchableOpacity>
            <FontAwesomeIcon
                size={size}
                icon={icon}
                style={style}
            />
        </TouchableOpacity>
    );
}

export default IconButton