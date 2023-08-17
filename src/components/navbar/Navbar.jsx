import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Container } from '@mui/material';

import { PowerSettingsNew, Adb } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function NavBar() {

    const navigate = useNavigate()
    const handleClose = () => {
        localStorage.clear();
        navigate("/")
    }


    const username =((localStorage.getItem('username').split('@')[0]).split('\"'))


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex' }} >
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
                                letterSpacing: '0rem',
                                color: '#fff',
                                textDecoration: 'none',
                            }}
                        >
                            POT DE FLEUR CONNECTE
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }} >
                        <Typography sx={{ mr: '20px', fontSize: "12px", color: '#fff', padding: "2px 10px", borderRadius: '3px', backgroundColor: "#38296cc0" }}>{username}</Typography>
                        <PowerSettingsNew sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, cursor: 'pointer' }} onClick={handleClose} />
                        <Typography
                            noWrap
                            component="a"
                            onClick={handleClose}
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
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
