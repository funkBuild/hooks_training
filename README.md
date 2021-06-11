# Further reading

https://reactjs.org/docs/hooks-intro.html

https://hackernoon.com/deconstructing-the-magic-behind-react-hooks-33ca987e5307

# Sample TODO app using hooks and contexts

This sample app uses `create-react-app` [https://github.com/facebook/create-react-app] to setup the React environment. 


# Dev environment

```
# Install dependancies
yarn

# Run the dev server
yarn run start
```

# Example branches

`example1_usestate`
Example of using useState with a basic form to store state at a component level

`example2_useeffect_usecallback`
Example of using useEffect for making a custom hook for detecting keypresses and running a callback created from a useCallback hook.

`example3_useref`
Example of using useRef for holding a reference to an element and using the reference inside a callback function

`example4_usecontext`
Example of using useContext to implement navigation tabs and showing content conditionally

`example5_usememo`
Example of using useMemo to memoize a simple calculation

`example6_usecontext_state`
Example of using useContext to store the app state and save it in the browsers localstorage
