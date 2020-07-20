import React from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push } from "connected-react-router";
import { signUpUserBand } from '../../actions/login';
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
    constructor(props){
        super(props)

        this.state = {
            signUpUserBandForm: {}
        };
    };

    handleFormSubmit = event => {
        event.preventDefault();
      
        this.props.signUpUserBand(this.state.signUpUserBandForm);
    };

    handleInputChange = event => {
        const { name, value } = event.target

        this.setState({
            signUpUserBandForm: {
                ...this.state.signUpUserBandForm,
                [name]: value
            }
        });
    };

    render() {

        const { signUpUserBandForm } = this.state;

        return (
            <SignUpUserBandWrapper>
                <PaperSignUp elevation={3}>
                    <FormSignUp onSubmit={this.handleFormSubmit}>
                        <TypographySignUp variant="h4">Novo Artista</TypographySignUp>
                        <TextField
                            label="Nome"
                            variant="outlined"
                            name="name"
                            type="text"
                            pattern="[A-Za-z ãé]{5,}"
                            required
                            onChange={this.handleInputChange}
                            value={signUpUserBandForm.name}
                        />
                        <TextField
                            label="Apelido"
                            variant="outlined"
                            name="nickname"
                            type="text"
                            pattern="[A-Za-z ãé]{5,}"
                            required
                            onChange={this.handleInputChange}
                            value={signUpUserBandForm.nickname}
                        />
                        <TextField
                            label="Descrição"
                            variant="outlined"
                            name="description"
                            type="text"
                            pattern="[A-Za-z ãé]{5,}"
                            onChange={this.handleInputChange}
                            value={signUpUserBandForm.description}
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
                            value={signUpUserBandForm.email}
                        />
                        <TextField
                            label="Senha"
                            variant="outlined"
                            name="password"
                            type="password"
                            pattern="[A-Za-z0-9]{4,8}"
                            required
                            onChange={this.handleInputChange}
                            value={signUpUserBandForm.password}
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
      signUpUserBand: (body) => dispatch(signUpUserBand(body)),
      goToLoginPage: () => dispatch(push(routes.login))     
    }
  }
  
  
  
  export default connect (null, mapDispatchToProps) (SignUpUserBand);