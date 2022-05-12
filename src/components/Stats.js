import {connect} from 'react-redux'

const Stats = ({score,username}) => {
    console.log("HHHSHSHSH")
    
    console.log({username})
    return ( 
        <>
        <div className="stats"
            style={{position: 'relative', left: '50%', top: '100%', transform: 'translate(-50%, -130%)', backgroundColor: 'gray', paddingLeft:5, height: 53, width: 120, borderRadius:5, border: 'darkblue 2px solid'}}
        >
            <p style={{fontFamily: 'inherit', fontWeight: 'bold', fontSize: 20, textAlign: 'center', margin: 0}}><span style={{color: 'darkblue'}}>Score:</span><br/><span style={{color:'#fff'}}>{score}</span></p>
        </div>
        <div>
        </div>
        </>
     );
}

const mapStateToProps = ({stats}) => ({score: stats.score})
const mapDispatchToProps = {}
 
export default connect(mapStateToProps, mapDispatchToProps)(Stats)