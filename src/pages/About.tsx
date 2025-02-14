import '../styles/About.css'
import usePagesTitle from '../hooks/usePagesTitle';

const About = () => {
  usePagesTitle('About');

  return (
    <div className="about">
      <section className="hero">
        <h1>About Noetica</h1>
        <p className="motto">Exploring the depths of human knowledge</p>
        <p className="subtitle">A journey through art, philosophy, and culture</p>
      </section>

      <div className="content-grid">
        <section className="about-content">
          <div className="about-section">
            <h2>The Socratic Dialogue</h2>
            <div className="dialogue">
              <p><span className="speaker">Socrates</span>: "Do you not agree that all things which have an opposite come into being only from their opposite?"</p>
              <p><span className="speaker">Cebes</span>: "Certainly."</p>
              <p><span className="speaker">Socrates</span>: "And likewise, that between each pair of opposites there are two processes—a kind of coming-to-be from one to the other, and a return again?"</p>
              <p><span className="speaker">Cebes</span>: "What do you mean?"</p>
              <p><span className="speaker">Socrates</span>: "For example, something that comes to be larger must have been smaller before, and then increased?"</p>
              <p><span className="speaker">Cebes</span>: "Yes."</p>
              <p><span className="speaker">Socrates</span>: "And the process from being smaller to being larger is called increase?"</p>
              <p><span className="speaker">Cebes</span>: "It is."</p>
              <p><span className="speaker">Socrates</span>: "And conversely, when something becomes smaller, does it not come from being larger, and the process is called decrease?"</p>
              <p><span className="speaker">Cebes</span>: "Yes."</p>
              <p><span className="speaker">Socrates</span>: "And is it not the same with life and death? That the living come from the dead, just as the dead go from the living?"<sup>[1]</sup></p>
            </div>
          </div>

          <div className="about-section">
            <h2>Our Philosophy</h2>
            <p>What you have read above is one of the first examples of dialectical thought within philosophy. Socrates is attempting to reach a higher truth through the means of inching forward with questions and tension within his own logic. Socrates might have been well aware throughout his conversation with Cebes of his final argument, that the soul is immortal because life and death are opposites—but he chooses to display this point through leading questions for truth to reveal itself authentically. The result is an epiphany, not a lecture. Dialectical theologians of the 20th century claimed that it was only possible to receive truth in the free space created by a thesis and antithesis, because humans cannot climb an intellectual ladder to truth, but rather, it must be revealed to us.
            <sup>[2]</sup></p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>It is Noetica’s goal first and foremost to get our audience to ask questions. Socrates refers to himself as a midwife in Theaetetus, because his aim was to draw wisdom out of others. Socrates had a high view of humanity’s ability to noetically ascend if they are confronted with the right questions. We have a similar understanding of human ontology. It is our goal to provide the world with content that stimulates the intellect’s appetite for beauty and truth. It is fundamentally existential. The paths of noesis do not run solely through philosophy. We welcome submissions from any artistic or academic medium that draws us out of ourselves to confront the human experience. Of course, truth knocks at the door to our lives every moment of every day, and our willingness to seek it out determines our growth. Therefore, we are equally grateful to our audience and our contributors for curating the space for noesis to thrive through their engagement with this project. Noetica is not a journal trying to force content into the world for the sake of easily identifiable truths. We hope to function like the Agora wherein everyone—rich, poor, young, old, educated, uneducated—may come to participate in any dialogue that serves as a midwife for wisdom. 
            <sup>[3]</sup></p>
          </div>
        </section>

        <section className="contact-section">
          <h2>References</h2>
          <div className="footnotes">
            <p>[1] Plato. <em>Phaedo</em>. Translated by Benjamin Jowett. 2nd ed. Cambridge, MA: Harvard University Press, 1920. 70d–71c.</p>
            <p>[2] Chrisophe Chalamet (August 1, 2004). Dialectical Theologians: Wilhelm Herrmann, Karl Barth and Rudolf Bultmann. Theologischer Verlag.</p>
            <p>[3] The Agora was the public square in Athens where Socrates would dwell to strike conversations with any citizen interested in truth.</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About 