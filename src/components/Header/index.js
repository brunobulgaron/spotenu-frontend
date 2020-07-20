import React from 'react'
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push } from "connected-react-router";
import { HeaderWrapper, LogoText, ButtonHeader, ButtonWrapper } from './style'

class Header extends React.Component {

    logout = () => {
        localStorage.clear()
        this.props.goToLoginPage()
        window.location.reload(false)
    };

    render() {
        return (
            <HeaderWrapper>
                <LogoText variant="h3" onClick={this.props.goToHome}>Spotenu</LogoText>
                <ButtonWrapper>
                    <ButtonHeader
                        onClick={this.props.goToAdminPanel}
                    >
                        Painel
                    </ButtonHeader>

                    {(localStorage.getItem("token") === null) && (
                        <ButtonHeader onClick={this.props.goToLoginPage}>Entrar</ButtonHeader>
                    )}

                    {(localStorage.getItem("token") !== null) && (
                        <ButtonHeader onClick={this.logout}>Sair</ButtonHeader>
                    )}
                </ButtonWrapper>
            </HeaderWrapper>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
      goToLoginPage: () => dispatch(push(routes.login)),
      goToHome: () => dispatch(push(routes.root)),
      goToAdminPanel: () => dispatch(push(routes.adminPanel))
    }
  }
  
  
  
  export default connect (null, mapDispatchToProps) (Header);