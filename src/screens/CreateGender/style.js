import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AlbumIcon from '@material-ui/icons/Album';
import AddIcon from '@material-ui/icons/Add';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

export const CreateGenderWrapper = styled.div `
    /* height: 100%; */
    /* width: 100%; */
    display: grid;
    grid-template-columns: 40% 60%;
    /* gap: 20px; */
    background-color: #ededed;
`

export const PaperCreateGender = styled(Paper) `
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 90%;
    height: 60vh;
    margin: 0 auto;
    margin-top: 14vh;
    background-color: #ededed;
`

export const PaperListAlbums = styled(Paper) `
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 100%;
    height: 60.1vh;
    margin-top: 7.4vh;
    background-color: #ededed;
`

export const CustomGendersWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 90%;
    height: 75vh;
    margin: 0 auto;
    margin-top: 50px;
    background-color: #ededed;
`

export const TypographyCreateGender = styled(Typography) `
    text-align: center;
    margin-bottom: 30px;
    margin-top: 30px;
`

export const ButtonCreateGender = styled(Button) `
    color: #fff;
    font-weight: bold;
    width: 50%;
    margin: 8px auto;
`

export const ButtonCreateGenderVoltar = styled(Button) `
    color: #25252c;
    font-weight: 600;
    width: 50%;
    margin: 8px auto;
`

export const CustomAlbumIcon = styled(AlbumIcon) `    
    margin: 0 auto;
    margin-top: 30px;
    font-size: 4.5em;
    color: #1db954;
    padding: 10px;
`

export const CustomAddIcon = styled(AddIcon) `
    font-size: 1.3rem;
`

export const CustomKeyboardBackspaceIcon = styled(KeyboardBackspaceIcon) `
    font-size: 1rem;
    margin-right: 2px;
`

export const CustomSVG = styled.img `
    width: 100%;
    height: 100%;
    padding: 12%;
    opacity: 60%;
    transition: .4s ease-in-out;
    :hover{
        transform: scale(1.05);
        opacity: 100%;
    }
`

export const FormCreateGender = styled.form `
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 50px;
    width: 30vw;
    margin: 0 auto;
`