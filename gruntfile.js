module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    less: {
      development: {
        options: {
          paths: ["css"]
        },
        files: {
          "css/bootstrap-custom.min.css": "css/less/bootstrap-custom.less",
          "css/bootstrap-grid.css": "css/less/grid-dgbrt.less", // put the bootstrap grid out of uncss, or it destroys capital features
          "css/dgbrt-all.css": "css/less/dgbrt-all.less"
        }
      }
    },

    uncss: { // main css file need to be generated under _site to work
      dist: {
        files: {
          'css/bootstrap-custom.min.css': ['_site/index.html'
                                              , '_site/a-propos/index.html'
                                              , '_site/cv/index.html'
                                              , '_site/competences/index.html'
                                              , '_site/portfolio-webdesigner/index.html'
                                              , '_site/portfolio-webdesigner/_posts/*.html'
                                              , '_site/contact/index.html']
        }
      },
      options: {
        htmlroot: '_site',
        media: ['print', 'min-width: 480px', 'min-width: 768px', 'max-width: 767px', 'min-width: 992px', 'max-width: 991px', 'min-width: 1200px', 'max-width: 1199px'],
        ignore: ['.collapse', '.collapse.in', '.collapsing', '.row']
      }
    },

    cssmin: {
      combine: {
        files: {
          'css/bootstrap-custom.min.css': ['css/bootstrap-custom.min.css'
                                          ,'css/bootstrap-grid.css' // put the bootstrap grid out of uncss, or it destroys capital features
                                          ,'css/dgbrt-all.css'
                                          ,'css/magnific-popup.css'
                                          ,'css/owl.carousel.css'
                                          ,'css/owl.theme.css'
                                          ,'css/owl.transitions.css']
        }
      }
    }

  });

  // less
  grunt.loadNpmTasks('grunt-contrib-less');
  // uncss
  grunt.loadNpmTasks('grunt-uncss');
  // css minification
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['less', 'uncss', 'cssmin']);

};