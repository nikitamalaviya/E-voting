import React from 'react'
import { Link } from 'react-router-dom'
// import { MdSpaceDashboard } from "react-icons/md";
// import { FaBuildingUser, FaPeopleGroup} from "react-icons/fa6";
import { GiVendingMachine } from "react-icons/gi";
import { ImConnection } from "react-icons/im";
import { MdSpaceBar } from 'react-icons/md';


const AdminNavbar = () => {
    let handleLogout = () => {

        window.location.href = '/'
    
        localStorage.clear()
        window.location.reload();
      }
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
    
                          <Link to="/dashboard" style={{ textDecoration: "none", color: "black" }}><a href="#">
                            <MdSpaceBar style={{ fontSize: "25px", color: "#707070", paddingRight: "5px" }} />
                            <span class="text nav-text"> Dashboard</span>
                          </a></Link>
                        </li>
    
                        <li class="nav-link">
    
                          <Link to="/party" style={{ textDecoration: "none", color: "black" }}><a href="#">
                            <FaPeopleGroup style={{ fontSize: "25px", color: "#707070", paddingRight: "5px" }} />
    
                            <span class="text nav-text"> Party</span>
                          </a></Link>
                        </li>
    
                        <li class="nav-link">
                          <Link to="/election" style={{ textDecoration: "none", color: "black" }}><a href="#">
                            <GiVendingMachine style={{ fontSize: "25px", color: "#707070", paddingRight: "5px" }} />
    
                            <span class="text nav-text"> Election</span>
                          </a></Link>
                        </li>
    
                        <li class="nav-link">
                          <Link to="/connection" style={{ textDecoration: "none", color: "black" }}><a href="#">
                            <ImConnection style={{ fontSize: "25px", color: "#707070", paddingRight: "5px" }} />
    
                            <span class="text nav-text"> Connection</span>
                          </a></Link>
                        </li>
    
                        <li class="nav-link">
                          <Link to="/user" style={{ textDecoration: "none", color: "black" }}><a href="#">
                            <FaBuildingUser style={{ fontSize: "25px", color: "#707070", paddingRight: "5px" }} />
    
                            <span class="text nav-text"> User</span>
                          </a></Link>
                        </li>
    
                      </ul>
                    </div>
    
                    <div class="bottom-content">
                      <li class="nav-link">
    
                        <a  onClick={handleLogout}>
                          <i class="bx bx-log-out icons"></i>
                          <span class="text nav-text">Log Out</span>
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

export default AdminNavbar
