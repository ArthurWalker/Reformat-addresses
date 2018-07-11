const noteRoutes = require('./api/note_routes');

module.exports = function(app,db){
    noteRoutes(app,db);
}