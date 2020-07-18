import React from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push } from "connected-react-router";
import {
    ButtonSignUp,
    TypographySignUp,
    TypographyGoBack,
    SignUpUserAdminWrapper,
    FormSignUp,
    PaperSignUp,    
} from "./style";
import TextField from "@material-ui/core/TextField";

class SignUpUserAdmin extends React.Component {
    render() {
        return (
            <SignUpUserAdminWrapper>
                <PaperSignUp elevation={3}>
                    <FormSignUp>
                        <TypographySignUp variant="h4">Cadastrar Administrador</TypographySignUp>
                        <TextField
                            label="Nome"
                            variant="outlined"
                            name="name"
                            type="text"
                            pattern="[A-Za-z ãé]{5,}"
                            required
                        />
                        <TextField
                            label="Apelido"
                            variant="outlined"
                            name="nickname"
                            type="text"
                            pattern="[A-Za-z ãé]{5,}"
                            required
                        />
                        {/* <TextField
                            label="Descrição"
                            variant="outlined"
                            name="description"
                            type="text"
                            pattern="[A-Za-z ãé]{5,}"                        
                        /> */}
                        <TextField
                            label="E-mail"
                            variant="outlined"
                            name="email"
                            type="email"
                            pattern="[a-z0-9_.+-%]+@[a-z0-9.-]+\.[a-z]{3,}$"
                            title="E-mail inválido"
                            required
                        />
                        <TextField
                            label="Senha"
                            variant="outlined"
                            name="password"
                            type="password"
                            pattern="[A-Za-z0-9]{4,8}"
                            required
                        />
                        <ButtonSignUp
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Cadastrar
                        </ButtonSignUp>
                        <TypographyGoBack onClick={this.props.goToAdminPanelPage}>Voltar para o painel</TypographyGoBack>
                    </FormSignUp>
                </PaperSignUp>
            </SignUpUserAdminWrapper>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        goToAdminPanelPage: () => dispatch(push(routes.adminPanel))
    }
  }
  
  
  
  export default connect (null, mapDispatchToProps) (SignUpUserAdmin);