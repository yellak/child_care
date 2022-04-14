import { Container } from "./styles"
import { Link} from "react-router-dom";


const InstitutionRow = ({image, ...props}) => {

    return(
        <Container>
            <td>
                <img src={image} alt="" />
            </td>
            <td>Instituição Criança Top</td>
            <td>
                <p> R$ 3.500,00/ R$ 4.0000,00 </p>
                <div className='progress-bar'>
                    <div className='progress'></div>
                    <div className='not-progress'></div>
                </div>
            </td>
            <td>
                <Link to='/institutions/2'>
                    <button>
                        Detalhes
                    </button>
                </Link>
            </td>
        </Container>
    )
}

export default InstitutionRow