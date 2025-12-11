import { motion } from "framer-motion";
import {
  FiBook,
  FiAward,
  FiUsers,
  FiCheck,
  FiGlobe,
  FiClock,
} from "react-icons/fi";

const curriculumStructure = [
  {
    phase: "Phase 1: Foundation Years",
    duration: "5 Years (Secondary)",
    focus: "Building Strong Foundations",
    color: "emerald",
    icon: FiBook,
    subjects: {
      languages: [
        {
          name: "Malayalam",
          topics: [
            "Grammar & Composition",
            "Basic Literature",
            "Writing Skills",
            "Oral Communication",
          ],
        },
        {
          name: "English",
          topics: [
            "Grammar Fundamentals",
            "Vocabulary Building",
            "Reading Comprehension",
            "Basic Writing",
          ],
        },
        {
          name: "Urdu",
          topics: [
            "Script Learning",
            "Reading & Writing",
            "Basic Conversation",
            "Grammar Rules",
          ],
        },
        {
          name: "Arabic",
          topics: [
            "Nahv (Grammar)",
            "Sarf (Morphology)",
            "Basic Vocabulary",
            "Conversation Practice",
          ],
        },
        {
          name: "Hindi",
          topics: [
            "Vyakaran (Grammar Basics)",
            "Reading Comprehension",
            "Writing & Composition",
            "Vocabulary Building",
          ],
        },
      ],
      islamicSciences: [
        {
          name: "Islamic History",
          topics: [
            "Prophetic Era",
            "Rightly Guided Caliphs",
            "Islamic Civilization",
            "Modern Islamic World",
          ],
        },
        {
          name: "Fiqh",
          topics: [
            "Taharah (Purification)",
            "Salah (Prayer)",
            "Basic Rulings",
            "Islamic Jurisprudence",
          ],
        },
        {
          name: "Hadith",
          topics: [
            "40 Nawawi",
            "Basic Terminology",
            "Major Collections",
            "Practical Application",
          ],
        },
        {
          name: "Aqeeda",
          topics: [
            "Fundamentals of Faith",
            "Islamic Belief System",
            "Tawheed",
            "Protection from Shirk",
          ],
        },
        {
          name: "Quranic Studies",
          topics: [
            "Memorization (Juz Amma)",
            "Tajweed Rules",
            "Basic Tafsir",
            "Quranic Arabic",
          ],
        },
      ],
      modernSubjects: [
        "Mathematics & Basic Sciences",
        "Social Studies & History",
        "Computer Fundamentals",
        "General Knowledge & Ethics",
      ],
    },
  },
  {
    phase: "Phase 2: Advanced Years",
    duration: "2 Years (Senior Secondary)",
    focus: "Literature & Core Knowledge",
    color: "blue",
    icon: FiUsers,
    subjects: {
      languageLiterature: [
        {
          name: "Malayalam Literature",
          topics: [
            "Classical Poetry",
            "Modern Prose",
            "Literary Criticism",
            "Kerala Culture",
          ],
        },
        {
          name: "English Literature",
          topics: [
            "British Classics",
            "American Literature",
            "Literary Analysis",
            "Advanced Composition",
          ],
        },
        {
          name: "Urdu Literature",
          topics: [
            "Classical Ghazals",
            "Modern Poetry",
            "Prose Writing",
            "Literary Appreciation",
          ],
        },
        {
          name: "Arabic Literature",
          topics: [
            "Balagha (Rhetoric)",
            "Classical Texts",
            "Modern Arabic",
            "Literary Analysis",
          ],
        },
      ],
      advancedIslamicSciences: [
        {
          name: "Advanced Fiqh",
          topics: [
            "Muamalat (Transactions)",
            "Family Law",
            "Comparative Fiqh",
            "Contemporary Issues",
          ],
        },
        {
          name: "Hadith Sciences",
          topics: [
            "Mustalah al-Hadith",
            "Chain Analysis",
            "Text Criticism",
            "Application Principles",
          ],
        },
        {
          name: "Usul al-Fiqh",
          topics: [
            "Principles of Jurisprudence",
            "Legal Theory",
            "Ijtihad Methods",
            "School Comparisons",
          ],
        },
        {
          name: "Comparative Religion",
          topics: [
            "Abrahamic Faiths",
            "Eastern Religions",
            "Interfaith Dialogue",
            "Islamic Perspective",
          ],
        },
      ],
      specializationTracks: [
        {
          name: "Humanities with Advanced Arabic",
          subjects: [
            "Psychology",
            "Sociology",
            "History",
            "Advanced Arabic Literature",
          ],
        },
        {
          name: "Computer Science with Islamic Ethics",
          subjects: [
            "Programming",
            "Web Development",
            "Database Systems",
            "Tech Ethics in Islam",
          ],
        },
      ],
    },
  },
  {
    phase: "Phase 3: Specialization Years",
    duration: "3 Years (Degree Program)",
    focus: "Departmental Expertise",
    color: "amber",
    icon: FiAward,
    departments: [
      {
        name: "Hadith & Islamic Sciences Department",
        coreCourses: [
          "Mustalah al-Hadith (Advanced Terminology)",
          "Study of Sahih al-Bukhari & Muslim",
          "Fiqh al-Hadith (Legal Understanding)",
          "Ilal al-Hadith (Defect Analysis)",
          "Dirasat al-Asaneed (Chain Studies)",
          "Contemporary Hadith Applications",
        ],
        researchAreas: [
          "Hadith Authentication Methods",
          "Historical Context Analysis",
          "Modern Application of Prophetic Traditions",
        ],
      },
    ],
  },
];

