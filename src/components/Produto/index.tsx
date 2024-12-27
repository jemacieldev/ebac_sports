import type { Produto as ProdutoType } from '../../App';

type ProdutoProps = {
  produto: ProdutoType;
  estaNosFavoritos: boolean;
  favoritar: (produto: ProdutoType) => void;
  aoComprar: (produto: ProdutoType) => void;
};

const Produto = ({ produto, estaNosFavoritos, favoritar, aoComprar }: ProdutoProps) => {
  return (
    <div>
      <h3>{produto.nome}</h3>
      <button onClick={() => favoritar(produto)}>
        {estaNosFavoritos ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
      </button>
      <button onClick={() => aoComprar(produto)}>Comprar</button>
    </div>
  );
};

export default Produto;
