import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
    palette : {
        primary : {
            main : '#B85567',
            light : '#F3BCC5',
            dark : '952F41'
        }
    },
    typography : {
        fontFamily : 'Quicksand',
        fontWeightLight : 400,
        fontWeightRegular : 500,
        fontWeightMedium : 600,
        fontWeightBold : 700
    }
})

export default theme