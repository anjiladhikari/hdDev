pipeline {
    agent any
tools {
        
        nodejs 'NodeJS 16'  
    }
    stages {
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
