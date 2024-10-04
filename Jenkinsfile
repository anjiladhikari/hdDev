pipeline {
    agent any

    stages {
        stage('Check Node.js Version') {
            steps {
                script {
                    sh 'node -v'  
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
                     sh 'npm test -- --forceExit'
                }
            }
        }

    // SonarQube Stage
        stage('Code Quality Analysis') {
            steps {
                script {
                    withSonarQubeEnv('SonarQube') {
                        sh 'sonar-scanner -Dsonar.projectKey=your-project-key -Dsonar.sources=./src -Dsonar.host.url=http://localhost:9000 -Dsonar.login=your-auth-token'
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