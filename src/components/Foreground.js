
import React from 'react'
import { useEffect } from 'react'
import {connect} from 'react-redux'
import BgImage1 from '../images/stage1.png'
import BgImage2 from '../images/stage2.png'
import BgImage3 from '../images/stage-03.png'
import BgImage4 from '../images/stage-04.png'
import BgImage5 from '../images/stage-05.png'


const Foregournd = ({x,score}) => {

  if (score <=1000) {
    return ( 
        <div
            style={{
            position: "absolute",
            left: x,
            width: 100000,
            height: 600,
            transition:'left 100ms',
            background: `url(${BgImage1})`,
            overflow: 'hidden'
            }}>

        </div>
     );
  }else if(score <=2000){ 
    return ( 
        <div
            style={{
            position: "absolute",
            left: x,
            width: 100000,
            height: 600,
            transition:'left 100ms',
            background: `url(${BgImage2})`,
            overflow: 'hidden'
            }}>

        </div>
     );
}else if(score <=3000){ 
    return ( 
        <div
            style={{
            position: "absolute",
            left: x,
            width: 100000,
            height: 600,
            transition:'left 100ms',
            background: `url(${BgImage3})`,
            overflow: 'hidden'
            }}>

        </div>
     );
}else if(score <=4000){ 
    return ( 
        <div
            style={{
            position: "absolute",
            left: x,
            width: 100000,
            height: 600,
            transition:'left 100ms',
            background: `url(${BgImage4})`,
            overflow: 'hidden'
            }}>

        </div>
     );
}else{ 
    return ( 
        <div
            style={{
            position: "absolute",
            left: x,
            width: 100000,
            height: 600,
            transition:'left 100ms',
            background: `url(${BgImage5})`,
            overflow: 'hidden'
            }}>

        </div>
     );
}
    
}
 
const mapStateToProps = ({foreground, stats}) => ({x: foreground.x, score: stats.score})
const mapDispatchToProps = {} 
 
export default connect(mapStateToProps, mapDispatchToProps)(Foregournd);