import React from 'react';
import { Typography, Grid } from '@mui/material';
import './index.scss';
import logo from '../../assets/logo.png';
import facebookIcon from '../../assets/facebookIcon.png';
import instagramIcon from '../../assets/instagramIcon.png';
import twitterIcon from '../../assets/twitterIcon.png';
import playStoreIcon from '../../assets/playStoreIcon.png';
import appStoreIcon from '../../assets/appStoreIcon.png';


class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className='footer'>
                <Grid container direction="row" spacing={1}>
                    <Grid item lg={3} md={3}>
                        <img src={logo} height="54" alt="byte" />
                        <Typography className='company-description'>
                            lorem ipsum dolalr sit lorem ipsum dlorem ipsum dolalr sit lorem ipsum lorem ipsum dolalr
                        </Typography>
                    </Grid>
                    <Grid item lg={2} md={2} xs={4} sm={4}>
                        <Typography className='section-heading'>Company</Typography>
                        <Typography className='links'>About</Typography>
                        <Typography className='links'>Careers</Typography>
                        <Typography className='links'>Mobile</Typography>
                    </Grid>
                    <Grid item lg={2} md={2} xs={4} sm={4}>
                        <Typography className='section-heading'>Contact</Typography>
                        <Typography className='links'>Help/FAQ</Typography>
                        <Typography className='links'>Press</Typography>
                        <Typography className='links'>Affilates</Typography>
                    </Grid>
                    <Grid item lg={2} md={2} xs={4} sm={4}>
                        <Typography className='section-heading'>More</Typography>
                        <Typography className='links'>Policy</Typography>
                        <Typography className='links'>Terms & Conditions</Typography>
                    </Grid>
                    <Grid item lg={3} md={3}>
                        <Grid container direction="row" spacing={2}>
                            <Grid item>
                                <img src={facebookIcon} alt="facebook" height="45" />
                            </Grid>
                            <Grid item>
                                <img src={instagramIcon} alt="instagram" height="45"/>
                            </Grid>
                            <Grid item>
                                <img src={twitterIcon} alt="twitter" height="45"/>
                            </Grid>
                        </Grid>
                        {/* <Typography className='app-name-description'>Discover our app</Typography>
                        <Grid container direction="row" spacing={2}>
                            <Grid item>
                                <img src={playStoreIcon} alt="play store" />
                            </Grid>
                            <Grid item>
                                <img src={appStoreIcon} alt="app store"/>
                            </Grid>
                        </Grid> */}
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default Footer;
