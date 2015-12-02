/**
 * User
 *
 * @module      :: Model
 * @description :: A representation of a user in the DB.
 *
 */

module.exports = {
  adapter: 'memory',
  
  attributes: {
      
    email: {
      type: 'email', // Email type will get validated by the ORM
      required: true
    },
    firstname: {
      type: 'string',
      required: true
    },

     lastname: {
      type: 'string',
      required: true
    },

    password: {
      type: 'string',
      minLength: 6,
      required: true,
    }
    
  }
};
