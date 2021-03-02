# Team-Profile-Generator
This repository accepts command line details (via prompts) and then builds a page displaying team members.

1. This is the link to a video demonstrating the program and testing.

https://drive.google.com/file/d/15SE6b0g1P6ffowEVr5EjDe96cqngOqSd/view?usp=sharing

The task was to build a Node.js command-line application, that takes in information about employees on an engineering team which then generates an HTML webpage that displays 
summaries for each person.  Additionally there was a requirement to produce unit tests for each part of the code.  

As this application won't be deployed, a link is provided showing a walkthrough video that demonstrates the functionality and all of the tests passing. The link is shown above.

This project is MIT licensed. ![GitHub license](![license](https://img.shields.io/static/v1?label=license&message=MIT&color=blueviolet))(0)

## *Table of Contents*
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#Credits) 
- [Contributing](#contributing)
- [Authors](#authors)
- [Screenshots](#screenshots)
- [Video](#video)
- [Tests](#tests)
- [Contact Me](#contact-me)

## *Description* 
Creation of a command line application that takes the information about employees on an engineering team (Manager, Engineer(s) and Intern(s)) and generates an HTML webpage.  In my example, I have used characters from Harry Potter.
Additionally unit tests are run for each part of the code using Jest and each test is required to attain a pass.

The user is first prompted to create a Team manager.  The user has to add their name, employee ID, email and office number.

The the user has a chance to add other office members - either an engineer or intern.  The user can add as many as they wish of these workers.  The engineer fields are: name, ID, email and Github.  The intern fields are name, ID, email and school.  When all responses are completed (filled or unfilled, defaults selected or not) - by the user's decision, the HTML page is generated in the same directory as the file is run. 

## *Installation*
The user must clone all files from this repository.  It is important that the file locations remain the same in relation to each other.

To run, node.js must be installed. The file index.js must be downloaded to a directory. Open the command line (within the same directory as index.js).  inquirer must first be installed before running by typing npm i inquirer in the same directory.

Then type _node index.js_ to run.  The questions will then be generated with prompts for the user to respond. _CTRL-C_ can terminate the program at any point.

NB The package.json is set up correctly to run the program and tests.  Should there be a problem _npm init_ can be used to create another. And also the following section must be added to your package.json:

{
  "scripts": {
    "test": "jest"
  }
}

The team.html page will be generated within the dist directory and can be opened using your chosen browser.

To run the testing scripts, type npm run test.  Jest recognises the __tests__ directory automatically.

Directory locations image:


## *Usage* 
To generate a Team Page with used defined information.

## *Credits*
- [Inquirer commands] (https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts#basic-usage )
- [License badges](https://shields.io/)
- [Node.js](https://nodejs.org/en/download/)
- Getting Started using Jest (https://jestjs.io/docs/en/getting-started)

## *Technologies Used*
The code was written using JavaScript in a node environment using an npm called 'Inquirer' (see credits above).  The video was recorded using Screencastify - a free application used via the Chrome browser.   The unit testing used an npm called Jest.


## *Contributing and Questions*
For any suggestions or questions, please feel free to contact me via my Github page. (github.com/sallyxp)

## *Authors*
Sally Rodgers

## *Screenshot*
![alt text] (images/screenshot.png) 

## *Video*
Link to Video Demonstration of application and the tests: https://drive.google.com/file/d/15SE6b0g1P6ffowEVr5EjDe96cqngOqSd/view?usp=sharing

## *Tests*
The specific tests are held in the __tests__ directory.  
Testing questions were 
(i) can an instance of each class be created
(ii) can each field allow a valid entry 
(iii) Do the retrieval methods allow an object to be retrieved



## *Contact Me*
- Github: **[sallyxp](github.com/sallyxp)
- LinkedIn: **[Sally Rodgers](www.linkedin.com/in/sallyhello1)  
- Email: **[sallyhello1@yahoo.com](mailto:sallyhello1@yahoo.com)

This project is MIT licensed. ![license](https://img.shields.io/static/v1?label=license&message=MIT&color=blueviolet) 
&copy; 2021 Sally Rodgers