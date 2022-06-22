import React from "react"

const Form = (props) => {
    return(
        <div>
            <section id="header-sec" >
                <div className="container-fluid">
                    <div style={{textAlign:"center "}}>
                        <img alt="" src="assets/images/logo.png"/>
                    </div>
                    <div className="join-community" style={{backgroundColor:"transparent", border:"0"}}>
                        <form onSubmit={props.createUser}>
                            <div className="form-group">
                                <input type="Artist Name" name="" placeholder="Artist Name" onChange={(e)=>{props.setNewName(e.target.value)}}/>
                            </div>
                            <div className="form-group">
                                <input type="Title" name="" placeholder="Title" onChange={(e)=>{props.setNewTitle(e.target.value)}}/>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    )
}


export default Form