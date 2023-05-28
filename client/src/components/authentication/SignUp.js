import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import * as Yup from 'yup';

const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

class SignUp extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
            firstName: '', 
            lastName: '',
            email: '',
            password: '',
            errors: {},
        }
        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.submitForm = this.submitForm.bind(this)

    }

    changeFirstName(event){
        this.setState({
            firstName: event.target.value
        })
    }
    changeLastName(event){
        this.setState({
            lastName: event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email: event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password: event.target.value
        })
    }

    // handleChange = (event) => {
    //     this.setState({
    //       [event.target.name]: event.target.value,
    //     });
    //   };

    async submitForm(event) {
        event.preventDefault();
      
        const { firstName, lastName, email, password } = this.state;

      
        // try {
        //   const res = await axios.post('http://localhost:3001/sign-up', registered);
        //   console.log(res.data);
        // } catch (err) {
        //   console.log(err);
        // }
      
        // window.location = '/sign-in';
        try {
            const isValid = await validationSchema.validate(
              {
                firstName,
                lastName,
                email,
                password,
              },
              { abortEarly: false }
            );
      
            if (!isValid) {
              return;
            }
      
            // const emailUniqueResponse = await axios.get(
            //   `http://localhost:3001/sign-up/check-email?email=${email}`
            // );
      
            // if (!emailUniqueResponse.data.unique) {
            //   this.setState({
            //     errors: {
            //       email: 'Email is not unique',
            //     },
            //   });
            //   return;
            // }
      
            const registered = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
              };
      
            const res = await axios.post('http://localhost:3001/sign-up', registered);
            console.log(res.data);
      
            window.location = '/sign-in';
          } catch (err) {
            this.setState({
                email:'',
                password:''
            })
            window.alert("An error occurred. Please try again.");
            console.log(err);
          }
      }


    render() {
        return(
        <div className="auth">
            
            <form className="form" onSubmit={this.submitForm}>
                <h1>Sign Up</h1>
                <h6>Already have an account?
                    <Link to='/sign-in'><s>Sign in</s></Link>
                </h6>
                <div>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <input type="text"
                    required
                     placeholder="first name"
                     onChange={this.changeFirstName}
                     value={this.state.firstName}
                     />
                </div>

                <div>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <input type="text"
                    required
                     placeholder="last name"
                     onChange={this.changeLastName}
                     value={this.state.lastName}
                     />
                </div>

                <div>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <input type="text"
                     placeholder="e-mail"
                     onChange={this.changeEmail}
                     required
                     value={this.state.email}
                     />
                </div>

                <div>
                    <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                    <input type="password" 
                    required
                    placeholder="password"
                    onChange={this.changePassword}
                     value={this.state.password}
                    />
                </div>

                <button type="submit" value='Submit'>Sign up
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                
                </button>
            </form>
        </div>
    ) 
    }
    
}

export default SignUp