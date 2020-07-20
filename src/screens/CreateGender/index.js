import React from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push, replace } from "connected-react-router";
import { CreateGenderWrapper, PaperCreateGender, ButtonCreateGender,TypographyCreateGender, CustomAlbumIcon, CustomGendersWrapper, ButtonCreateGenderVoltar, CustomKeyboardBackspaceIcon, PaperListAlbums, FormCreateGender } from './style';

import TextField from "@material-ui/core/TextField";

class CreateGender extends React.Component {

    componentDidMount() {
        const {goToLoginPage} = this.props;
        const token = localStorage.getItem("token");

        if(token === null){
            goToLoginPage();
        };
    };

    render() {
        return (
            <CreateGenderWrapper>
                <PaperCreateGender elevation={2}>
                    <CustomAlbumIcon />
                    <TypographyCreateGender variant="h4">Criar Gênero</TypographyCreateGender>                                      
                    <ButtonCreateGenderVoltar
                        variant="outlined"
                        color="secondary"
                        type="submit"
                        onClick={this.props.goToManageGendersPage}
                    >
                        <CustomKeyboardBackspaceIcon />
                        Voltar
                    </ButtonCreateGenderVoltar>
                </PaperCreateGender>

                <CustomGendersWrapper>
                    <PaperListAlbums elevation={2}>
                    <FormCreateGender>
                        <TypographyCreateGender variant="h4">Novo Gênero</TypographyCreateGender>                    
                        <TextField
                            label="Nome"
                            variant="outlined"
                            name="name"
                            type="name"
                            pattern="[a-z0-9_.+-%]+@[a-z0-9.-]+\.[a-z]{3,}$"
                            title="Nome inválido"
                            required
                        />
                        <ButtonCreateGender
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Criar
                        </ButtonCreateGender>                        
                    </FormCreateGender>
                    </PaperListAlbums>
                </CustomGendersWrapper>
            </CreateGenderWrapper>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        goToLoginPage: () => dispatch(replace(routes.login)),
        goToManageGendersPage: () => dispatch(push(routes.manageGenders))
    }
  }
  
  
  
  export default connect (null, mapDispatchToProps) (CreateGender);