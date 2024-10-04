pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    sh 'sudo npm install'
                    sh 'sudo docker build -t anjiladhikari/hddev .'
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
                    sh 'docker run -d -p 80:80 your-username/hddev'
                }
            }
        }
    }
}
