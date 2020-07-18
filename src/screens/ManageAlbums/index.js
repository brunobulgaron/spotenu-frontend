import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push } from "connected-react-router";
import { ManageAlbumsWrapper, PaperManageAlbums, ButtonManageAlbums,TypographyManageAlbums, CustomAlbumIcon, CustomSVG, CustomSVGWrapper, ButtonManageAlbumsVoltar, CustomAddIcon, CustomKeyboardBackspaceIcon } from './style';


class ManageAlbums extends React.Component {

    render() {
        return (
            <ManageAlbumsWrapper>
                <PaperManageAlbums elevation={2}>
                    <CustomAlbumIcon />
                    <TypographyManageAlbums variant="h4">Gerenciar Álbuns</TypographyManageAlbums>
                    <ButtonManageAlbums
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        <CustomAddIcon />
                        Criar Álbum
                    </ButtonManageAlbums>                    
                    <ButtonManageAlbumsVoltar
                        variant="outlined"
                        color="secondary"
                        type="submit"
                        onClick={this.props.goToDashboardBandPage}
                    >
                        <CustomKeyboardBackspaceIcon />
                        Voltar
                    </ButtonManageAlbumsVoltar>
                </PaperManageAlbums>

                <CustomSVGWrapper>
                    <CustomSVG src={require('../../img/undraw_compose_music_ovo2.svg')}></CustomSVG>
                </CustomSVGWrapper>
            </ManageAlbumsWrapper>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        goToDashboardBandPage: () => dispatch(push(routes.dashboardBand))
    }
  }
  
  
  
  export default connect (null, mapDispatchToProps) (ManageAlbums);