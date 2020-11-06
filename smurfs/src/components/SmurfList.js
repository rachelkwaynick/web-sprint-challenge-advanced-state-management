import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../store/actions'

const SmurfList = (props) => {
    useEffect(() => {
        props.fetchSmurfs();
    }, [props.newSmurf]);

    return (
        <div>
            <h2>Smurf List</h2>

            {
                props.isLoading ? <p>Loading Smurfs</p> : null
            }
            {
                props.error ? <p>{props.error}</p> : null
            }

            {
                props.smurfs.map((smurf, idx) => {
                    return (
                        <div
                            key={idx}
                        >
                            <h4>{smurf.name}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfsData,
        error: state.error,
        newSmurf: state.loadNewSmurf
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);