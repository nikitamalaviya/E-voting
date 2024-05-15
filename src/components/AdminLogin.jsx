import axios from "axios";
import { Toast } from "bootstrap";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert";

const AdminLogin = () => {
  // Refs for input fields
  let name = useRef();
  let password = useRef();

  // State to manage loading status
  const [loading, setLoading] = useState(false);

  // Redux dispatch
  //   let dispatch = useDispatch();

  //   // Fetch vote data from server
  //   useEffect(() => {
  //     dispatch(fetchData({ dataType: "vote", endpoint: vote_get_req }));
  //   }, []);

  //   // Select vote data from Redux store
  //   let voteData = useSelector((state) => state.admin.vote);

  // Function to handle form submission
  let handleSubmit = async () => {
    // Set loading state to true when form is submitted
    setLoading(true);

    // Get input values from refs
    let data = {
      name: name.current.value,
      password: password.current.value,
    };

    // Validate input fields
    if (name.current.value === "" || password.current.value === "") {
      setLoading(false); // Reset loading state
      // Show error alert if any field is empty
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 1000,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: "Please complete all fields",
      });
    } else {
      try {
        name.current.value = "";
        password.current.value = "";
        // Make POST request to user login endpoint
        const res = await axios.post(
          "http://13.127.211.205:8000/v1/login/admin",
          data
        );

        console.log(res.status);
        if (res.status == 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Succesfully",
            showConfirmButton: false,
            timer: 1500,
          });
          localStorage.setItem("role", "admin");
          setTimeout(() => {
            window.location.href = "/dashboard";
          }, 1000);
        } else {
        }
      } catch (error) {
        console.error(error);
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 1000,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "error",
          title: "Please Valid Details",
        });
      }
    }
    //       if (!voteData.find((val) => val.user?.cardNo === data.cardNo)) {
    //         // Set login info to localStorage
    //         localStorage.setItem("role", "user");
    //         localStorage.setItem("userData", JSON.stringify(res.data.data));

    //         // Show success alert on successful login
    //         const Toast = Swal.mixin({
    //           toast: true,
    //           position: "top",
    //           showConfirmButton: false,
    //           timer: 1000,
    //           didOpen: (toast) => {
    //             toast.onmouseenter = Swal.stopTimer;
    //             toast.onmouseleave = Swal.resumeTimer;
    //           },
    //         });
    //         Toast.fire({
    //           icon: "success",
    //           title: "Login Successfully",
    //         });

    //         // Redirect to home page after 600 milliseconds
    //         setTimeout(() => {
    //           window.location.href = "/home";
    //         }, 600);

    //         // Clear input fields after successful login
    //         name.current.value = "";
    //         password.current.value = "";
    //       } else {
    //         // Show error alert if user has already voted
    //         setLoading(false); // Reset loading state
    //         const Toast = Swal.mixin({
    //           toast: true,
    //           position: "top",
    //           showConfirmButton: false,
    //           timer: 1000,
    //           didOpen: (toast) => {
    //             toast.onmouseenter = Swal.stopTimer;
    //             toast.onmouseleave = Swal.resumeTimer;
    //           },
    //         });
    //         Toast.fire({
    //           icon: "error",
    //           title: "You have already voted",
    //         });
    //         name.current.value = "";
    //         password.current.value = "";
    //       }
    //     } else {
    //       // Show error alert if login fails
    //       setLoading(false); // Reset loading state
    //       const Toast = Swal.mixin({
    //         toast: true,
    //         position: "top",
    //         showConfirmButton: false,
    //         timer: 1000,
    //         didOpen: (toast) => {
    //           toast.onmouseenter = Swal.stopTimer;
    //           toast.onmouseleave = Swal.resumeTimer;
    //         },
    //       });
    //       Toast.fire({
    //         icon: "error",
    //         title: "Please check VoterID and password",
    //       });
    //       name.current.value = "";
    //       password.current.value = "";
    //     }
    //   } catch (error) {
    //     // Show error alert if request fails
    //     setLoading(false); // Reset loading state
    //     const Toast = Swal.mixin({
    //       toast: true,
    //       position: "top",
    //       showConfirmButton: false,
    //       timer: 1000,
    //       didOpen: (toast) => {
    //         toast.onmouseenter = Swal.stopTimer;
    //         toast.onmouseleave = Swal.resumeTimer;
    //       },
    //     });
    //     Toast.fire({
    //       icon: "error",
    //       title: "Please check VoterID and password",
    //     });
    //     console.error(error);
    //   }
    // }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="left-side col-6 d-flex justify-content-center align-items-center ">
            <h1>E-VOTING</h1>
          </div>
          <div className="right-side col-6 d-flex justify-content-center align-items-center">
            <div class="container">
              <div class="card">
                <h2>Admin Login</h2>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="mt-3"
                  placeholder="Username"
                  ref={name}
                  required
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-3"
                  placeholder="Password"
                  ref={password}
                  required
                />
                <button
                  type="submit"
                  className="mt-4  w-100"
                  onClick={handleSubmit}
                >
                  Login
                </button>
                <Link to={"/loginuser"}>
                  {" "}
                  <button type="submit" className="mt-4  w-100">
                    User Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
