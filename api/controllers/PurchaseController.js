/**
 * PurchaseController
 *
 * @description :: Server-side logic for managing purchases
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function (req, res) {

        var purchaseData = {
            purchase_id: makeid(),
            quantity: req.param("quantity"),
            unit_price: req.param("unit_price"), 
            item_id : 3
        }
        Purchase.create(purchaseData).then(function (dbreq, dbres) {
            if (!dbres) {
                return res.ok({
                    purchaseDetails: dbreq
                });
            }

        });
        function makeid() {
            var text = "PID";
            var possible = "0123456789012345678901234567890123456789";

            for (var i = 0; i < 6; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }

    }



};

