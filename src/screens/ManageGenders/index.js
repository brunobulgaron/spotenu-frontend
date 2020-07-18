import React from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push } from "connected-react-router";
import { ManageGendersWrapper, PaperManageGenders, ButtonManageGenders,TypographyManageGenders, CustomAlbumIcon, CustomGendersWrapper, ButtonManageGendersVoltar, CustomAddIcon, CustomKeyboardBackspaceIcon, PaperListAlbums } from './style';

import AlbumIcon from '@material-ui/icons/Album';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";


class ManageGenders extends React.Component {

    render() {
        return (
            <ManageGendersWrapper>
                <PaperManageGenders elevation={2}>
                    <CustomAlbumIcon />
                    <TypographyManageGenders variant="h4">Gêneros Musicais</TypographyManageGenders>
                    <ButtonManageGenders
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={this.props.goToCreateGenderPage}
                    >
                        <CustomAddIcon />
                        Criar Gênero
                    </ButtonManageGenders>                    
                    <ButtonManageGendersVoltar
                        variant="outlined"
                        color="secondary"
                        type="submit"
                        onClick={this.props.goToAdminPanelPage}
                    >
                        <CustomKeyboardBackspaceIcon />
                        Voltar
                    </ButtonManageGendersVoltar>
                </PaperManageGenders>

                <CustomGendersWrapper>
                    <PaperListAlbums elevation={2}>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <AlbumIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                
                                <ListItemText primary="Nome do Gênero 1" />
                                
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
                                
                                <ListItemText primary="Nome do Gênero 2" />
                                
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
                                
                                <ListItemText primary="Nome do Gênero 3" />
                                
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
                                
                                <ListItemText primary="Nome do Gênero 4" />
                                
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
                </CustomGendersWrapper>
            </ManageGendersWrapper>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        goToAdminPanelPage: () => dispatch(push(routes.adminPanel)),
        goToCreateGenderPage: () => dispatch(push(routes.createGender))
    }
  }
  
  
  
  export default connect (null, mapDispatchToProps) (ManageGenders);