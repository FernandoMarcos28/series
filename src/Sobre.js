import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class Sobre extends Component{
    render(){
        return (
            <div className="col-lg-6">
                <div >
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
             </div>
        );
    };
};
export default Sobre;