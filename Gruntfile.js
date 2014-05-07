'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig
  ({
        // Import package manifest
        pkg   : grunt.file.readJSON('animateSlider.jquery.json'),
        //Create a documentation template
        meta  : 
        {
              banner :
                  "/*\n"+
                  "*\n"+
                  "*  @name        <%= pkg.title || pkg.name %> \n"+
                  "*  @description <%= pkg.description %> \n"+
                  "*  @version     <%= pkg.version %> \n"+
                  "*  @copyright   <%= grunt.template.today('yyyy') %> - <%= pkg.author.name %> <<%= pkg.author.email %>> \n"+
                  "*  @license     <%= pkg.licenses.type %> - <%= pkg.licenses.url %> \n"+     
                  "*\n"+
                  "*/\n"
        },


        //Define concat configuration
        concat :
        {
          dist    :
          {
              src      :  ["src/jquery.animateSlider.js"],
              dest     :  "dist/jquery.animateSlider.js"        
          },
          options :
          {
              banner  :   "<%= meta.banner %>"
          }
        },


        //Define jsHint configuration
        jshint :
        {
            files     : ["src/jquery.animateSlider.js"],
            options   : 
            {
                jshintrc : ".jshintrc"    
            }
        },


        //Minify the project
        uglify :
        {
            target    : 
            {
                files :
                [
                  {src:"src/jquery.animateSlider.js",dest:"dist/jquery.animateSlider.min.js"},
                ]
            },
            options   :
            {
                banner  : "<%= meta.banner %>"
            }
        }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task.
  grunt.registerTask('default', ['jshint','concat', 'uglify']);
};