export default function Curriculum() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const colorMap = {
    emerald: {
      bg: "bg-emerald-500",
      text: "text-emerald-600",
      border: "border-emerald-200",
      light: "bg-emerald-50 dark:bg-emerald-900/20",
    },
    blue: {
      bg: "bg-blue-500",
      text: "text-blue-600",
      border: "border-blue-200",
      light: "bg-blue-50 dark:bg-blue-900/20",
    },
    amber: {
      bg: "bg-amber-500",
      text: "text-amber-600",
      border: "border-amber-200",
      light: "bg-amber-50 dark:bg-amber-900/20",
    },
  };

  const renderLanguages = (subjects) => {
    if (!subjects?.languages) return null;

    return (
      <div className="mb-8">
        <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <FiGlobe className="size-5 text-emerald-600" />
          Language Foundation
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {subjects.languages.map((language, langIndex) => (
            <div
              key={langIndex}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                {language.name}
              </h4>
              <div className="space-y-2">
                {language.topics.map((topic, topicIndex) => (
                  <div key={topicIndex} className="flex items-center gap-3">
                    <FiCheck className="size-4 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderIslamicSciences = (subjects) => {
    if (!subjects?.islamicSciences) return null;

    return (
      <div className="mb-8">
        <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <FiAward className="size-5 text-blue-600" />
          Islamic Sciences
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {subjects.islamicSciences.map((science, scienceIndex) => (
            <div
              key={scienceIndex}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                {science.name}
              </h4>
              <div className="space-y-2">
                {science.topics.map((topic, topicIndex) => (
                  <div key={topicIndex} className="flex items-center gap-3">
                    <FiCheck className="size-4 text-blue-600 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderLanguageLiterature = (subjects) => {
    if (!subjects?.languageLiterature) return null;

    return (
      <div className="mb-8">
        <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-4">
          Language Literature
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {subjects.languageLiterature.map((literature, litIndex) => (
            <div
              key={litIndex}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                {literature.name}
              </h4>
              <div className="space-y-2">
                {literature.topics.map((topic, topicIndex) => (
                  <div key={topicIndex} className="flex items-center gap-3">
                    <FiCheck className="size-4 text-amber-600 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderModernSubjects = (subjects) => {
    if (!subjects?.modernSubjects) return null;

    return (
      <div className="mb-8">
        <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-4">
          Modern Education
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {subjects.modernSubjects.map((subject, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <FiCheck className="size-4 text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {subject}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderSpecializationTracks = (subjects) => {
    if (!subjects?.specializationTracks) return null;

    return (
      <div className="mb-8">
        <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-4">
          Specialization Tracks
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {subjects.specializationTracks.map((track, trackIndex) => (
            <div
              key={trackIndex}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                {track.name}
              </h4>
              <div className="space-y-2">
                {track.subjects.map((subject, subjectIndex) => (
                  <div key={subjectIndex} className="flex items-center gap-3">
                    <FiCheck className="size-4 text-violet-600 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {subject}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderDepartments = (departments) => {
    if (!departments) return null;

    return (
      <div>
        <h3 className="font-serif text-xl flex justify-center font-bold text-gray-900 dark:text-white mb-6">
          Specialization Department
        </h3>
        <div className="flex justify-center gap-8">
          {departments.map((department, deptIndex) => (
            <div
              key={deptIndex}
              className="border-2 border-gray-200 dark:border-gray-600 rounded-xl p-6"
            >
              <h4 className="font-serif text-lg font-bold text-gray-900 dark:text-white mb-4">
                {department.name}
              </h4>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Core Courses:
                </h5>
                <div className="space-y-1">
                  {department.coreCourses.map((course, courseIndex) => (
                    <div key={courseIndex} className="flex items-center gap-3">
                      <div className="size-1 bg-emerald-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {course}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Research Areas:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {department.researchAreas.map((area, areaIndex) => (
                    <span
                      key={areaIndex}
                      className="inline-block bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded text-xs font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // --- NEW: Global Language Electives Component ---
  const renderGlobalElectives = () => (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      <div className="bg-green-600 p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="size-12 bg-white/20 rounded-xl flex items-center justify-center">
            <FiGlobe className="size-6 text-white" />
          </div>
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold">
              Global Language Electives
            </h2>
            <p className="text-white/80">
              Enhancing communication and professional readiness
            </p>
          </div>
        </div>
      </div>
      <div className="p-6 lg:p-8">
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          Beyond our core four languages, students can opt to learn additional
          global languages to enhance their professional and diplomatic skills.
          We currently offer the following and plan to expand this selection in
          the future:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "Spanish",
              focus: "Basic Conversation, Grammar, and Culture",
            },
            {
              name: "French",
              focus: "Introduction to French, Vocabulary, and Syntax",
            },
          ].map((lang, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 flex items-start gap-4"
            >
              <FiCheck className="size-5 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {lang.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Focus: {lang.focus}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 italic">
          These courses are offered on an elective basis and are subject to
          availability.
        </p>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-700">
              <FiBook className="size-4" />
              Integrated Curriculum
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent">
              Curriculum Structure
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            A carefully designed 10-year integrated curriculum (5+2+3) that
            systematically builds from language foundations to specialized
            expertise, combining DHIU's Islamic scholarship with modern academic
            excellence.
          </motion.p>
        </motion.div>

        {/* Curriculum Phases */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16 mb-20"
        >
          {curriculumStructure.map((phase) => {
            const IconComponent = phase.icon;
            const colors = colorMap[phase.color];

            return (
              <motion.div
                key={phase.phase}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                {/* Phase Header */}
                <div className={`${colors.bg} p-6 text-white`}>
                  <div className="flex items-center  gap-4">
                    <div className="size-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <IconComponent className="size-6 text-white" />
                    </div>
                    <div>
                      <h2 className="font-serif text-2xl md:text-3xl font-bold">
                        {phase.phase}
                      </h2>
                      <p className="text-white/90">
                        {phase.duration} • {phase.focus}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phase Content */}
                <div className="p-6 lg:p-8">
                  {renderLanguages(phase.subjects)}
                  {renderIslamicSciences(phase.subjects)}
                  {renderLanguageLiterature(phase.subjects)}
                  {renderModernSubjects(phase.subjects)}
                  {renderSpecializationTracks(phase.subjects)}
                  {renderDepartments(phase.departments)}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* --- NEW: Global Language Electives Section --- */}
        {renderGlobalElectives()}

        {/* Curriculum Overview (Updated Stats) */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6">
              Comprehensive Educational Pathway
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">5+2+3</div>
                <div className="text-blue-100 font-semibold">
                  Integrated System
                </div>
                <p className="text-blue-200 text-sm mt-2">
                  Years of Progressive Learning
                </p>
              </div>
              {/* UPDATED STATS: Reflects 4 core + 2 electives */}
              <div>
                <div className="text-4xl font-bold mb-2">7+</div>
                <div className="text-blue-100 font-semibold">
                  Languages Taught
                </div>
                <p className="text-blue-200 text-sm mt-2">
                  Including Spanish & French Electives
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">
                  Hadith & Related Science
                </div>

                <div className="text-blue-200 font-semibold">Department</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
