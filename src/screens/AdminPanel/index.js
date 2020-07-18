import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push } from "connected-react-router";
import { AdminPanelWrapper, PaperAdminPanel, ButtonAdminPanel,TypographyAdminPanel, CustomBuildIcon, CustomSVG, CustomSVGWrapper } from './style';

class AdminPanel extends React.Component {

    render() {
        return (
            <AdminPanelWrapper>
                <PaperAdminPanel elevation={2}>
                    <CustomBuildIcon />
                    <TypographyAdminPanel variant="h4">Painel Administrativo</TypographyAdminPanel>
                    <ButtonAdminPanel
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Aprovar Bandas
                    </ButtonAdminPanel>
                    <ButtonAdminPanel
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Gêneros Musicais
                    </ButtonAdminPanel>
                    <ButtonAdminPanel
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={this.props.goToSignUpUserAdminPage}
                    >
                        Adicionar Administrador
                    </ButtonAdminPanel>
                </PaperAdminPanel>

                <CustomSVGWrapper>
                    <CustomSVG src={require('../../img/undraw_dashboard_nklg.svg')}></CustomSVG>
                </CustomSVGWrapper>
            </AdminPanelWrapper>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return{
      goToSignUpUserAdminPage: () => dispatch(push(routes.signUpUserAdmin)),
    }
  }
  
  
  
  export default connect (null, mapDispatchToProps) (AdminPanel);