import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class Sobre extends Component{
    render(){
        return (
            <div className="col-lg-12">
                <div className="col-lg-6" >
                <Plot
                    data={[
                    {
                        x: [1, 2, 3],
                        y: [2, 6, 3],
                        type: 'scatter',
                        mode: 'lines+points',
                        marker: {color: 'red'},
                    },
                    {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                    ]}
                    layout={ {width: 500, height: 500, title: 'A Fancy Plot',plot_bgcolor:"#7F7F7F",paper_bgcolor:"#FFF3"} }
		    onClick={(data) => {
		    	  let pts= '';
			  for(let i=0; i <  data.points.length; i++){
			    pts = 'x = '+data.points[i].x + '\ny = '+
			    data.points[i].y.toPrecision(4) + '\n\n';
			  }
			  alert('Clorest point clicked:\n\n'+pts);
		    	}
		    }
                />
                </div>
                <div className="col-lg-6">
                <Plot
                    data={[
                    {
                        x: ['2019-06-04 22:23:00','2019-06-06 22:23:00','2019-06-24 22:23:00'],
                        y: [2, 6, 3],
                        type: 'scatter',
                        //mode: 'lines+points',
                        marker: {color: 'red'},
                    },
                    {type: 'line', x: ['2019-06-04 22:23:00','2019-06-06 22:23:00','2019-06-24 22:23:00'], y: [2, 5, 3]},
                    ]}
                    layout={ {title: 'A Fancy Plot',width: 500, height: 500} }
		     onClick={(data) => console.log(this.props.width)}
                />
                </div>
		   <div className="col-lg-6">
                <Plot
                    data={[
                    {
                        values: [19, 26, 55],
                        type: 'pie',
			labels: ['Residential','Non-Residential','Utility']
                        //mode: 'lines+points',
                    },
                    ]}
                    layout={ { title: 'A Fancy Plot'},{responsive: true} }
                />
                </div>
             </div>
        );
    };
};
export default Sobre;
