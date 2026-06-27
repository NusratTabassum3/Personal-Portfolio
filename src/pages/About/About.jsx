// const servicesData = [
//   {
//     title: "Web design",
//     icon: "/images/icon-design.svg",
//     description:
//       "The most modern and high-quality design made at a professional level.",
//   },
//   {
//     title: "Web development",
//     icon: "/images/icon-dev.svg",
//     description: "High-quality development of sites at the professional level.",
//   },
//   {
//     title: "Mobile apps",
//     icon: "/images/icon-app.svg",
//     description:
//       "Professional development of applications for iOS and Android.",
//   },
//   {
//     title: "Photography",
//     icon: "/images/icon-photo.svg",
//     description:
//       "I make high-quality photos of any category at a professional level.",
//   },
// ];

const About = () => {
  // const [testimonial, setTestimonial] = useState([]);

  // useEffect(() => {
  //   fetch("testimonials.json")
  //     .then((res) => res.json())
  //     .then((data) => setTestimonial(data));
  // }, []);

  return (
    <div className="about active">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>
      <section className="about-text">
        <p>
          {" "}
          I am a recent graduate from the American International
          University-Bangladesh (AIUB) with a strong foundation in web
          development and hands-on experience in React. During my studies, I
          focused on front-end development, particularly building responsive and
          dynamic web applications. I completed several projects where I
          designed and implemented user interfaces, enhancing user experience
          and optimizing performance. These projects strengthened my skills in
          JavaScript, HTML, CSS, and the React ecosystem, including Redux and
          hooks for state management.
        </p>
        <p>
          Beyond academics, I was an active member of the AIUB Computer Club,
          where I contributed to organizing science and gaming fests. My role
          involved managing guests and participants, ensuring their needs were
          met, and collaborating with teams to deliver successful events. These
          experiences refined my ability to handle clients, communicate
          effectively, and work efficiently in team settings.
        </p>
        <p>
          {" "}
          I am also passionate about competitive coding, having solved over 100
          problems on Codeforces, which sharpened my problem-solving skills and
          deepened my understanding of algorithms and data structures.
        </p>
        <p>
          {" "}
          With a strong work ethic, attention to detail, and a passion for
          continuous learning, I thrive in collaborative environments and am
          eager to contribute to innovative projects. I am confident that I can
          bring value to your development team.
        </p>
      </section>

      {/* services */}

      {/* <section className="service">
        <h2 className="h3 service-title">What I'm Doing</h2>
        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
            />
          ))}
        </ul>
      </section> */}

      {/* Testtimonials section */}

      {/* <section className="testtimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonial.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}
        </ul>
      </section> */}

      {/* clients logo */}

      {/* <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          <li className="clients-items">
            <a href="#">
              <img src="/images/logo-1-color.png" alt="" />
            </a>
          </li>
          <li className="clients-items">
            <a href="#">
              <img src="/images/logo-2-color.png" alt="" />
            </a>
          </li>
          <li className="clients-items">
            <a href="#">
              <img src="/images/logo-3-color.png" alt="" />
            </a>
          </li>
          <li className="clients-items">
            <a href="#">
              <img src="/images/logo-4-color.png" alt="" />
            </a>
          </li>
          <li className="clients-items">
            <a href="#">
              <img src="/images/logo-5-color.png" alt="" />
            </a>
          </li>
        </ul>
      </section> */}
    </div>
  );
};

export default About;
