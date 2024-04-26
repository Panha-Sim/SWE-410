import { useState } from "react";

export default function ListGroup(props) {
  
    return(
            <a href="#" class={`list-group-item list-group-item-action ${props.active ? "active":""}`} 
            aria-current="true"
            onClick={props.onClick}
            >

                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{props.address}</h5>
                </div>

                <p class="mb-1">{props.hour}</p>
                <small>{props.phone}</small>

            </a>
    )
  
}
