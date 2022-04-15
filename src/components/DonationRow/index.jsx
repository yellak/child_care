import { Container } from "./styles"
import { Link} from "react-router-dom";


const DonationRow = ({image, ...props}) => {

    return(
        <Container>
            <td>
                <img src={image} alt="" />
            </td>
            <td>
                <tr>Instituição Criança Top</tr>
                <tr align="left">Nome da Criança</tr>
            </td>
            <td>
                <p> R$ 500,00 </p>
            </td>
            <td></td>
            <td></td>
            <td>
                <tr align="right">
                    <Link to='/institutions/2'>
                        <button class="btn-green">
                            Detalhes
                        </button>
                    </Link>
                </tr>
                <tr align="right">
                    <Link to='/donate'>
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