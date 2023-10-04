import { Box, Grid, Typography } from '@mui/material';
import Card from '../card/card.component';
import './card-list.styles.scss';

const CardList = ({ cars }) => (
    <Grid container spacing={2} className='grid-container '>
        {
            cars.length === 0
                ?
                <Box style={{ width: '100%', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography style={{ textAlign: 'center' }}> No Data</Typography>
                </Box>
                :
                cars.map((car) => {
                    return <Card key={car.id} car={car} />;
                })}
    </Grid>
);

export default CardList;