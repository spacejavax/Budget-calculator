#### Supercute budget-calculator + with supercute games

### Created for Horizons!!!

This budget calculator helps you track your saved money! You can also put up your own saving goal. The data is saved everytime you put in a number. You can reset everything and start from zero too.

It also has a bunch of minigames you can play once you have reached your saving goal. 

## How to run the project
1. Clone the repository to your device
```sh
git clone https://github.com/spacejavax/Budget-calculator.git 
```
2. Install the project's dependencies
```sh
npm install
```

3. Start the development server on `localhost:5173`
```sh
npm run dev
```
On Windows powershell try 
```sh
npm.cmd run dev
```

4. Build the site to `/dist`
```sh
npm run build
```
Hope it's kawaii enough for you!

## Information about the budget-calculator
Our project is a cute budget calculator. You can enter income, expenses, saved money and savings goals. When you reach your savings goal you get to unlock a new game! Everytime you unlock a new game you go up a level!! (We are still working on this btw)

## Programming languages
Until now we have used css, html and javascript!
(and a bit of Python that did not end so well!)

## Proccess and how to use it
First we created a react project using vite. I worked on the budget calc, while my friend worked on the background. I started with creating functions for saved, expenses, target amount, saved history, total saved, and remaining amount. To keep track of the values that holds the number I used react state(useState). To store information I used localstorage. The remaining amount of savings is the target amount - total amount. After the goal is reached, confetti shows up (Imported from canva confetti.) You can then start a new goal if you want. Adding the wrong number by mistake is not a problem! There is a undo last saving function, or if you want to delete everything in one go; click reset everything. Then I created inputs for every question. Also onClick enables you to click on the add saving, new goal etc. buttons. Lastly I copied my friends code for the background into my own code (mistake lol). I also worked on the app.css as I coded app.jsx. AI gave many nice tips on how to make it look super cute. 

My friend started by trying to create a game using Pygbag, that she hoped would be able to get imported into the React Website. The game is still available under the folder 'gamee', but we could not make it launch properly in the website. We therefore deleted that game, and developed a new jumping game were the character jumps to avoid obstacles. 


## Challenges
Me and my friend did not understand the pull and push function in Github desktop at the beginning. Since we are working on the same project we had to pull each others changes. This made some bugs ive already fixed reappear again as I pulled her code. One time I tried to copy her code into my css and it caused us some problems. The calculator appeared after the background and some texts disappeared. 
It also hard to keep track of all variables I had defined, when I tried to write the input by myself after AI helped me with the first ones. 

My friend also tried to create a game in Pygame to later import to the React Website using Pygbag, but it did not end up working. Despite that the Pygbag game worked on her own computer, it just kept loading in the React website without actually launching. 

Second submission:
Hardest part was making so that the games unlocked after each new goal. The pygame unlocked when the piggy game unlocks.


## AI DISCLOSURE
We used AI to understand CSS, HTML, and Javascript the underlying logic and structure. 

## Screenshots!!!
1. ![alt text](<Skärmbild 2026-07-25 025118.png>)
2. ![alt text](<Skärmbild 2026-07-25 025132.png>) 
3. ![alt text](<Skärmbild 2026-07-24 190739.png>)

## Demolink
https://budget-calculator-topaz.vercel.app/

