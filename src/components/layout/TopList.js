import React, { Component } from "react";
import TopLevel from "./TopLevel";
import PropTypes from "prop-types";

export default class TopList extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      date: "",
      mobile: "",
      formSubmitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  static sender = "sender@example.com";

  handleChange = event => {
    this.setState({
      city: event.target.value,
      mobile: event.target.value,
      date: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail
      //     REACT_APP_EMAILJS_TEMPLATEID: template,
      //     REACT_APP_EMAILJS_USERID: user,
    } = this.props.env;
    const template = "template_AyrkteIw";
    const user = "user_463EFIKesNAfVPVbvE68o";
    const { city, date, mobile } = this.state;
    this.sendFeedback(
      template,
      this.props.senderEmail,
      receiverEmail,
      city,
      date,
      mobile,
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
    city,
    mobile,
    date,
    user
  ) => {
    window.emailjs
      .send(
        "default_service", // default email provider in your EmailJS account
        templateId,
        {
          senderEmail,
          receiverEmail,
          city,
          mobile,
          date
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
      <div>
        <TopLevel
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          formSubmitted={this.state.formSubmitted}
        />
      </div>
    );
  }
}
TopList.propTypes = {
  env: PropTypes.object.isRequired
};
