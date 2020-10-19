import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Header,
  Icon,
} from 'semantic-ui-react';
import Layout from './Layout';
import ProductCard from './ProductCard';
import { Consumer } from '../context/Search';

const { Row, Column } = Grid;

class ProductList extends React.PureComponent {
  renderProducts(context) {
    if (!context.searchTerm) {
      return (
        <div>
          <p>Ingresa un término de búsqueda en la barra superior.</p>
        </div>
      );
    }
    if (context.searched && !context.searchResults.length) {
      return (
        <div>
          <p>No hay resultados para tu búsqueda. Intenta redefinir tu búsqueda.</p>
        </div>
      );
    }
    return (
      <Grid stackable columns={4}>
        <Row>
          {context.searchResults.map((product, index) => {
            return (
              <Column key={index}>
                <ProductCard data={product} />
              </Column>
            )
          })}
        </Row>
      </Grid>
    );
  }

  render() {
    return (
      <Layout>
        <Header
          as='h1'
          style={{
            fontWeight: 'normal',
            marginBottom: '.5em',
          }}
        >
          Utiliza la barra de búsqueda
          <Icon name='arrow alternate circle up outline' size='small' />
          para obtener productos
        </Header>
        <Consumer>
          {context => (
            this.renderProducts(context)
          )}
        </Consumer>
      </Layout>
    );
  }
}

export default ProductList;
