var express = require('express');
var router = express.Router();


router.get('/partials/:partialPath', function( req, res ) {
    res.render('partials/' + req.params.partialPath);
});

//TODO: Need to define the API Routes
/* Get the Home Page */
router.get('/', function( req, res, next ) {
    res.render('index');
});

/* ===========================================================
 Routes for our API
 =========================================================== */


module.exports = router;
