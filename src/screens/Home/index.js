import React from "react";
import { connect } from "react-redux";
import { routes } from "../Router";
import { push } from "connected-react-router";
import {
    TypographyHome,
    TypographyHomeTopo,
    TypographyItem,
    TypographyText,
    HomeWrapper,
    PaperHome,
    PaperHomeOuvinte,
    PaperHomeBanda,
    WomanCard,
    SecondWrapper,
    ButtonHome,
    ButtonWrapper,
    CustomSpan
} from "./style";
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import StarIcon from '@material-ui/icons/Star';

class Home extends React.Component {

    render() {

        return (
            <HomeWrapper>
                <TypographyHomeTopo variant="h2">Música para todos!</TypographyHomeTopo>
                
                <SecondWrapper>

                    <PaperHome elevation={3}>
                        <WomanCard></WomanCard>
                    </PaperHome>

                    <PaperHomeBanda elevation={3}>
                        <TypographyHome variant="h4">Artistas</TypographyHome>

                        <TypographyItem>
                            <CheckRoundedIcon color="primary"/>
                            <TypographyText>Adicione seus Álbuns e Músicas</TypographyText>
                        </TypographyItem>
                        
                        <TypographyItem>
                            <CheckRoundedIcon color="primary"/>
                            <TypographyText>Milhares de Usuários</TypographyText>
                        </TypographyItem>
                        
                        <TypographyItem>
                            <StarIcon color="primary"/>
                            <TypographyText>Seja <CustomSpan>reconhecido!</CustomSpan></TypographyText>
                        </TypographyItem>                       
                       
                        <ButtonWrapper>
                            <ButtonHome
                                variant="contained"
                                color="primary"
                                type="submit"
                                onClick={this.props.goToSignUpBandPage}                        
                            >Cadastre-se!
                            </ButtonHome>
                        </ButtonWrapper>
                    </PaperHomeBanda>

                    <PaperHomeOuvinte elevation={3}>
                        <TypographyHome variant="h4">Spotenu Free</TypographyHome>
                        
                        <TypographyItem>
                            <CheckRoundedIcon color="primary"/>
                            <TypographyText>Encontre suas músicas preferidas</TypographyText>
                        </TypographyItem>
                        
                        <TypographyItem>
                            <CheckRoundedIcon color="primary"/>
                            <TypographyText>Crie Playlists colaborativas</TypographyText>
                        </TypographyItem>
                        
                        <TypographyItem>
                            <CheckRoundedIcon color="primary"/>
                            <TypographyText>Milhares de Artistas e Álbuns</TypographyText>
                        </TypographyItem>

                        <ButtonWrapper>
                            <ButtonHome
                                variant="contained"
                                color="primary"
                                type="submit"
                                onClick={this.props.goToSignUpPage}
                            >Cadastre-se!
                            </ButtonHome>
                        </ButtonWrapper>
                    </PaperHomeOuvinte>
                </SecondWrapper>
            </HomeWrapper>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return{
      goToSignUpPage: () => dispatch(push(routes.signUpUserFree)),
      goToSignUpBandPage: () => dispatch(push(routes.signUpUserBand))      
    }
  }
  
  
  
  export default connect (null, mapDispatchToProps) (Home);