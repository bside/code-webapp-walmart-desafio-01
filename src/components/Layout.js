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

const SearchContext = React.createContext({holi:true});

class Layout extends React.Component {
  db = [
    {
      "id": 1,
      "brand": "ooy eqrceli",
      "description": "rlñlw brhrka",
      "image": "www.lider.cl/catalogo/images/whiteLineIcon.svg",
      "price": 498724
    },
    {
      "id": 2,
      "brand": "dsaasd",
      "description": "zlrwax bñyrh",
      "image": "www.lider.cl/catalogo/images/babyIcon.svg",
      "price": 130173
    },
    {
      "id": 171,
      "brand": "weñxoab",
      "description": "hqhoy qacirk",
      "image": "www.lider.cl/catalogo/images/homeIcon.svg",
      "price": 171740
    }
  ];

  state = {
    searched: false,
    searchResults: [],
  };

  getSearchResults = (term) => {
    // @todo: get from backend api
    return this.db.filter(result => {
      return result.description.includes(term);
    });
  }

  handleSearch = () => {
    // @todo: implement debounce
    const searchValue = this.searchInput.inputRef.current.value;
    this.setState({
      searched: true,
      searchResults: this.getSearchResults(searchValue),
    });
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
                onKeyDown={this.handleSearch}
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
