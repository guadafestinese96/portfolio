import apiImg from '../../../public/api.png'
import cssImg from '../../../public/css.png'
import htmlImg from '../../../public/html.png'
import jsImg from '../../../public/js.png'
import reactImg from '../../../public/react.jpg'
import sassImg from '../../../public/sass_5968358.png'
import viteImg from '../../../public/vite.jpg'
import styled from 'styled-components'



const Imgs = styled.img`
height: 50px;
margin: 5px;
`
export default function Skils(){
    return(
        <div>
        <Imgs src={reactImg} alt='reactImg'/>
        <Imgs src={viteImg} alt='viteImg'/>
        <Imgs src={jsImg} alt='jsImg'/>
        <Imgs src={cssImg} alt='cssImg'/>
        <Imgs src={htmlImg} alt='htmlImg'/>
        <Imgs src={sassImg} alt='sassImg'/>
        <Imgs src={apiImg} alt='apiImg'/>
        </div>
    )
}