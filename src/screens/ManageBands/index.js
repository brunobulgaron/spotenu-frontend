import React from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push, replace } from "connected-react-router";
import { ManageBandsWrapper, PaperManageBands, TypographyManageBands, CustomBandsWrapper, ButtonManageBandsVoltar, CustomKeyboardBackspaceIcon, PaperListAlbums, CustomCheck, CustomDelete, CustomStarsIcon } from './style';

// import AlbumIcon from '@material-ui/icons/Album';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

class ManageBands extends React.Component {

    componentDidMount() {
        const {goToLoginPage} = this.props;
        const token = localStorage.getItem("token");

        if(token === null){
            goToLoginPage();
        };
    };

    render() {
        return (
            <ManageBandsWrapper>
                <PaperManageBands elevation={2}>
                    <CustomStarsIcon />
                    <TypographyManageBands variant="h4">Gerenciar Bandas</TypographyManageBands>                                      
                    <ButtonManageBandsVoltar
                        variant="outlined"
                        color="secondary"
                        type="submit"
                        onClick={this.props.goToAdminPanelPage}
                    >
                        <CustomKeyboardBackspaceIcon />
                        Voltar
                    </ButtonManageBandsVoltar>
                </PaperManageBands>

                <CustomBandsWrapper>
                    <PaperListAlbums elevation={2}>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <CustomStarsIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                
                                <ListItemText primary="Nome da Banda 1" />
                                
                                <ListItemSecondaryAction>
                                    <IconButton
                                        edge="start"
                                        aria-label="check"
                                    >                                        
                                        <CustomCheck />
                                    </IconButton>
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                    >                                        
                                        <CustomDelete />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <CustomStarsIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                
                                <ListItemText primary="Nome da Banda 2" />
                                
                                <ListItemSecondaryAction>
                                    <IconButton
                                        edge="start"
                                        aria-label="check"
                                    >                                        
                                        <CustomCheck />
                                    </IconButton>
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                    >
                                        <CustomDelete />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <CustomStarsIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                
                                <ListItemText primary="Nome da Banda 3" />
                                
                                <ListItemSecondaryAction>
                                    <IconButton
                                        edge="start"
                                        aria-label="check"
                                    >                                        
                                        <CustomCheck />
                                    </IconButton>
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                    >
                                        <CustomDelete />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <CustomStarsIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                
                                <ListItemText primary="Nome da Banda 4" />
                                
                                <ListItemSecondaryAction>
                                    <IconButton
                                        edge="start"
                                        aria-label="check"
                                    >                                        
                                        <CustomCheck />
                                    </IconButton>
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                    >
                                        <CustomDelete />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </List>
                    </PaperListAlbums>
                </CustomBandsWrapper>
            </ManageBandsWrapper>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        goToLoginPage: () => dispatch(replace(routes.login)),
        goToAdminPanelPage: () => dispatch(push(routes.adminPanel))
    }
  }
  
  
  
  export default connect (null, mapDispatchToProps) (ManageBands);