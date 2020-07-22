import React from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push, replace } from "connected-react-router";
import { createAlbum } from '../../actions/album';
import { getGenders } from '../../actions/gender';
import { CreateAlbumWrapper, PaperCreateAlbum, ButtonCreateAlbum,TypographyCreateAlbum, CustomAlbumIcon, CustomAlbumsWrapper, ButtonCreateAlbumVoltar, CustomKeyboardBackspaceIcon, PaperListAlbums, FormCreateAlbum } from './style';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import TextField from "@material-ui/core/TextField";

class CreateAlbum extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            albumForm: {}
        }
    }

    componentDidMount() {
        const {goToLoginPage, getGenders} = this.props;
        const token = localStorage.getItem("token");

        if(token === null){
            goToLoginPage();
        }else{
            getGenders(token);
        };
    };

    handleInputChange = (event) =>{
        const { name, value } = event.target;

        this.setState({albumForm: {...this.state.albumForm, [name]: value}})
    };    

    handleSubmit = (event) =>{
        event.preventDefault();
    
        const token = localStorage.getItem("token");
    
        this.props.createAlbum(token, this.state.albumForm)
        
        this.setState({albumForm: ""});
    };

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
                    <FormCreateAlbum onSubmit={this.handleSubmit}>
                        <TypographyCreateAlbum variant="h4">Novo Álbum</TypographyCreateAlbum>                    
                        <TextField
                            label="Nome"
                            variant="outlined"
                            name="name"
                            type="name"
                            pattern="[a-z0-9_.+-%]+@[a-z0-9.-]+\.[a-z]{3,}$"
                            title="Nome inválido"
                            required
                            value={this.state.albumForm.name}
                            onChange={this.handleInputChange}
                        />
                        <InputLabel id="demo-simple-select-filled-label" required>Gênero</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            name="id_genre"
                            value={this.state.albumForm.gender}
                            onChange={this.handleInputChange}
                            required
                            displayEmpty
                        >
                        <MenuItem value="">
                            <em>Selecione o gênero</em>
                        </MenuItem>
                        {this.props.genders && this.props.genders.map((gender) => {
                            return (
                                <MenuItem value={gender.id}>{gender.name}</MenuItem>
                            )
                        })}
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

const mapStateToProps = (state) =>{
    return{
        genders: state.gender.genders
    }
}

const mapDispatchToProps = dispatch =>{
    return{
      goToLoginPage: () => dispatch(replace(routes.login)),     
      goToManageAlbumsPage: () => dispatch(push(routes.manageAlbums)),
      getGenders: (token) => dispatch(getGenders(token)),
      createAlbum: (token, body) => dispatch(createAlbum(token, body))
    }
  }
  
  
  
  export default connect (mapStateToProps, mapDispatchToProps) (CreateAlbum);