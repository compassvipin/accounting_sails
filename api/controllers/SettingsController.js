/**
 * SettingsController
 *
 * @description :: Server-side logic for managing settings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

		create:function (req, res) {
			console.log('asdsad');
		},
	
		index: function (req, res) {
			var  company = {};	
			var userid  = 1
			Settings.findOne({where: {id:parseInt(userid)} }).then(function(response) {	
				return res.ok({
						companyDetails:response
				});
			});		
    	}	
};

