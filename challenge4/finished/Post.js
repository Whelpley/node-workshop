// Require mongoose
var mongoose = require('mongoose');

// Configure conenction URL (only needs to happen once per app)
mongoose.connect('mongodb://whelpley:doggod@ds025742.mlab.com:25742/node_intro_sandbox');

// Create a database schema for our Post object
var postSchema = mongoose.Schema({
    title:String,
    content:String
});

// Create a model object constructor that will have ODM functionality like .save()...
var Post = mongoose.model('Post', postSchema);

// Expose out model as the module interface
module.exports = Post;