import React from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push, replace } from "connected-react-router";
import { getGenders } from '../../actions/gender';
import { ManageGendersWrapper, PaperManageGenders, ButtonManageGenders,TypographyManageGenders, CustomAlbumIcon, CustomGendersWrapper, ButtonManageGendersVoltar, CustomAddIcon, CustomKeyboardBackspaceIcon, PaperListAlbums, CustomHR } from './style';

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

    componentDidMount() {
        const {goToLoginPage, getGenders} = this.props;
        const token = localStorage.getItem("token");

        if(token === null){
            goToLoginPage();
        }else{
            getGenders(token);
        };
    };
    

    render() {
        return(
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
                    <PaperListAlbums elevation={2} style={{maxHeight: '100%', overflow: 'auto'}}>
                        {this.props.genders && this.props.genders.map((gender) => {
                            return (
                                <List key={gender.id}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <AlbumIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        
                                        <ListItemText primary={gender.name} />
                                        
                                        <ListItemSecondaryAction>
                                            <IconButton
                                                edge="end"
                                                aria-label="delete"
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    <CustomHR />
                                </List>
                            )
                        })}
                    </PaperListAlbums>
                </CustomGendersWrapper>
            </ManageGendersWrapper>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        genders: state.gender.genders
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        goToLoginPage: () => dispatch(replace(routes.login)),
        goToAdminPanelPage: () => dispatch(push(routes.adminPanel)),
        goToCreateGenderPage: () => dispatch(push(routes.createGender)),
        getGenders: (token) => dispatch(getGenders(token))
    }
  }
  
  
  
export default connect (mapStateToProps, mapDispatchToProps) (ManageGenders);