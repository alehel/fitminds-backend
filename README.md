# fitminds-backend
REST API for the fIT Minds website written in JavaScript using Node.js and Express. Its primary purpose is to allow fitminds-frontend to communicate with the Stava API.

The fIT Minds website will be a club website for employees of IT Minds.

# Roadmap
Version | Main Feature
------- | ------------
0.1 | Set up API documentation and testing framework. Create /ping endpoint which responds in json format and has both documentation and tests.
0.2 | /user endpoint which accepts a user id string and token, queries the Strava API for the specified user, and returns the data in json format.
0.3 | Set up automatic deploy of backend. Commits to master trigger new deploy.
0.4 | Set up logging.

# Git
## Git Branching
The project follows the Git Feature Branch Workflow. For more info see [Atlassian guide to Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).

In addition to this, we branch out of, and merge into develop branch. Once a new release is ready, we merge develop with master. Only develop is to be merged with master. Master will automatically deploy. 

## Branch naming
There are three different branch naming rules.
* New features are named *feature/name_of_new_feature*
* Bugfixes are named *bugfix/short_bug_description*
* Dependency update are named *dep/update_dependencies*
* Anything that doesn't fit neatly into the above categories such as minor changes to readme are named *other/description*

## Merge Requirements
Before code can be merged into develop, the following requirements must be met.
* All API-endpoints must be documented.
* All new functionality must be tested.
* 0 linting warnings.

# Project structure

## API-endpoints
All API endpoints are resource named and will return collections unless specific IDs are requested. For instance, a resource for data on users will be as follows.

Endpoint | Descrtiption
-------- | ------------
/v1/users | Returns a collection of all registered users.
/v1/users/{userid} | Returns data for a specific user.

All endpoints will contain a version. When breaking changes are made to an API endpoint, treat it as a new version. 

All endpoints are to be documented using Swagger.

## Dependencies
All new dependencies must be discussed before being merged into the develop branch. 

Before merging develop with master, all dependencies are to be updated. The procedure for doing so is as follows.
* Create a new dep/update_dependencies branch.
* Update project dependencies to the latest stable release, include the name of all updated dependencies in the git commit message.
* Merge with develop branch and perform tests.
* Merge develop with master.
* Delete the dep/update_dependencies branch freeing up the branch name for the next release.

## User Management
To begin with the backend database will store only basic information about the user.
* The users email address
* The users Strava ID

This information will allow us to "connect" an IT Minds email to a Strava account id. This will allow us to limit access only to those who have an IT Minds email.

# Strava Resources
[Strava API documentation](https://developers.strava.com/)

[Strava API Agreement](https://www.strava.com/legal/api)

[Strava Brand Guidelines](https://developers.strava.com/guidelines/)