import React from 'react';
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './Successmessage';
class DeleteMovieQuoteForm extends React.Component {
    constructor (props) {
        super (props);
        this.state= {
            movieQuote: {
                quote: '',
                character:'',
                movie:''
            }
        }
    }
    handleChange = (e)=> {
        this.setState (
            {
                movieQuote: {
                    ...this.state.movieQuote,
                    [e.target.name]: e.target.value
                }
            }
        )
    }
    render () {
        return (
            <div className="quotes-form">
                <h2>  Delete (Delete) A Quote </h2>
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
                    {this.props.deleteErrorMessage ? (
                        <ErrorMessage message={this.props.deleteErrorMessage}/>) : null}
                        {this.props.deleteSuccessmessage ? 
                        (<SuccessMessage message={this.props.deleteSuccessmessage}/> ) : null}
                    <button type= "submit" className="quotes-btn" > Delete Quote </button>
                </form>
            </div>
        );
    };
}

export default DeleteMovieQuoteForm; 