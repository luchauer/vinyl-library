var Discogs = require('disconnect').Client;

module.exports = function(app) {
    app.get("/api/collection", function(req, res){
        res.json({people:["erik", "matthew"]})
    });

    app.get("/api/search", function(req, res){
        var discogs = new Discogs();
        var query = "";
        var param = {
            artist: req.query.artist,
            format: "album",
            country: "US",
            page: req.query.page || 1
        };
        var db = discogs.database();

        db.search(query, param, function(error, data){
            if (error) {
                throw error;
            }
            else {
                res.json(data.results);    
            }
        });
    });
}