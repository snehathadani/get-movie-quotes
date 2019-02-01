import React from 'react';
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './Successmessage';

class PutMovieQuoteForm extends React.Component  {
    constructor(){
        super();
        this.state= {
            movieQuote: {
                quote:'but why is the all rum gone',
                movie:'Pirates of the Carribean',
                character:'jack Sparrow'
            }
        };
    }
    handleChange = (e)=> {
        this.setState({
            movieQuote: {
                ...this.state.movieQuote,
                [e.target.name]: e.target.value
            }
        });
    };
    render() {
        return (
            <div className="quotes-form">
                <h2> Put (Update) AQuote </h2>
                <form>
                    <input 
                    type="text"
                    name="quote"
                    placeholder="Quote"
                    onChange= {this.handleChange}
                    value= {this.state.movieQuote.quote}
                    
                   
                    />
                     <input 
                    type="text"
                    name="character"
                    placeholder="Character"
                    onChange= {this.handleChange}
                    value= {this.state.movieQuote.character}

                    />
                    <input 
                    type="text"
                    name="movie"
                    placeholder="Movie"
                    onChange= {this.handleChange}
                    value= {this.state.movieQuote.movie}

                    />
                     {this.props.putErrorMessage? (
                        <ErrorMessage message={this.props.putErrorMessage}/> ) : null }
                        {this.props.putSuccessMessage ? (
                        <SuccessMessage message={this.props.putSuccessMessage}/> ) : null}
                    <button type= "submit" className="quotes-btn" > Put Quote </button>
                </form>
            </div>
        );
    };
}

export default PutMovieQuoteForm;