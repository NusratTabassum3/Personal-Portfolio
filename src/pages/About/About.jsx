import { useState } from "react";
import Service from "./Service";
import Testimonial from "./Testimonial";
import { useEffect } from "react";

const servicesData = [
    {
        "title": "Web design",
        "icon": "/images/icon-design.svg",
        "description": "The most modern and high-quality design made at a professional level."
      },
      {
        "title": "Web development",
        "icon": "/images/icon-dev.svg",
        "description": "High-quality development of sites at the professional level."
      },
      {
        "title": "Mobile apps",
        "icon": "/images/icon-app.svg",
        "description": "Professional development of applications for iOS and Android."
      },
      {
        "title": "Photography",
        "icon": "/images/icon-photo.svg",
        "description": "I make high-quality photos of any category at a professional level."
      }
]




  const About = () => {
    const[testimonial,setTestimonial] = useState([])
  
    useEffect(()=>{
  
    
      fetch("testimonials.json")
      .then(res=>res.json())
      .then(data=> setTestimonial(data))
  
  
    },[])
  

    return (
        <div className="about active">
           <header>
            <h2 className="h2 article-title">About Me</h2>
           </header>
           <section className="about-text">
            <p>I'm Creative Directior and UI/UX Designer from Sydney,Australia, working in web development and
                 print media. I enjoy turning complex problems into simple,beautiful and intuitive designs </p>

            <p>My job is to build your website so that it is functional and user-friendly but at the same time
                attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and
                easy to use.My aim is to bring across your message and identity in the most creative way. I created
                web design for many famous brand companies
            </p>
           </section>


           {/* services */}

           <section className="service">
            <h2 className="h3 service-title">What I'm Doing</h2>
            <ul className="service-list">
                {
                    servicesData.map((service,index) =>(
                <Service key={index} title={service.title} icon={service.icon} description={service.description}/>
                    ))
                }
            </ul>
           
           
           </section>

           {/* Testtimonials section */}

           <section className="testtimonials">
            <h3 className="h3 testimonials-title">Testimonials</h3>
            <ul className="testimonials-list has-scrollbar">
              {
              testimonial.map((testimonial,index)=>(
                <Testimonial key={index} name={testimonial.name} avatar={testimonial.avatar}testimonial ={testimonial.testimonial}/>

              ))}
            </ul>
           </section>
        </div>
    );
};

export default About;