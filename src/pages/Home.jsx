import * as React from 'react';
import '../components/styles/globalStyle.scss'
import NavBar from '../components/navbar/Navbar';
import Card from '../components/card/Card';
import { Alert, AlertTitle, Box } from '@mui/material';
import ChartOne from '../components/chart/ChartOne.jsx';
import ChartTwo from '../components/chart/ChartTwo.jsx';
import ChartThree from '../components/chart/ChartThree.jsx';
import ChartFour from '../components/chart/ChartFour.jsx';
import Footer from '../components/footer/Footer';
import Axios from '../services/caller.service';


function Home() {

    const [dataTable, setDataTable] = React.useState([
        { id: 0, temperatureamb: 0, humiditeeamb: 0, humiditeesol: 0, niveauciterne: 0, reading_time: '' },
        { id: 0, temperatureamb: 0, humiditeeamb: 0, humiditeesol: 0, niveauciterne: 0, reading_time: '' },
        { id: 0, temperatureamb: 0, humiditeeamb: 0, humiditeesol: 0, niveauciterne: 0, reading_time: '' },
        { id: 0, temperatureamb: 0, humiditeeamb: 0, humiditeesol: 0, niveauciterne: 0, reading_time: '' },
        { id: 0, temperatureamb: 0, humiditeeamb: 0, humiditeesol: 0, niveauciterne: 0, reading_time: '' },
        { id: 0, temperatureamb: 0, humiditeeamb: 0, humiditeesol: 0, niveauciterne: 0, reading_time: '' },
        { id: 0, temperatureamb: 0, humiditeeamb: 0, humiditeesol: 0, niveauciterne: 0, reading_time: '' },
        { id: 0, temperatureamb: 0, humiditeeamb: 0, humiditeesol: 0, niveauciterne: 0, reading_time: '' },
        { id: 0, temperatureamb: 0, humiditeeamb: 0, humiditeesol: 0, niveauciterne: 0, reading_time: '' },
        { id: 0, temperatureamb: 0, humiditeeamb: 0, humiditeesol: 0, niveauciterne: 0, reading_time: '' },
        { id: 0, temperatureamb: 0, humiditeeamb: 0, humiditeesol: 0, niveauciterne: 0, reading_time: '' },
        { id: 0, temperatureamb: 0, humiditeeamb: 0, humiditeesol: 0, niveauciterne: 0, reading_time: '' },
        { id: 0, temperatureamb: 0, humiditeeamb: 0, humiditeesol: 0, niveauciterne: 0, reading_time: '' },
    ])

    React.useEffect(() => {

        setInterval(() => {
            Axios.get(`/infopotfleur`)
                .then(response => {
                    if (response.data.data.length > 11) setDataTable(response.data.data.slice(-10));
                    else setDataTable(current => ([...current]));
                })
                .catch(error => console.log(error))

        }, 1000);

    }, [])

    console.log('Home')

    return (
        <React.Fragment>
            <NavBar />

            <Box className='cardContainer' >
                <div className="box box1">
                    <Card type="humiditeSol" />
                </div>
                <div className="box box1">
                    <Card type="humiditeAmbiante" />

                </div>
                <div className="box box1">
                    <Card type="temperatureAmbiante" />

                </div>
                <div className="box box1">
                    <Card type="niveauEau" />

                </div>

            </Box>

            <div className="chart2">

                <div className="box box1">
                    <div className="legend">
                        <span className="legendLabel">Humidité du sol</span>
                        <span className="LegendDot"></span>
                    </div>
                    <ChartOne dataTable={dataTable} />
                </div>

                <div className="box box2">
                    <div className="legend">
                        <span className="legendLabel">Humidité ambiante</span>
                        <span className="LegendDot"></span>
                    </div>
                    <ChartTwo dataTable={dataTable} />
                </div>

                <div className="box box3">
                    <div className="legend">
                        <span className="legendLabel">Température ambiante</span>
                        <span className="LegendDot"></span>
                    </div>
                    <ChartThree dataTable={dataTable} />
                </div>

                <div className="box box4">
                    <div className="legend">
                        <span className="legendLabel">Niveau citerne d'eau</span>
                        <span className="LegendDot"></span>
                    </div>
                    <ChartFour dataTable={dataTable} />
                </div>
            </div>

            {/* <AlertDialog /> */}

            <Footer />
        </React.Fragment>
    );
}
export default Home;
