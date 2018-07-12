import React from 'react'
import ProductList from '../../sections/ProductList'
import Basket from '../../components/Basket'

class Content extends React.Component {
  render() {
    const fakeCurrentStep = 1

    return (
      <div className="content">
        {
          (() => {
            switch (fakeCurrentStep) {
              case 1 :
                return <div className="content__wrapper"><ProductList /><Basket /></div>
                break
              case 2 :
                return <div>2</div>
                break
              case 3 : 
                return <div>3</div>
                break
              default : 
                return <div>default</div>
                break
            }
          })()
        }
      </div>
    )
  }
}

export default Content