import React, { Component } from 'react';
import * as math from 'mathjs';

import Header from './Header/Header';
import Input from './Input/Input'
import Messages from './Messages/Messages';
import './App.css';

class App extends Component {

  botName = "gotoAndBot";

  state = {
    messages: [
      {
        text: `Hello, my name is ${this.botName} and I know the following commands: /weather and /calc (i.e. /weather tartu, /calc 5+5)`,
        username: this.botName,
        date: new Date()
      }
    ],
    username: "Me"
  }

  componentDidUpdate(prevState) {
    //uute sõnumite lisamisel näidatakse automaatselt uusimaid sõnumeid
    if (prevState.messages !== this.state.messages) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }

  weatherHandler = async (location) => {
    //otsin APIst vastavat asukohta ning kuvan info või annan kasutajale teada vigase sisendi kohta
    //(response.cod on ühel juhul antud stringina, teisel arvuna, see on API kala)
    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=b726b1f2856f8f8529633a409e58de2e`);
    const response = await apiCall.json();
    if (response.cod === 200) {
      this.addNewMessage(`Weather currently in ${response.name}, ${response.sys.country}: 
      ${response.weather[0].main}, ${response.main.temp}°C`, this.botName)
    }

    else if (response.cod === "404") {
      this.addNewMessage("I don't know that location!", this.botName);
    }
  }

  messagesHandler = (message) => {
    //kontrollin, mida kasutaja kirjutas ning käitun vastavalt
    if (message.substring(0, 8).toLowerCase() === "/weather") {
      var loc = message.substring(8, message.length);
      this.weatherHandler(loc);
    } else if (message.substring(0, 5).toLowerCase() === "/calc") {
      var expression = message.substring(5, message.length);
      try {
        //siin kasutan mathjs-i meetodit eval, mis teeb täpselt seda, mis ülesandes palutud
        //(arvutab kasutaja sisendist ehk stringist tulemuse)
        var out = math.eval(expression);
        this.addNewMessage(`The answer is: ${out}`, this.botName);
      }
      catch (err) {
        this.addNewMessage("I'm sorry, I didn't quite understand that, please type your input in a style like: '/calc 5+5'", this.botName);
      }
    } else {
      this.addNewMessage("I'm sorry, I can't understand simple text, please use /weather or /calc", this.botName);
      //Siia lisaksin chatbot API calli, mis vastaks juhul,
      //kui kasutaja sõnum ei alga etteantud käsuga.
    }
  }

  addNewMessage = (message, user) => {
    //kuna muudan tihti state, aga alati sama loogika põhjal, siis tegin selleks funktsiooni
    this.setState((prevState) => {
      return {
        messages: [...prevState.messages, {
          text: message,
          username: user,
          date: new Date()
        }],
      }
    });
  }

  onSendMessage = (message) => {
    //kõigepealt kuvan kasutaja sisestatud sõnumi vestluses
    //ning siis hakkan seda sisendit uurima ja vastavalt käituma
    if (message) {
      this.addNewMessage(message, this.state.username);
      this.messagesHandler(message);
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Messages
          messages={this.state.messages}
          currentUser={this.state.username}
        />
        <Input
          onSendMessage={this.onSendMessage}
        />
      </div>
    );
  }
}

export default App;