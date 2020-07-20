import React from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push, replace } from "connected-react-router";
import { DashboardBandWrapper, PaperDashboardBand, ButtonDashboardBand,TypographyDashboardBand, CustomStarsIcon, CustomSVG, CustomSVGWrapper } from './style';

class DashboardBand extends React.Component {

    componentDidMount() {
        const {goToLoginPage} = this.props;
        const token = localStorage.getItem("token");

        if(token === null){
            goToLoginPage();
        };
    };
    
    render() {
        return (
            <DashboardBandWrapper>
                <PaperDashboardBand elevation={2}>
                    <CustomStarsIcon />
                    <TypographyDashboardBand variant="h4">Painel dos Artistas</TypographyDashboardBand>
                    <ButtonDashboardBand
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={this.props.goToManageProfilePage}
                    >
                        Perfil
                    </ButtonDashboardBand>
                    <ButtonDashboardBand
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={this.props.goToManageAlbumsPage}
                    >
                        Álbuns
                    </ButtonDashboardBand>
                    <ButtonDashboardBand
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={this.props.goToManageSongsPage}
                    >
                        Músicas
                    </ButtonDashboardBand>                    
                </PaperDashboardBand>

                <CustomSVGWrapper>
                    <CustomSVG src={require('../../img/undraw_compose_music_ovo2.svg')}></CustomSVG>
                </CustomSVGWrapper>
            </DashboardBandWrapper>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return{
      goToLoginPage: () => dispatch(replace(routes.login)),
      goToManageAlbumsPage: () => dispatch(push(routes.manageAlbums)),
      goToDashboardBandPage: () => dispatch(push(routes.dashboardBand)),
      goToManageSongsPage: () => dispatch(push(routes.manageSongs)),
      goToManageProfilePage: () => dispatch(push(routes.manageProfile)),
    }
  }
  
  
  
  export default connect (null, mapDispatchToProps) (DashboardBand);