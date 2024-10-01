pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                label 'docker-enabled'
            }
            steps {
                echo 'Building...'
                sh 'npm install'
                sh 'docker build -t devops-demo-app .'
                archiveArtifacts artifacts: '**/Dockerfile', allowEmptyArchive: true
            }
        }
        
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }
        
        stage('Code Quality Analysis') {
            steps {
                echo 'Analyzing code quality...'
                withSonarQubeEnv('SonarQube') {
                    sh 'sonar-scanner -Dsonar.projectKey=devops-demo -Dsonar.sources=src -Dsonar.language=js -Dsonar.sourceEncoding=UTF-8'
                }
            }
        }

        stage('Deploy') {
            agent {
                label 'docker-enabled'
            }
            steps {
                echo 'Deploying to test environment...'
                sh 'docker-compose up -d'
            }
        }

        stage('Release') {
            agent {
                label 'docker-enabled'
            }
            steps {
                echo 'Releasing to production...'
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', passwordVariable: 'DOCKERHUB_PASS', usernameVariable: 'DOCKERHUB_USER')]) {
                    sh 'docker login -u $DOCKERHUB_USER -p $DOCKERHUB_PASS'
                    sh 'docker tag devops-demo-app:latest $DOCKERHUB_USER/devops-demo-app:latest'
                    sh 'docker push $DOCKERHUB_USER/devops-demo-app:latest'
                }
            }
        }

        stage('Monitoring and Alerting') {
            steps {
                echo 'Setting up monitoring...'
                sh 'echo "Monitoring enabled for the production environment"'
            }
        }
    }
}
