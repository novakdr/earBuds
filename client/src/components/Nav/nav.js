import React, { Component } from 'react';
import './nav.css';
import { Icon } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import testingButton from '../testingButton/testingButton'

let mapStateToProps = (store) => {
  return {
    userInfo:store.user.userInfo
  }
}

class Nav extends Component {
  // renderContent() {
  //   switch (this.props.userInfo.length === 0) {
  //     case null:
  //       return;
  //     case false:
  //       return (
  //         <div className="login_bttn">
  //           <Button
  //             circular
  //             inverted
  //             color="orange"
  //             content="orange"
  //             style={{
  //               width: '100%',
  //               height: '40px'
  //             }}
  //             href="/auth/google"
  //           >
  //             Log in 
  //           </Button>
  //         </div>
  //       );
  //     default:
  //       return (
  //         <div className="logout_bttn">
  //           <Button
  //             circular
  //             inverted
  //             color="orange"
  //             content="orange"
  //             style={{
  //               width: '100%',
  //               height: '40px'
  //             }}
  //             href="/api/logout"
  //           >
  //             Logout
  //           </Button>
  //         </div>
  //       );
  //   }
  // }

  render() {
    return (
      <div className="nav_wrapper">
      <testingButton/>
      {/* <button onClick={()=>console.log(this.props.userInfo)}>Check user info </button> */}
      
      {this.props.userInfo.length === 0?           
      <div className="login_bttn">
      
      <Button
        circular
        inverted
        color="orange"
        content="orange"
        style={{
          width: '100%',
          height: '40px'
        }}
        href="/auth/google"
      >
        Log in 
      </Button>
    </div>:
              <div className="logout_bttn">
              <Button
                circular
                inverted
                color="orange"
                content="orange"
                style={{
                  width: '100%',
                  height: '40px'
                }}
                href="/api/logout"
              >
                Logout
              </Button>
            </div>
    }
      
        <Link to={this.props.auth ? '/landing' : '/'}>
          <img
            className="nav_logo"
            src="https://imgur.com/EKfm1L9.png"
            href="#"
            alt="nav_logo"
          />
        </Link>

        <div className="nav_link">
          <div className="wrap">
            <form action="" autocomplete="on">
              <input
                className="search"
                name="search"
                type="text"
                placeholder="What're we looking for ?"
              />

              <input className="search_submit" value="" type="submit" />

              <Icon
                name="search"
                size="large"
                color="#ff851b"
                style={{
                  width: '40px',
                  height: '40px',
                  position: 'absolute',
                  right: '30%',
                  top: '20%'
                }}
              />
            </form>

            {/* <Icon name="search" size="large" color="grey" style={{
                            width: "40px",
                            height: "40px"
                        }}/> */}
          </div>

          {/* <div className="search-container">
                        <form action="/search" method="get">
                            <input className="search expandright" id="searchright" type="search" name="q" placeholder="Search"></input>
                            <label className="button searchbutton" for="searchright"><span className="mglass">&#9906;</span></label>
                            <a href="#" class="x">X</a>
                        </form>
                     </div> */}
          {/* <Button
            circular
            inverted
            color="orange"
            content="orange"
            style={{
              width: '100%',
              height: '40px'
            }}
          >
            Log In<a href="#" />
          </Button> */}
   
        </div>
      </div>
    );
  }
}



export default connect(mapStateToProps)(Nav);
