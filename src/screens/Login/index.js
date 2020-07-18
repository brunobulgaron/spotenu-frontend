import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push } from "connected-react-router";
import {
    TypographyLogin,
    LoginWrapper,
    FormLogin,
    PaperLogin,
    TypographyCreateNewAccount,
    ButtonLogin
} from "./style";
import TextField from "@material-ui/core/TextField";

class Login extends React.Component {

    render() {
        return (
            <LoginWrapper>
                <PaperLogin elevation={3}>
                    <FormLogin>
                        <TypographyLogin variant="h4">Login</TypographyLogin>                    
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
                        <ButtonLogin
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Entrar
                        </ButtonLogin>
                        <TypographyCreateNewAccount onClick={this.props.goToSignUpPage}>Não possui uma conta?</TypographyCreateNewAccount>
                    </FormLogin>
                </PaperLogin>
            </LoginWrapper>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return{
      goToLoginPage: () => dispatch(push(routes.login)),
      goToSignUpPage: () => dispatch(push(routes.signUpUserFree)),
      goToHome: () => dispatch(push(routes.root))
    }
  }
  
  
  
  export default connect (null, mapDispatchToProps) (Login);