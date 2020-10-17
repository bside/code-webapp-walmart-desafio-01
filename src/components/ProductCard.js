import React from 'react';
import {
  Button,
  Card,
  Image,
  Label,
} from 'semantic-ui-react';
import NumberFormat from 'react-number-format';

class ProductCard extends React.PureComponent {
  render() {
    return (
      <Card>
        <Image src={`https://${this.props.data.image}`} fluid wrapped ui={false} style={{ margin: '0.8em' }} />
        <Card.Content>
          <Card.Header>{this.props.data.description}</Card.Header>
          <Card.Meta>
            <span>Marca: {this.props.data.brand}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <Label as='a' size='big'>
            <NumberFormat
              value={this.props.data.price}
              prefix={'$'}
              thousandSeparator='.'
              decimalSeparator=','
              displayType={'text'}
            />
          </Label>
          <Label as='a' color='red' tag>50%</Label>
        </Card.Content>
        <Card.Content>
          <Button primary animated='fade' size='big' style={{ width: '100%' }}>
            <Button.Content visible>Agregar</Button.Content>
            <Button.Content hidden>No implementado 😬</Button.Content>
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

export default ProductCard;
