import React from 'react'
import Product from '../../components/Product'

class ProductList extends React.Component {
  state = {
    items: [
      {
        id: 0,
        name: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, quis dictum mauris erat aliquam, ac in pede pharetra quis non et.',
        min: 1,
        max: 9,
        price: 75,
        currentQuantity: 2
      },
      {
        id: 1,
        name: 'Product 2',
        description: 'Lorem ipsum dolor sit amet, quis dictum mauris erat aliquam, ac in pede pharetra quis non et.',
        min: 1,
        max: 7,
        price: 20,
        currentQuantity: 2
      },
      {
        id: 2,
        name: 'Product 3',
        description: 'Lorem ipsum dolor sit amet, quis dictum mauris erat aliquam, ac in pede pharetra quis non et.',
        min: 1,
        max: 4,
        price: 15,
        currentQuantity: 2
      }
    ]
  }

  incQuantity = key => {
    const items = [...this.state.items];
    items[key] = { ...items[key], currentQuantity: items[key].currentQuantity + 1 };
    this.setState({ items });
  }

  decQuantity = key => {
    const items = [...this.state.items];
    items[key] = { ...items[key], currentQuantity: items[key].currentQuantity - 1 };
    this.setState({ items });
  }

  render() {
    const { items } = this.state
    return (
      <section className="product-list">
        <h2>Product list</h2>
        <div className="product-list__items">
          {
            items.map((item, index) => (
              <Product
                key={index}
                itemId={item.id}
                itemKey={index}
                name={item.name}
                description={item.description}
                min={item.min}
                max={item.max}
                price={item.price}
                currentQuantity={item.currentQuantity}
                incQuantity={this.incQuantity}
                decQuantity={this.decQuantity}
              />
            ))
          }
        </div>
      </section>
    )
  }
}

export default ProductList