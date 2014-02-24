module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uncss: {
      dist: {
        files: {
          '_site/css/bootstrap.custom.min.css': ['_site/index.html', '_site/competences/index.html']
        }
      }
    }
  });

  // uncss
  grunt.loadNpmTasks('grunt-uncss');

  // Default task(s).
  grunt.registerTask('default', ['uncss']);

};