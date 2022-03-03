import React from 'react';
import '../Styles/header.css';
import {withRouter} from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import Modal from 'react-modal';
import FacebookLogin from 'react-facebook-login';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '30%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'antiquewhite',
        border: '1px solid brown',
        width: '35%',
        height: '40%',
        padding:'38px'
    },
};


class Header extends React.Component{

   constructor(){
       super();
       this.state = {
           isLoginModalIsOpen: false,
           isLoggedIn: false,
           loggedInUser: undefined,
           isFacebookLoginModalIsOpen: false,
           isLoggedInFb:false,
           loggedInUserFB: undefined
       }
   }



    handleNavigate = () =>
    {

        this.props.history.push('/');
    }
    handleLogin = () =>
    {
         this.setState({ isLoginModalIsOpen: true });
         

    }
    responseGoogle = (response) => 
    {

        this.setState({ loggedInUser : response.profileObj.name, isLoggedIn: true, isLoginModalIsOpen: false });
        console.log(response);
    }
    handleLogout = () =>
    {

            this.setState({ isLoggedIn: false, loggedInUser: undefined});

    }
    
   
    handleLogin = () =>
    {
         this.setState({ isFacebookLoginModalIsOpen: true });
         

    }
    
    responseFacebook = (response) => 
    {
        
        console.log(response);
    }
   

       


   render()
   {

      const  {isLoginModalIsOpen, isLoggedIn, loggedInUser, isFacebookLoginModalIsOpen } = this.state;

       return(
        <div className="header">

               <div className="header-logo" onClick={this.handleNavigate}>
                       <b> e! </b>
               </div>

         { isLoggedIn ? <div className="login-user">
                               <div className="login">{loggedInUser}</div>
                               <div className="signup" onClick={this.handleLogout}>Logout</div>
                        </div> :
         
                     <div className="login-user">
                          <div className="login" onClick={this.handleLogin}> Login</div>
                          <div className="signup"> Create an account</div>
                     </div>
                     
                       }
    


                    <Modal
                    isOpen={isLoginModalIsOpen}
                    isOpen={isFacebookLoginModalIsOpen}
                    style={customStyles}
                     >
                      <div>

                        <div className="logfont"> Login with</div>
                         <span><GoogleLogin
                             clientId="977901428234-q4t3diafn7iqbra7d0g9b1379pc82ren.apps.googleusercontent.com"
                             buttonText=" Continue with Google "
                             onSuccess={this.responseGoogle}
                             onFailure={this.responseGoogle}
                             cookiePolicy={'single_host_origin'}
                          /></span>                              
                      </div>

                       <div>

                        <FacebookLogin
                              appId="418085763424641"
                              button="Continue with Facebook"
                              autoLoad={true}
                              fields="name,email,picture"
                              onClick={this.componentClicked}
                              callback={this.responseFacebook} />                     
                            
                     </div>
                     

                  </Modal>  
        </div>
       )
    
} 

}
    



export default withRouter(Header);