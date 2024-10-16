import styled from 'styled-components';
import guadaImg from '../../../public/guada2.png';
import Skils from '../Skils/Skils';
import CvPdf from '../CvPdf/CvPdf';


const Title = styled.h1`
  font-family: "Anton", sans-serif;
  font-weight: 400;
  font-size: 36px;
  font-style: normal;
  color:rgba(237,107,191);
  `

  const Title2 = styled.h1`
  font-family: "Anton", sans-serif;
  font-weight: 400;
  font-size: 36px;
  font-style: normal;
  color:white;
  `

  const GuadaImg = styled.img`
    height: 250px;
    background-color: rgba(237,107,191);
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 50%;
  `
const ContainerIndex = styled.div`
    background-color: rgba(0,0,0,0.8);
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 300px;
    
`

export default function Inicio(){
    return(
        <ContainerIndex>
        <Title>Guadalupe Festinese</Title>
        <Title2>Frontend Developer</Title2>
        <div>
        <GuadaImg src={guadaImg} alt="guadaImg"/>
        </div>
        <Skils/>
        <CvPdf/>
        </ContainerIndex>
    )
}