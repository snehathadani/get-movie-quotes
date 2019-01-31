import React from 'react';


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
                [e.target.name]: e.target.value
            }
        });
    };
    render() {
        return (
            <div>
                <h2> Put (Update) AQuote </h2>
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
                    <button> Put Quote </button>
                </form>
            </div>
        );
    };
}

export default PutMovieQuoteForm;