import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <>
            <div className="row justify-content-center p-lg-5" >
                <div className="col-4">
                    <figure>
                        <blockquote className="blockquote">
                            <p>{props.content}</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            <NavLink to="" class="btn btn-primary">{props.btnname}</NavLink>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-4">
                    <img src={props.imgsrc} alt="Home image" className="img-fluid" />
                </div>
            </div>
        </>
    );
}

export default Common;