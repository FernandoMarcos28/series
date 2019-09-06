import React, { Component } from 'react';
import api from './Api';
import { 
    Redirect,
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import ReactFileUpload from './ReactFileUpload';

const statuses = {
    'watched':'Assistido',
    'watching':'Assistindo',
    'toWatch':'Assistir'
}

class NewSeries extends Component{
    constructor(props){
        super(props)
    
        this.state = {
          genres: [],
          isLoading: false,
          redirect: false
        }
        this.saveSeries = this.saveSeries.bind(this);
    }
    componentDidMount(){
        this.setState({ isLoading: true })
        //setInterval(()=> this.setState({ count: this.state.count+1 }), 1000)
       api.loadGenres()
          .then((res)=>{
            this.setState({
              isLoading: false,
              genres: res.data
            })
          })
    }
    saveSeries(){
        const NewSeries = {
            name: this.refs.name.value,
            status: this.refs.status.value,
            genre: this.refs.genre.value,
            comments: this.refs.comments.value
        }
        api.saveSeries(NewSeries).then((res) => {
            this.setState({
                redirect: '/series/'+this.refs.genre.value
            });
        });
    }
    render(){
        return (
          
            <section className="intro-section">
                {   this.state.redirect && 
                    <Redirect to={this.state.redirect} />
                }
                <h1>Nova Série</h1>
                <form>
                    <div className="col-lg-12">
                        <div className="col-lg-6">
                            <div className="col-lg-12">
                                Nome: <input ref='name' type="text" className="form-control" />
                            </div><br />
                            <div className="col-lg-6">
                                Status: 
                                <select className="form-control" ref='status'>
                                    {   Object
                                        .keys(statuses)
                                        .map( key => <option key={key} value={key}>{statuses[key]}</option>)
                                    }
                                </select>
                            </div>
                            <div className="col-lg-6">
                                Genêros: 
                                <select className="form-control" ref='genre'>
                                    {   this.state.genres
                                        .map( key => <option key={key} value={key}>{key}</option>)
                                    }
                                </select>
                            </div><br />
                            <div className="col-lg-12">
                                Comentários: <textarea className="form-control" ref='comments'></textarea><br />
                            </div>
                            <div className="col-lg-12">
                                <button type="button" onClick={this.saveSeries} className="btn btn-primary pull-left" >Salvar</button>
                            </div>
                        </div>
                       
                        <div className="col-lg-6">
                            <ReactFileUpload />
                        </div>
                       
                    </div>
                </form>
            </section>
        ); 
    }
}
export default NewSeries;