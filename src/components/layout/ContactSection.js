import React, { Component } from 'react'
import "./Main.css";


export default class ContactSection extends Component {
    constructor() {
        super();
        this.state = {
          name: "",
          email: "",
          mobile: "",
          no_of_person:"",
          interest:"",
          formSubmitted: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      static sender = "sender@example.com";
    
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value,
        });
      };
    
      handleSubmit = event => {
          console.log('submit submit');
          
        event.preventDefault();
        const {
          REACT_APP_EMAILJS_RECEIVER: receiverEmail
          //     REACT_APP_EMAILJS_TEMPLATEID: template,
          //     REACT_APP_EMAILJS_USERID: user,
        } = this.props.env;
        const template = "template_AyrkteIw";
        const user = "user_463EFIKesNAfVPVbvE68o";
        const { name, interest,no_of_person,email, mobile } = this.state;
        this.sendFeedback(
          template,
          this.props.senderEmail,
          receiverEmail,
          name, interest,no_of_person,email, mobile,
          user
        );
    
        this.setState({
          formSubmitted: true
        });
      };
    
      sendFeedback = (
        templateId,
        senderEmail,
        receiverEmail,
        name, interest,no_of_person,email, mobile,
        user
      ) => {
        window.emailjs
          .send(
            "default_service", // default email provider in your EmailJS account
            templateId,
            {
              senderEmail,
              receiverEmail,
              name, interest,no_of_person,email, mobile
            },
            user
          )
          .then(res => {
            console.log(res);
    
            this.setState({ formEmailSent: true, city: "", date: "", mobile: "" });
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error("Failed to send feedback. Error: ", err));
      };
    render() {
        
        
        return (
              <div className="container">
            <div className="center">
               <h3> GET IN TOUCH WITH US</h3>
            </div>
            {!this.state.formSubmitted ?
                <div className="form" >
                <div>
                <label className="label" htmlFor="#"> Full Name</label>
                <input type="text" name='name' id='name' onChange={this.handleChange}/>
                </div>
                <div>
                <label className="label" htmlFor="#"> Email</label>
                <input type="email" name='email' id='email' onChange={this.handleChange}/>
                </div>
                
                <label className="label" htmlFor="#"> Phone Number</label>
                <input  type="number" name='mobile' id='mobile' onChange={this.handleChange}/>

                <label className="label" htmlFor="#">Interested In</label>
                <input type="text" name='interest' id='interest' onChange={this.handleChange}/>
                <div>
                <label className="label" htmlFor="#">Number of Person</label>
                <input type="number" name='no_of_person' id='no_of_person' onChange={this.handleChange}/>
                </div>
                
                <button onClick={this.handleSubmit} type='submit' value='submit' className="button2 button2:hover button2:focus">
                    Send  Message
                </button>
            </div>
                :
                <div className=" card "><h3>Your form was successfully sumitted, our manager will contact you very soon</h3> </div>
            }
            
            </div>
        )
    }
}

