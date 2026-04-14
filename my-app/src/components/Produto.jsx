import { useParams } from 'react-router-dom';

function Produto() {
  const { produtoID } = useParams();

  if (!produtoID || produtoID === "produtos") {
    return (
      <div>
        <h1>Produto não encontrado</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Produto</h1>
      <p>Informações do produto: {produtoID}</p>
    </div>
  );
}

export default Produto;
