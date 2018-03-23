var cartGuarantee = new Vue({
    el: '#cartGuarantee',
    data: {
        cartTotal: 0,
        cartEmpty: true,
        cartDisplayed: false,
    },
    methods: {
    	// add to cart on click event
    	add_to_cart () {
    		this.cartDisplayed = true;
    		this.cartTotal++;
    	},
    	// close cart on click event
    	cartClose () {
    		this.cartDisplayed = false;
    	}
    }
})

// import $ from 'jquery';

// /* name: addToCart */
// /* desc: Do something after 'Add to Cart' is clicked */

// /* class */
// var addToCart =
// {
// 	 properties

// 	/* methods */
// 	init: function()
// 	{
// 		console.log('workin...');
// 	}
// };

// $(document).ready( function(){ addToCart.init(); });