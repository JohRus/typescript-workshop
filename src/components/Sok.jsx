import React from 'react';
import { connect } from 'react-redux';
import { lagre, SOK_PENDING } from '../ducks/reducer';
import * as Api from '../api';

const Sok = (props) => {
    const submit = (event) => {
        event.preventDefault();
        props.doSok(event.currentTarget.nokkelord.value);
    };

    return (
        <section className="container">
            <form onSubmit={submit} className="createNew">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="input-group">
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="submit">Søk</button>
                            </span>
                            <input type="text" name="nokkelord" className="form-control" placeholder="Søk etter eier av idrettsannlegg"/>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        doSok: (eier) => {
            dispatch({ type: SOK_PENDING });
            Api.sok(eier)
                .then(((res) => dispatch(lagre(res))))
                .catch(err => console.error(err));
        }
    };
};
export default connect(null, mapDispatchToProps)(Sok);
