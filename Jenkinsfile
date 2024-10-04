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

        // Build Stage: Install dependencies
        stage('Build') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        // Test Stage: Run Jest tests
        stage('Test') {
            steps {
                script {
                    // Run Jest tests with coverage and force exit to avoid hanging
                    sh 'npm test'
                }
                // Archive test results (JUnit XML format) for Jenkins
                junit 'coverage/junit.xml'
            }
        }

        // Code Quality Analysis: Example with SonarQube
        stage('Code Quality Analysis') {
            steps {
                script {
                    withSonarQubeEnv('SonarQube') {
                        sh 'sonar-scanner -Dsonar.projectKey=your-project-key -Dsonar.sources=./src -Dsonar.host.url=http://localhost:9000 -Dsonar.login=your-auth-token'
                    }
                }
            }
        }

        // Deploy Stage: Deploy your Dockerized application
        stage('Deploy') {
            steps {
                script {
                    // Build the Docker image
                    sh 'docker build -t anjiladhikari/hddev .'
                    // Run the Docker container, mapping port 80 on the host to the container
                    sh 'docker run -d -p 80:80 anjiladhikari/hddev'
                }
            }
        }
    }
}
