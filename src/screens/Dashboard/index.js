import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push } from "connected-react-router";
import { DashboardWrapper, PaperDashboard, ButtonDashboard,TypographyDashboard, CustomStarsIcon, CustomPersonIcon } from './style';

class Dashboard extends React.Component {

    render() {
        return (
            <DashboardWrapper>
                <PaperDashboard elevation={3}>
                    <CustomStarsIcon />
                    <TypographyDashboard variant="h5">Painel Artistas</TypographyDashboard>
                    <ButtonDashboard
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Cadastrar
                    </ButtonDashboard>
                    <ButtonDashboard
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Cadastrar
                    </ButtonDashboard>
                    <ButtonDashboard
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Cadastrar
                    </ButtonDashboard>
                    <ButtonDashboard
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Cadastrar
                    </ButtonDashboard>
                </PaperDashboard>
                
                <PaperDashboard elevation={3}>
                <CustomPersonIcon />
                <TypographyDashboard variant="h5">Painel Spotenu FREE</TypographyDashboard>
                    <ButtonDashboard
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Cadastrar
                    </ButtonDashboard>
                    <ButtonDashboard
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Cadastrar
                    </ButtonDashboard>
                    <ButtonDashboard
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Cadastrar
                    </ButtonDashboard>
                    <ButtonDashboard
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Cadastrar
                    </ButtonDashboard>
                </PaperDashboard>
                
            </DashboardWrapper>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return{
    //   goToLoginPage: () => dispatch(push(routes.login)),
    //   goToSignUpPage: () => dispatch(push(routes.signUpUserFree)),
    //   goToHome: () => dispatch(push(routes.root))
    }
  }
  
  
  
  export default connect (null, mapDispatchToProps) (Dashboard);