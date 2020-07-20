import React from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push } from "connected-react-router";
import { login } from '../../actions/login';
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
    constructor(props){
        super(props)
        
        this.state = {
          loginForm: {}
        }
      }

    componentDidMount() {
        const {goToHome} = this.props;
        const token = localStorage.getItem("token");

        if(token !== null){
            goToHome();
        };
    };

    handleInputChange = event => {
        const {name, value} = event.target
      
        this.setState({
            loginForm: {
                ...this.state.loginForm,
                [name]: value 
            }
        });
    };

    handleOnSubmit = event => {
        event.preventDefault();

        this.props.login(this.state.loginForm)        
    };

    render() {
        return (
            <LoginWrapper>
                <PaperLogin elevation={3}>
                    <FormLogin onSubmit={this.handleOnSubmit}>
                        <TypographyLogin variant="h4">Login</TypographyLogin>                    
                        <TextField
                            label="E-mail"
                            variant="outlined"
                            name="email"
                            type="email"
                            pattern="[a-z0-9_.+-%]+@[a-z0-9.-]+\.[a-z]{3,}$"
                            title="E-mail inválido"
                            required
                            onChange={this.handleInputChange}
                            value={this.state.loginForm.email}
                        />
                        <TextField
                            label="Senha"
                            variant="outlined"
                            name="password"
                            type="password"
                            pattern="[A-Za-z0-9]{4,8}"
                            required
                            onChange={this.handleInputChange}
                            value={this.state.loginForm.password}
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
      login: (body) => dispatch(login(body)),
      goToLoginPage: () => dispatch(push(routes.login)),
      goToSignUpPage: () => dispatch(push(routes.signUpUserFree)),
      goToHome: () => dispatch(push(routes.root))
    }
  }
  
  
  
  export default connect (null, mapDispatchToProps) (Login);