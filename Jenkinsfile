pipeline {
    agent any
    
    environment {
        NODE_ENV = 'staging'
    }
    
    stages {
        stage('Setup') {
            steps {
                sh 'npm ci'
                sh 'npx playwright install --with-deps'
            }
        }
        
        stage('Lint and Type Check') {
            steps {
                sh 'npm run lint'
                sh 'npm run type-check'
            }
        }
        
        stage('Test') {
            parallel {
                stage('Chrome Tests') {
                    steps {
                        sh 'npx playwright test --project=chromium'
                    }
                }
                stage('Firefox Tests') {
                    steps {
                        sh 'npx playwright test --project=firefox'
                    }
                }
                stage('Mobile Tests') {
                    steps {
                        sh 'npx playwright test --project=mobile-chrome'
                    }
                }
            }
        }
        
        stage('Generate Reports') {
            steps {
                sh 'npx allure generate allure-results --clean'
            }
        }
    }
    
    post {
        always {
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])
            
            archiveArtifacts artifacts: 'screenshots/**/*.png, videos/**/*.webm'
        }
        
        failure {
            emailext (
                subject: "Playwright Tests Failed - Build #${BUILD_NUMBER}",
                body: "The Playwright test suite has failed. Please check the build logs.",
                to: "${env.CHANGE_AUTHOR_EMAIL}"
            )
        }
    }
}
