import React from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push, replace } from "connected-react-router";
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
import { getAlbums, getAlbumsByCreatedBy } from "../../actions/album";


class ManageAlbums extends React.Component {

    componentDidMount() {
        const {goToLoginPage, getAlbums, getAlbumsByCreatedBy} = this.props;
        const token = localStorage.getItem("token");

        if(token === null){
            goToLoginPage();
        }else{
            getAlbumsByCreatedBy(token);
        };
    };

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
                    <PaperListAlbums elevation={2} style={{maxHeight: '100%', overflow: 'auto'}}>
                    {this.props.albums && this.props.albums.map((album) => {
                        return (
                            <List key={album.id}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <AlbumIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    
                                    <ListItemText primary={album.name} />
                                    
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
                        )
                    })}
                    </PaperListAlbums>
                </CustomAlbumsWrapper>
            </ManageAlbumsWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        albums: state.album.albums
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        goToLoginPage: () => dispatch(push(replace.login)),
        goToDashboardBandPage: () => dispatch(push(routes.dashboardBand)),
        goToCreateAlbumPage: () => dispatch(push(routes.createAlbum)),
        // getAlbums: (token) => dispatch(getAlbums(token))
        getAlbumsByCreatedBy: (token) => dispatch(getAlbumsByCreatedBy(token))
    }
  }
  
  
  
  export default connect (mapStateToProps, mapDispatchToProps) (ManageAlbums);