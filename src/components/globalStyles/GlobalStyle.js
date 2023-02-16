import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {       
        background-image: url(${({link}) => link});
    
        /*      A I X Ò   F U N C I O N A !  
        background-color: blue; 
        background: url('https://github.com/patobottos/itacademy-react-sprint-6/blob/main/1.jpg?raw=true');
        */

        /*  +++  A I X Ò   N O    F U N C I O N A +++         
        background-image: url("fototest.jpg");  
        background-image: url("/src/assets/img/fototest.jpg");
        background-image: url('/src/components/globalStyles/fototest.jpg');
        background-image: url('././assets/img/fototest.jpg');
        background-image: url('/./assets/img/fototest.jpg');
        background-image: url("src/assets/img/1.jpg");
        background-image: url('..src/components/globalStyles/1.jpg')
        background-image: url('./././assets/img/fototest.jpg');
        background-image: url('/././assets/img/fototest.jpg'); 
        background-image: url('../../../assets/img/1.jpg');
        background-image: url(${({src}) => src});  
        background: url('../../../public/fototest.jpg');
        background-image: url('../../../public/fototest.jpg');
        */
        
        margin: 0;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
`;