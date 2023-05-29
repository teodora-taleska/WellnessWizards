import React, { useState } from "react";
import { Link } from "react-router-dom";


// const loginSchema = yup.object().shape({
//     email: yup.string().email("Invalid email").required("Required"),
//     password: yup.string().required("Required"),
//   });
  
  const initialValuesLogin = {
    email: "",
    password: "",
  };
  
const SignIn = () => {
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const [error, setError] = useState("");
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    //   console.log(event)
    };
  
    const handleSubmit = async (values) => {

    //   try {
    //     // await loginSchema.validate(values);
  
    //     const response = await fetch("http://localhost:3001/sign-in", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(values),
    //     });
  
        
    //     if (response.ok) {
    //       const loggedIn = await response.json();
    //       dispatch(
    //         setLogin({
    //         user: loggedIn.user,
    //         token: loggedIn.token,
    //       }));
    //       this.props.history.push("/home");
    //     } else {
    //       setError("Invalid email or password. Please try again.");
    //     }
    //   } catch (err) {
    //     setError(err.message);
    //   }
    };
  
    const [values, setValues] = useState(initialValuesLogin);

    // event.preventDefault();

    // const { email, password } = this.state;

    // try {
    //     const response = await axios.get(
    //         `http://localhost:3001/sign-up?email=${encodeURIComponent(email)}`
    //       );
    
    //       if (response.data.exists) {
    //         // User exists in the database, perform sign-in logic
    //         // ...
    
    //         // Redirect the user to the home page
    //         this.props.history.push("/home");
    //       } else {
    //         this.setState({
    //           error: "User does not exist. Please sign up.",
    //         });
    //       }
    // } catch (err) {
    //   this.setState({
    //     email: "",
    //     password: "",
    //     error: "Invalid email or password. Please try again.",
    //   });
    //   console.log(err);
    // }
  
    return (
        <div className="auth">
          <form className="form" onSubmit={() => handleSubmit(values)}>
            <h1>Sign in</h1>
            <h6>Please sign in to continue:</h6>
            <div>
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <input
                type="text"
                placeholder="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
    
            <div>
              <i className="fa fa-unlock-alt" aria-hidden="true"></i>
              <input
                type="password"
                placeholder="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
    
            {/* {error && <p className="error">{error}</p>} */}
    
            <Link to="/home"><button type="submit">
              Sign in <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button></Link>
    
            <h6>
              Don't have an account?
              <Link to="/sign-up">
                <s>Sign up</s>
              </Link>
            </h6>
          </form>
        </div>
      );
  }


export default SignIn;
