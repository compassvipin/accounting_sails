/**
* Settings.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/



module.exports = {
  adapter: 'memory',
  
  attributes: {
    company_name: {
      type: 'string',
      required: true
    },
    
    company_logo: {
      type: 'string',
      required: true
    },
    
    company_adress: {
      type: 'string',
      required: true
    }
    
    // Lifecycle Callbacks
  }
};



//item_id