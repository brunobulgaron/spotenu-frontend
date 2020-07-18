import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push } from "connected-react-router";
import { AdminPanelWrapper, PaperAdminPanel, ButtonAdminPanel,TypographyAdminPanel, CustomBuildIcon } from './style';

class AdminPanel extends React.Component {

    render() {
        return (
            <AdminPanelWrapper>
                <PaperAdminPanel elevation={3}>
                <CustomBuildIcon />
                <TypographyAdminPanel variant="h5">Painel Administrador</TypographyAdminPanel>
                    <ButtonAdminPanel
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Cadastrar
                    </ButtonAdminPanel>
                    <ButtonAdminPanel
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Cadastrar
                    </ButtonAdminPanel>
                    <ButtonAdminPanel
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Cadastrar
                    </ButtonAdminPanel>
                    <ButtonAdminPanel
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Cadastrar
                    </ButtonAdminPanel>
                </PaperAdminPanel>

                <PaperAdminPanel elevation={1}>
                    <p>This is another paper!</p>
                </PaperAdminPanel>
            </AdminPanelWrapper>
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
  
  
  
  export default connect (null, mapDispatchToProps) (AdminPanel);