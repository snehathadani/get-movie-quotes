import React from 'react';

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
                    [e.target.name]: e.target.value
                }
            }
        )
    }
    render () {
        return (
            <div>
                <h2>  Delete (Delete) A Quote </h2>
                <form>
                    <input 
                    type="text"
                    name="Quote"
                    placeholder="Quote"
                    onChange= {this.handleChange}
                    value= {this.state.movieQuote.quote}
                    
                   
                    />
                     <input 
                    type="text"
                    name="Character"
                    placeholder="Character"
                    onChange= {this.handleChange}
                    value= {this.state.movieQuote.character}

                    />
                    <input 
                    type="text"
                    name="Movie"
                    placeholder="Movie"
                    onChange= {this.handleChange}
                    value= {this.state.movieQuote.movie}

                    />
                    <button> Delete Quote </button>
                </form>
            </div>
        );
    };
}

export default DeleteMovieQuoteForm; 