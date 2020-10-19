import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Input,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react';
import { Provider } from '../context/Search';
import axios from 'axios';

class Layout extends React.Component {
  state = {
    searched: false,
    searchResults: [],
    searchTerm: null,
  };
  searchTimeout = null;
  createCancelToken = () => axios.CancelToken.source();
  cancelToken = this.createCancelToken();
  apiEndpoint = process.env.API_SEARCH_ENDPOINT || 'http://localhost:3001/products';


  getSearchResults = (term) => {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
      this.cancelToken.cancel();
    }
    if (!term) {
      this.setState({
        searched: false,
        searchTerm: null
      });
      return false;
    }

    const filter = {
      limit: 50,
      where: {
        custom: term,
      },
    };
    const searchEndpoint = `${this.apiEndpoint}?filter=${JSON.stringify(filter)}`;

    let results = [];
    this.cancelToken = this.createCancelToken();
    results = axios.get(searchEndpoint, {
      cancelToken: this.cancelToken.token
    }).then(products => {
      this.setState({
        searched: true,
        searchResults: products.data
      });
    });
    return results;
  }

  handleSearch = () => {
    const searchTerm = this.searchInput.inputRef.current.value;
    this.searchTimeout = setTimeout(() => {
      this.setState({
        searched: true,
        searchTerm,
      });
      this.getSearchResults(searchTerm);
    }, 600)
  }

  render() {
    return (
      <Container>
        <Menu inverted stackable>
          <Container>
            <Menu.Item header>
              <Link to='/'>
                <Image size='small' src='https://www.lider.cl/images/logo.svg' style={{ margin: '0 1.5em' }} />
              </Link>
            </Menu.Item>
            <Menu.Item style={{width: '50%'}}>
              <Input
                icon={<Icon name='search' inverted circular link onClick={this.handleSearch} />}
                placeholder='¿QUÉ PRODUCTO BUSCAS HOY?'
                ref={ref => this.searchInput = ref}
                onKeyUp={this.handleSearch}
                />
            </Menu.Item>
          </Container>
        </Menu>

        <Provider value={this.state}>
          {this.props.children}
        </Provider>


        <Segment inverted vertical style={{ margin: '5em 0', padding: '3em 0' }}>
          <Container textAlign='center'>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={5}>
                  <Header as='h4' inverted>
                    <p>Álvaro González</p>
                    <p>Desafio Walmart #01</p>
                  </Header>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Frontend' />
                  <List link inverted>
                    <List.Item as='a'>Javascript</List.Item>
                    <List.Item as='a'>React</List.Item>
                    <List.Item as='a'>Semantic UI</List.Item>
                    <List.Item as='a'>Webpack</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Backend' />
                  <List link inverted>
                    <List.Item as='a'>Javascript</List.Item>
                    <List.Item as='a'>Loopback</List.Item>
                    <List.Item as='a'>Typescript</List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </Container>
    );
  }
}

export default Layout;
