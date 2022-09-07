<h1 align="center">
    <img alt="Hyperactiv logo" src="https://cdn.rawgit.com/elbywan/hyperactiv/747e759b/logo.svg" width="100px"/>
	<br>
    hyperactiv/react<br>
     <a href="https://www.npmjs.com/package/hyperactiv"><img alt="npm-badge" src="https://img.shields.io/npm/v/hyperactiv.svg?colorB=ff733e" height="20"></a>
    <a href="https://github.com/elbywan/hyperactiv/actions/workflows/ci.yml"><img alt="ci-badge" src="https://github.com/elbywan/hyperactiv/actions/workflows/ci.yml/badge.svg"></a>
    <a href='https://coveralls.io/github/elbywan/hyperactiv?branch=master'><img src='https://coveralls.io/repos/github/elbywan/hyperactiv/badge.svg?branch=master' alt='Coverage Status' /></a>
    <a href="https://github.com/elbywan/hyperactiv/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license-badge" height="20"></a>
</h1>

### A simple but clever react store

Hyperactiv/react is an hyperactiv addon that handles a global state and reacts on change.

With it, you can easily create a reactive global store which re-renders your React components in a smart fashion when the data is touched and only the components that depend on the parts that were modified.

This library also provides hooks that can fetch, normalize and cache data.

## Features

- ☢️ Mutable

*Just mutate the store…*

- ⚡ Reactive

*and it will re-render components that use the part of the store that was touched.*

- 💸 Lightweight

*hyperactiv/react weight around **3KB** minzipped, and is **tree-shakeable** for more savings.*

- 🏗️ Normalized

*Optionally, data can be automatically normalized when fetching data from the network into the store.*

- 🗄️ Request caching

*Caches requests, saves bandwidth and time.*

- 👌 SSR friendly

*SSR is supported out of the box.*

## Minimal Working Example

```js
import { watch, store as createStore } from 'hyperactiv/react'

const store = createStore({ counter: 0 })

const Counter = watch(() =>
  <div>
    <h1>Counter: {store.counter}</h1>
    <button onClick={() => store.counter += 1}>Click me</button>
  </div>
)
```

<img src="assets/counter.gif" alt="counter-gif" height="100">

## Import

```js
// ESM
import { watch, store, ... } from 'hyperactiv/react'
// CommonJS
const { watch, store, ... } = require('hyperactiv/react')
```

And alternatively, if you prefer script tags:

```html
<script src="https://unpkg.com/hyperactiv"></script>
<script src="https://unpkg.com/hyperactiv/dist/react"></script>
```

```js
const { watch, store, ... } = window['react-hyperactiv']
```

### Peer dependencies

`hyperactiv/react` depends on external libraries that need to be installed separately.

```sh
# Obviously
npm i react react-dom
# For all hooks
npm i wretch
# For the useResource and useNormalizedRequest hooks
npm i normaliz
```

## Demo

