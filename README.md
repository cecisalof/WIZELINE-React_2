## Welcome to the second mini challenge: Loops

Let's loop over a pokemon list using JavaScript. Then, let's display it using React JSX.

### Instructions

Here, you have again an all-set environment for building your app. You could copy-paste elements from the first challenge if you want.

1. Create a new **PokeCards** component at their corresponding file below **/src/components** which should be rendered through **/src/App.js**
2. Make **PokeCards** component loop over the mock data _(/src/mock/pokeData.js)_
3. Render that information using your already created **PokeCard** component in the previous challenge.
4. Every element in the array should now be displayed as follows:

   - Keep showing the name as an _<h1>_ tag
   - Display only one image using _<img>_ tag and when the mouse is over, display the other one (_sprites_ property)
   - When the user clicks on the image, open the _video link_ in a separate tab

### Mini Bonus

- Can you display the data sorted ascendingly by name? No need extra user interaction. Show them in that order at first render.
