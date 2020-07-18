import React from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push } from "connected-react-router";
import {
    ButtonSignUp,
    TypographySignUp,
    SignUpUserBandWrapper,
    FormSignUp,
    PaperSignUp,
    TypographyAlreadyHaveAccount
} from "./style";
import TextField from "@material-ui/core/TextField";

class SignUpUserBand extends React.Component {
    render() {
        return (
            <SignUpUserBandWrapper>
                <PaperSignUp elevation={3}>
                    <FormSignUp>
                        <TypographySignUp variant="h4">Novo Artista</TypographySignUp>
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
                        <TextField
                            label="Descrição"
                            variant="outlined"
                            name="description"
                            type="text"
                            pattern="[A-Za-z ãé]{5,}"                        
                        />
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
                        <TypographyAlreadyHaveAccount onClick={this.props.goToLoginPage}>Já tem uma conta? Clique aqui!</TypographyAlreadyHaveAccount>
                    </FormSignUp>
                </PaperSignUp>
            </SignUpUserBandWrapper>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return{
      goToLoginPage: () => dispatch(push(routes.login))     
    }
  }
  
  
  
  export default connect (null, mapDispatchToProps) (SignUpUserBand);