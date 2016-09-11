import React, { Component } from 'react';
import config from '../../config';
import Helmet from 'react-helmet';

export default class Home extends Component {


  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.masthead}>
          <div className="container">
            <div className={styles.logo}>
              <p>
                <img src={logoImage}/>
              </p>
            </div>
            <h1>{config.app.title}</h1>

            <h2>{config.app.description}</h2>

            <p>
              <a className={styles.github} href="https://www.facebook.com/blackpoweringames/"
                 target="_blank">
                <i className="fa fa-facebook"/> Check us out on facebook
              </a>
            </p>
             <p>
              <a className={styles.github} href="https://www.facebook.com/blackpoweringames/"
                 target="_blank">
                <i className="fa fa-twitter"/> and Twitter
              </a>
            </p>
          </div>
        </div>

        <div className="container">
        </div>
      </div>
    );
  }
}
