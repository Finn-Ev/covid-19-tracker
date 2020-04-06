import React from 'react';
import "./cards.scss"
import { Card, CardContent, Typography, Grid } from "@material-ui/core"
import CountUp from "react-countup"

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) return "Loading..."
    return (
        <div className="cards">
            <img className="img" src="https://i.ibb.co/7QpKsCX/image.png" alt="covid img"/>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className="card infected">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infiziert</Typography>
                        <Typography gutterBottom>
                            <CountUp duration="2.5" start={0} end={confirmed.value} separator=","></CountUp>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString()}</Typography>
                        <Typography variant="body2">Anzahl aktuell infizierter Personen</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card recovered">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Erholt</Typography>
                        <Typography gutterBottom>
                            <CountUp duration="2.5" start={0} end={recovered.value} separator=","></CountUp>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString()}</Typography>
                        <Typography variant="body2">Anzahl genesene Personen</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card deaths">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Verstorbene</Typography>
                        <Typography gutterBottom>
                            <CountUp duration="2.5" start={0} end={deaths.value} separator=","></CountUp>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString()}</Typography>
                        <Typography variant="body2">Anzahl Verstorbene</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;