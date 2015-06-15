module.exports = function(app) {
  var express = require('express');
  var commentsRouter = express.Router();

  commentsRouter.get('/', function(req, res) {
    res.send({
      'comments': [
        {
          id: 1,
          text: "poop",
          post: 1
        }
      ]
    });
  });

  commentsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  commentsRouter.get('/:id', function(req, res) {
    res.send({
      'comments': {
        id: req.params.id
      }
    });
  });

  commentsRouter.put('/:id', function(req, res) {
    res.send({
      'comments': {
        id: req.params.id
      }
    });
  });

  commentsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/comments', commentsRouter);
};
