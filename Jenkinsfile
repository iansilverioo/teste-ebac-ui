pipeline {
  agent any

  stages {
    stage('Clonar o repositório') {
      steps {
        git branch: 'main', url: 'https://github.com/iansilverioo/teste-ebac-ui.git'
      }
    }
    stage('instalar dependencias') {
      steps {
        bat 'npm install'
      }
    }
    stage('Executar Testes') {
      steps {
        bat '''NO_COLOR=1 
        npm run cy:run'''
      }
    }
  }
}
