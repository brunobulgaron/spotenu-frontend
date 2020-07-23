import React from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push, replace } from "connected-react-router";
import { signUpUserAdmin } from '../../actions/login';
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
    constructor(props){
        super(props)

        this.state = {
            signUpUserAdminForm: {}
        };
    };

    componentDidMount() {
        const {goToLoginPage} = this.props;
        const token = localStorage.getItem("token");

        if(token === null){
            goToLoginPage();
        }
    };

    handleFormSubmit = event => {
        event.preventDefault();
      
        this.props.signUpUserAdmin(this.state.signUpUserAdminForm);
    };

    handleInputChange = event => {
        const { name, value } = event.target

        this.setState({
            signUpUserAdminForm: {
                ...this.state.signUpUserAdminForm,
                [name]: value
            }
        });
    };


    render() {

        const { signUpUserAdminForm } = this.state;

        return (
            <SignUpUserAdminWrapper>
                <PaperSignUp elevation={3}>
                    <FormSignUp onSubmit={this.handleFormSubmit}>
                        <TypographySignUp variant="h4">Cadastrar Administrador</TypographySignUp>
                        <TextField
                            label="Nome"
                            variant="outlined"
                            name="name"
                            type="text"
                            pattern="[A-Za-z ãé]{5,}"
                            required
                            onChange={this.handleInputChange}
                            value={signUpUserAdminForm.name}
                        />
                        <TextField
                            label="Apelido"
                            variant="outlined"
                            name="nickname"
                            type="text"
                            pattern="[A-Za-z ãé]{5,}"
                            required
                            onChange={this.handleInputChange}
                            value={signUpUserAdminForm.nickname}
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
                            value={signUpUserAdminForm.email}
                        />
                        <TextField
                            label="Senha"
                            variant="outlined"
                            name="password"
                            type="password"
                            pattern="[A-Za-z0-9]{4,8}"
                            required
                            onChange={this.handleInputChange}
                            value={signUpUserAdminForm.password}
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
        goToLoginPage: () => dispatch(replace(routes.login)),
        signUpUserAdmin: (body) => dispatch(signUpUserAdmin(body)),
        goToAdminPanelPage: () => dispatch(push(routes.adminPanel))
    }
  }
  
  
  
  export default connect (null, mapDispatchToProps) (SignUpUserAdmin);