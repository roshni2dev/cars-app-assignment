import { PeopleAltOutlined } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material";

import './card-feature.styles.scss';

const CardFeature = ({ feature }) => {
    return (
        <Grid container spacing={2}>
            {
                feature.map((item, ind) => (
                    <>
                        <Grid item xs={6}>

                            <Typography className="feature-section-heading" variant="subtitle1">
                                <PeopleAltOutlined style={{ fill: '#4999ee' }} />&nbsp;{item.allowedPeople} People
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className="feature-section-heading" variant="subtitle1">
                                <PeopleAltOutlined style={{ fill: '#4999ee' }} />&nbsp;{item.isHybrid ? 'Hybrid' : 'Gasoline'}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className="feature-section-heading" variant="subtitle1">
                                <PeopleAltOutlined style={{ fill: '#4999ee' }} />&nbsp;{item.limit}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className="feature-section-heading" variant="subtitle1">
                                <PeopleAltOutlined style={{ fill: '#4999ee' }} />&nbsp;{item.isAutomatic ? 'Automatic' : ''}
                            </Typography>
                        </Grid>
                    </>
                ))
            }
        </Grid>
    )
}

export default CardFeature