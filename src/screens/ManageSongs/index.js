import React from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push, replace } from "connected-react-router";
import { getAllSongs } from '../../actions/song';
import { ManageSongsWrapper, PaperManageSongs, ButtonManageSongs,TypographyManageSongs, CustomMusicNoteIcon, ButtonManageSongsVoltar, CustomAddIcon, CustomKeyboardBackspaceIcon, CustomSongsWrapper, PaperListSongs, CustomTableCell } from './style';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";


class ManageSongs extends React.Component {

    componentDidMount() {
        const {goToLoginPage, getAllSongs} = this.props;
        const token = localStorage.getItem("token");

        if(token === null){
            goToLoginPage();
        }else{
            getAllSongs(token);
        };
    };

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
                        onClick={this.props.goToCreateSongPage}
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
                
                <CustomSongsWrapper>
                    <PaperListSongs elevation={2} style={{maxHeight: '100%', overflow: 'auto'}}>
                            <TableContainer component={PaperListSongs}>
                                <Table                
                                    size="small"                            
                                >
                                    <TableHead>
                                        <TableRow>
                                            <CustomTableCell>Catálogo de Músicas - Spotenu</CustomTableCell>
                                        </TableRow>
                                    </TableHead>
                                    {this.props.songs && this.props.songs.map((song) => {
                                        return (
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell component="th" scope="row">
                                                        {song.name}
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        )
                                    })}
                                </Table>
                            </TableContainer>
                    </PaperListSongs>
                </CustomSongsWrapper>
            </ManageSongsWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        songs: state.song.songs
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        goToLoginPage: () => dispatch(replace(routes.login)),
        goToDashboardBandPage: () => dispatch(push(routes.dashboardBand)),
        goToCreateSongPage: () => dispatch(push(routes.createSong)),
        getAllSongs: (token) => dispatch(getAllSongs(token))
    }
  }
  
  
  
  export default connect (mapStateToProps, mapDispatchToProps) (ManageSongs);