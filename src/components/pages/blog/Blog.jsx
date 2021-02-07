import "./Blog.css";
import Poster from "./Poster";

const Blog = () => {
  return (
    <section className="blog">
      <div className="scroll_blog">
        <h1>BLOG</h1>
        <hr />
        <div className="container_blog">
          <div className="box_blog1">
            <img src="https://picsum.photos/seed/15/400" />
            <h3>HOW TO SUCCES IN MEETING</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              vitae ad odio, reiciendis itaque inventore nulla possimus laborum,
              dolorem est voluptas omnis quo voluptatem quod, officia provident
              sunt. Sequi, dolorem.
            </p>
            <button>See More</button>
          </div>
          <div className="box_blog2">
            <img src="https://picsum.photos/seed/19/400" />
            <h3>HOW TO BE PROGRAMMER</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              vitae ad odio, reiciendis itaque inventore nulla possimus laborum,
              dolorem est voluptas omnis quo voluptatem quod, officia provident
              sunt. Sequi, dolorem.
            </p>
            <button>See More</button>
          </div>
          <div className="box_blog3">
            <img src="https://picsum.photos/seed/18/400" />
            <h3>HOW TO lEARN PROGRAMMING</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              vitae ad odio, reiciendis itaque inventore nulla possimus laborum,
              dolorem est voluptas omnis quo voluptatem quod, officia provident
              sunt. Sequi, dolorem.
            </p>
            <button>See More</button>
          </div>
          <div className="box_blog4">
            <img src="https://picsum.photos/seed/17/400" />
            <h3>HOW TO BE SUCCESS</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              vitae ad odio, reiciendis itaque inventore nulla possimus laborum,
              dolorem est voluptas omnis quo voluptatem quod, officia provident
              sunt. Sequi, dolorem.
            </p>
            <button>See More</button>
          </div>
          <div className="box_blog5">
            <img src="https://picsum.photos/seed/16/400" />
            <h3>HOW TO BE YOUR SELF</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              vitae ad odio, reiciendis itaque inventore nulla possimus laborum,
              dolorem est voluptas omnis quo voluptatem quod, officia provident
              sunt. Sequi, dolorem.
            </p>
            <button>See More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
