import React from 'react'
import ProductList from '../../sections/ProductList'

class Content extends React.Component {
  render() {
    const fakeCurrentStep = 1

    return (
      <div className="content">
        {
          (() => {
            switch (fakeCurrentStep) {
              case 1 :
                return <ProductList />
              case 2 :
                return <div>2</div>
              case 3 : 
                return <div>3</div>
              default : 
                return <div>default</div>
            }
          })()
        }
      </div>
    )
  }
}

export default Content