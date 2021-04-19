### Plant some 🌳🌴🌲 with [PlanTree Clicker App](https://wblachut.github.io/react-project-battleships/)!

#

Created with [CodeSandbox](https://codesandbox.io/)

#

### Description

The web app is based on existing [cookie clicker application](http://orteil.dashnet.org/cookieclicker/).

Main aim of this project was to create clicker app with [React](https://reactjs.org/). The instructions was to make an application build of main `App` component containing: `Clicker Button` component alongside with `Home`, `Shop` and `Achievements` components accessible from navbar. Moreover, app should be responsive to mobile devices.

I have decided to use [Redux](https://react-redux.js.org/) in the project to learn it's abilities of managing state in React. All the js files related to redux can be found in `components/App` folder. **Actions**, **reducers** and **store** logics are placed in `actions.js`, `rootReducer.js` and `store.js` respectively. App keeps it's state in localStorage thanks to `redux-persist` library. To allow redux accessibility to app, `App` component is wrapped by `Provider` and `PersistGate`.

In styling this app [Sass](https://sass-lang.com/) preprocessor and [Materialize CSS](https://materializecss.com/) framework came handy and timesaving.

#

Instead of building application around cookie baking I have decided to make user planting trees. One can do that by pressing **clicker button** - pulsating round button with sapling on it - on the left side of the screen or on the top, just bellow navbar on mobile devices. By planting more trees you advance to higher levels and unlock new achievements and shop content. You are informed of that by notifications appearing on the screen. Upon leveling up the tree on clicker button grows. Each new level, you will obtain certain amount of **Golden Leaves** - PlanTree Gold Currency. Unlocking each new achievements grants you 2 Golden Leaves.

If you are not on a mobile device you can check your **stats** under the clicker button. Stats allow you to track your progress during planting the trees. If you are not sure what stats icons mean just hover on them to see the hints.

In the **Shop** you can purchase _items_ that increase trees planted by each click, hire _helpers_ planting 1 tree for workforce per 5 sec or get _upgrades_ to tree clicker image. Number of trees next to shop item indicates how many trees are required to unlock it, whereas number of golden leaves tells you how many of them will it cost. It you unlock item you will be able to see it miniature image. Once bought an item will have it's background turned to golden.

The **Achievements** tab allows you to check your accomplishments. Next to each achievement name you will see number and icon. Number tells you amount required to unlock the achievement and icon tells you of requirement type (eg. trees planted, total clicks or workforce helping).

**For now the UX of the game is designed so the game takes just few minutes to unlock almost all of the content.**

### Concepts used and learned:

- CSS Preprocessor (Sass)
- CSS Framework (Materialize CSS)
- State management
- React-Redux ecosystem
- Redux PersistState
- Redux DevTools
- React Router

### Tools:

- CodeSandbox
- Javascript
- React
- Redux
- Sass
- Materialize CSS

### Concepts for future:

- [ ] add endpoint with current user progress or just clicks (UK)
- [ ] create project back-end with **node.js** for saving user progress to a file (UK)
- [ ] add background change upon purchasing new clicker tree
- [ ] implement nice animations, especially to clicker button
- [ ] add sound effect on pressing clicker button
- [ ] on start allow to choose theme (like: **European Wood** - current, **Taiga** - with pine tree growing from sprout, **Amazonia Rain Forest** - with rain forest tree growing), or make them unlockable under reaching certain lvl or achievement.
