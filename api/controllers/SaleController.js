/**
 * SaleController
 *
 * @description :: Server-side logic for managing sales
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function (req, res) {
        var saleData = {
            sales_id: makeid(),
            quantity: req.param("quantity"),
            unit_price: req.param("unit_price"),
            item_id:1
        }
        Sale.create(saleData).then(function (dbreq, dbres) {
            if (!dbres) {
                return res.ok({
                    saleDetails: dbreq
                });
            }

        });
        function makeid() {
            var text = "SID";
            var possible = "0123456789012345678901234567890123456789";

            for (var i = 0; i < 6; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }

    }
};

