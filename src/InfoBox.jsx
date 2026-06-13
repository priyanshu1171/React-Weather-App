import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import "./InfoBox.css";

export default function InfoBox({ info }) {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1675827055668-2dae1b8ac181?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"

    const COLD_URL = "https://unsplash.com/photos/trees-with-fogs-PDtJt8Cp-4Q"
    const HOT_URL = "https://images.unsplash.com/photo-1673191898695-8252d409d82c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAIN_URL = "https://images.unsplash.com/photo-1620385019253-b051a26048ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmFpbnxlbnwwfHwwfHx8MA%3D%3D"
    return (
        <div className="InfoBox">
            <h4>Weather Information--{info.weather}</h4>
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            <p>Temperature={info.temp}&deg;</p>
                            <p>humidity={info.humidity}</p>
                            <p>Min Temp={info.tempMin}</p>
                            <p>Max temp={info.tempMax}</p>
                            <p>
                                The Weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;
                            </p>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}