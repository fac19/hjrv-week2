# DIRECT QUOTE: The Game!

![fun](https://media.giphy.com/media/YJ5OlVLZ2QNl6/giphy.gif)

---

### We made a game

![game](https://media.giphy.com/media/1pAhncsuyFjcixgtLY/giphy.gif)

---

### Demo

![any key](https://media.giphy.com/media/citBl9yPwnUOs/giphy.gif)

---

### The future

- Using more APIs somehow (GIFs!)
- Background music
- Nicer CSS theme & colours

---

## How it works

![oz wizard](https://media.giphy.com/media/3L8k2sJ2DwEZG/giphy.gif)

---

### Code flow

- APIs

```javascript
function getQuote(searchString, callback, errorHandler){
    //"fetch" stuff here
}

//on the click:
getQuote(searchInput.value, findAWord, handleErrors);
```

```javascript
function getSynonym(obj, callback, errorHandler){
    //"fetch" stuff here
}

//called within findAWord:
getSynonym(obj, updateScreen, handleErrors);
```

---

### Code flow
- Promises + callbacks

---

### Code flow
- Buttons
![buttons](https://media.giphy.com/media/144AvcWy0GA5Vu/giphy.gif)

---

### Known bugs
![bugs](https://media.giphy.com/media/3o6gE2LfcxozwGwTbq/giphy.gif)

---

- Poor word picking function 
- innerHTML
- Keys
- console.log()
- Media query interference 
- Duplication and for loops

---

## Learnings

![Learning](https://media.giphy.com/media/yDYAHbqe5DfyM/giphy.gif)

---

### Hettie

![mermaid](https://media.giphy.com/media/3NvOxw6e6b9cI/giphy.gif)
- APIs and Callbacks
- Debugging

---

### Vatsal

![Vatsal](https://media.giphy.com/media/khLvUp0m3BgsM/giphy.gif)

---

#### Being Scrum-servant

- Supportive and reflective team
- Feedback: standups too long/need to be more pushy/better time management. 
- Focus more on learning outcomes in discussions (so everyone is learning what they want to).
-  Better pair programming/more commits. (e.g. swap driving within a single feature...swap every hour).

---

### Roger

![Roger](https://media.giphy.com/media/kudIERso2pFiE/giphy.gif)

---

#### Fetch is the new kid in town

Lots of API's still give examples using XMLHttpRequest and CURL

The important details to extract are the "request headers"...

```javascript
    xhttp.setRequestHeader("Content-type", "application/json");
```

```javascript
    fetch("<api url>", {
        headers: {
            "Content-type": "application/json"
        }
    })
```

---

#### How to retry???

It's was not clear how to loop when flowing one function into another.

We noticed another team solved that with Async/Await

This allowed them to use things like while loops that contained async functions.

---

### Jack
![Jack](https://media.giphy.com/media/l1J9MR0jbVegL9RiE/giphy.gif)

---

#### Much planning, very  relax

- Agreeing on issues
- Mobbing pull requests
- Project kanban board

---

![kanban](https://i.imgur.com/0FQo6L4.png)

---

#### Asyncronous JavaScript
![fetch](https://media.giphy.com/media/SUgOYsXqmexxe/giphy.gif)

---

![sagrada height="30px"](https://images.adsttc.com/media/images/5cff/5ec5/284d/d16d/6a00/1111/slideshow/1.jpg =450x500)
- It's just like building a cathedral
