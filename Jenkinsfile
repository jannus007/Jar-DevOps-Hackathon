pipeline {
  agent any
  stages {
    stage('Checkout code') {
        steps {
				checkout([$class: 'GitSCM', branches: [[name: "master"]], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'it-credentials', url: "https://github.com/jannus007/Jar-DevOps-Hackathon.git"]]])
            }
        }

 stage('Build docker image') {
      steps {
        sh 'docker build -t jana2007/jar-devops-hackathon .'
      }
    }

  stage('Push result image') {
		  steps {
			withDockerRegistry(credentialsId: 'JenkinsDockerHub', url:'') {
			  sh 'docker push jana2007/jar-devops-hackathon'
			}
		}
    }

    // stage('Docker pull images') {
		//   steps {
		// 	withDockerRegistry(credentialsId: 'docker-key', url:'') {
		// 	  sh 'docker pull jana2007/jar-devops-hackathon'
		// 	}
		// }
    // }
    // stage('Run') {
		//   steps {
		// 	withDockerRegistry(credentialsId: 'docker-key', url:'') {
		// 	  sh 'docker run --rm -p 3000:3000 jana2007/jar-devops-hackathon:latest'
		// 	}
		// }
    // }
  }
}