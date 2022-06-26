import React from "react";
import { Typography, CircularProgress, CardMedia, CardContent, Paper, Rating } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ResturantApis from "../../apis/ResturantApis";


class Resturants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resturants_data: [
                // {
                //     name: "Organic Arcadian Food",
                //     image: "https://www.seriouseats.com/thmb/qL2of3sBKJmDS7Ogn4NRNb2YXXs=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__06__20110516-cowboy-steak-kenji-lopez-alt-bb4a825bd05b4e91b7672bc1603043a8.jpg",
                //     tags: ['shakes', 'steaks', 'sea food', 'chicken', 'burgers', 'pizzaz'],
                //     rating: 4.1
                // },
                // {
                //     name: "Organic Arcadian Food",
                //     image: "https://pbs.twimg.com/ext_tw_video_thumb/1463835466042589193/pu/img/jjIALVyadEZ8nst0.jpg",
                //     tags: ['shakes', 'steaks', 'sea food', 'chicken', 'burgers', 'pizzaz'],
                //     rating: 4.5
                // },
                // {
                //     name: "Organic Arcadian Food",
                //     image: "https://pbs.twimg.com/media/EDiotitXkAAZCwO.jpg",
                //     tags: ['shakes', 'steaks', 'sea food', 'chicken', 'burgers', 'pizzaz'],
                //     rating: 3.5
                // },
                // {
                //     name: "Organic Arcadian Food",
                //     image: "https://d1ralsognjng37.cloudfront.net/69ddc5f3-9935-46d1-a9d0-e2af7736c0fc.jpeg",
                //     tags: ['shakes', 'steaks', 'sea food', 'chicken', 'burgers', 'pizzaz'],
                //     rating: 4
                // },
                // {
                //     name: "Organic Arcadian Food",
                //     image: "https://www.seriouseats.com/thmb/qL2of3sBKJmDS7Ogn4NRNb2YXXs=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__06__20110516-cowboy-steak-kenji-lopez-alt-bb4a825bd05b4e91b7672bc1603043a8.jpg",
                //     tags: ['shakes', 'steaks', 'sea food', 'chicken', 'burgers', 'pizzaz'],
                //     rating: 4.5
                // },
                // {
                //     name: "Organic Arcadian Food",
                //     image: "https://pbs.twimg.com/media/EDiotitXkAAZCwO.jpg",
                //     tags: ['shakes', 'steaks', 'sea food', 'chicken', 'burgers', 'pizzaz'],
                //     rating: 4.2
                // }
            ],
            is_loading: false,
        };
    }

    componentDidMount() {
        this.setState({
            is_loading: true
        })
        let resturant_ids = [
            299644, 299647, 299645, 299672, 299694, 299694, 299643,
            299646, 299739, 299804, 299846, 299699, 299613
        ]
        for (let i = 0; i < resturant_ids.length; i++) {
            this.getResturants(resturant_ids[i])
        }
        this.setState({
            is_loading: false
        })
    }

    getResturants = (id) => {
        let { resturants_data } = this.state
        let data = {
            "api_key": "8349870a68beae18c130cb16435d1d14",
            "user_id": id
        }
        ResturantApis.getResturant(data).then(data => {
            resturants_data.push(data['data'])
            this.setState({
                resturants_data: resturants_data,
            })
        })
    }

    responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 0,
        }
    };


    render() {
        let { resturants_data, is_loading } = this.state
        return (
            <>
                {
                    is_loading ?
                        <div className="tc">
                            <CircularProgress color="primary" />
                        </div>
                        :
                        <>
                            {
                                !this.props.is_desktop ?
                                    <div class="scrolling-wrapper">
                                        {
                                            resturants_data && resturants_data.map(resturant =>
                                                <div className="mobile-resturant-paper">
                                                    <img className="returant-logo" src={resturant.logo} alt="" />
                                                    <Typography className="returant-name">{resturant.store_name}</Typography>
                                                    <Typography  className="returant-rating">({resturant.store_rating})</Typography>
                                                </div>
                                            )}
                                    </div>
                                    :
                                    <Carousel
                                        swipeable={true}
                                        draggable={true}
                                        showDots={false}
                                        responsive={this.responsive}
                                        infinite={true}
                                        autoPlay={this.props.deviceType !== "mobile" ? true : false}
                                        autoPlaySpeed={3000}
                                        keyBoardControl={true}
                                        customTransition="all .0"
                                        transitionDuration={100}
                                        containerClass="carousel-container"
                                        removeArrowOnDeviceType={["tablet", "mobile"]}
                                        deviceType={this.props.deviceType}
                                        dotListClass="custom-dot-list-style"
                                        itemClass="carousel-item-padding-40-px"
                                    >
                                        {
                                            resturants_data && resturants_data.map(resturant =>
                                                <Paper className="resturants-paper">
                                                    <CardMedia
                                                        className="resturant-image"
                                                        component="img"
                                                        height="250"
                                                        image={resturant.logo}
                                                        alt={resturant.store_name}
                                                    />
                                                    <CardContent>
                                                        <Rating
                                                            style={{ backgroundColor: "#FDC55E", color: "#FFFFFF", borderRadius: '50px', bottom: '50px' }}
                                                            name="read-only"
                                                            value={resturant.store_rating}
                                                            readOnly
                                                        />
                                                        <Typography className="heading" gutterBottom>{resturant.store_name}</Typography>
                                                        {/* {
                                                resturant.tags.map(tag =>
                                                    <span className="badge resturant-badge">{tag}</span>
                                                )
                                            } */}
                                                    </CardContent>
                                                </Paper>
                                            )
                                        }
                                    </Carousel>
                            }
                        </>
                }
            </>
        )
    }
}

export default Resturants