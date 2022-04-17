import { Container } from './styles'
import image from '../../assets/foto.png'
import {BsFillPeopleFill} from 'react-icons/bs'
import BackButton from '../../components/BackButton'
import { Link } from "react-router-dom";

const institution = 1

const InstitutionPage = () => {
    return (
        <>
            <BackButton></BackButton>
            <Container>
                <section className='info'>
                    <img src={image} alt="" />
                    <div className='info-box'>
                        <p> <span>R$ 3.500,00</span> de ganhos mensais </p>
                        <div className='progress-bar'>
                            <div className='progress'></div>
                            <div className='not-progress'></div>
                        </div>
                        <p>Necessidade mensal total: R$ 4.000,00 </p>
                        <p> <BsFillPeopleFill size={20}/> 100 apoiadores mensais</p>
                        <div className="buttons">
                            <button className='share'> Compartilhar </button>
                            <Link to={`/institutions/${institution}/galery`}>
                                <button className='gallery'> Galeria das Crianças </button>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="description">
                    <h1>Instituição Criança Top</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper vulputate habitasse nunc, sed. Cras fringilla amet ac dictum malesuada nunc mi. Erat luctus ac elit aliquet nunc pellentesque orci montes, dictum. Vitae, lorem euismod lobortis arcu senectus accumsan id ac.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper vulputate habitasse nunc, sed. Cras fringilla amet ac dictum malesuada nunc mi. Erat luctus ac elit aliquet nunc pellentesque orci montes, dictum. Vitae, lorem euismod lobortis arcu senectus accumsan id ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper vulputate habitasse nunc, sed. Cras fringilla amet ac dictum malesuada nunc mi.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper vulputate habitasse nunc, sed. Cras fringilla amet ac dictum malesuada nunc mi. Erat luctus ac elit aliquet nunc pellentesque orci montes, dictum. Vitae, lorem euismod lobortis arcu senectus accumsan id ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper vulputate habitasse nunc, sed. Cras fringilla amet ac dictum malesuada nunc mi. Erat luctus ac elit aliquet nunc pellentesque orci montes, dictum. Vitae, lorem euismod lobortis arcu senectus accumsan id ac.
                    </p>
                </section>
            </Container>
        </>
    )
}

export default InstitutionPage