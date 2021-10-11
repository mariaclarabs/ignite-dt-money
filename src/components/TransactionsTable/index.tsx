import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 1000,00</td>
            <td>Desenvolvimento</td>
            <td>13/05/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 500,00</td>
            <td>Escritório</td>
            <td>15/05/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
