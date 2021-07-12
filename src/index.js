import React from 'react'
import ReactDOM from 'react-dom'

console.log('Hello World')

function App (){
    return (<div>
        <h1>Say hello to ReactJS</h1>
        <h3>You will learn how to use the most popular frontend library, and become a super Ninja developer</h3>
        <a href=''>Awesome!</a>
        <div> 
            <img src='/images/icon1.png'></img>
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
            <img src='/images/icon2.png'></img>
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
            <img src='/images/icon3.png'></img>
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div>
            <img src='/images/icon4.png'></img>
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on modern browsers</p>
        </div>
    </div>)
}

ReactDOM.render(<App />, document.getElementById('root'));