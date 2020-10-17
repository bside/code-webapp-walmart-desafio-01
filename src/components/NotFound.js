import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Header,
  Icon,
} from 'semantic-ui-react';
import Layout from './Layout';

class NotFound extends React.PureComponent {
  render() {
    return (
      <Layout>
        <Container text>
          <Header
            as='h1'
            style={{
              fontSize: '4em',
              fontWeight: 'normal',
              marginBottom: 0,
              marginTop: '3em',
            }}
          >
            <Icon name='minus circle' size='big' />
            Oops...
          </Header>
          <Header
            as='h2'
            content='Algo no ha salido bien, intenta nuevamente'
            style={{
              fontSize: '1.7em',
              fontWeight: 'normal',
              marginTop: '1.5em',
            }}
          />
          <Link to='/'>
            <Button primary size='huge'>
              Volver al inicio
              <Icon name='right arrow' />
            </Button>
          </Link>
        </Container>
      </Layout>
    );
  }
}

export default NotFound;
