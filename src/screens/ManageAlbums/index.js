import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push } from "connected-react-router";
import { ManageAlbumsWrapper, PaperManageAlbums, ButtonManageAlbums,TypographyManageAlbums, CustomAlbumIcon, CustomAlbumsWrapper, ButtonManageAlbumsVoltar, CustomAddIcon, CustomKeyboardBackspaceIcon, PaperListAlbums } from './style';

import AlbumIcon from '@material-ui/icons/Album';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";


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
                        onClick={this.props.goToCreateAlbumPage}
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

                <CustomAlbumsWrapper>
                    <PaperListAlbums elevation={2}>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <AlbumIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                
                                <ListItemText primary="Nome do Álbum 1" />
                                
                                <ListItemSecondaryAction>
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <AlbumIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                
                                <ListItemText primary="Nome do Álbum 2" />
                                
                                <ListItemSecondaryAction>
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <AlbumIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                
                                <ListItemText primary="Nome do Álbum 3" />
                                
                                <ListItemSecondaryAction>
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <AlbumIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                
                                <ListItemText primary="Nome do Álbum 4" />
                                
                                <ListItemSecondaryAction>
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </List>
                    </PaperListAlbums>
                </CustomAlbumsWrapper>
            </ManageAlbumsWrapper>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        goToDashboardBandPage: () => dispatch(push(routes.dashboardBand)),
        goToCreateAlbumPage: () => dispatch(push(routes.createAlbum))
    }
  }
  
  
  
  export default connect (null, mapDispatchToProps) (ManageAlbums);