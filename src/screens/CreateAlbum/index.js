import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push } from "connected-react-router";
import { CreateAlbumWrapper, PaperCreateAlbum, ButtonCreateAlbum,TypographyCreateAlbum, CustomAlbumIcon, CustomAlbumsWrapper, ButtonCreateAlbumVoltar, CustomKeyboardBackspaceIcon, PaperListAlbums, FormCreateAlbum } from './style';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import TextField from "@material-ui/core/TextField";

import AlbumIcon from '@material-ui/icons/Album';

class CreateAlbum extends React.Component {

    render() {
        return (
            <CreateAlbumWrapper>
                <PaperCreateAlbum elevation={2}>
                    <CustomAlbumIcon />
                    <TypographyCreateAlbum variant="h4">Criar Álbum</TypographyCreateAlbum>                                      
                    <ButtonCreateAlbumVoltar
                        variant="outlined"
                        color="secondary"
                        type="submit"
                        onClick={this.props.goToManageAlbumsPage}
                    >
                        <CustomKeyboardBackspaceIcon />
                        Voltar
                    </ButtonCreateAlbumVoltar>
                </PaperCreateAlbum>

                <CustomAlbumsWrapper>
                    <PaperListAlbums elevation={2}>
                    <FormCreateAlbum>
                        <TypographyCreateAlbum variant="h4">Novo Álbum</TypographyCreateAlbum>                    
                        <TextField
                            label="Nome"
                            variant="outlined"
                            name="name"
                            type="name"
                            pattern="[a-z0-9_.+-%]+@[a-z0-9.-]+\.[a-z]{3,}$"
                            title="Nome inválido"
                            required
                        />
                        <InputLabel id="demo-simple-select-filled-label" required>Gênero</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            // value={}
                            // onChange={}
                        >
                            <MenuItem value={10}>Gênero 1</MenuItem>
                            <MenuItem value={20}>Gênero 2</MenuItem>
                            <MenuItem value={30}>Gênero 3</MenuItem>
                        </Select>
                        <ButtonCreateAlbum
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Criar
                        </ButtonCreateAlbum>                        
                    </FormCreateAlbum>
                    </PaperListAlbums>
                </CustomAlbumsWrapper>
            </CreateAlbumWrapper>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        goToManageAlbumsPage: () => dispatch(push(routes.manageAlbums))
    }
  }
  
  
  
  export default connect (null, mapDispatchToProps) (CreateAlbum);