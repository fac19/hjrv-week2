let ANSWER = "";

const searchForm = document.getElementById("search"); //might need to change to "search"
searchForm.onsubmit = submitHandler; //.onsubmit is a browser event that allows the form to be submitted by clicking the button (or pressing "enter")

function submitHandler(event){
    event.preventDefault();
    const searchInput = document.getElementById("searchInput"); // change to search Input
    document.getElementById("quoteText").innerHTML = "Searching for quotes...";
    getQuote(searchInput.value, findAWord, handleErrors);
}

function getQuote(searchString, callback, errorHandler){
    console.log("Searching API for ", searchString);
    initObject = { 
        headers : {'X-TheySaidSo-Api-Secret':'OtEYEgN0fx1d3lDOJYVWFweF'} //API key
    }
    searchParams = "minlength=60&maxlength=150&sfw=True";   //determines legnth of quote (need to fix sfw/"no swear word" bug)
    fetch(`http://quotes.rest/quote/search.json?${searchParams}&query=${searchString}`, initObject)
    .then(dieIfBadResponse)  // the object fetch returns should have a property .ok
    .then(decodeJSON)        // we need to run the .json() method on the raw object
    .then(getFirstQuote)     // we need the first element of the Array at object.contents.quotes
    .then(getQuoteAndAuthor) // we need to return author and quote in our own object
    .then(callback)          // we need to call the callback with the object we received
    .catch(errorHandler);    // we need to do something with any errors objects we get
}

function dieIfBadResponse(response) {
    if (response.ok) {
        return response
    }  else {
        throw new Error("Response not OK")
    }
}

function decodeJSON(goodResponse) {
    return goodResponse.json();   //outputs JS object. 
}

function getFirstQuote(jsonResponse) {
    return jsonResponse.contents.quotes[0]; 
    //.contents.quotes gives an array of objects, 
    //.contents.quotes[0] gives the first object in that array
}

function getQuoteAndAuthor(quoteObject) {
    return {author: quoteObject.author, quote: quoteObject.quote};
    // The quotes object contains a lot of info, we process the require info in getQuoteAndAuthor
    // returns object with relevant info from th quote (i.e. the author and the quote itself)
}

function log(data){
    console.log("DATA:", data);
    return data;
}

function handleErrors(error) {
    console.log(error.message);
    document.getElementById("quoteText").innerHTML = error.message;
    throw error;
} 

function findAWord(object){
    var quoteArray = object.quote.split(" "); // split into word array
        var selectedWord; // set new word
        
          for (let i=0; i<quoteArray.length; i++){
            //longer than 3 letters, not a proper noun, does not include '
            if ((quoteArray[i].length > 5) && (quoteArray[i].slice(0,1) !== quoteArray[i].slice(0,1).toUpperCase()) && (quoteArray[i].indexOf(`'`) === -1)) {
              selectedWord = quoteArray[i];
              object.indexOfChangedWord = i;
            }
          }

        selectedWord = selectedWord.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
          
        //ensures words are not plural.
        if (selectedWord.slice(-1) === 's' && selectedWord.slice(-2, -1) !== 's') {
            selectedWord = selectedWord.substring(0, selectedWord.length-1);
        }
       
        //append selectedWord to object
        object.answer = selectedWord;
        getSynonym(object, updateScreen, handleErrors);
}

function getSynonym(obj, callback, errorHandler){
    let paramsObject =
    { // Searching the word
      "method": "GET",  // Our request is for information only
      "headers":
          { // Request headers
              "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
              "x-rapidapi-key": "2cca6266d8mshb27e3afc60047d3p1a5a0cjsn2ac41949f557" // Access key
          } 
    }
    fetch("https://wordsapiv1.p.rapidapi.com/words/" + obj.answer + "/synonyms", paramsObject) 
    .then(response => response.json()) // Get JSON when available
    .then(data => {
        // data.synonyms is an array of all synonyms.
        let synonyms = [ data.synonyms[0], data.synonyms[1], data.synonyms[2] ];
        obj.synonyms = synonyms;
        console.log("synonym obj", obj); 
        callback(obj);
    })
    .catch(errorHandler);
}

function randomInt(min, inclusiveMax) {
    min = Math.ceil(min);
    inclusiveMax = Math.floor(inclusiveMax);
    return Math.floor(Math.random() * (inclusiveMax - min + 1)) + min;
}

function updateScreen(obj){
    // The final step!!!
    // Goodbye Async!!!
    // Back to lovely straightforward procedural programming :)

    // Save the answer to a good old fashioned global variable!
    // console.log( "Answer is:", obj.answer );
    ANSWER = obj.answer;

    // Create a version of the quote string with the answer missing.
    let quoteString = obj.quote.replace(obj.answer, "??????");
    console.log( quoteString );
    
    // Make an new array containing choices
    // If there's time (there probably isn't) the ordershould be randomised.
    let choices = [...obj.synonyms];
    // Add correct answer at a random location 0 .. 3
    let insertPoint = randomInt(0,3);
    choices.splice(insertPoint, 0, obj.answer);
    console.log( "CHOICES:", choices );

    document.getElementById("quoteText").innerHTML = quoteString;
    
    document.getElementById("answerButtonOne").innerHTML = choices[0];
    document.getElementById("answerButtonTwo").innerHTML = choices[1];
    document.getElementById("answerButtonThree").innerHTML = choices[2];
    document.getElementById("answerButtonFour").innerHTML = choices[3];

    // Update the relevant elements on screen
    // console.log("Pretending to update the screen with the data within this object:", obj);

}
