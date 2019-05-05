pipeline {
  agent any
  stages {
    stage('Checkout code') {
        steps {
				checkout([$class: 'GitSCM', branches: [[name: "master"]], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '7a34e4e8-cee0-47a5-8dc4-96a36dac585d', url: "https://github.com/jannus007/Jar-DevOps-Hackathon.git"]]])
            }
        }
    stage('Docker pull images') {
		  steps {
			withDockerRegistry(credentialsId: '936286f5-9ca2-4484-83de-b1e0b0340814', url:'') {
			  sh 'docker pull jana2007/jar-devops-hackathon'
			}
		}
    }
    stage('Run') {
		  steps {
			withDockerRegistry(credentialsId: '936286f5-9ca2-4484-83de-b1e0b0340814', url:'') {
			  sh 'docker run --rm -p 3000:3000 jana2007/jar-devops-hackathon:latest'
			}
		}
    }
  }
}