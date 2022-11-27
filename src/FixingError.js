import React from 'react';


class FixingError extends React.Component {
    state = {
      quotes: null
    };
    componentDidMount() {
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
        .then(res => res.json())
        .then(data => {
          // console.log(data);
          this.setState({
            quotes: data.quotes
          });
        });
      // console.log(this.state.quotes);
    }
    randomQuoteHandler = () => {
      const randNumb = Math.floor(Math.random() * this.state.quotes.length);
      const randomQuote = this.state.quotes[randNumb];
      this.setState({
        quotes: randomQuote
      });
      console.log(this.state.quotes);
    };
    render() {
      return (
        <div>
          <button onClick={this.randomQuoteHandler}>gen</button>
          <p>{this.state.quotes !== null && this.state.quotes.quote}</p>
          <p> {this.state.quotes !== null && this.state.quotes.author}</p>
        </div>
      );
    }
  }

  export default FixingError;