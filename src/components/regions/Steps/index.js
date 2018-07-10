import React from 'react'
import StepsItem from './StepsItem'

class Steps extends React.Component {
  render() {
    const fakeData = [ 
      {
        name: 'Products list',
        active: true
      },
      {
        name: 'Contact details',
        active: false
      },
      {
        name: 'Confirmation',
        active: false
      }
    ]

    return (
      <div className="steps">
        {fakeData.map((item, index) => (
          <StepsItem
            key={index}
            number={index}
            title={item.name}
            active={item.active}
          />
        ))}
      </div>
    )
  }
}

export default Steps