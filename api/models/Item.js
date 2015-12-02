/**
 * Item.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        item_id: {
            type: 'string',
            unique: true,
            required: true
        },
        name: {
            type: 'string',
            required: true
        },
        item_model: {
            type: 'string',
            required: true
        },
        Purchase:{
            collection: 'Purchase',
            via: 'item_id'
        },
        Sale:{
            collection: 'Sale',
            via: 'item_id'  
        }

    }
};



// Collator Software Labs