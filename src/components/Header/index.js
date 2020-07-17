import React, { Component } from 'react'
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push } from "connected-react-router";
import { HeaderWrapper, LogoText, ButtonHeader, ButtonWrapper } from './style'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';

class Header extends React.Component {
    render() {
        return (
            <HeaderWrapper>
                <LogoText variant="h3" onClick={this.props.goToHome}>Spotenu</LogoText>
                <ButtonWrapper>
                    <ButtonHeader
                        onClick={this.props.goToLoginPage}
                    >
                        {/* <AccountCircleIcon /> */}
                        Entrar
                    </ButtonHeader>
                    <ButtonHeader>
                        {/* <SettingsIcon /> */}
                        Painel
                    </ButtonHeader>
                </ButtonWrapper>
            </HeaderWrapper>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
      goToLoginPage: () => dispatch(push(routes.login)),
      goToHome: () => dispatch(push(routes.root))
    }
  }
  
  
  
  export default connect (null, mapDispatchToProps) (Header);