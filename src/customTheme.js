import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
    styles: {
        config: {
            initialColorMode: 'light',
            useSystemColorMode: false
        },

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
    }
});
