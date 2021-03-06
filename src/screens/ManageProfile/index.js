import React from "react";
import { connect } from "react-redux";
import { routes } from "../../screens/Router";
import { push, replace } from "connected-react-router";
import { ManageProfileWrapper, PaperManageProfile, TypographyManageProfile, CustomPersonIcon, CustomSVG, CustomSVGWrapper, ButtonManageProfileVoltar, CustomHighlightOffIcon, CustomKeyboardBackspaceIcon, ButtonManageProfileExcluir, TypographyProfileInfo, CustomSpan, CustomModal } from './style';

import { getUserById } from '../../actions/user';

CustomModal.setAppElement('#root');

class ManageProfile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            modalIsOpen: false
        }
    }

    componentDidMount() {
        const {goToLoginPage, getUserById} = this.props;
        const token = localStorage.getItem("token");

        if(token === null){
            goToLoginPage();
        }else{
            getUserById(token)
        };
    };

    handleModal = () => {
        this.setState({modalIsOpen: true})
    };

    handleModalClose = () => {
        this.setState({modalIsOpen: false})
    };

    render() {
        return (            
            <ManageProfileWrapper>
                
                <CustomModal isOpen={this.state.modalIsOpen} onRequestClose={this.handleModalClose}>
                    <CustomHighlightOffIcon />
                    
                    <TypographyManageProfile variant="h4">Função desabilitada!</TypographyManageProfile>
                    <TypographyProfileInfo>Clique fora desse aviso para fechar.</TypographyProfileInfo>
                
                </CustomModal>
                
                
                <PaperManageProfile elevation={2}>
                    <CustomPersonIcon />
                    <TypographyManageProfile variant="h4">Gerenciar Perfil</TypographyManageProfile>

                    <TypographyProfileInfo variant="h6">
                        <CustomSpan>Nome: </CustomSpan>{this.props.users.name}
                    </TypographyProfileInfo>

                    <TypographyProfileInfo variant="h6">
                        <CustomSpan>E-mail: </CustomSpan>{this.props.users.email}
                    </TypographyProfileInfo>

                    <TypographyProfileInfo variant="h6">
                        <CustomSpan>Tipo: </CustomSpan>{this.props.users.type}
                    </TypographyProfileInfo>

                    <ButtonManageProfileVoltar
                        variant="outlined"
                        color="secondary"
                        type="submit"
                        onClick={this.props.goToDashboardBandPage}
                    >
                        <CustomKeyboardBackspaceIcon />
                        Voltar
                    </ButtonManageProfileVoltar>
                    <ButtonManageProfileExcluir
                        variant="contained"
                        type="submit"
                        onClick={this.handleModal}
                    >
                        <CustomHighlightOffIcon />
                        Excluir Perfil
                    </ButtonManageProfileExcluir>
                </PaperManageProfile>

                <CustomSVGWrapper>
                    <CustomSVG src={require('../../img/undraw_profile_data_mk6k.svg')}></CustomSVG>
                </CustomSVGWrapper>
            </ManageProfileWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.user.users
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        goToLoginPage: () => dispatch(replace(routes.login)),
        goToDashboardBandPage: () => dispatch(push(routes.dashboardBand)),
        getUserById: (token) => dispatch(getUserById(token))
    }
  }
  
  
  
  export default connect (mapStateToProps, mapDispatchToProps) (ManageProfile);