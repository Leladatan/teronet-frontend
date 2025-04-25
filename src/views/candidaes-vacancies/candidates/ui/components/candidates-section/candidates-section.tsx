"use client";

import { motion } from "framer-motion";

import CandidateCard from "@/views/candidaes-vacancies/candidates/ui/components/candidates-section/components/candidate-card";

const candidates = [
  {
    id: 1,
    lastName: "Дзидзигури",
    firstName: "Анна",
    email: "annadzi.owl@gmail.com",
    telegram: "@dzzinn",
    softSkills: [
      "ответственность",
      "дисциплинированность",
      "системное мышление",
      "коммуникабельность",
    ],
    hardSkills: ["маркетинговые исследования", "SEO-оптимизация", "контент-маркетинг"],
  },
  {
    id: 2,
    lastName: "Иванов",
    firstName: "Алексей",
    email: "alexey@example.com",
    telegram: "@alexey_i",
    softSkills: ["лидерство", "работа в команде", "креативность"],
    hardSkills: ["финансовый анализ", "бюджетирование", "инвестиционное планирование", "Excel"],
  },
  {
    id: 3,
    lastName: "Петрова",
    firstName: "Екатерина",
    email: "kate@example.com",
    telegram: "@kate_p",
    softSkills: ["адаптивность", "критическое мышление", "тайм-менеджмент"],
    hardSkills: ["клиническая диагностика", "физиотерапия", "реабилитация"],
  },
  {
    id: 4,
    lastName: "Смирнов",
    firstName: "Дмитрий",
    email: "dmitry@example.com",
    telegram: "@dmitry_s",
    softSkills: ["эмпатия", "стрессоустойчивость", "самообучение"],
    hardSkills: ["логистика", "управление цепями поставок", "таможенное оформление"],
  },
  {
    id: 5,
    lastName: "Козлова",
    firstName: "Мария",
    email: "maria@example.com",
    telegram: "@maria_k",
    softSkills: ["организованность", "внимание к деталям", "презентационные навыки"],
    hardSkills: ["юридическое сопровождение", "составление договоров", "корпоративное право"],
  },
  {
    id: 6,
    lastName: "Соколов",
    firstName: "Игорь",
    email: "igor@example.com",
    telegram: "@igor_s",
    softSkills: ["аналитическое мышление", "решение проблем", "инициативность"],
    hardSkills: ["агрономия", "селекция растений", "органическое земледелие"],
  },
  {
    id: 7,
    lastName: "Новикова",
    firstName: "Ольга",
    email: "olga@example.com",
    telegram: "@olga_n",
    softSkills: ["клиентоориентированность", "убедительность", "нетворкинг"],
    hardSkills: ["HR-аналитика", "рекрутинг", "адаптация персонала", "кадровое делопроизводство"],
  },
  {
    id: 8,
    lastName: "Морозов",
    firstName: "Артём",
    email: "artem@example.com",
    telegram: "@artem_m",
    softSkills: ["гибкость мышления", "целеустремленность", "работа под давлением"],
    hardSkills: ["архитектурное проектирование", "3D-моделирование", "AutoCAD", "Revit"],
  },
];

const CandidatesSection = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {candidates.map((candidate) => (
          <motion.div
            key={candidate.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
          >
            <CandidateCard candidate={candidate} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CandidatesSection;
