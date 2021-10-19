# YOU-DO Todo App! [![Netlify Status](https://api.netlify.com/api/v1/badges/be269320-4f8f-4850-9853-0f597f4cf1d7/deploy-status)](https://app.netlify.com/sites/git-some-hiphop-pizza-wangs/deploys)

## [View Site]()
## Get Started:

```javascript
 $ git clone git@github.com:marybethhunter/YOU-DO-react.git
 $ cd YOU-DO-react
```

## About the User
* This app was created for a user who needs a way to keep up with all of their to-do tasks. Once logged in with Google, a user can add, edit, and delete todos as needed.


## Features: 
#### **CRUD**: 
* The user can create, read, update, and delete all todos. 
* The user can mark todos as completed and see all completed todos separate from the incomplete todos.
* There is a third view showing all todos, both completed and incompleted. 
#### **Authentication**: 
* All users will have to log in to the app with Google.

### [Loom video walkthrough]()

## Relevant Links:
* [Figma Wireframe](https://www.figma.com/file/4YVF79vgSfeSj0H1G9HYDy/YOU-DO-MVP?node-id=3%3A2)
* [Technical Flowchart](https://docs.google.com/presentation/d/1P8hMbGYM_9V8DNiJBH28TysYQPZvSQaYaqUNi1YcO6c/edit#slide=id.gf36359d9a5_0_0)

## Technology Used:
* React
* Javascript
* Styled Components
* Firebase
* Axios
* Postman

## Code Snippets:

```javascript
    {user ? (
        <>
          <Navigation />
          <Header />
          <TodoForm
            obj={editItem}
            setTodos={setTodos}
            setEditItem={setEditItem}
          />
          <Routes todos={todos} setTodos={setTodos} setEditItem={setEditItem} />
        </>
      ) : (
        <SignIn user={user} />
    )}
```

## Screenshots:

### Contributors: [Mary Beth Hunter](https://github.com/marybethhunter)
