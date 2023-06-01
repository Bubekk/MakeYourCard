import "./style/InfoStyle.scss";

function Info() {
  return (
    <div className="info">
      <section className="info__content">
        <h1>You want to make some cards?</h1>
        <article className="info__content__article">
          <h2>What is all about?</h2>
          <p>
            I created this little dummy online shop for portoflio project. The project is a simulated online store where you can create your own
            greeting card (the project assumes easy code editing to add more categories of cards) to send your order for professional printing. The
            generator is not complicated, it only consists in choosing a layout and entering the content you want to see, or choosing the default and
            universal content proposed by the store owner.
          </p>
        </article>
        <article className="info__content__article">
          <h2>What technologies i used?</h2>
          <p>
            I used React combined with JavaScript to create the project. Plus, everything was created with Vite. I used sass for styling.
            Additionally, I used materialUI, axios and reactRouter to navigate the site.
          </p>
        </article>
        <article className="info__content__article">
          <h2>Who am I?</h2>
          <p>
            I am a former admin and IT support. I worked for a state organization supporting and maintaining network and IT traffic. After a few
            years, I decided to return to my youthful passion, coding. I started learning everything by myself from scratch. So far, I am polishing my
            React skills and I'm learning VueJS to be more versatile. In the future, I want to learn backend and other technologies like C languages
            ​​or machine learning. I am currently looking for my first job as a frontend developer. If you have a job offer for me, or you noticed
            some mistake, or you want to give me advice / feedback, feel free to visit my profiles, or contact me directly.
          </p>
        </article>
      </section>
      <section className="info__contact">
          <div className="info__contact__profile">
            <div className="info__contact__profile__icon info__contact__profile__icon--github" author="https://www.flaticon.com/free-icons/github Github icons created by Pixel perfect - Flaticon"></div>
            <h3>
              GitHub: <a href="https://github.com/Bubekk">@Bubekk</a>
            </h3>
          </div>
          <div className="info__contact__profile">
            <div className="info__contact__profile__icon info__contact__profile__icon--linkedin" author="https://www.flaticon.com/free-icons/linkedin Linkedin icons created by Md Tanvirul Haque - Flaticon"></div>
            <h3>
              LinkedIn: <a href="https://www.linkedin.com/in/sebastian-kubański/">@SebastianKubanski</a>
            </h3>
          </div>
          <div className="info__contact__profile" >
            <div className="info__contact__profile__icon info__contact__profile__icon--portfolio" author="https://www.flaticon.com/free-icons/work Work icons created by Rakib Hassan Rahim - Flaticon"></div>
            <h3>
              Portfolio: <a href="#">DURING CONSTRUCTION AND MAINTENANCE</a>
            </h3>
          </div>
          <div className="info__contact__profile" >
            <div className="info__contact__profile__icon info__contact__profile__icon--mail" author="https://www.flaticon.com/free-icons/email Email icons created by Uniconlabs - Flaticon"></div>
            <h3>
              Mail: <a href="mailto:sebastian.kubanski@gmail.com">Email me</a>
            </h3>
          </div>
      </section>
    </div>
  );
}

export default Info;
