module.exports = config =>
  config.addCollection('posts', collection =>
    collection.getFilteredByGlob('_posts/*.md'));