**[React hooks demo](https://github.com/elbywan/hyperactiv-hooks-demo)**

## Self-contained example

[Hosted here.](https://elbywan.github.io/hyperactiv/mwe/react.html)

```html
<!DOCTYPE html>
<html>
<head>
  <script defer src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
  <script defer src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
  <script defer src="https://unpkg.com/wretch" crossorigin></script>
  <script defer src="https://unpkg.com/normaliz" crossorigin></script>
  <script defer src="https://unpkg.com/hyperactiv/index.js" crossorigin></script>
  <script defer src="https://unpkg.com/hyperactiv/react/index.js" crossorigin></script>
  <script defer src="https://unpkg.com/@babel/standalone/babel.min.js" crossorigin></script>
</head>
<body>
  <div id="root"></div>

  <script type="text/babel">
    // react-hyperactiv was imported with a script tag, so it is defined as a global variable.
    const {
      watch,
      store: createStore,
      useResource,
      setHooksDependencies
    } = window['react-hyperactiv']

    setHooksDependencies({ wretch: window.wretch, normaliz: window.normaliz.normaliz })

    // The global store containing todos.
    const store = createStore({ todos: {} })

    // A component that edits todo n°1 by mutating its properties in the store.
    // Wrapping with watch() is essential, it makes components re-render when the store is updated.
    const EditTodo = watch(function EditTodo() {
      const todo = store.todos[1]
      return !todo ? null :
        <p>
          <input
            value={todo.title || ''}
            onChange={e => todo.title = e.target.value }
          />
          <input
            type='checkbox'
            checked={todo.completed}
            onChange={() => todo.completed = !todo.completed}
          />
        </p>
    })

    // A component that fetches and displays todo n°1 data by reading the store.
    const ViewTodo = watch(function ViewTodo() {
      // Fetch the data from the server, normalize it and store it into the global store.
      // If the data is already in the store, it just reads it.
      const { data: todo, loading, refetch } = useResource(
        'todos',
        'https://jsonplaceholder.typicode.com/todos/1',
        {
          id: 1,
          store
        }
      )
      if(loading)
        return 'Loading'
      return (
        <>
          <p>
            <button onClick={refetch}>
              Re-fetch from server
            </button>
          </p>
          <pre>
            { JSON.stringify(todo, null, 2)}
          </pre>
        </>
      )
    })

    // Render both components.
    const container = document.querySelector('#root')
    ReactDOM.render(<>
      <EditTodo />
      <ViewTodo />
    </>, container)
  </script>
</body>
</html>
```

## Usage

### Store

```js
const myStore = store({
    firstName: 'Igor',
    lastName: 'Gonzola'
})
```

### Higher Order Component: `watch`

```js
// Works with class components…
const App = watch(class extends React.Component {
  render() {
    return (
      { /* Whenever these inputs are changed, the store will update and the component will re-render. */ }
      <div>
        <input
          value={ myStore.firstName }
          onChange={ e => myStore.firstName = e.target.value }
        />
        <input
          value={ myStore.lastName }
          onChange={ e => myStore.lastName = e.target.value }
        />
        <div>
          Hello, { myStore.firstName } { myStore.lastName } !
        </div>
      </div>
    )
  }
})

// Or functional components.
const App = watch(function App() {
    /* … */
})
```

### Declarative Component: `Watch`

The `<Watch render={() => { ... }} />` component watches the render function.

```js
class App extends React.Component {
    render() {
        return (
            <Watch render={() =>
                /* … */
            } />
        )
    }
}
```

### Hooks

Fetches data and cache the result, supports multiple fetch policies and options.
Inspired by [react-apollo](https://github.com/apollographql/react-apollo).


#### setHooksDependencies

Before using the hooks you need to register the dependencies using `.setHooksDependencies`.

*The reason why this method exists (and not done automatically) is to reduce the bundling size and to allow using most of the `hyperactiv/react` features without the need to `npm i` these packages.*

```js
import { setHooksDependencies } from 'hyperactiv/react'
import wretch from 'wretch'
import { normaliz } from 'normaliz'

setHooksDependencies({ wretch, normaliz })
```

#### `useResource`

Fetches one or multiple resource(s) from a url, normalize the payload and insert it into the cache.
If the cache already contain a resource with the same id, will attempt to retrieve the resource from the cache instead of performing the request.
Uses [wretch](https://github.com/elbywan/wretch) and [normaliz](https://github.com/elbywan/normaliz) under the hood.

```js
const {
    data,    // Either a single resource object if the id option is used, or an array of resources.
    loading, // True if a network request is in-flight.
    error,   // Defined if an error was thrown, null otherwise
    refetch  // Call this function to refetch the data from the network
} = useResource(
    // Name of the resource(s), will be inserted in store['entity'].
    'entity',
    // The server route to hit.
    '/entity',
    {
        // Id of the resource to fetch.
        // If omiitted, useResource will expect an array of elements.
        id,
        // Either 'cache-first', 'cache-and-network', or 'network-only'.
        // - cache-first will fetch the data from the store, and perform a network request only when the data is not found.
        // - cache-and-network will fetch the data from the cache, but will perform a network request even if found in the cache.
        // - network-only will always perform a network request without looking in the cache.
        // Defaults to 'cache-first'.
        policy,
        // The hyperactiv store.
        // If omitted, will check if a parent context provides a store.
        store,
        // Normalize options, see https://github.com/elbywan/normaliz for more details.
        // If omitted, an empty schema will be used.
        normalize,
        // An initialized wretch instance, see https://github.com/elbywan/wretch for more details.
        // If omitted, a fresh wretch() will be used.
        client,
        // A function that returns a boolean. If true, the network call is entirely skipped.
        // If omitted, will check if a parent context provides a client.
        skip,
        // A function that takes the client configured with the url as an argument, and can modify it before returning it.
        // Defaults to the identity function.
        beforeRequest,
        // A function that takes the network payload as an argument, and can modify it.
        // Defaults to the identity function.
        afterRequest,
        // A function that returns a serialized string, which will be the key in the store mapped to the request.
        // Default to (method, url) => `${method}@${url}`
        serialize,
        // The name of the store root key that will contained the serialized request keys/payloads.
        // Defaults to '__requests__'
        rootKey,
        // The expected body type, which is the name of the wretch function to apply to response.
        // Defaults to 'json'.
        bodyType,
        // If false, the request will not be performed from the network in ssr mode.
        // Defaults to 'true'.
        ssr
    }
)
```

#### `useNormalizedRequest`

Same as `useResource`, except that it won't try to match the id of the resource in the cache,
and `data` is going to be a slice of the store containing the entities that have been added.

```js
const {
    data,    // A slice of the store that maps to all entities that have been added.
    loading, // True if a network request is in-flight.
    error,   // Defined if an error was thrown, null otherwise
    refetch  // Call this function to refetch the data from the network
} = useNormalizedRequest(
    // The server route to hit.
    '/entity',
    {
        // Either 'cache-first', 'cache-and-network', or 'network-only'.
        // - cache-first will fetch the data from the store, and perform a network request only when the data is not found.
        // - cache-and-network will fetch the data from the cache, but will perform a network request even if found in the cache.
        // - network-only will always perform a network request without looking in the cache.
        // Defaults to 'cache-first'.
        policy,
        // The hyperactiv store.
        // If omitted, will check if a parent context provides a store.
        store,
        // Normalize options, see https://github.com/elbywan/normaliz for more details.
        // If omitted, an empty schema will be used.
        normalize,
        // An initialized wretch instance, see https://github.com/elbywan/wretch for more details.
        // If omitted, a fresh wretch() will be used.
        client,
        // A function that returns a boolean. If true, the network call is entirely skipped.
        // If omitted, will check if a parent context provides a client.
        skip,
        // A function that takes the client configured with the url as an argument, and can modify it before returning it.
        // Defaults to the identity function.
        beforeRequest,
        // A function that takes the network payload as an argument, and can modify it.
        // Defaults to the identity function.
        afterRequest,
        // A function that returns a serialized string, which will be the key in the store mapped to the request.
        // Default to (method, url) => `${method}@${url}`
        serialize,
        // The name of the store root key that will contained the serialized request keys/payloads.
        // Defaults to '__requests__'
        rootKey,
        // The expected body type, which is the name of the wretch function to apply to response.
        // Defaults to 'json'.
        bodyType,
        // If false, the request will not be performed from the network in ssr mode.
        // Defaults to 'true'.
        ssr
    }
)
```

#### `useRequest`

A simpler hook that will cache requests in the store without post-processing.

```js
const {
    data,    // The (potentially cached) payload from the server.
    loading, // True if a network request is in-flight.
    error,   // Defined if an error was thrown, null otherwise
    refetch  // Call this function to refetch the data from the network
} = useRequest(
    // The server route to hit.
    '/entity',
    {
        // Either 'cache-first', 'cache-and-network', or 'network-only'.
        // - cache-first will fetch the data from the store, and perform a network request only when the data is not found.
        // - cache-and-network will fetch the data from the cache, but will perform a network request even if found in the cache.
        // - network-only will always perform a network request without looking in the cache.
        // Defaults to 'cache-first'.
        policy,
        // The hyperactiv store.
        // If omitted, will check if a parent context provides a store.
        store,
        // An initialized wretch instance, see https://github.com/elbywan/wretch for more details.
        // If omitted, a fresh wretch() will be used.
        client,
        // A function that returns a boolean. If true, the network call is entirely skipped.
        // If omitted, will check if a parent context provides a client.
        skip,
        // A function that takes the client configured with the url as an argument, and can modify it before returning it.
        // Defaults to the identity function.
        beforeRequest,
        // A function that takes the network payload as an argument, and can modify it.
        // Defaults to the identity function.
        afterRequest,
        // A function that returns a serialized string, which will be the key in the store mapped to the request.
        // Default to (method, url) => `${method}@${url}`
        serialize,
        // The name of the store root key that will contained the serialized request keys/payloads.
        // Defaults to '__requests__'
        rootKey,
        // The expected body type, which is the name of the wretch function to apply to response.
        // Defaults to 'json'.
        bodyType,
        // If false, the request will not be performed from the network in ssr mode.
        // Defaults to 'true'.
        ssr
    }
)
```

### Context

Can be used in combination with hooks, in order to provide a global `store` and `client`.

```js
import { HyperactivProvider } from 'hyperactiv/react'

/* ... */

<HyperactivProvider store={store} client={client}>
    { children }
</HyperactivProvider>
```

To retrieve the store or the client from a component, you can use the following hooks:

```js
import { useStore, useClient } from 'hyperactiv/react'

const store = useStore()
const client = useClient()
```

In addition, the `watch` higher order component automatically injects the store as a prop when wrapping functional components:

```js
watch(function ({ store }) {
    /* ... */
})
```

### preloadData

Fills-up the store, usually before performing SSR.

```js
import { preloadData } from 'hyperactiv/react'

const store = {} // your store
const jsx = // your jsx root, including an instance of HyperactivProvider with the store
try {
    await preloadData(jsx, {
        // The "depth" property is an optional number that limits the depth of nested queries.
        // Defaults to null, which means unlimited nested queries.
        depth: null
    })
} catch(error) {
    /* bad */
    console.error(error)
}
// store is now filled
```
