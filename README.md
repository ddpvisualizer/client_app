# Client App for Disease Control and Prevention Visualizer

The goal of this project is to create a client for retrieving data from [DDP API Server](https://github.com/ddpvisualizer/api_server) and show it in a nice ui.

### Technology stack
* It is running in ReactJS+Redux+Radium. NodeJS+Webpack environment. Axios for api calls.
* Completely done with Redux, no local state in components, all props.
* You can see a live demo at https://dppvisualizer.herokuapp.com/

![preview](https://i.imgur.com/KfmdRHO.png)

### Things to improve
* Add unit testing
* Add linter
* Use LocalStorage to avoid retrieving the same data many times
* Add reselect to avoid processing many times the same function, for example `getCounties()` from `toolbar.jsx`

### Total time it took (8h)
1. Set Up environment and redux base architecture (1h)
2. Add toolbar with search and tab list (2h)
3. Add visualizer with chartjs (2h)
4. Implement all controlles/reducers/actions and api calls (2h)
5. Deploy to heroku (1h)
