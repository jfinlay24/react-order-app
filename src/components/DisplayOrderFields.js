import React from "react";
import "../style.css"

function DisplayOrderFields({ fullname, selectedPizza }) {


    return (
        <div class="display-order">
            <h5>
                Full name: {fullname}
            </h5>
            <h5>
                Pizza Choice: {selectedPizza}
            </h5>
            <textarea
                //value={commentInput} 
                placeholder="Any Comments?"
            //onChange={(e) => inCommentInputChange(e.target.value)}
            >
            </textarea>
            <h5>
                <button>
                    Submit Order
                </button>
            </h5>
            
        </div>
    )
}
export default DisplayOrderFields