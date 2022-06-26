import React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import './index.scss';
import sliderImage from '../../assets/sliderImage.png';
import playStore from '../../assets/playStore.png';
import qualityFood from '../../assets/qualityFood.png';
import superTaste from '../../assets/superTaste.png';
import fastDelivery from '../../assets/fastDelivery.png';
import Resturants from './resturants';
import selling1 from '../../assets/selling1.png';
import selling2 from '../../assets/selling2.png';
import selling3 from '../../assets/selling3.png';
import selling4 from '../../assets/selling4.png';
import selling5 from '../../assets/selling5.png';
import selling6 from '../../assets/selling6.png';
import selling7 from '../../assets/selling7.png';
import selling8 from '../../assets/selling8.png';
import customerSays from '../../assets/customerSays.png';
import chefIcon from '../../assets/chefIcon.png';
import playStoreIcon from '../../assets/playStoreIcon.png';
import appStoreIcon from '../../assets/appStoreIcon.png';



class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            best_sellers: [
                { image: selling1, name: "Patty Burger", description: "lorem ipsum dolalr sit lorem ipsum", price: 300 },
                { image: selling2, name: "Son of Bun", description: "lorem ipsum dolalr sit lorem ipsum", price: 950 },
                { image: selling3, name: "Seed Pumpkin", description: "lorem ipsum dolalr sit lorem ipsum", price: 270 },
                { image: selling4, name: "Shwarma", description: "lorem ipsum dolalr sit lorem ipsum", price: 200 },
                { image: selling5, name: "Fries", description: "lorem ipsum dolalr sit lorem ipsum", price: 150 },
                { image: selling6, name: "Fanta", description: "lorem ipsum dolalr sit lorem ipsum", price: 100 },
                { image: selling7, name: "Buldozer", description: "lorem ipsum dolalr sit lorem ipsum", price: 1000 },
                { image: selling8, name: "Family Pack", description: "lorem ipsum dolalr sit lorem ipsum", price: 300 },
            ]
        }
    }

    // const 


    componentDidMount() {
    }

    render() {
        return (
            <div className='main'>
                <div className='main-banner-div' id="mainBannerSection">
                    <Grid container direction="row" spacing={3}>
                        <Grid item xs={7} m="auto">
                            <div className='main-banner-content'>
                                <Typography className='content-1'>Freshness in</Typography>
                                <Typography className='content-2'>Every Bite</Typography>
                                <Typography className='content-3'>lorem ipsum dolalr sit lorem ipsum dolalr sitlorem ipsum dolalr sitlorem ipsum</Typography>

                                <Grid container direction="row" spacing={3}>
                                    <Grid item>
                                        <Button size='large' className='order-now' variant='contained'>Order Now</Button>
                                    </Grid>
                                    <Grid item>
                                        <a href='#getStartedSection' style={{textDecuration: "none"}}>
                                            <Button variant='contained' className='download-app'><img src={playStore}  alt="" /></Button>
                                            <span  className='download-button-content'>Download App</span>
                                        </a>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={5} m="auto">
                            <img className='main-banner-image' src={sliderImage} alt="" />
                        </Grid>
                    </Grid>
                </div>

                <div className='service-section' id="serviceSection">
                    <Typography className='main-heading'>We Offer <span className='heading-part'>Best Services</span></Typography>
                    <Typography className='sub-heading'>lorem ipsum dolalr sit lorem ipsum dolalr sitlorem ipsum dolalr <br /> sitlorem ipsum dolalr sitlorem ipsum dolalr sit</Typography>
                    <Grid container justifyContent="" sx={{ flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" }, mt: 3 }} spacing={2}>
                        <Grid item xs={10} md={3} lg={3} m='auto'>
                            <Grid container direction="column">
                                <Grid item className='content-center'>
                                    <img src={qualityFood} alt="" className='img' />
                                </Grid>
                                <Grid item className='content-center'>
                                    <Typography className='img-heading'>Quality Food</Typography>
                                </Grid>
                                <Grid item className='content-center'>
                                    <Typography className='img-heading-content'>lorem ipsum dolalr sit lorem ipsum dolalr sitlorem dolalr sitl</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={10} md={3} lg={3} m='auto'>
                            <Grid container direction="column">
                                <Grid item className='content-center'>
                                    <img src={superTaste} alt="" className='img' />
                                </Grid>
                                <Grid item className='content-center'>
                                    <Typography className='img-heading'>Super Taste</Typography>
                                </Grid>
                                <Grid item className='content-center'>
                                    <Typography className='img-heading-content'>lorem ipsum dolalr sit lorem ipsum dolalr sitlorem dolalr sitl</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={10} md={3} lg={3} m='auto'>
                            <Grid container direction="column">
                                <Grid item className='content-center'>
                                    <img src={fastDelivery} alt="" className='img' />
                                </Grid>
                                <Grid item className='content-center'>
                                    <Typography className='img-heading'>Fast Delivery</Typography>
                                </Grid>
                                <Grid item className='content-center'>
                                    <Typography className='img-heading-content'>lorem ipsum dolalr sit lorem ipsum dolalr sitlorem dolalr sitl</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>

                <div className='our-resturants' id="ourResturantSection">
                    <Typography className='main-heading'>Our <span className='heading-part'>Resturants</span></Typography>
                    <Typography className='sub-heading'>lorem ipsum dolalr sit lorem ipsum dolalr sitlorem ipsum dolalr sitlorem ipsum dolalr sitlorem ipsum dolalr sit</Typography>
                    <Resturants is_desktop={this.props.is_desktop} />
                </div>

                <div className='best-sellers' id="bestSellerSection">
                    <Typography className='main-heading'>Best <span className='heading-part'>Sellers</span></Typography>
                    <Typography className='sub-heading'>lorem ipsum dolalr sit lorem ipsum dolalr sitlorem ipsum dolalr sitlorem ipsum dolalr sitlorem ipsum dolalr sit</Typography>
                    <Grid container direction="row" spacing={1}>
                        {
                            this.state.best_sellers.map(best => (
                                <Grid item md={3} lg={3} sm={6} xs={6} m="auto">
                                    <div className='selling-card'>
                                        <Grid container direction="column" spacing={1}>
                                            <Grid item>
                                                <img src={best.image} className="img" alt=""/>
                                            </Grid>
                                            <Grid item>
                                                <Typography className='name'>{best.name}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography className='description'>{best.description}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography className='price'>Rs. {best.price}</Typography>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>

                            ))
                        }
                    </Grid>
                </div>

                <div className='customer-say' id="customerSaveSection">
                    <Grid container directions="row" spacing={3}>
                        <Grid item md={6} lg={6}>
                            <img className='img' src={customerSays} alt="" />
                        </Grid>
                        <Grid item md={5} lg={5} m="auto">
                            <Typography className='heading'>What Our Customer Say <span className='heading-part'>About US</span></Typography>
                            <Typography className='description'>This is a type of resturent which typically serves food and drink, in addition to light refreshments such as baked goods or snacks. The term comes frome the rench word meaning food</Typography>
                        </Grid>
                    </Grid>
                </div>

                <div id="getStartedSection" className='get-started-with-byte'>
                    <Grid container directions="row" spacing={3}>
                        <Grid item md={5} lg={5} m="auto">
                            <Typography className='heading'>Get Started with <span className='heading-part'>Byte today</span></Typography>
                            <Typography className='description'>This is a type of resturent which typically serves food and drink, in addition to light refreshments such as baked goods or snacks. The term comes frome the rench word meaning food</Typography>
                            <Grid container direction="row" spacing={2}>
                                <Grid item>
                                    <img src={playStoreIcon} alt="play store" />
                                </Grid>
                                <Grid item>
                                    <img src={appStoreIcon} alt="app store" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={6} lg={6}>
                            <img className='img' src={chefIcon} alt="" />
                        </Grid>
                    </Grid>
                </div>

            </div>
        )
    }
}
export default HomePage;
