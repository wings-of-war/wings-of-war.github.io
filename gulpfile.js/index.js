'use strict';
const gulp = require('gulp');
const { updateDocs } = require('./tasks/updateDocs');

exports['build'] = gulp.series(updateDocs);
