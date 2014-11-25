module.exports = function(grunt) {
	//Initialisation
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		//Plugins
		bower_concat: {
			all: {
				dest: "js/libs.js",
				cssDest: "css/libs.css"
			},
		},

		uglify: {
			my_target: {
				files: {
					'js/libs.min.js': 'js/libs.js'
				}
			}
		},

		less: {
			production: {
				files: {
					'css/main.css': 'less/main.less'
				}
			}
		},

		watch: {
			scripts: {
				files: ['less/*.less','less/blocks/*.less'],
				tasks: ['less'],
				options: {
					reload: true,
					spawn: false
				}
			}
		}
	});

	//Tasks
	grunt.loadNpmTasks('grunt-bower-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//Register
	grunt.registerTask('default', []);
	grunt.registerTask('mkl', ['bower_concat','uglify']);
}