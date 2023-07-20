import * as React from 'react';
import {AppBar, Box,Toolbar,Typography,Container} from '@mui/material';

import { PowerSettingsNew, Adb } from '@mui/icons-material';

function NavBar() {

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{display:'flex', justifyContent:'space-between'}}>
                    <Box sx={{display:'flex'}} >
                        <Adb sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            MALKIA DASHBOARD
                        </Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center'}} >
                        <PowerSettingsNew sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Deconnexion
                        </Typography>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;
