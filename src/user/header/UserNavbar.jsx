
import { Link } from 'react-router-dom'
import { MdSpaceDashboard } from "react-icons/md";
import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { FaUser } from 'react-icons/fa6';


const UserNav = () => {

    const [open, setOpen] = React.useState(false);
    let handleLogout = () => {
        window.location.href = '/'
        localStorage.clear()
        window.location.reload();
    }
    //   get User Info
    const getUser = () => {
        const userData = JSON.parse(localStorage.getItem("userData"));
        return userData;
    };
    let userData = getUser();



    return (
        <div>
            <div className="container-fluid">
                <div className="raw">
                    <div className="col-lg-4">
                        <nav class="sidebar">

                            <div class="menu-bar">
                                <div class="menu">
                                    <ul class="menu-links">

                                        <li class="nav-link">

                                            <Link to="/home" style={{ textDecoration: "none", color: "black" }}><a >
                                                <MdSpaceDashboard style={{ fontSize: "25px", color: "#707070", paddingRight: "5px" }} />
                                                <span class="text nav-text">Home</span>
                                            </a></Link>
                                        </li>
                                        <li class="nav-link">

                                            <React.Fragment>
                                                <div style={{ textDecoration: "none", color: "black" }} onClick={() => setOpen(true)}>
                                                    <FaUser style={{ fontSize: "25px", color: "#707070", paddingRight: "5px" }} />
                                                    <span class="text nav-text">Profile</span>
                                                </div>
                                                <Modal
                                                    aria-labelledby="modal-title"
                                                    aria-describedby="modal-desc"
                                                    open={open}
                                                    onClose={() => setOpen(false)}
                                                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                                >
                                                    <Sheet
                                                        variant="outlined"
                                                        sx={{
                                                            maxWidth: 500,
                                                            borderRadius: 'md',
                                                            p: 3,
                                                            boxShadow: 'lg',
                                                        }}
                                                    >
                                                        <ModalClose variant="plain" sx={{ m: 1 }} />
                                                        <Typography
                                                            component="h2"
                                                            id="modal-title"
                                                            level="h4"
                                                            textColor="inherit"
                                                            fontWeight="lg"
                                                            mb={1}
                                                        >
                                                            User Profile
                                                        </Typography>
                                                        <Typography id="modal-desc" textColor="text.tertiary">
                                                            <div className="card border-light mb-3">
                                                                <div className="card-body">
                                                                    <h5 className="card-title">
                                                                        Name: <b>{userData.name}</b>
                                                                    </h5>
                                                                    <hr />
                                                                    <p className="card-text">
                                                                        <b>father Name:</b>&nbsp;
                                                                        {userData.fatherName}
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <b>Date of Birth</b>&nbsp;
                                                                        {userData.dob}
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <b>part No. and Name</b>&nbsp;
                                                                        {userData.partNoandName}
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <b>Gender :</b>&nbsp;
                                                                        {userData.sex}
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <b>Address :</b>&nbsp;
                                                                        {userData.address}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </Typography>
                                                    </Sheet>
                                                </Modal>
                                            </React.Fragment>
                                        </li>



                                    </ul>
                                </div>

                                <div class="bottom-content">
                                    <li class="nav-link">
                                        <a href="#">
                                            <i class="bx bx-log-out icons"></i>
                                            <span class="text nav-text" onClick={handleLogout} >Log Out</span>
                                        </a>
                                    </li>

                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </div >

        </div >
    )
}

export default UserNav