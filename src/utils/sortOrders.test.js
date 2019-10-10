import React from 'react'
import {sortByItemCount, sortByDate, sortOrders, sortByItemNames} from './sortOrders';

const ordersAreNull = (funcName) => {
	const result = funcName(null, null);
	expect(result).toEqual(0);
};

const ordersNotObjects = (funcName) => {
	const order1 = undefined;
	const order2 = undefined;

	const result = funcName(order1, order2);

	expect(result).toBe(0);
}

describe('sortByItemCount function', () => {
	it('orders are null', () => {
		ordersAreNull(sortByItemCount);
	});

	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('orders not objects', () => {
		ordersNotObjects(sortByItemCount);
	});

	it('items null', () => {
		const order1 = {
			items: null
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});
});

describe('sortByDate function', () => {
	it('orders are null', () => {ordersAreNull(sortByDate)} );

	it('orders not objects', () => {
		ordersNotObjects(sortByDate);
	});

	it('items null', () => {
		const order1 = {
			date: null
		};
		const order2 = {
			date: ['1', '2'],
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});

	it('fisrt date is bigger than second', () => {
		const order1 = {
			date: 1552481120000
		};
		const order2 = {
			date: 1544356800000,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(-1);
	});

	it('fisrt date is bigger than second', () => {
		const order1 = {
			date: 1552481120000
		};
		const order2 = {
			date: 1552481120000,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});
});

describe('sortOrders function', () => {
	it('orders and sortTypes are null', () => {
		const result = sortOrders();
	
		expect(result).toBe(undefined);
	});

	// it('case "names" in sortTypes', () => {
	// 	const orders = {};
	// 	const sortTypes = {
	// 		ITEM_NAMES: 'names',
	// 		DATE: null,
	// 		COUNT: null,
	// 	};
	// 	const result = sortOrders(orders, sortTypes.ITEM_NAMES);

	// 	expect(result).toBe(undefined);
	// });
});


describe('sortByItemNames function', () => {
	it('orders are null', () => {ordersAreNull(sortByItemNames)} );

	it('orders not objects', () => {
		ordersNotObjects(sortByItemNames);
	});

	it('items null', () => {
		const order1 = {
			items: null
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(0);
	});

	it('first item name later then second item name', () => {
		const order1 = {
		 items: ['aa', 'bb'],
		};
		const order2 = {
		 items: ['cc', 'dd'],
		};
		const result = sortByItemNames(order1, order2);
		expect(result).toBe(-1);
	   });
	  
	   it('first item name later then second item name', () => {
		const order1 = {
		 items: ['cc', 'dd'],
		};
		const order2 = {
		 items: ['aa', 'bb'],
		};
		const result = sortByItemNames(order1, order2);
		expect(result).toBe(1);
	   });

});



