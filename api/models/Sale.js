/**
* Sale.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
        sales_id: {
            type: 'string',
            unique: true,
            required: true
        },
        quantity: {
            type: 'string',
            required: true
        },
        unit_price: {
            type: 'string',
            required: true
        },
        item_id:{
            model:'Item'
        }

  }
};

