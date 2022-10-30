import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    fetch(`http://localhost:3000/api/transactions`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>

          <tr>
            <td>Pizza</td>
            <td className="withdraw">- R$ 89,00</td>
            <td>Alimentação</td>
            <td>13/04/2021</td>
          </tr>

          <tr>
            <td>Aluguel do Apartamento</td>
            <td className="withdraw">- R$ 3.500</td>
            <td>Casa</td>
            <td>05/05/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
