import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        name: 'sampathvarmamudunuri',
        role: 'Personal Blog',
        bio: 'Software Architech & Minimalist',
        status: [
          { label: 'Posts', value: 6 },
          { label: 'Followers', value: 223 },
          { label: 'Following', value: 261 }
        ]
      }
    };
  }

  render() {
    const { data } = this.state;
    const BASEURL = import.meta.env.BASE_URL; // works with Vite base config[web:15]

    return (
      <div className="app">
        <div className="profile">
          {/* put default.png inside public/ */}
          <img src={BASEURL + 'default.png'} alt="profile" />
          <div className="info">
            <p className="name">{data.name}</p>
            <p className="role">{data.role}</p>
            <p className="bio">{data.bio}</p>
            <button className="follow">Follow</button>
            <button className="message">Message</button>
          </div>
        </div>

        <div className="status">
          {data.status.map((d) => (
            <div className="info" key={d.label}>
              <p className="value">{d.value}</p>
              <p className="label">{d.label.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;