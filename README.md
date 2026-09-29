\# Production-Style DevOps CI/CD Pipeline



A complete DevOps CI/CD project demonstrating automated testing, Docker containerization, Docker Hub image publishing, and Kubernetes deployment using Minikube.



\## Project Overview



This project implements a CI/CD workflow for a Node.js application.



The pipeline automatically:



1\. Runs automated tests

2\. Builds a Docker image

3\. Pushes the image to Docker Hub

4\. Deploys the application to Kubernetes

5\. Performs a rolling update when a new application version is released



\## Architecture



Developer

&#x20;  ↓

GitHub

&#x20;  ↓

GitHub Actions

&#x20;  ↓

Automated Tests

&#x20;  ↓

Docker Build

&#x20;  ↓

Docker Hub

&#x20;  ↓

Kubernetes / Minikube

&#x20;  ↓

Kubernetes Service

&#x20;  ↓

Running Application



\## Technologies Used



\- Node.js

\- Express

\- Jest

\- Supertest

\- Git

\- GitHub

\- GitHub Actions

\- Docker

\- Docker Compose

\- Docker Hub

\- Kubernetes

\- Minikube



\## Application Endpoints



\### Home



GET `/`



Returns application information including version, build ID, environment, and health status.



\### Health



GET `/health`



Used by Kubernetes readiness and liveness probes.



\### Version



GET `/version`



Returns the current application version and build information.



\## Automated Testing



The project contains automated tests using Jest and Supertest.



Current test coverage includes:



\- Home endpoint

\- Health endpoint

\- Version endpoint



All tests pass successfully in the CI pipeline.



\## Docker



Build the application image:



```bash

docker build -t devops-cicd-app:1.0.0 .

