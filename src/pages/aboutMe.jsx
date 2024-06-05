import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const skills = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML', 'Tailwind CSS'];
  const experiences = [
    {
      company: 'Company A',
      role: 'Frontend Developer',
      duration: 'Jan 2020 - Present',
      description: 'Developed and maintained the front end of the company website using React and Tailwind CSS.',
    },
    {
      company: 'Company B',
      role: 'Web Developer',
      duration: 'Jun 2018 - Dec 2019',
      description: 'Worked on various web development projects, primarily using JavaScript and CSS.',
    },
    {
      company: 'Company C',
      role: 'Intern',
      duration: 'Jan 2018 - May 2018',
      description: 'Assisted in developing and testing web applications.',
    },
  ];
  const hobbies = ['Photography', 'Traveling', 'Reading', 'Gaming'];
  const education = [
    {
      institution: 'University A',
      degree: 'B.Sc. Computer Science',
      duration: '2015 - 2019',
    },
    {
      institution: 'High School B',
      duration: '2011 - 2015',
    },
  ];
  const certifications = [
    {
      title: 'Certified JavaScript Developer',
      organization: 'Organization A',
      date: '2020',
    },
    {
      title: 'React Professional Certification',
      organization: 'Organization B',
      date: '2021',
    },
  ];

  return (
    <main className="container mx-auto p-4 space-y-12 text-gray-200">
      {/* About Me Section */}
      <section className="text-center">
        <img src="/marco.jpg" alt="Profile" className="w-32 h-32 rounded-full shadow-lg mx-auto" />
        <motion.div whileHover={{ scale: 1.1 }} className="mt-4">
          <h2 className="text-2xl font-bold">John Doe</h2>
          <p className="mt-2 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
        </motion.div>
        <div className="flex justify-center space-x-4 mt-4">
          <motion.a whileHover={{ scale: 1.2 }} href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="text-2xl hover:text-blue-400" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-blue-600" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-2xl hover:text-gray-300" />
          </motion.a>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-4">My Skills</h2>
        <motion.ul
          className="flex flex-wrap justify-center space-x-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              className="bg-gray-700 text-white rounded-full px-4 py-2 m-2"
              whileHover={{ scale: 1.1 }}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-4">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold">{exp.role} at {exp.company}</h3>
              <p className="text-gray-400">{exp.duration}</p>
              <p className="mt-2 text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-4">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold">{edu.degree ? edu.degree : edu.institution}</h3>
              <p className="text-gray-400">{edu.institution}</p>
              <p className="text-gray-400">{edu.duration}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-4">Certifications</h2>
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold">{cert.title}</h3>
              <p className="text-gray-400">{cert.organization}</p>
              <p className="text-gray-400">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hobbies Section */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-4">Hobbies</h2>
        <motion.ul
          className="flex flex-wrap justify-center space-x-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {hobbies.map((hobby, index) => (
            <motion.li
              key={index}
              className="bg-gray-700 text-white rounded-full px-4 py-2 m-2"
              whileHover={{ scale: 1.1 }}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              {hobby}
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* Contact Me Section */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-400 mb-4">Feel free to reach out to me via email or through my social media profiles.</p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="mailto:john.doe@example.com"
          className="bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-800"
        >
          Email Me
        </motion.a>
      </section>
    </main>
  );
};

export default AboutMe;
