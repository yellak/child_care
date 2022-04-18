import { Container } from "./styles"
import { Link} from "react-router-dom";
import { useDonationContext } from '../../context/useDonationContext';


const InstitutionRow = ({data, ...props}) => {

    const { formatValue, getProg } = useDonationContext();

    const progress = getProg(data.monthly, data.necessities)

    return(
        <Container prog={progress[0]} notProg={progress[1]} color={progress[2]} >
            <td>
                <img src={data.image} alt="" />
            </td>
            <td>{data.name}</td>
            <td>
                <p> {formatValue(data.monthly)} / {formatValue(data.necessities)} </p>
                <div className='progress-bar'>
                    <div className='progress'></div>
                    <div className='not-progress'></div>
                </div>
            </td>
            <td>
                <Link to={'/institutions/' + data.id}>
                    <button>
                        Detalhes
                    </button>
                </Link>
            </td>
        </Container>
    )
}

export default InstitutionRow