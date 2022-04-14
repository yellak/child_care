import { Container } from './styles'
import image from '../../assets/foto.png'

const InstitutionsPage = () => {
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Instituição</th>
            <th>Arrecadação</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
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
              <button>
                Detalhes
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

export default InstitutionsPage