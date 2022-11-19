import uniqid from "uniqid";
import { youtube } from "../../portfolio";
import "./YouTube.css";

const YouTube = () => {
  if (!youtube.length) return null;


  return (
    <section className={`section youtube`} id="skills">
      <h2 className="section__title">Content</h2>
      <ul className="youtube__list">
        {youtube.map((vid) => (
          <li key={uniqid()} className="youtube__list-item btn btn--plain">
            {vid.title}
            {
              <iframe
                width="1280"
                height="720"
                src={vid.embed_url}
                title={vid.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
              ></iframe>
            }
          </li>
        ))}
      </ul>
    </section>
  );
};

export default YouTube;
