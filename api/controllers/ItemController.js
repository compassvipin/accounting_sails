/**
 * ItemController
 *
 * @description :: Server-side logic for managing items
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create :function(req,res) {
            var itemData =  {
                item_id : makeid(),
                name : req.param("name"),
                item_model : req.param("item_model"),
            }
                Item.create(itemData).then(function (dbreq, dbres) {
                    if (!dbres) {
                        return res.ok({
                            itemDetails: dbreq
                        });
                    }

                });
                
            function makeid() {
                var text = "ITEM";
                var possible = "0123456789012345678901234567890123456789";

                for (var i = 0; i < 6; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));

                return text;
            }
        }
        
        
};

