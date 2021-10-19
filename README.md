# YOU-DO Todo App! [![Netlify Status](https://api.netlify.com/api/v1/badges/c9717a89-ac3d-41b8-aa8b-3913319af247/deploy-status)](https://app.netlify.com/sites/mbh-youdo-react/deploys)

## [View Site](https://mbh-youdo-react.netlify.app/)
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

#### **Categories**:
* The user can assign a category to the incomplete todos upon creation or change the category when updating. 
#### **Authentication**: 
* All users will have to log in to the app with Google.

### [Loom video walkthrough](https://www.loom.com/share/fa8cf64398bf4e39888da0043a9929c2)

## Relevant Links:
* [Figma Wireframe](https://www.figma.com/file/4YVF79vgSfeSj0H1G9HYDy/YOU-DO-MVP?node-id=3%3A2)
* [Technical Flowchart](https://docs.google.com/presentation/d/1P8hMbGYM_9V8DNiJBH28TysYQPZvSQaYaqUNi1YcO6c/edit#slide=id.gf36359d9a5_0_0)

## Technology Used:
* React
* Javascript
* Styled Components
* Firebase
* Axios
* Netlify
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

<img width="579" alt="home page" src="https://user-images.githubusercontent.com/86667443/137927107-bbf7c38c-648d-4232-bf03-0f422a25f991.png">
<img width="516" alt="completed todos" src="https://user-images.githubusercontent.com/86667443/137927126-f906ea6c-3883-450a-9e3f-cf873d867a82.png">

### Contributors: [Mary Beth Hunter](https://github.com/marybethhunter)
