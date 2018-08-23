'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getFacts;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFacts() {
    return fetch('https://services.sportourism.id/api/cat/all').then(function (res) {
        return res.json();
    });
}