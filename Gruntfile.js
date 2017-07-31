module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dev: {
                files: {
                    'app/assets/css/style.css': 'app/assets/sass/style.scss'
                }
            },
            dist: {
                files: {
                    'app/assets/css/style.css': 'app/assets/sass/style.scss'
                }
            }
        },
        watch: {
            sass: {
                files: 'app/assets/sass/*.scss',
                tasks: ['sass:dev']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('buildcss', ['sass:dist']);
};