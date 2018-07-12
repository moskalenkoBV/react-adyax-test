import React from 'react'

const BasketItem = ({ id, title, amount, price, option }) => (
	<div className="basket-item">
		<h3>{ title }</h3>
		<table>
			<tbody>
				<tr>
					<td>Amount:</td>
					<td>{ amount }</td>
				</tr>
				<tr>
					<td>price:</td>
					<td>{ option ? amount * price * option : amount * price } $</td>
				</tr>
				{ option && 
					<tr>
						<td>Selected option:</td>
						<td>{ option }</td>
					</tr>
				}
			</tbody>
		</table>
	</div>
)

export default BasketItem