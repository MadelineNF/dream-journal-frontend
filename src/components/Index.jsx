import React, { Component } from 'react';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';

class Index extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <div className="landing">
          <h1>Dream Journal</h1>
          <h3>&nbsp;Dream Journal is a react-rails project made by Madeline Nelson-Folkersen. This is a place to record your dreams in an easy to use and anonymous format.</h3>
          <h2>What are dreams?</h2>
          <p>&nbsp;Although there are several theories about what dreams are and why we dream, there is no consensus on any of them. Studies have shown that dreams are a neccessary function to aid in mental health, are a gateway to the subconcious mind, or are a way for us to act out desires that society would deem anti-social.
          <br/>
          &nbsp;Dreams can be broken down in to different categories; Daydreams, Nightmares, Pleasant Dreams, Lucid Dreams, and Recurring Dreams.
          <br/>
          &nbsp;A daydream is a short-term detachment from one's immediate surroundings, during which a person's contact with reality is blurred and partially substituted by a visionary fantasy, especially one of happy, pleasant thoughts, hopes or ambitions, imagined as coming to pass, and experienced while awake.
          <br/>
          &nbsp;A nightmare, also called a bad dream, is an unpleasant dream that can cause a strong emotional response from the mind, typically fear but also despair, anxiety and great sadness. The dream may contain situations of discomfort, psychological or physical terror or panic. Sufferers often awaken in a state of distress and may be unable to return to sleep for a small period. A pleasant dream would be the opposite of a nightmare.
          <br/>
          &nbsp;A lucid dream is a dream during which the dreamer is aware of dreaming. During lucid dreaming, the dreamer may be able to exert some degree of control over the dream characters, narrative, and environment.
          </p>
        </div>
      </div>
    );
  }
}

export default Index;
