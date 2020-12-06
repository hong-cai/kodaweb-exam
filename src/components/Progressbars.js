import React from 'react';
import SingleBar from 'SingleBar';


export default function Progressbars() {
    const bars=[
        {color:'#cdcdcd',percentage:'15%',title="Lorem ipsum"},
        {color:'#df614a',percentage:'18%',title="Lorem ipsum dol"},
        {color:'#b6cd37',percentage:'20%',title="Lorem ipsum dolor"},
        {color:'#2E8ADD',percentage:'23%',title="Lorem ipsum dolor sit"},
        {color:'#087A6E',percentage:'28%',title="Lorem ipsum dolor sit amet"},
        {color:'#D0922B',percentage:'32%',title="Lorem ipsum dolor sit amet consec"}
    ];

    useEffect(() => {
        window.addEventListener('', () => {});
      
        // returned function will be called on component unmount 
        return () => {
          window.addEventListener('DOMContentLoaded', (e) => {

          })
        }
      }, [])

    return (
        <section id="services" className="container-fluid">
            {
                bars.map((bar,index)=>{
                    <SingleBar key={index} bar />
                });
            }
        </section>
    )
}
