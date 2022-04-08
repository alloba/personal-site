import {extendTheme} from "@chakra-ui/react";


const theme = {
    styles: {
        global: {
            h2: {
                paddingTop: '1rem',
                paddingBottom: '2rem',
                textAlign: 'center'
            },
            p: {
                paddingBottom: '1rem'
            }
        }
    },
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false
    }
}

export default extendTheme(theme);
