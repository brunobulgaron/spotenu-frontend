import React from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push, replace } from "connected-react-router";
import { getAllUnapprovedBands, approveBand } from '../../actions/band';
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
        const {goToLoginPage, getAllUnapprovedBands} = this.props;
        const token = localStorage.getItem("token");

        if(token === null){
            goToLoginPage();
        }else{
            getAllUnapprovedBands(token);
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
                    <PaperListAlbums elevation={2} style={{maxHeight: '100%', overflow: 'auto'}}>
                        <TypographyManageBands variant="h6">Bandas para aprovar</TypographyManageBands>
                        <p style={{opacity: '60%', marginLeft: '15px'}}>Clique no ícone verde à direita para aprovar uma banda.</p>
                        {this.props.bands && this.props.bands.map((band) => {
                            return (
                                <List>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <CustomStarsIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        
                                        <ListItemText primary={band.name} />
                                        
                                        <ListItemSecondaryAction>
                                            <IconButton
                                                edge="start"
                                                aria-label="check"
                                                onClick={() => this.props.approveBand(band.id)}
                                            >   
                                                <CustomCheck />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                </List>
                            )
                        })}
                    </PaperListAlbums>
                </CustomBandsWrapper>
            </ManageBandsWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bands: state.band.bands
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        goToLoginPage: () => dispatch(replace(routes.login)),
        goToAdminPanelPage: () => dispatch(push(routes.adminPanel)),
        getAllUnapprovedBands: (token) => dispatch(getAllUnapprovedBands(token)),
        approveBand: (id) => dispatch(approveBand(id))
    }
  }
  
  
  
export default connect (mapStateToProps, mapDispatchToProps) (ManageBands);