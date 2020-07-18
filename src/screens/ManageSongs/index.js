import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push } from "connected-react-router";
import { ManageSongsWrapper, PaperManageSongs, ButtonManageSongs,TypographyManageSongs, CustomMusicNoteIcon, ButtonManageSongsVoltar, CustomAddIcon, CustomKeyboardBackspaceIcon, CustomSongsWrapper, PaperListSongs, CustomTableCell } from './style';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";


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
                    <PaperListSongs elevation={2}>
                    <TableContainer component={PaperListSongs}>
                        <Table                
                            size="small"                            
                        >
                            <TableHead>
                                <TableRow>
                                    <CustomTableCell>Nome</CustomTableCell>
                                    <CustomTableCell align="center">Álbum</CustomTableCell>
                                    <CustomTableCell align="center">Artista</CustomTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Nome da Música
                                    </TableCell>
                                    <TableCell align="center">Nome do Álbum</TableCell>
                                    <TableCell align="center">Nome do Artista</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Nome da Música
                                    </TableCell>
                                    <TableCell align="center">Nome do Álbum</TableCell>
                                    <TableCell align="center">Nome do Artista</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Nome da Música
                                    </TableCell>
                                    <TableCell align="center">Nome do Álbum</TableCell>
                                    <TableCell align="center">Nome do Artista</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Nome da Música
                                    </TableCell>
                                    <TableCell align="center">Nome do Álbum</TableCell>
                                    <TableCell align="center">Nome do Artista</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </PaperListSongs>
                </CustomSongsWrapper>
            </ManageSongsWrapper>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        goToDashboardBandPage: () => dispatch(push(routes.dashboardBand)),
        goToCreateSongPage: () => dispatch(push(routes.createSong))
    }
  }
  
  
  
  export default connect (null, mapDispatchToProps) (ManageSongs);