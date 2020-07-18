import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push } from "connected-react-router";
import { ManageProfileWrapper, PaperManageProfile, ButtonManageProfile,TypographyManageProfile, CustomPersonIcon, CustomSVG, CustomSVGWrapper, ButtonManageProfileVoltar, CustomHighlightOffIcon, CustomKeyboardBackspaceIcon, ButtonManageProfileExcluir } from './style';


class ManageProfile extends React.Component {

    render() {
        return (
            <ManageProfileWrapper>
                <PaperManageProfile elevation={2}>
                    <CustomPersonIcon />
                    <TypographyManageProfile variant="h4">Gerenciar Perfil</TypographyManageProfile>
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
                    <CustomSVG src={require('../../img/undraw_compose_music_ovo2.svg')}></CustomSVG>
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