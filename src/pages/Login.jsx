import React from "react";
import {
    Container, FormControl, InputLabel, MenuItem, Select,
    Button, CssBaseline, TextField, Link, Paper, Grid, Typography, Box
} from "@mui/material";

export default function Login() {

    const [typefleur, setTypefleur] = React.useState('');
    const [credentials, setCredentials] = React.useState({
        username: '',
        password: '',
    })

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
    }

    return (
        <Container component="main" maxWidth="lg">
            <Box
                sx={{
                    marginTop: 8,
                }}
            >
                <Grid container>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: "url(https://images.unsplash.com/photo-1596219595735-5ca20a1194bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)",
                            backgroundRepeat: "no-repeat",
                            backgroundColor: (t) =>
                                t.palette.mode === "light"
                                    ? t.palette.grey[50]
                                    : t.palette.grey[900],
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        className="imgLogin"
                    />
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
        </Container>
    );
}
