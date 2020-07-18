import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push } from "connected-react-router";
import { CreateSongWrapper, PaperCreateSong, ButtonCreateSong,TypographyCreateSong, CustomAlbumIcon, CustomAlbumsWrapper, ButtonCreateSongVoltar, CustomKeyboardBackspaceIcon, PaperListAlbums, FormCreateSong } from './style';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import TextField from "@material-ui/core/TextField";

import AlbumIcon from '@material-ui/icons/Album';

class CreateSong extends React.Component {

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
                    <FormCreateSong>
                        <TypographyCreateSong variant="h4">Nova Música</TypographyCreateSong>                    
                        <TextField
                            label="Nome"
                            variant="outlined"
                            name="name"
                            type="name"
                            pattern="[a-z0-9_.+-%]+@[a-z0-9.-]+\.[a-z]{3,}$"
                            title="Nome inválido"
                            required
                        />
                        <InputLabel id="demo-simple-select-filled-label" required>Álbum</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            // value={}
                            // onChange={}
                        >
                            <MenuItem value={10}>Álbum 1</MenuItem>
                            <MenuItem value={20}>Álbum 2</MenuItem>
                            <MenuItem value={30}>Álbum 3</MenuItem>
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

const mapDispatchToProps = dispatch =>{
    return{
        goToManageSongsPage: () => dispatch(push(routes.manageSongs))
    }
  }
  
  
  
  export default connect (null, mapDispatchToProps) (CreateSong);