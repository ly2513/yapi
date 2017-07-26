'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _config = require('../config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configPath = _path2.default.join(_path2.default.resolve(__dirname, '../../'), 'runtime', 'config.json');

_fsExtra2.default.writeFileSync(configPath, (0, _stringify2.default)(_config2.default, null, "\t"), { encoding: 'utf8' });