import "./Skill.css";

const Skill = () => {
  return (
    <section className="skill">
      <div className="container_skill">
        <h1>SKILL</h1>
        <hr />

        <div className="box_persentase1">
          <h2>
            <i class="fas fa-users"></i>Professional Skill
          </h2>
          <hr />
          <div className="box_skill">
            <div className="box1">Comunication</div>
            <div className="box2">70%</div>
          </div>
          <div className="box_skill">
            <div className="box3">Leadership</div>
            <div className="box4">85%</div>
          </div>
          <div className="box_skill">
            <div className="box5">Confidence</div>
            <div className="box6">85%</div>
          </div>
        </div>
        <div className="box_persentase1">
          <h2>
            <i class="fas fa-laptop"></i>Professional Software Skill
          </h2>
          <hr />
          <div className="box_skill">
            <div className="box7">Adobe Photoshop</div>
            <div className="box8">85%</div>
          </div>
          <div className="box_skill">
            <div className="box9">Adobe Illustrator</div>
            <div className="box10">85%</div>
          </div>
          <div className="box_skill">
            <div className="box11">Adobe Fireworks</div>
            <div className="box12">40%</div>
          </div>
        </div>
        <div className="box_persentase1">
          <h2>
            <i class="fas fa-code"></i>Code Skills
          </h2>
          <hr />
          <div className="box_skill">
            <div className="box13">HTML / CSS</div>
            <div className="box14">80%</div>
          </div>
          <div className="box_skill">
            <div className="box15">Javascript</div>
            <div className="box16">60%</div>
          </div>
          <div className="box_skill">
            <div className="box17">php</div>
            <div className="box18">40%</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
