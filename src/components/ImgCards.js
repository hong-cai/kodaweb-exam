import React from 'react'
import SingleImg from 'SingleImg'

export default function ImgCards() {
    const contents=[
        {"date":"24 May 2017","img-text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate repellendus, officiis"  },
        {"date":"24 June 2018","img-text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate repellendus, officiis"  },
        {"date":"21 March 2018","img-text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate repellendus, officiis"  },
        {"date":"29 March 2018","img-text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate repellendus, officiis"  },
        {"date":"12 May 2019","img-text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate repellendus, officiis"  },
        {"date":"21 May 2020","img-text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate repellendus, officiis"  }
    ]
    return (
        <section id="news" >
            <div class="container-fluid">
                <div class="row">
                    {
                        contents.map((content,key)=>{
                            <SingleImg content key />
                        })
                    }
                </div>
            </div>
        </section>
    )
}
