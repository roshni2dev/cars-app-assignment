import { FavoriteBorder } from "@mui/icons-material";
import { Box, Button,Grid, Typography } from "@mui/material";

import './card.styles.scss'
import CardFeature from "../card-feature/card-feature.component";

const Card = ({ car }) => {
    const {  name, model, features, price, imageUrl } = car;

    return (
        <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
            <Box className='card'>
                <img className="image" src={imageUrl} alt='cars' />
                <Box className='content'>
                    <Box className='heading-section'>
                        <Typography className="card-heading" gutterBottom variant="h6" component="div">
                            {name}
                        </Typography>
                        <Typography className="card-model" gutterBottom variant="subtitle1" component="div">
                            {model}
                        </Typography>
                    </Box>
                    <CardFeature feature={features} />
                </Box>
                <Box className='action-area'>
                    <Typography className="price" variant="subtitle2">
                        ${price}<Box style={{ fontSize: '15px' }} component={'span'}>/month</Box>
                    </Typography>
                    <Box style={{ display: 'flex', }}>
                        <Box className='favorite-icon-container'>
                            <FavoriteBorder className="favorite-icon" />
                        </Box>
                        <Button className="rent-now-button" >rent now</Button>

                    </Box>

                </Box>
            </Box>
        </Grid>

    );
};

export default Card;