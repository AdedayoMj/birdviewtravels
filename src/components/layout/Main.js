import React from "react";
import TopList from './TopList'
import CardSection from "./CardSection";
import ContactSection from "./ContactSection";
import Footer from './Footer'
import PropTypes from 'prop-types';


function Main ({env}) {

    return (
      <div>
        <div>
          <TopList env={env}/>
        </div>
        <div>
          <CardSection />
        </div>
        <div>
          <ContactSection env={env} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }

Main.propTypes = {
    env: PropTypes.object.isRequired
  };

  export default Main

