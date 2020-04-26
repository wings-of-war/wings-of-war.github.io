const SRC = "src"
const DEST = "docs"
const STATIC = "public"

const config = {
  static: `${STATIC}`,
  src: {
    root: `${SRC}`,
  },
  dest: {
    root: `${DEST}`,
  },
}

module.exports = { config }
