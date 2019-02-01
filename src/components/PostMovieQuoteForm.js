import React from 'react';
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './Successmessage';

class PostMovieQuoteForm extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            movieQuote: {
                quote:'',
                movie:'',
                character:''
            }
        };
    }
    handleChange = (e)=> {
        this.setState({
            movieQuote:{
            ...this.state.movieQuote,
            [e.target.name]: e.target.value
            }
        });
    };
    render(){
        //console.log(this.state.movieQuote);
        return(
            <div className="quotes-form">
                <h2> Post (Add) A New Quote </h2>
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
                     {this.props.postErrorMessage? (
                        <ErrorMessage message={this.props.postErrorMessage}/> ) : null }
                        {this.props.postSuccessMessage ? (
                        <SuccessMessage message={this.props.postSuccessMessage}/> ) : null}
                    <button type= "submit" className="quotes-btn" > Post Quote </button>
                   
                </form>
            </div>
        );
    };
}

export default PostMovieQuoteForm;