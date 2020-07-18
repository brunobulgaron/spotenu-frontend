import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push } from "connected-react-router";
import { ManageProfileWrapper, PaperManageProfile, ButtonManageProfile,TypographyManageProfile, CustomPersonIcon, CustomSVG, CustomSVGWrapper, ButtonManageProfileVoltar, CustomHighlightOffIcon, CustomKeyboardBackspaceIcon, ButtonManageProfileExcluir, TypographyProfileInfo, CustomSpan } from './style';

class ManageProfile extends React.Component {

    render() {
        return (
            <ManageProfileWrapper>
                <PaperManageProfile elevation={2}>
                    <CustomPersonIcon />
                    <TypographyManageProfile variant="h4">Gerenciar Perfil</TypographyManageProfile>
                    
                    <TypographyProfileInfo variant="h6">
                        <CustomSpan>Nome: </CustomSpan>nome user
                    </TypographyProfileInfo>

                    <TypographyProfileInfo variant="h6">
                        <CustomSpan>E-mail: </CustomSpan>email user
                    </TypographyProfileInfo>
                    
                    <ButtonManageProfileExcluir
                        variant="contained"
                        type="submit"
                    >
                        <CustomHighlightOffIcon />
                        Excluir Perfil
                    </ButtonManageProfileExcluir>                    
                    <ButtonManageProfileVoltar
                        variant="outlined"
                        color="secondary"
                        type="submit"
                        onClick={this.props.goToDashboardBandPage}
                    >
                        <CustomKeyboardBackspaceIcon />
                        Voltar
                    </ButtonManageProfileVoltar>
                </PaperManageProfile>

                <CustomSVGWrapper>
                    <CustomSVG src={require('../../img/undraw_profile_data_mk6k.svg')}></CustomSVG>
                </CustomSVGWrapper>
            </ManageProfileWrapper>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        goToDashboardBandPage: () => dispatch(push(routes.dashboardBand))
    }
  }
  
  
  
  export default connect (null, mapDispatchToProps) (ManageProfile);