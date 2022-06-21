import React from "react";
import { Typography, CircularProgress, CardMedia, CardContent, Paper } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { history } from '../../App';


class Resturants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resturants_data: [
                {
                    name: "Organic Arcadian Food",
                    image: "https://www.seriouseats.com/thmb/qL2of3sBKJmDS7Ogn4NRNb2YXXs=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__06__20110516-cowboy-steak-kenji-lopez-alt-bb4a825bd05b4e91b7672bc1603043a8.jpg",
                    tags: ['shakes', 'steaks', 'sea food', 'chicken', 'burgers', 'pizzaz'],
                    rating: 4.1
                },
                {
                    name: "Organic Arcadian Food",
                    image: "https://pbs.twimg.com/ext_tw_video_thumb/1463835466042589193/pu/img/jjIALVyadEZ8nst0.jpg",
                    tags: ['shakes', 'steaks', 'sea food', 'chicken', 'burgers', 'pizzaz'],
                    rating: 4.5
                },
                {
                    name: "Organic Arcadian Food",
                    image: "https://pbs.twimg.com/media/EDiotitXkAAZCwO.jpg",
                    tags: ['shakes', 'steaks', 'sea food', 'chicken', 'burgers', 'pizzaz'],
                    rating: 3.5
                },
                {
                    name: "Organic Arcadian Food",
                    image: "https://d1ralsognjng37.cloudfront.net/69ddc5f3-9935-46d1-a9d0-e2af7736c0fc.jpeg",
                    tags: ['shakes', 'steaks', 'sea food', 'chicken', 'burgers', 'pizzaz'],
                    rating: 4
                },
                {
                    name: "Organic Arcadian Food",
                    image: "https://www.seriouseats.com/thmb/qL2of3sBKJmDS7Ogn4NRNb2YXXs=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__06__20110516-cowboy-steak-kenji-lopez-alt-bb4a825bd05b4e91b7672bc1603043a8.jpg",
                    tags: ['shakes', 'steaks', 'sea food', 'chicken', 'burgers', 'pizzaz'],
                    rating: 4.5
                },
                {
                    name: "Organic Arcadian Food",
                    image: "https://pbs.twimg.com/media/EDiotitXkAAZCwO.jpg",
                    tags: ['shakes', 'steaks', 'sea food', 'chicken', 'burgers', 'pizzaz'],
                    rating: 4.2
                }
            ],
            is_loading: false,
        };
    }

    componentDidMount() {
        this.getResturants()
    }

    getResturants = () => {
        // this.setState({
        //     is_loading: true
        // })
        // let params = ""
        // DestinationApis.getDestination(params).then(data => {
        //     this.setState({
        //         destiations_data: data,
        //         is_loading: false
        //     })
        // })
        //     .catch(error => this.context.handleCatch(error, () => this.setState({ is_loading: false })))
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
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
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
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={false}
                            responsive={this.responsive}
                            // ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlay={this.props.deviceType !== "mobile" ? true : false}
                            autoPlaySpeed={3000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
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
                                            component="img"
                                            height="250"
                                            image={resturant.image}
                                            alt={resturant.name}
                                        />
                                        <CardContent>
                                            <Typography className="heading" gutterBottom>{resturant.name}</Typography>
                                            {
                                                resturant.tags.map(tag =>
                                                    <span className="badge resturant-badge">{tag}</span>
                                                )
                                            }
                                        </CardContent>
                                    </Paper>
                                )
                            }
                        </Carousel>
                }
            </>
        )
    }
}

export default Resturants