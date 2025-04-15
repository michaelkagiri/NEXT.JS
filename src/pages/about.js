// Import CSS module styles specific to the About page
import styles from '../styles/About.module.css';

// About component renders information about the person
export default function About() {
  return (
    <div className={styles.container}>
      {/* Title of the About page */}
      <h1 className={styles.title}>About Me</h1>

      {/* Description of my background and experience */}
      <p className={styles.paragraph}>
        kioko is a skilled Fullstack Developer with over two years of experience.
      </p>

      <p className={styles.paragraph}>
        My background includes a Bachelor&apos;s degree in Computer Science from Catholic University of Eastern Africa.
      </p>
       
      <p className={styles.paragraph}>
        Currently, I am a Backend Developer at{' '}
        <a
          href="https://Eddusson.com"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Eddusson freelanch platform
        </a>, 
        where I focus on creating scalable and efficient server-side solutions and APIs.
      </p>

      <p className={styles.paragraph}>
        My role involves leveraging both front-end and back-end technologies to drive innovative solutions and address complex technical challenges.
      </p>
      
      <p className={styles.paragraph}>
        I blend my academic knowledge with practical expertise to build seamless, high-performance applications.
      </p>
    </div>
  );
}
