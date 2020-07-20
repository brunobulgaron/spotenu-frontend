import React from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push } from "connected-react-router";
import { signUpUserFree } from '../../actions/login';
import {
    ButtonSignUp,
    TypographySignUp,
    SignUpUserFreeWrapper,
    FormSignUp,
    PaperSignUp,
    TypographyAlreadyHaveAccount,
    CustomSpan
} from "./style";
import TextField from "@material-ui/core/TextField";

class SignUpUserFree extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            signUpUserFreeForm: {}
        };
    };

    handleFormSubmit = event => {
        event.preventDefault();
      
        this.props.signUpUserFree(this.state.signUpUserFreeForm);
    };

    handleInputChange = event => {
        const { name, value } = event.target

        this.setState({
            signUpUserFreeForm: {
                ...this.state.signUpUserFreeForm,
                [name]: value
            }
        });
    };

    render() {
        
        const { signUpUserFreeForm } = this.state;
        
        return (
            <SignUpUserFreeWrapper>
                <PaperSignUp elevation={3}>
                    <FormSignUp onSubmit={this.handleFormSubmit}>
                        <TypographySignUp variant="h4">Nova Conta</TypographySignUp>                        
                        <TextField
                            label="Nome"
                            variant="outlined"
                            name="name"
                            type="text"
                            pattern="[A-Za-z ãé]{5,}"
                            required
                            onChange={this.handleInputChange}
                            value={signUpUserFreeForm.name}
                        />
                        <TextField
                            label="Apelido"
                            variant="outlined"
                            name="nickname"
                            type="text"
                            pattern="[A-Za-z ãé]{5,}"
                            required
                            onChange={this.handleInputChange}
                            value={signUpUserFreeForm.nickname}
                        />
                        <TextField
                            label="E-mail"
                            variant="outlined"
                            name="email"
                            type="email"
                            pattern="[a-z0-9_.+-%]+@[a-z0-9.-]+\.[a-z]{3,}$"
                            title="E-mail inválido"
                            required
                            onChange={this.handleInputChange}
                            value={signUpUserFreeForm.email}
                        />
                        <TextField
                            label="Senha"
                            variant="outlined"
                            name="password"
                            type="password"
                            pattern="[A-Za-z0-9]{4,8}"
                            required
                            onChange={this.handleInputChange}
                            value={signUpUserFreeForm.password}
                        />
                        <ButtonSignUp
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Cadastrar
                        </ButtonSignUp>
                        <TypographyAlreadyHaveAccount onClick={this.props.goToLoginPage}>Já tem uma conta? <CustomSpan>Clique aqui!</CustomSpan></TypographyAlreadyHaveAccount>
                    </FormSignUp>
                </PaperSignUp>
            </SignUpUserFreeWrapper>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return{
      signUpUserFree: (body) => dispatch(signUpUserFree(body)),
      goToLoginPage: () => dispatch(push(routes.login))     
    }
  }
  
  
  
  export default connect (null, mapDispatchToProps) (SignUpUserFree);