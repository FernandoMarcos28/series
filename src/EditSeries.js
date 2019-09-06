import React, { Component } from 'react';
import api from './Api';
import { Redirect } from 'react-router-dom'

const statuses = {
    'watched':'Assistido',
    'watching':'Assistindo',
    'toWatch':'Assistir'
}

class EditSeries extends Component{
    constructor(props){
        super(props)
    
        this.state = {
          genres: [],
          isLoading: false,
          redirect: false,
          series: {}
        }
        this.saveSeries = this.saveSeries.bind(this);
    }
    componentDidMount(){
        this.setState({ isLoading: true })
        //setInterval(()=> this.setState({ count: this.state.count+1 }), 1000)
        api.loadSeriesById(this.props.match.params.id).then((res) =>{ 
            this.setState({ series: res.data });
            this.refs.comments.value = this.state.series.comments;
        });
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
            id: this.props.match.params.id,
            name: this.refs.name.value,
            status: this.refs.status.value,
            genre: this.refs.genre.value,
            comments: this.refs.comments.value
        }
        api.updateSeries(NewSeries).then((res) => {
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
                <h1>Editar Série</h1>
                <form>
                    <div className="col-lg-12">
                        <span className="pull-left">Nome:</span> <input ref='name' defaultValue={this.state.series.name} type="text" className="form-control" />
                    </div><br />
                    <div className="col-lg-6">
                        <span className="pull-left">Status:</span>
                        <select className="form-control" defaultValue={this.state.series.status} ref='status'>
                            {   Object
                                .keys(statuses)
                                .map( key => <option key={key} value={key}>{statuses[key]}</option>)
                            }
                        </select>
                    </div>
                    <div className="col-lg-6">
                        <span className="pull-left">Genêros:</span> 
                        <select className="form-control"  defaultValue={this.state.series.genre} ref='genre'>
                            {   this.state.genres
                                .map( key => <option key={key} value={key}>{key}</option>)
                            }
                        </select>
                    </div><br />
                    <div className="col-lg-12">
                        <span className="pull-left">Comentários:</span> <textarea className="form-control"  defaultValue={this.state.series.comments} ref='comments'></textarea><br />
                    </div>
                    <div className="col-lg-12">
                        <button type="button" onClick={this.saveSeries} className="btn btn-primary pull-left" >Salvar</button>
                    </div>
                </form>
            </section>
        ); 
    }
}
export default EditSeries;