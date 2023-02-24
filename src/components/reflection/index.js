import { Container } from "@material-ui/core";
import React, { useContext } from "react";
import codings from "../../assets/lottie/coding.json";
import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "../../styles/about.module.css";
import AnimationLottie from "../Animation";

export const aboutData = {
  title: "Reflection",
  description1: `Looking back at my resume, I can see how my academic successes and career experiences have aided in my personal and professional development.
  My degree in biomedical engineering has given me a solid foundation for applying engineering concepts to the healthcare sector. I've gained knowledge in conducting tests, designing and developing medical devices, and data analysis. This has given me a distinctive perspective on how engineering and healthcare intersect, as well as how technology can be applied to enhance patient outcomes.
  `,
  description2: `My internship in research and innovation at PureHealth provided an opportunity to develop my technical skills and work well with a team of professionals. I was in responsible for designing and implementing software solutions that enhanced the company's procedures and workflows during my tenure there. I gained knowledge on how to prioritize tasks to achieve project deadlines and successfully communicate with stakeholders. I've developed a strong background in science and programming, and I've used this expertise in a variety of internships.
  Overall, I'm pleased of what I've accomplished and I think my experiences have well-prepared me for opportunities and challenges in the future. I am excited to continue learning and growing as a professional and to make meaningful contributions to the field of Biomedical Engineering and Healthcare Technology.`,
  image: 1,
};

function Reflection() {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme.secondary }}>
      <Container className={styles.about} id="reflection">
        <div className={styles.lineStyling}>
          <div
            className={styles.styleCircle}
            style={{ backgroundColor: theme.primary }}
          ></div>
          <div
            className={styles.styleCircle}
            style={{ backgroundColor: theme.primary }}
          ></div>
          <div
            className={styles.styleLine}
            style={{ backgroundColor: theme.primary }}
          ></div>
        </div>
        <div className={styles.aboutBody}>
          <div className={styles.aboutDescription}>
            <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
            <p style={{ color: theme.tertiary }}>
              {aboutData.description1}
              <br />
              <br />
              {aboutData.description2}
            </p>
          </div>
          <div className={styles.aboutAnimation}>
            <AnimationLottie animationPath={codings} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Reflection;
