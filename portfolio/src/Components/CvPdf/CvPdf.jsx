import pdf from '../../../public/GUADALUPEFESTINESECv.pdf'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ContainerButton = styled.div`
display: flex;
justify-content: center;
align-items:center;
`

const ButtonCv = styled.button`
background-color: var(--colorPrimario);
color: var(--colorSecundario);
width: 300px;
`
export default function CvPdf() {
    return (
        <ContainerButton>
            <Link to={pdf} target='_blank'>
                <ButtonCv>
                    VISUALIZAR CV EN PDF
                </ButtonCv>
            </Link>
        </ContainerButton>
    )
}