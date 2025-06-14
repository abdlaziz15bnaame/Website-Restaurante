/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Header from "./Header";
import { Fragment } from "react";
import "./Home.css";
import prideimg from "../../assets/1.png";
import ingredients from "../../assets/2.png";
import Data from "././Data";
import {Carousel} from "react-bootstrap";
import item1 from "../../assets/item1.jpg";
import item2 from "../../assets/item2.jpg";





const Home = () => {
    const blogitem = Data.map((item, index) => (
        <div className="col-md-4" key={index}>
        <div className="box">
            <img src={item.img} alt={item.title} />
            <h5>{item.title}</h5>
            <span>{item.time}</span>
            <h6>{item.price}</h6>
        </div>
        <button>
            <a href="#">Order Now</a>
        </button>
        </div>
    ));


    return(
        <Fragment>  
            <Header/>
            <section className="numbers">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>1287+</h2>
                            <h6>SAVINGS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>5786+</h2>
                            <h6>PHOTOS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>1440+</h2>
                            <h6>ROCKETS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>7110+</h2>
                            <h6>GLOBES</h6>
                        </div>
                        
                        
                    </div>
                </div>
            </section>
            <section className="pride">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={prideimg} title="prideimg" />
                        </div>
                        <div className="col-md-6">
                            <h2>We pride ourselves on making real food from the best ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <button><a href="#">Learn More </a> </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ingredients">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>We make everything by hand with the best possible ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo.
                                Mauris feugiat erat tellus.Far far away, 
                                behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <ul>
                                <li>Etiam sed dolor ac diam volutpat.</li>
                                <li>Erat volutpat aliquet imperdiet.</li>
                                <li>purus a odio finibus bibendum.</li>
                            </ul>
                            <button>
                                <a href="#">learn more</a>
                            </button>
                        </div>
                            <div className="col-md-6">
                                <img src={ingredients} alt="ingredients"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="paralex">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>When a man's stomach is full it makes no<br/> 
                            difference whether he is rich or poor.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br/>
                            finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <a href="#">Watch Our Story</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blogs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <h2>Explore Our Foods</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. 
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. Separated they live in Bookmarksgrove.</p>
                            </div>
                        <div className="row">
                            {blogitem}
                        </div>
                    </div>
                    </div>
            </section>
            <section className="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>Testimonials</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                        <Carousel>
        <Carousel.Item>
        <img src={item1}/>
        <Carousel.Caption>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <span>front end developer</span>
            </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img src={item2}/>
        <Carousel.Caption>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span>web designer</span>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="footer">
                    <div className="container">
                        
                        <div className="about">
                            <h1>Frequently Asked Questions</h1>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <h2>Is Foodera Bread really baked fresh each day?</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                                    there live the blind texts.
                                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <h2> Do you bake breads containing animal fats or products?</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                                    there live the blind texts.
                                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <h2>Can I order your products online?</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                                    there live the blind texts.
                                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <h2>When are you opening a shop near me?</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                                    there live the blind texts.
                                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Baked">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h2>
                                    Baked fresh daily by bakers with passion.
                                </h2>
                            </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <button>Learn More</button>
                            
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <section className="Subscribe">
                <div className="container">
                    <h5>Hurry up! Subscribe our newsletter <br/> and get 25% Off</h5>
                    <p>Limited time offer for this month. No credit card required.</p>
                    <input type="email" name="email" placeholder=" Email Address here" required></input>
                    <button>Subscribe</button>
                
                    </div>
            </section >  
    </Fragment>
    
    );
};
export default Home;