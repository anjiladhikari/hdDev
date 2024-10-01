pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Install project dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run tests using npm (Jest or your chosen framework)
                    sh 'npm test'
                }
            }
        }

        stage('Code Quality') {
            steps {
                script {
                    // You can integrate ESLint or other code quality checks
                    echo 'Running code quality checks...'
                    sh 'npm run lint' // If you have linting configured in your project
                }
            }
        }

        stage('Deploy to Test Environment') {
            steps {
                script {
                    // Start the application on the test server or environment
                    echo 'Deploying to Test Environment...'
                    sh 'nohup npm start &' // nohup allows the app to run in the background
                }
            }
        }

        stage('Release to Production') {
            steps {
                input message: 'Promote to Production?', ok: 'Release'
                script {
                    // Manual promotion to production
                    echo 'Releasing to Production...'
                    sh 'nohup npm start &' // Adjust this to your production deployment method
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed.'
        }
        success {
            echo 'Pipeline succeeded.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
