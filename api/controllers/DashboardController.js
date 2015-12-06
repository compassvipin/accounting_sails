/**
 * DashboardController
 *
 * @description :: Server-side logic for managing dashboards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var dateFormat = require('dateformat');
module.exports = {
    
    getDashBoard : function (req, res) {
        
         var now = new Date();
         var time = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
        dbreq = {time: time};
        return res.ok({
            userDetails: dbreq
        });
    }
	
};

