const gulp = require('gulp');
const del = require("del")
const { config } = require("../config")
const fs = require("fs")

function clean() {
  return del([config.dest.root])
}

function rename(done) {
  fs.rename(config.static, config.dest.root, function (err) {
    if (err) {
      throw err
    }
    done()
  })
}

const updateDocs = gulp.series(clean, rename)

module.exports = { updateDocs }
