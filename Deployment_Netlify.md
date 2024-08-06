## Deployment steps for this application
### Pushing the code to github
#### In my case I tried to push the code into my personal repository (which was created in my personal github profile) from my Another/Office account.
- At first I created a repository in my personal github profile and I make my repository as public.
- Invited my office github account as a collaborator in Settings (repo) -> Access -> Collaborators -> Add People.
- I accepted the invite which i have received to my office account.
- After that I follwed respective steps to add the remote branch and I pushed the code to my repo.

### Creating Netlify Account and Deploying the application in it through it's UI.
#### In my case I wanted to deploy my application in a hosting server so that I/Anyone can access it publicly.
- I have chosen [Netlify](https://app.netlify.com/) as my platform. (At first I have chosen github-pages but it will serve only static pages).
- While creating account it has asked me to 'Sign up' with options like GitHub/GitLab/Bitbucket. Since I am using GitHub so I selected 'Sign up with GitHub'. And followed the respective process which it has guided me.
- I created a team with some name in it.
- In that team, I have seen an option 'Add new site'.
- I clicked on the 'Add new site'. And I selected 'Import an existing project' since i was already having an existing project.
- It has taken me to 'Connect to git provider' page and I clicked on 'GitHub' option.
- After selecting the option it has given me the list of repos/projects am having in my GitHub profile.
- I selected my repo and added site name in 'Site name' text box, added directory in 'Publish directory' In my case i have added 'dist' as my publish directory since i am using parcel as my bundler the compiled files stored in the 'dist' folder.
- And clicked on Deploy button. Which deployed my application and re-directed me to my live application.

### Deploying it using Github Actions - CI/CD.
#### In my case I have created a workflow in GitHub actions so that if any commit is happening on the 'main' branch of my repo, Application build and deploy should happen automatically so that i can see the changes live
- At first I installed netlify-cli in my app using 'npm install netlify-cli'.
- I have created '.github/workflows' folder in my root. And i created 'deploy.yml' file inside it.
- In that file i have added my deployment steps. Please check my [deploy.yml](.github/workflows/deploy.yml) file.
- If you check the Deploy step in the deploy.yml file am using two keys NETLIFY_AUTH_TOKEN and NETLIFY_SITE_ID.
- Steps to Get a NETLIFY_AUTH_TOKEN
    - Log into Netlify: Go to Netlify and log in to your account.
    - Access User Settings:
        - Click on your profile picture in the top-right corner.
        - Select User settings from the dropdown menu.
    - Create a New Access Token:
        - In the user settings, go to the Applications section.
        - Find the Personal access tokens tab and click on it.
        - Click on the New access token button.
    - Generate the Token:
        - Provide a name for your token (e.g., "Deployment Token").
        - Click on the Generate token button.
        - Copy the generated token and store it securely. This is your NETLIFY_AUTH_TOKEN
- Steps to Get NETLIFY_SITE_ID
    - Go to your Netlify account
    - Click on your site in the sites list (Site which we have created in above section)
    - click on Site overview
    - click on site configuration
    - Copy the Site ID which appears in Site Information section.
- Steps to Set Up GitHub Actions for Deployment
    - Store Secrets in GitHub
        - Go to your GitHub repository and store the NETLIFY_AUTH_TOKEN and NETLIFY_SITE_ID as GitHub secrets.
        - Navigate to Settings in your GitHub repository.
        - Select Secrets and variables > Actions.
        - Click on New repository secret.
        - Add two secrets:
            - NETLIFY_AUTH_TOKEN: Your Netlify Auth Token.
            - NETLIFY_SITE_ID: Your Netlify Site ID.
- Once this setup is done. We are good to deploy our application using github actions.
