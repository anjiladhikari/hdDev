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

        stage('Install Dependencies') {  // Ensure dependencies are installed
            steps {
                script {
                    // Install node dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run Jest tests
                    sh 'npm test'
                }
                // Archive test results and coverage reports
                junit 'coverage/junit.xml'
            }
        }

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
