import React from 'react'

export default function SingleImg(props) {
    return (
<div class="col-12 col-sm-6 col-md-4">
                        <div class="media single-content">
                            <div class="media-left pull-left">
                                <img src="../../public/image"+${key+1}+".jpg" alt="image${props.key+1}"/>
                            </div>
                            <div class="media-body">
    <p>{props.content.date}</p>
                                <h5>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, perferendis assumenda! Voluptatum nihil suscipit 
                                </h5>
                            </div>
                        </div>
                    </div>
    )
}
