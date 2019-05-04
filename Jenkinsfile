pipeline {
  agent any
  stages {
    stage('Checkout code') {
        steps {
				checkout([$class: 'GitSCM', branches: [[name: "master"]], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'Jar-DevOps-Hackathon', url: "https://github.com/jannus007/Jar-DevOps-Hackathon.git"]]])
            }
        }
    stage('Docker pull images') {
		  steps {
			withDockerRegistry() {
			  sh 'docker pull jana2007/jar-devops-hackathon'
			}
		}
    }
    stage('Run') {
		  steps {
			withDockerRegistry() {
			  sh 'docker run --rm -p 3000:3000 jana2007/jar-devops-hackathon:latest'
			}
		}
    }
  }
}