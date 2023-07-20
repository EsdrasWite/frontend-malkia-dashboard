import * as React from 'react';
import '../components/styles/globalStyle.scss'
import NavBar from '../components/navbar/Navbar';
import Card from '../components/card/Card';
import { Box } from '@mui/material';

function Home() {

    return (
        <React.Fragment>
            <NavBar />

            <Box className='cardContainer' >
                <Card type="humiditeSol" />
                <Card type="humiditeAmbiante" />
                <Card type="temperatureAmbiante" />
                <Card type="niveauEau" />
            </Box>

            <div className='chart'>
                <div className="lefChat">

                </div>
                <div className="RightChat">

                </div>
            </div>

        </React.Fragment>
    );
}
export default Home;
