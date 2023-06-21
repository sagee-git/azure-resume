## azure-resume
My own Azure resume, following [ACG project video.](https://youtu.be/ieYrBWmkfno) and the GitHub [cgc-azure-resume-starter](https://github.com/ACloudGuru-Resources/acg-project-azure-resume)

# Prerequisites

- An [Azure](https://portal.azure.com) Account
- .NET Core 7 SDK
- Azure Functions Core Tools
- Visual Studio Code
- Azure CLI
- C# Extension

# First steps: Frontend

- Set up version control.
- Update the HTML and implement a counter.
- main.js will contains visitor counter code.
<!-- ```js
const functionApi = ''
``` -->
- Test locally and push changes to GitHub

# Second Step: Backend

- Setting up the CosmosCoscmos DB resources
- Setting up an Azure Function
- Test locally

# Third Step: Deploying to Azure

- Deploy the Azure Function
- Deploy to Blob Container
- Setup Azure CDN
    - Caching
    - Purging
    - Purge as part of CI/CD

# Forth Step: Building a CI/CD Pipeline

- Create a frontend workflow
- Implement unit testing
- Create a backend workflow

# My Pipeline

Version Control is being controlled by Git and GitHub

Continuous Integration is being built and tested locally on computer before committing

Continuous Delivery is being staged locally before being pushed to Azure

Continuous Deployment is automatically being handled by GitHub Actions