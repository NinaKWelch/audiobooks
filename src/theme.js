import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

// red #e64a19
// light blue #e6eeef
// light pink #eb928a

// eslint-disable-next-line import/no-mutable-exports
let theme = createMuiTheme({
  palette: {
    // add palette
  },
  overrides: {
    // add overries
  }
})

theme = responsiveFontSizes(theme)

export default theme
