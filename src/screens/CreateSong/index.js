import React from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push, replace } from "connected-react-router";
import { createSong } from '../../actions/song';
import { getAlbumsByCreatedBy } from '../../actions/album';
import { CreateSongWrapper, PaperCreateSong, ButtonCreateSong,TypographyCreateSong, CustomAlbumIcon, CustomAlbumsWrapper, ButtonCreateSongVoltar, CustomKeyboardBackspaceIcon, PaperListAlbums, FormCreateSong } from './style';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import TextField from "@material-ui/core/TextField";

class CreateSong extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            songForm: {}
        }
    }

    componentDidMount() {
        const {goToLoginPage, getAlbumsByCreatedBy} = this.props;
        const token = localStorage.getItem("token");

        if(token === null){
            goToLoginPage();
        }else{
            getAlbumsByCreatedBy(token);
        };
    };

    handleInputChange = (event) =>{
        const { name, value } = event.target;

        this.setState({songForm: {...this.state.songForm, [name]: value}})
    };    

    handleSubmit = (event) =>{
        event.preventDefault();
    
        const token = localStorage.getItem("token");
    
        this.props.createSong(token, this.state.songForm)
        
        this.setState({songForm: ""});
    };

    render() {
        return (
            <CreateSongWrapper>
                <PaperCreateSong elevation={2}>
                    <CustomAlbumIcon />
                    <TypographyCreateSong variant="h4">Criar Música</TypographyCreateSong>                                      
                    <ButtonCreateSongVoltar
                        variant="outlined"
                        color="secondary"
                        type="submit"
                        onClick={this.props.goToManageSongsPage}
                    >
                        <CustomKeyboardBackspaceIcon />
                        Voltar
                    </ButtonCreateSongVoltar>
                </PaperCreateSong>

                <CustomAlbumsWrapper>
                    <PaperListAlbums elevation={2}>
                    <FormCreateSong onSubmit={this.handleSubmit}>
                        <TypographyCreateSong variant="h4">Nova Música</TypographyCreateSong>                    
                        <TextField
                            label="Nome"
                            variant="outlined"
                            name="name"
                            type="name"
                            pattern="[a-z0-9_.+-%]+@[a-z0-9.-]+\.[a-z]{3,}$"
                            title="Nome inválido"
                            required
                            value={this.state.songForm.name}
                            onChange={this.handleInputChange}
                        />
                        <InputLabel id="demo-simple-select-filled-label" required>Álbum</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            name="id_album"
                            value={this.state.songForm.album}
                            onChange={this.handleInputChange}
                            required
                            displayEmpty
                        >
                        <MenuItem value="">
                            <em>Selecione o álbum</em>
                        </MenuItem>
                        {this.props.albums && this.props.albums.map((album) => {
                            return (
                                <MenuItem value={album.id}>{album.name}</MenuItem>
                            )
                        })}
                        </Select>
                        <ButtonCreateSong
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Criar
                        </ButtonCreateSong>                        
                    </FormCreateSong>
                    </PaperListAlbums>
                </CustomAlbumsWrapper>
            </CreateSongWrapper>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        albums: state.album.albums
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        goToLoginPage: () => dispatch(replace(routes.login)),
        goToManageSongsPage: () => dispatch(push(routes.manageSongs)),
        getAlbumsByCreatedBy: (token) => dispatch(getAlbumsByCreatedBy(token)),
        createSong: (token, body) => dispatch(createSong(token, body))
    }
  }
  
  
  
  export default connect (mapStateToProps, mapDispatchToProps) (CreateSong);