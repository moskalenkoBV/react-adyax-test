import React from 'react'
import { connect } from 'react-redux'
import BasketItem from './BasketItem'

const Basket = ({ items }) => (
	<div className="basket">
		{
			(items.length > 0 && items.filter(item => item.checked).length > 0) && 
			<div className="basket__wrapper">
				<h2>Basket</h2>
				<div className="basket__list">
					{
						items.filter(item => item.checked).map((item, index) => (
							<BasketItem 
								key={index}
								itemId={item.id}
								title={item.title}
								amount={item.quantity ? item.quantity : item.min}
								price={item.price}
								option={item.option ? item.option : false}
							/>
						))
					}
				</div>
			</div>
		}
	</div>
)

export default connect(
	(state) => ({
		items: state.products.items
	})
)(Basket)