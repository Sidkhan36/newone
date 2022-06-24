import React from "react"

const Form = (props) => {

    const callIt = () => {
        alert("Response Submitted! You will be redirected back shortly")
        setTimeout(() => {
            props.setOpenForm(false)
        }, 2000)
        return props.createUser
    }
    return(
            <div className="form-sec">
                <div className="container-fluid">
                    <div style={{textAlign:"center"}}>
                        <img alt="" className="curation-img" src="assets/images/logo.png"/>
                    </div>
                    <div className="join-community" style={{backgroundColor:"transparent", border:"0"}}>
                        {/*<form onSubmit={props.createUser}>*/}
                        <form onSubmit={callIt}>
                            <div className="form-group">
                                <input type="Artist Name" name="" placeholder={props.artistPlaceHolder} onChange={(e)=>{props.setNewName(e.target.value)}}/>
                            </div>
                            <div className="form-group">
                                <input type="Title" name="" placeholder={props.titlePlaceHolder} onChange={(e)=>{props.setNewTitle(e.target.value)}}/>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}


export default Form