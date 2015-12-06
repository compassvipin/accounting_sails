/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
//TRUNCATE `user`;

module.exports = {
        create: function (req, res) {
        User.findOne({where: {email: req.param('email')}}).then(function (checkUserExist) {
            if (checkUserExist) {
                return res.ok({
                    value: 'Email Already Exist'
                });
            } else {
                User.create(req.body).then(function (dbreq, dbres) {
                    if (!dbres) {
                        return res.ok({
                            userDetails: dbreq
                        });
                    }

                });
            }

        });

    },
    
    login:function (req ,res) {
        console.log('here');
    }
    
    


};

