import {React , useEffect} from "react"
// import particleJS from "particle.js"

export default function ParticleBg(){

    useEffect(()=>{ 
        console.log('particle js renders')

        window.particlesJS('particle-js',{

            particles : {
                number : {
                    value : 80,
                    density : {enable : true, value_area : 800,}
                },

                color : {
                    value : "#ffffff"
                },
                
                shape : {
                    type : 'circle',
                    stroke : {width : 0, color : '#000000'}
                },

                opacity : {
                    value : 0.5,
                    random : false
                },

                size : {
                    value : 5,
                    random : true
                },

                move : {
                    enable : true,
                    speed : 6,
                    direction : 'none',
                    random : false,
                    straight : false,
                    out_mode : 'out',
                    bounce : false

                }
            },


            interactivity : {
                events : {
                    onhover : {enable : true, mode : 'repulse'}
                },

                mode : {
                    repulse : {distance : 100, duration : 0.4},

                }
            },

            retina_detect : true
        
        
        });

    },[])


    return <div id = 'particle-js' className="absolute top-0 left-0 h-screen w-full ">

    </div>

}