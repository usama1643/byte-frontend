import React from 'react';
import { Button, Typography } from '@mui/material';
import './index.scss'
import logo from '../../assets/logo.png'

class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <>
                <div class="">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">
                            <a href="https://www.google.com/" class="navbar-brand">
                                <img className='logo' src={logo} height="50" alt="CoolBrand"/>
                            </a>
                            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarCollapse">
                                <div class="navbar-nav ms-auto">
                                    {/* <a href="https://web.thebyte.app/en/" class="nav-item nav-link pe-4">About Us</a> */}
                                    <a href="#ourResturantSection" class="nav-item nav-link me-4">Resturants</a>
                                    {/* <a href="https://web.thebyte.app/en/" class="nav-item nav-link me-4">Our Locations</a> */}
                                    {/* <a href="https://web.thebyte.app/en/" class="nav-item nav-link me-4">Contact</a> */}
                                    <a href="https://www.ycombinator.com/companies/byte" class="nav-item nav-link me-4">Careers</a>
                                    {/* <a href="https://web.thebyte.app/en/" class="nav-item nav-link me-4">Blog</a> */}
                                    {/* <Button variant="contained" className="button-style" onClick={()=> window.open("https://web.thebyte.app/en/", "_blank")}>Login</Button> */}
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        )
    }
}
export default Navigation;
