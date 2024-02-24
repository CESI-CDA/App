import React from 'react';
import { Image } from 'react-native';

import LogoLight from '../assets/1-background-remove.png';
import LogoDark from '../assets/2-background-remove.png';
import LogoColorful from '../assets/3-background-remove.png';




export default function Logo({ theme, style }) {
    let logoSource;

    switch (theme) {
        case 'light':
            logoSource = LogoLight;
            break;
        case 'dark':
            logoSource = LogoDark;
            break;
        case 'colorful':
            logoSource = LogoColorful;
            break;
        default:
            logoSource = LogoColorful;
    }

    return (
        <Image
            source={logoSource}
            style={[{ width: 350, height: 105 }, style]}
        />
    );
}

