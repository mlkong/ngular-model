'use strict';
module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Show grunt task time
    require('time-grunt')(grunt);

    // Configurable paths for the app
    var appConfig = {
        app: 'app',
        dist: 'dist',
        index: 'app/index.html'
    };

    // Grunt configuration
    grunt.initConfig({

        // Project settings
        espire: appConfig,

        // The grunt server settings
        connect: {
            options: {
                port: 9072,
                hostname: 'localhost',
                livereload: 35722
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function (connect) {
                        return [
                            connect.static('.tmp'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect.static(appConfig.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= espire.dist %>'
                }
            }
        },
        // Compile scss to css
    
		sass: {
			options: {
				sourceMap: false,
                noLineComments: true,
				outputStyle: 'compact'
			},
			dist: {
				files: {
                    "app/assets/css/app.css": "app/assets/scss/app.scss"
				}
			}
		},
        // Watch for changes in live edit
        watch: {
        	
            styles: {
                files: ['app/assets/scss/**/*.{scss,sass}'],
                options: {
                    nospawn: true,
                    livereload: '<%= connect.options.livereload %>'
                },
            },
       
            js: {
                files: ['<%= espire.app %>/scripts/{,*/}*.js'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            sass: {
				files: ['app/assets/scss/**/*.{scss,sass}'],
				tasks: ['sass:dist'],
            	options: {
            		livereload: '<%= connect.options.livereload %>'
            	}
			},
			bower: {
			        files: ['bower.json'],
			        tasks: ['wiredep'],
			    	options: {
	            		livereload: '<%= connect.options.livereload %>'
		            	}
			 },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= espire.app %>/**/*.html',
                    '.tmp/styles/{,*/}*.css',
                    '<%= espire.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
      
		wiredep : {
			dev : {
				ignorePath: '../',
				directory : 'bower_components',
				src : [ '<%= espire.index %>' ]
			}
		},
 
        uglify: {
            options: {
                mangle: false
            }
        },
        // Clean dist folder
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= espire.dist %>/{,*/}*',
                        '!<%= espire.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
	    // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= espire.app %>',
                        dest: '<%= espire.dist %>',
                        src: [
                            '*.{ico,png,jpg,jpeg,txt}',
                            '.htaccess',
                            '*.html',
                            'views/{,*/}*.html',
                            'views/**/{,*/}*.html',
                            'assets/fonts/*.*',
                            'assets/images/**/{,*/}',
                            //'scripts/*.js',
                            'scripts/controllers/**/{,*/}*.js',
                            'scripts/directives/**/{,*/}*.js',
                            'scripts/services/**/{,*/}*.js',
                            'scripts/services/**/{,*/}*.json'
                        ]
                    }
                ]
            },
            styles: {
                expand: true,
                cwd: '<%= espire.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },
        // Renames files for browser caching purposes
        filerev: {
            dist: {
                src: [
                    '<%= espire.dist %>/scripts/{,*/}*.js',
                    '<%= espire.dist %>/assets/css/{,*/}*.css',
                    '<%= espire.dist %>/assets/fonts/*'
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= espire.dist %>',
                    src: ['*.html', 'views/{,*/}*.html'],
                    dest: '<%= espire.dist %>'
                }]
            }
        },
        useminPrepare: {
            html: 'app/index.html',
            options: {
                dest: 'dist'
            }
        },
        usemin: {
            html: ['dist/index.html']
        }
    });
    // Run live version of app
    grunt.registerTask('live', [
        'clean:server',
        'copy:styles',
        'sass:dist',
        'connect:livereload',
        'watch'
    ]);
    
    // Run build version of app
    grunt.registerTask('server', [
        'build',
        'connect:dist:keepalive'
    ]);

    // Build version for production
    grunt.registerTask('build', [
        'clean:dist',
        'sass',
        'useminPrepare',
        'concat',
        'copy:dist',
        'cssmin',
        'uglify',
      // 'filerev',
        'usemin'
     //  'htmlmin'
    ]);
};
