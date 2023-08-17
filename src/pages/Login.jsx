import React from "react";
import './login.scss'
import {
    FormControl, InputLabel, MenuItem, Select,
    Button, TextField, Typography, 
} from "@mui/material";

import Axios from "../services/caller.service";
import { useNavigate } from "react-router-dom";
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

    console.log(typefleur)

    const handleSubmit = (event) => {

        event.preventDefault();
        if(typefleur===""){
            setError(true);
            return setErrorMsg("veuillez selectioner le type de fleur");
        }

        Axios.post(`/user/signin`, {
            username: credentials.username,
            password: credentials.password
        })
            .then(response => {
           
                if (response.status === 200 && (response.data.token)) {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('username', JSON.stringify(response.data.username));
                    localStorage.setItem('uid', response.data.id);
                    navigate('/home', { replace: true })
                    setCredentials(prev => ({ [prev.username]: '', [prev.password]: '' }))
                }else{
                    setError(true);
                    setErrorMsg(response.data.message)
                }

            })
            .catch(error => {
                console.log(error)
                console.log("--CATH--");
                console.log(error.response.data.message)
                setErrorMsg(error.response.data.message);
                setError(true);
            })
    }

    return (
        <div className="container"> 
            <div className="body">
                <div className="left">
                    {/* <div className="title" >POT DE FLEUR CONNECTE</div > */}
                </div>
                <div className="rigth">
                    <div className="title">Se connecter</div>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Nom d'utilisateur"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        value={credentials.password}
                        label="Mot de passe"
                        type="password"
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
                    <div style={{display:'flex', justifyContent:'end'}}>
                    <Typography color='primary' sx={{fontStyle:'oblique', textDecoration:'underline', cursor:'pointer'}}>Mot de passe oublié?</Typography>
                    </div>

                </div>
            </div>
            <Notification error={error} setError={setError} errorMsg={errorMsg} setErrorMsg={setErrorMsg} />
        </div>
    );
}
