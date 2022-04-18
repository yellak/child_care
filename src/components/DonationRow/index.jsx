import { Container } from "./styles"
import { Link} from "react-router-dom";
import { useDonationContext } from '../../context/useDonationContext';

const DonationRow = ({data, ...props}) => {

    const { institutions,formatValue, getProg } = useDonationContext();

    const institution = institutions[data.inst-1]
    const child = institutions[data.inst-1].children[data.child-1]

    return(
        <Container>
            <td>
                <img src={institution.image} alt="" />
            </td>
            <td>
                <tr>{institution.name}</tr>
                <tr align="left">{child.name}</tr>
            </td>
            <td>
                <p> {formatValue(data.value)} </p>
            </td>
            <td>
                <p> {data.frequency === 'once'? 'Única' : 'Mensal'} </p>
            </td>
            <td></td>
            <td>
                <tr align="right">
                    <Link to={`/institutions/${institution.id}`}>
                        <button class="btn-green">
                            Detalhes
                        </button>
                    </Link>
                </tr>
                <tr align="right">
                    <Link to={`/donate/${institution.id}/${child.id}`}>
                        <button class="btn-mustard">
                            Fazer Outra Doação
                        </button>
                    </Link>
                </tr>
            </td>
        </Container>
    )
}

export default DonationRow