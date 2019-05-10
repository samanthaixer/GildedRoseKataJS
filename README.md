## The challenge

The Gilded Rose is a well-known kata for amending existing code. I have chosen to do this challenge in JavaScript.

The full Gilded Rose challenge is at the bottom of this file.

At first glance, it looks like the code has been written in ES6 which is new to me.

## Running the project

`git clone git@github.com:samanthaixer/GildedRoseKataJS.git`

### Running the tests

`npm run test`

## My approach

1. The first thing I did was to run the tests.
  - There is an example test in the folder so I looked at what it does.
2. Wrote more tests to make sure that any changes I make still run
  - Use the spec to decide on what tests to write
3. Refactored the code so that it becomes clear where I would introduce the new requirement
4. Introduced the new requirement (writing tests first)
5. Continued refactoring to make the code easy to read
  - During this stage I discovered that Brie is supposed to add 2 points of quality for every day over the sell by date. This isn't in the requirements but is in the existing code so I wrote a test for it. 
6. Ran a linter (eslint)
7. Introduced nyc for code coverage

## Gilded Rose brief

Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city run by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

All items have a SellIn value which denotes the number of days we have to sell the item. All items have a Quality value which denotes how valuable the item is. At the end of each day our system lowers both values for every item. Pretty simple, right? Well this is where it gets interesting:

- Once the sell by date has passed, Quality degrades twice as fast
- The Quality of an item is never negative
- “Aged Brie” actually increases in Quality the older it gets
- The Quality of an item is never more than 50
- “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
- “Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

- “Conjured” items degrade in Quality twice as fast as normal items

Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn’t believe in shared code ownership (you can make the UpdateQuality method and Items property static if you like, we’ll cover for you).
