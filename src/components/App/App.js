import React from 'react'
import Page from '../Page'

const styles = require('./App.css')

class App extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <h1 className={styles.main__h1}>Some Form</h1>
        <Page />
      </div>
    )
  }
}

export default App;
