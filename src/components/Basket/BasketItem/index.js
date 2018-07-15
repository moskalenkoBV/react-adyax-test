import React from 'react'

const BasketItem = ({  }) => (
  <article className="basket-item">
    <h3>Title</h3>
    <table>
      <tbody>
        <tr>
          <td>Selected bonus:</td>
          <td>Cheese + Bacon</td>
        </tr>
        <tr>
          <td>Amount:</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Price:</td>
          <td className="basket-item__price">$250</td>
        </tr>
      </tbody>
    </table>
  </article>
)