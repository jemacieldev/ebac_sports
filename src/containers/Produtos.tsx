import { Produto as ProdutoType } from '../App'; // Certifique-se de que o tipo Produto está correto
import Produto from '../components/Produto';  // O caminho do Produto
import * as S from './styles';

type Props = {
  produtos: ProdutoType[];  // Espera um array de produtos
  favoritos: ProdutoType[];
  adicionarAoCarrinho: (produto: ProdutoType) => void;
  favoritar: (produto: ProdutoType) => void;
};

const ProdutosComponent = ({
  produtos = [],
  favoritos = [],
  adicionarAoCarrinho,
  favoritar,
}: Props) => {
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id;
    const IdsDosFavoritos = favoritos.map((f) => f.id);
    return IdsDosFavoritos.includes(produtoId); // Retorna se o produto está nos favoritos
  };

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}  // Passa cada produto individualmente
          estaNosFavoritos={produtoEstaNosFavoritos(produto)} // Passa esta informação
          favoritar={favoritar}
          aoComprar={adicionarAoCarrinho}
        />
      ))}
    </S.Produtos>
  );
};

export default ProdutosComponent;
