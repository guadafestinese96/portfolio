import apiImg from '../../../public/api.png'
import cssImg from '../../../public/css.png'
import htmlImg from '../../../public/html.png'
import jsImg from '../../../public/js.png'
import reactImg from '../../../public/react.jpg'
import sassImg from '../../../public/sass_5968358.png'
import viteImg from '../../../public/vite.jpg'
import auth0Img from '../../../public/auth0-rbg.png'
import bootstrapImg from '../../../public/bootstrap.png'
import firebaseImg from '../../../public/firebase.png'
import githubImg from '../../../public/github.png'
import nodeImg from '../../../public/nodejs.png'
import tailwindImg from '../../../public/tailwind-rbg.png'
import vercelImg from '../../../public/vercel-rbg.png'
import vscImg from '../../../public/Vscode.png'
import figmaImg from '../../../public/figma.png'
import styled from 'styled-components'


const Imgs = styled.img`
height: 50px;
margin: 5px;
`
const ImgVercel = styled.img`
height: 40px;
margin: 5px;
border: 1px solid black;
border-radius: 50%;
padding: 5px;
`

export default function Skils(){
    return(
    <div>
        <h1>Skils</h1>
        <div>
        <Imgs src={reactImg} alt='reactImg'/>
        <Imgs src={viteImg} alt='viteImg'/>
        <Imgs src={jsImg} alt='jsImg'/>
        <Imgs src={cssImg} alt='cssImg'/>
        <Imgs src={htmlImg} alt='htmlImg'/>
        <Imgs src={sassImg} alt='sassImg'/>
        <Imgs src={apiImg} alt='apiImg'/>
        <Imgs src={auth0Img} alt='auth0Img'/>
        <Imgs src={bootstrapImg} alt='bootstrapImg'/>
        <Imgs src={firebaseImg} alt='firebaseImg'/>
        <Imgs src={githubImg} alt='githubImg'/>
        <Imgs src={nodeImg} alt='nodeImg'/>
        <Imgs src={tailwindImg} alt='tailwindImg'/>
        <ImgVercel src={vercelImg} alt='vercelImg'/>
        <Imgs src={vscImg} alt='vscImg'/>
        <Imgs src={figmaImg} alt='figmaImg'/>
        </div>
        </div>
    )
}

