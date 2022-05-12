import React from 'react'
import ObsImage from '../images/books.png'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import obstacle from '../reducers/obstacle'
import { useState} from 'react'




const Input = () => {
    const [name, setName]= useState("")
    const dispatch = useDispatch()
    let nom
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({name})
        dispatch({type:'HH', nom: name})


        

    }
    return (
        <div className='login' style={{position:'absolute'}}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h2>enter ur name</h2>
                <input value={name} placeholder='name' onChange={(e)=>setName(e.target.value)}
                />
                <button type="submit" className='submitButton'> 
                    Submit
                </button>


            </form>
        </div>
       

    
    )
}


const mapStateToProps = ({input}) => ({})
const mapDispatchToProps = {} 
 
export default connect(mapStateToProps, mapDispatchToProps)(Input);
