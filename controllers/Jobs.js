'use strict';

var utils = require('../utils/writer.js');
var Jobs = require('../service/JobsService');

module.exports.editJob = function editJob (req, res, next, body, id) {
  Jobs.editJob(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editJob = function editJob (req, res, next, body, id) {
  Jobs.editJob(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editJob = function editJob (req, res, next, body, id) {
  Jobs.editJob(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pubJobs = function pubJobs (req, res, next, body) {
  Jobs.pubJobs(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pubJobs = function pubJobs (req, res, next, body) {
  Jobs.pubJobs(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
