import React from "react";
import {
    Container, FormControl, InputLabel, MenuItem, Select,
    Button, CssBaseline, TextField, Link, Paper, Grid, Typography, Box
} from "@mui/material";

import imageBg from '../../src/components/assets/pot_de_fleur_one.bmp'
import Axios from "../services/caller.service";
import { Navigate, useNavigate } from "react-router-dom";
import Notification from '../components/dialog/Notification.js'

export default function Login() {

    const [typefleur, setTypefleur] = React.useState('');
    const [credentials, setCredentials] = React.useState({
        username: '',
        password: '',
    })

    const [error, setError] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState('');

    const navigate = useNavigate()

    const handleChange = (event) => {
        setCredentials((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    };

    const handleSelect = (event) => {
        setTypefleur(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(credentials);
        console.log(typefleur);

        Axios.post(`/user/signin`, {
            username: credentials.username,
            password: credentials.password
        })
            .then(response => {
                console.log(response)
                if (response.status === 200 && (response.data.token)) {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('username', JSON.stringify(response.data.username));
                    localStorage.setItem('uid', response.data.id);
                    navigate('/home', { replace: true })
                }
           
            })
            .catch(error => {
                console.log("--CATH--");
                console.log(error.response.data.message)
                setErrorMsg(error.response.data.message);
                setError(true);
            })
    }

    return (
        <Container component="main" maxWidth="lg">
            <Box sx={{ marginTop: 8 }}>
                <Grid container>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: `url(${imageBg})`,
                            backgroundRepeat: "no-repeat",
                            backgroundColor: (t) =>
                                t.palette.mode === "light"
                                    ? t.palette.grey[50]
                                    : t.palette.grey[900],
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            position: 'relative'
                        }}
                        className="imgLogin"
                    />

                    <Typography component="h1" variant="h5" sx={{
                        padding: '10px',
                        position: 'absolute',
                        fontWeight: '900',
                        color: 'rgb(154, 244, 181)',
                        left: 200,
                        top: 280,
                        fontSize: '25px'

                    }}>
                        POT DE FLEUR CONNECTE
                    </Typography>
                    <Grid
                        item
                        xs={12}
                        sm={8}
                        md={5}
                        component={Paper}
                        elevation={6}
                        square
                    >
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Typography component="h1" variant="h5">
                                Se connecter
                            </Typography>
                            <Box
                                component="form"
                                noValidate
                                onSubmit={handleSubmit}
                                sx={{ mt: 1 }}
                            >
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Nom d'utilisateur"
                                    name="username"
                                    value={credentials.username}
                                    onChange={handleChange}
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    value={credentials.password}
                                    label="Mot de passe"
                                    type="password"
                                    autoComplete={false}
                                    onChange={handleChange}
                                />
                                <FormControl fullWidth sx={{ mt: 1 }}>
                                    <InputLabel id="demo-simple-select-label">Type de fleur</InputLabel>
                                    <Select
                                        value={typefleur}
                                        label="Type de fleur"
                                        onChange={handleSelect}
                                    >
                                        <MenuItem value="ceriser">Fleur de cerisier</MenuItem>
                                        <MenuItem value="orchide">Orchidée</MenuItem>
                                        <MenuItem value="cactus">Fleurs de cactus</MenuItem>
                                    </Select>
                                </FormControl>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={handleSubmit}
                                >
                                    connexion
                                </Button>
                                <Grid container sx={{ justifyContent: 'right' }}>
                                    {/* <Grid item xs> */}
                                    <Link href="#" variant="body2">
                                        Mot de passe oublié?
                                    </Link>

                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Notification error={error} setError={setError} errorMsg={errorMsg} setErrorMsg={setErrorMsg}/>
        </Container>
    );
}
