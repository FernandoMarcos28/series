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
                    layout={ {width: 500, height: 500, title: 'A Fancy Plot'} }
                />
                </div>
                <div className="col-lg-6">
                <Plot
                    data={[
                    {
                        x: [1, 2, 3],
                        y: [2, 6, 3],
                        type: 'scatter',
                        //mode: 'lines+points',
                        marker: {color: 'red'},
                    },
                    {type: 'line', x: [1, 2, 3], y: [2, 5, 3]},
                    ]}
                    layout={ {width: 500, height: 500, title: 'A Fancy Plot'} }
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
