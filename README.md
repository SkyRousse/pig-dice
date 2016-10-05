# Pig Dice

#### A dice game where players compete to get a high score of 100 points. Fist player to reach 100 points wins.

#### By Sky Rousse and Marty Fitchen

## Description

A player will input name to create an object that will hold their name and their accumulated score. If player rolls 1 then turn changes. Goal is to reach 100 points.

## Specifications
| Behavior        | Input           | Outcome  |
| ------------- |:-------------:| -----:|
| "New Game" button | click the button | "reveals inputs fields for player1 & player2 clear all previous game data" |
| "Get Rollin" button | click the button | "hides player input fields $ shows the game interface" |  
| "Roll" button | click the button | adds current value to the turn total variable |
| Roll of a 1 | dice === 1 | ends player turn without addition of points to player piggy bank |
| "Feed the pig" button | click the button | ends player turn and adds turn total to active player piggy bank |
| A player reaches 100 points or more | this.totalScore >= 100 points | hide all game interface and show "New Game" button with congrats message |

## Setup/Installation Requirements

To create your own template repository on github

* Clone the github repository using the git clone command from /Desktop
* Create a new repository on github to keep your template
* Using git remote add pair the clone on your desktop with your new repository
* Add, commit, and push, and then you'll have your own copy of the template to do with as you wish


## Known Bugs
None yet. Still work in progress


## Support and contact details
If you have questions comments or concerns you can contact us at:
Marty: <a href="mailto:mfitchen@gmail.com">mfitchen@gmail.com</a>
Sky: skyrousse@gmail.com 

## Technologies Used

* Bootstrap
* JQuery
* JS
* CSS

### License

  Licensed under the _MIT_ License

Copyright (c) 2016 **Sky Rousse & Marty Fitchen**
