pipeline {
    agent any

    stages {
        stage('Check Node.js Version') {
            steps {
                script {
                    sh 'node -v'  // This will display the Node.js version being used by Jenkins
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'npm install'
                    sh 'docker build -t anjiladhikari/hddev .'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }

        stage('Code Quality Analysis') {
            steps {
                script {
                    withSonarQubeEnv('SonarQube') {
                        sh 'sonar-scanner'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh 'docker run -d -p 80:80 anjiladhikari/hddev'
                }
            }
        }
    }
}
