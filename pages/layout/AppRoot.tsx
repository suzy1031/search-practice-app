import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'

const AppRoot = (props: React.PropsWithChildren<{}>) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="subtitle2" color="inherit" component="div">
              Search Practice App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box className="tw-flex-0">
        <Toolbar />
      </Box>
      <Container maxWidth="md">{props.children}</Container>
    </>
  )
}
export default AppRoot
