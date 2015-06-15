if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}

var posts = [
  {
    id: 1,
    title: 'Boats',
    author: 1,
    date: new Date(2105,5,4,6,0,0),
    body: 'Gotta have them'
  },
  {
    id: 2,
    title: 'Hoes',
    author: 2,
    date: new Date(2104,11,4,6,0,0),
    body: 'Gotta *have* them too'
  }
];

module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    res.send({
      'posts': posts,

      "authors": [{
        id: 1,
        name: "Dale Doback",
        posts: [1]
      },
      {
        id: 2,
        name: "Brennan Huff",
        posts: [2]
      }]
    });
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      'posts': {
        "post":posts.find(function(post) {
          return post.id == req.params.id
        }),
        "authors": authors
      }
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);
};
