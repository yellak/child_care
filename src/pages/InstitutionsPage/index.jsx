import { Container } from './styles'
import InstitutionRow from '../../components/InstitutionRow'
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
          <InstitutionRow image={image}/>
          <InstitutionRow image={image}/>
          <InstitutionRow image={image}/>
          <InstitutionRow image={image}/>
          <InstitutionRow image={image}/>
        </tbody>
      </table>
    </Container>
  )
}

export default InstitutionsPage