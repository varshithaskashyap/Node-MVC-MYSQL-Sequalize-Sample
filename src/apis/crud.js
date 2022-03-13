const db = require(`../models/index.js`);

module.exports = {
    /**
     * Index function for root URL
     * @param {*} request
     * @param {*} response
     */
    index: function(req, res) {
        res.render("index");
    },
    /**
     * Create Record function 
     * @param {*} request
     * @param {*} response
     */
    create: function(req, res) {
        db.crud.create(req.body).then(results => res.send({
            success : true,
            operation : "CREATE",
            id : results.insertId,
        })).catch(err => res.send({
            success : false,
            operation : "CREATE",
            error : err
        }));
    },


    /**
     * Read Operation for request
     * @param {*} request
     * @param {*} response
     */
    read: function(req, res) {
        db.crud.findOne({
            where: {
              id: req.query.id
            }
        }).then(results => res.send(results))
        .catch(err => res.send({
            success : false,
            operation : "READ",
            error : err
        }));
    },


    /**
     * Update request
     * @param {*} request
     * @param {*} response
     */
    update: function(req, res) {

        db.crud.update(req.body.text, {
            where: {
              id: req.query.id
            }
        }).then(results => res.send({
            success : true,
            operation : "UPDATE",
        })).catch(err => res.send({
            success : false,
            operation : "UPDATE",
            error : err
        }));
    },
    /**
     * Delete request
     * @param {*} request
     * @param {*} response
     */
    delete: function(req, res) {

        db.crud.destroy({
            where: {
              id: req.query.id
            }
        }).then( results => res.send({
            success : true,
            operation : "DELETE",
        })).catch(err => res.send({
            success : false,
            operation : "DELETE",
            error : err
        }));

    },

}