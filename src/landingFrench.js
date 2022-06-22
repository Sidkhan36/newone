import  React, {useState} from "react";
import { db } from "./firebase-config";
import {
    collection,
    addDoc,
} from "firebase/firestore";


function LandingFrench(props) {
    const [newEmail, setNewEmail] = useState("");
    const [users, setUsers] = useState(false);
    const usersCollectionRef = collection(db, "users");

    const createUser = async (event) => {
        event.preventDefault()
        console.log(newEmail)
        await addDoc(usersCollectionRef, { email: newEmail });
        setUsers(true)
    };
    return (
        <>
            <main className="main-div">
                <section id="header-sec">
                    <div className="language-flag">
                        <a onClick={props.changeToEnglish}>
                            <img src="assets/images/englishLogo.png" width="50px" height="30px" alt=""/>
                        </a>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-7 col-8">
                                <div className="top-header">
                                    <img alt="" src="assets/images/logo.png"/>
                                    <h1>Vis une experience Unique
                                        avec ton artiste favori</h1>
                                    <p>Fait parti de la communauté des CURATEURS en partageant
                                        ta chanson favorite afin d’avoir l’opportunité d’apparaitre sur
                                        notre playlist.

                                    </p>
                                    <p>
                                        Follow nous sur les réseau et profites de notre
                                        curation quotidienne.
                                    </p>
                                    <ul>
                                        <li><a href="https://www.instagram.com/curationmusic_io/" target="_blank"><img alt=""
                                                                                                                       src="assets/images/white-instagram.png"/></a></li>
                                        <li><a href="https://twitter.com/curation_music" target="_blank"><img alt=""
                                                                                                              src="assets/images/white-twitter.png"/></a></li>
                                        <li><a href="https://open.spotify.com/playlist/0XhMerRi06aHN6ReYZSTqU?si=KTpTXLXWTbSaMEjeUBkHsQ"><img alt="" src="assets/images/spotify.png"/></a></li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-lg-5 col-4">
                                <div className="header-pic">
                                    <img alt="" src="assets/images/slider-banner.png" className="slider-circle"/>
                                    <img alt="" src="assets/images/lady-pic.png" className="lady-pic"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="project">
                    <div className="container">
                        <h3>Le projet</h3>
                        <div className="row">
                            <div className=" col-md-4">
                                <div className="project-inner">
                                    <span><img alt="" src="assets/images/project01.png"/></span>
                                    <h2>Digital Collectible</h2>
                                    <p>L’artiste<strong>partage</strong>sa création sous forme de NFT</p>
                                </div>
                            </div>

                            <div className=" col-md-4">
                                <div className="project-inner" id="project-inner02">
                                    <span><img alt="" src="assets/images/project02.png"/></span>
                                    <h2> Le fan détient la propriété <br/>
                                        de l’oeuvre</h2>
                                    <p>Les fans sont propriétaires<strong>de 100 % du digital collectible</strong>  (Musique/Photo/Clip/Animation...)</p>

                                </div>
                            </div>

                            <div className=" col-md-4">
                                <div className="project-inner">
                                    <span><img alt="" src="assets/images/project03.png"/></span>
                                    <h2>Les fans vivent une experience <br/> avec leurs artistes favoris
                                    </h2>
                                    <p>Grâce au NFT, le fan obtient le droit de vivre une experience unique avec son artiste favori</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="mision">
                    <div className="container">
                        <div className="row">
                            <h2>Mission</h2>
                            <p>Curation aide les artistes à faire face à 3 problèmes</p>
                            <ul>
                                <li><h6><strong>99%</strong> des artistes n’ont aucune rémunaration à travers le streaming</h6>
                                    <img alt="" src="assets/images/mission-icon01.png"/>
                                </li>
                                <li><h6><span><strong>Les gros labels</strong> se font de l’argent sur le dos des petits artistes </span></h6>
                                    <img alt="" src="assets/images/mission-icon03.png"/>
                                </li>
                                <li><h6>Les projets<strong> Web 3</strong> musicaux sont centralisés</h6>
                                    <img alt="" src="assets/images/mission-icon02.png"/></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="experience">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-6">
                                <div className="experience-inner">
                                    <h2>L’experience</h2>
                                    <p>VIS UNE EXPERIENCE UNIQUE</p>

                                    <div className="experience-list">
                                        <ul>
                                            <li>Show privé dans des lieux insolites</li>
                                            <li>Détenez les parts d’une musique</li>
                                            <li>Obtenez une place de concert à vie</li>
                                            <li>Vêtements collectors</li>
                                            <li>Evénements dans la metaverse</li>
                                            <li>Etc.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-6">
                                <div className="experience-pic">
                                    <img alt="" src="assets/images/pic01.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="song">
                    <div className="container">
                        <div className="row">
                            <h4>Les possibilités sont infinies, faites nous part de vos idées.</h4>

                            <div className="sec-04">
                                <div className="row">
                                    <div className="col-md-6 col-6">




                                        <p><strong>Entrez votre email et proposez votre <br/> musique favorite.</strong> Si le son est validé, nous l’afficherons sur notre playlist
                                            <strong> Curation et vous receverez une dédicace sur instagram.</strong></p>
                                    </div>
                                    <div className="col-md-6 col-6">
                                        <div className="sign-fld">
                                            <form onSubmit={createUser}>
                                                <div className="form-group">
                                                    <input type="email" name="" onChange={(e) => {setNewEmail(e.target.value)} }  placeholder="Enter your mail"/>
                                                </div>
                                                <div className="form-group">
                                                    {
                                                        users ? <p style={{textAlign:"center"}}> RESPONSE SUBMITTED !</p> : <input type="submit" value="Share your song" id="sbmt-btn"/>
                                                    }
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section id="center-circle">
                    <div className="container">
                        <div className="row">
                            <div className="center-circle">
                                <p>To have a chance to be displayed <span>in our playlist Curation Music,</span> enter you mail and
                                    share with<span> us your favorite song </span>
                                </p>
                                <h5>The artist:</h5>
                            </div>

                            <div className="circle01">
                                <img alt="" src="assets/images/instagram.png"/>
                                <p>Avoir entre <span>0 et 100 K de followers sur</span> Instagram</p>
                            </div>
                            <div className="circle02">
                                <img alt="" src="assets/images/global.png"/>
                                <p>Ne pas avoir signer dans un gros label comme Universal/Sony</p>
                            </div>
                            <div className="circle03">
                                <img alt="" src="assets/images/music.png"/>
                                <p>Ne pas avoir signer dans un gros label comme Universal/Sony</p>
                            </div>
                        </div>
                    </div>
                </section>

                <footer>
                    <div className="container">
                        <div className="join-community">
                            <h2>Join our community !</h2>
                            <form>
                                <div className="form-group">
                                    <input type="text" placeholder="Enter your full name"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Enter your e-mail adress"/>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                        <div className="row">
                            <div className="col-md-5 col-7">
                                <div className="footer-logo">
                                    <img alt="" src="assets/images/logo.png"/>
                                    <p>Curation Music est une plateforme de NFT musicaux ou la communauté de fan possède la création de son artiste favori afin de vivre une experience unique avec lui.</p>
                                </div>
                            </div>
                            <div className="col-md-7 col-5">
                                <div className="fooer-links">
                                    <ul className="footer-links-inner">
                                        {/*<li><a href="javascript:;">FAQS</a></li>*/}
                                        {/*<li><a href="javascript:;">Contact Us</a></li>*/}
                                    </ul>

                                    <ul className="footer-links-inner02">
                                        <li><h5>Follow Us/Contact Us</h5></li>
                                        <li><a href="https://www.instagram.com/curationmusic_io/" target="_blank"><img alt=""
                                                                                                                       src="assets/images/white-instagram.png"/></a></li>
                                        <li><a href="https://twitter.com/curation_music" target="_blank"><img alt="" src="assets/images/white-twitter.png"/></a></li>
                                        <li><a href="https://open.spotify.com/playlist/0XhMerRi06aHN6ReYZSTqU?si=KTpTXLXWTbSaMEjeUBkHsQ"><img alt="" src="assets/images/spotify.png"/></a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </footer>
            </main>
        </>
    );
}

export default LandingFrench;
