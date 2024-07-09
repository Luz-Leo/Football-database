import { Fragment } from "react";
import "./Overlay.css";
import '../../index.css'

export function Overlay({ isOpen, onClose, id }) {

    const deleteUser = (id) => {
        fetch(`/player/${id}`, {
            method: "DELETE",
        })
            .then(response => response.json())

        onClose = !onClose
    }

    return (
        <Fragment>
            {isOpen && (
                <div className="overlay">
                    <div className="overlay__background" onClick={onClose} />
                    <div className="overlay__container">
                        <div className="overlay__controls">
                            <button
                                className="overlay__close"
                                type="button"
                                onClick={onClose}
                            />
                        </div>
                        
                        <button type='button' className="btn" onClick={onClose}>Cancel</button>
                        <button type='button' className="btn" style={{color:"red"}} 
                        onClick={()=>{
                            deleteUser(id)
                        }}>Delete {id}</button>
                    </div>
                </div>

            )}
        </Fragment>
    );
}

export default Overlay;