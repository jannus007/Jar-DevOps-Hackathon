pipeline {
  agent any
  stages {
    stage('Checkout code') {
        steps {
				checkout([$class: 'GitSCM', branches: [[name: "master"]], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: "https://github.com/jannus007/Jar-DevOps-Hackathon.git"]]])
            }
        }
    stage('Docker pull images') {
		  steps {
		
			  sh 'docker pull jana2007/jar-devops-hackathon'
			
		}
    }
    stage('Run') {
		  steps {
		
			  sh 'docker run --rm -p 3000:3000 jana2007/jar-devops-hackathon:latest'
			
		}
    }
  }
}