import { Container } from './styles'
import DonationRow from '../../components/DonationRow'
import { useDonationContext } from '../../context/useDonationContext';

const DonationsPage = () => {
  const { donations } = useDonationContext();
  console.log(donations)
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th colSpan={6}><p className="title">Minhas Doações</p></th>
          </tr>
          <tr>
            <th></th>
            <th>Instituição</th>
            <th>Valor</th>
            <th>Frequência</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {donations.map((data, key) => {return(
            <DonationRow key={key} data={data} />
          )})}
        </tbody>
      </table>
    </Container>
  )
}

export default DonationsPage