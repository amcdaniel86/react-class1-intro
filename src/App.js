import React, { Component } from 'react';
// above, somewhere in Component class, jsx is involved for use inside react apps. requires render functions, a return statement. and within the return statement jsx is expected to interpolate.
import './App.css';
// can import different css files to different components, each one and other components will have different styles.

class App extends Component {
  // rule 1 - all components MUST have a render() function.
  // rule 2 - every render has a RETURN statement.
  // after return( this the "view").
  // view required to be one div. <div> only
  // you can do a div inside of a div, but NEVER can have two separate divs at same level.

  render() {
    const theWord = "Ironhack"

    // array below. get to learn MAP functions
    const randomAnimals = ['Alligator', 'guinea pig', 'wallabee', 'rooster']

    const theDiv =
    
    
    (
      <ul>
    { randomAnimals.map((oneAnimal)=>{
      return <li> {oneAnimal} </li>
    }) }
    </ul>
    ) 

    // map function is standard method used to loop through an array to show stuff on the page.


    (
    <ul> 
    <h5> Random list of animals </h5>
    <li> Alligator </li> 
    <li> guinea pig </li>
    <li> wallabee </li>
    <li> rooster </li>
    </ul>
    )


    // no quotes around it, html can be saved to  a variable. const theDiv
    // you can save a bunch of html inside of a jsx variable with no quotes and interpolate it wherever you want on the page.


    const user = {
      firstName: 'Harper',
      lastName: 'Perez',
      avatarUrl: ''
    };
    // makes first variable to go into formatName function.



  const formatName = (user) => {
    return `${user.firstName} ${user.lastName}`;
  };
  // takes above object into this function.. and spits into below.

  
  const element = (
    <h2>
      Hello, {formatName(user)}!
    </h2>
  );
  // takes above 2 steps and compiles them into html to be styled and placed into the browser.



    
    return (
      <div className="App">
      {/* jsx it's className, NOT class. */}
      {/* href, src, id all same. className replaces class. */}
        
      <img src="business-wolf.jpg"/>
      {/* no / needed at front of image file. */}

      <input type="text"/>
      {/* MUST include that / at the end of self closing tags, img, input, src, a href etc. */}

      <h1> Welcome to my new cool app</h1>

        <h3> this app was made at {theWord}</h3>
        {/* interpolation in jsx */}
        {element}
        {/* taken from above. */}
        {theDiv}

const element = <div tabIndex="0"></div>;

const element = <img src={user.avatarUrl}></img>;
{/* // embedding a js expression in an atribute. */}

{/* // example: we type
  const element = (
  <h1 className="greeting">
      Hello, world!
      </h1>
      );

      how Babel compiles the code.
    const element = React.createElement(
      'h1',
        {className: 'greeting'},
        'Hello, world!'
    );

    React.createElement creates an object similar to this:
    const element = {
      type: 'h1',
      props: {
        className: 'greeting',
        children: 'Hello, world!'
      }
    };
) */}


      </div>
    );
  }
}

export default App;

// ALL COMPONENTS ARE CLASSES for all intents and purposes.

// every component has an App.js.
// component is magical word imported from React package. it is a class.

// interpolate jsx is similar to handlebars in fucntionality. interpolation within the div in react, with one handlebar (curly brace.) {theWord}

