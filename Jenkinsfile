pipeline {
    triggers {
        pollSCM 'H/2 * * * *'
    }
    agent { 
        dockerfile {
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Prepare') {
            steps {
                sh 'npm install'
            }
        }
        stage('build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}