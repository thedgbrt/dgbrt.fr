module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      files: ['a-propos/*', 'competences/*', 'contact/*', 'credits/*', 'css/less/*.less', 'js/*', 'portfolio-webdesigner/*', 'index.html'],
      tasks: ['default'],
    },

    jekyll: {
      prod: {
        src: '',
        dest: '_site'
      }
    },

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
                                              , '_site/portfolio-webdesigner/locomotion.html'
                                              , '_site/contact/index.html']
        }
      },
      options: {
        htmlroot: '_site',
        media: ['print', 'min-width: 480px', 'min-width: 768px', 'max-width: 767px', 'min-width: 992px', 'max-width: 991px', 'min-width: 1200px', 'max-width: 1199px'],
        ignore: ['.collapse', '.collapse.in', '.collapsing', '.row', '.btn-primary'] //collapse.in is super important for navbar
      }
    },

    cssmin: {
      combine: {
        files: {
          'css/bootstrap-custom.min.css': ['css/bootstrap-custom.min.css'
                                          ,'css/bootstrap-grid.css' // put the bootstrap grid out of uncss, or it destroys capital features
                                          ,'css/dgbrt-all.css'
                                          ,'css/lib/magnific-popup.css'
                                          ,'css/lib/owl.carousel.css'
                                          ,'css/lib/owl.theme.css'
                                          ,'css/lib/owl.transitions.css']
        }
      }
    },

    uglify: {
      my_target: {
        files: {
          'js/pages/homepage.min.js': ['js/jquery.smooth-scroll.min.js'
                                      , 'js/jquery.parallax.min.js'
                                      , 'js/owl.carousel.min.js'
                                      , 'js/homepage.js'],
          'js/pages/portfolio-project.min.js': ['js/jquery.magnific-popup.custom-fork.js'
                                      , 'js/isotope.pkgd.min.js'
                                      , 'js/portfolio-project.js'],
          'js/pages/portfolio.min.js': ['js/isotope.pkgd.min.js'
                                      , 'js/portfolio.js'],
          'js/pages/skills.min.js': ['js/jquery.equalheights.js'
                                      , 'js/skills.js']
        }
      }
    }

  });

  // watch changes
  grunt.loadNpmTasks('grunt-contrib-watch');

  // jekyll build
  grunt.loadNpmTasks('grunt-jekyll');
  // less
  grunt.loadNpmTasks('grunt-contrib-less');
  // uncss
  grunt.loadNpmTasks('grunt-uncss');
  // css minification
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // js compilation
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  // for production, use this:
  // grunt.registerTask('default', ['less', 'cssmin', 'jekyll']);
  grunt.registerTask('default', ['less', 'uncss', 'cssmin', 'uglify', 'jekyll']);

};
