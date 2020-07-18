import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push } from "connected-react-router";
import { ManageSongsWrapper, PaperManageSongs, ButtonManageSongs,TypographyManageSongs, CustomMusicNoteIcon, CustomSVG, CustomSVGWrapper, ButtonManageSongsVoltar, CustomAddIcon, CustomKeyboardBackspaceIcon } from './style';


class ManageSongs extends React.Component {

    render() {
        return (
            <ManageSongsWrapper>
                <PaperManageSongs elevation={2}>
                    <CustomMusicNoteIcon />
                    <TypographyManageSongs variant="h4">Gerenciar Músicas</TypographyManageSongs>
                    <ButtonManageSongs
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        <CustomAddIcon />
                        Criar Música
                    </ButtonManageSongs>                    
                    <ButtonManageSongsVoltar
                        variant="outlined"
                        color="secondary"
                        type="submit"
                        onClick={this.props.goToDashboardBandPage}
                    >
                        <CustomKeyboardBackspaceIcon />
                        Voltar
                    </ButtonManageSongsVoltar>
                </PaperManageSongs>

                <CustomSVGWrapper>
                    <CustomSVG src={require('../../img/undraw_compose_music_ovo2.svg')}></CustomSVG>
                </CustomSVGWrapper>
            </ManageSongsWrapper>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        goToDashboardBandPage: () => dispatch(push(routes.dashboardBand))
    }
  }
  
  
  
  export default connect (null, mapDispatchToProps) (ManageSongs);