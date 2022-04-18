import { Container } from './styles'
import image from '../../assets/foto.png'
import {BsFillPeopleFill} from 'react-icons/bs'
import BackButton from '../../components/BackButton'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import { useDonationContext } from '../../context/useDonationContext';

const InstitutionPage = () => {
    let {id} = useParams();

    const { institutions, formatValue, getProg } = useDonationContext();

    
    const institution = institutions[id-1];
    const prog = getProg(institution.monthly, institution.necessities)

    return (
        <>
            <BackButton></BackButton>
            <Container prog={prog[0]} notProg={prog[1]} color={prog[2]}>
                <section className='info'>
                    <img src={institution.image} alt="" />
                    <div className='info-box'>
                        <p> <span>{formatValue(institution.monthly)}</span> de ganhos mensais </p>
                        <div className='progress-bar'>
                            <div className='progress'></div>
                            <div className='not-progress'></div>
                        </div>
                        <p>Necessidade mensal total: {formatValue(institution.necessities)} </p>
                        <p> <BsFillPeopleFill size={20}/> {institution.supporters} apoiadores mensais</p>
                        <div className="buttons">
                            <button className='share'> Compartilhar </button>
                            <Link to={`/institutions/${institution.id}/galery`}>
                                <button className='gallery'> Galeria das Crianças </button>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="description">
                    <h1>{institution.name}</h1>
                    <p>
                        {institution.desc}
                    </p>
                </section>
            </Container>
        </>
    )
}

export default InstitutionPage