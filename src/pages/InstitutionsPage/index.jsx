import { Container } from './styles'
import InstitutionRow from '../../components/InstitutionRow'
import { useDonationContext } from '../../context/useDonationContext';

const InstitutionsPage = () => {
  const { institutions } = useDonationContext();

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
          {institutions.map((data, key) => {return(
            <InstitutionRow key={key} data={data} />
          )})}
        </tbody>
      </table>
    </Container>
  )
}

export default InstitutionsPage