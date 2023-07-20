import * as React from 'react';
import '../components/styles/globalStyle.scss'
import NavBar from '../components/navbar/Navbar';
import Card from '../components/card/Card';
import { Box } from '@mui/material';
import ChartOne from '../components/chart/ChartOne.jsx';
import ChartTwo from '../components/chart/ChartTwo.jsx';
import ChartThree from '../components/chart/ChartThree.jsx';
import ChartFour from '../components/chart/ChartFour.jsx';

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
                    <div className="legend">
                        <span className="legendLabel">Humidité du sol</span>
                        <span className="LegendDot"></span>
                    </div>
                    <ChartOne />
                </div>
                <div className="RightChat">
                <div className="legend">
                        <span className="legendLabel">Humidité ambiante</span>
                        <span className="LegendDot"></span>
                    </div>
                <ChartTwo />

                </div>
            </div>
            <div className='chart'>
                <div className="lefChat">
                    <ChartThree />
                </div>
                <div className="RightChat">
                <ChartFour />

                </div>
            </div>

        </React.Fragment>
    );
}
export default Home;
