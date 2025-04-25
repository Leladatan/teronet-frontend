import { JobSeeker } from "@/entities/job-seekers/types";
import { Employee } from "@/entities/employers/types";

export const candidates: JobSeeker[] = [
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

export const employees: Employee[] = [
  { id: 1, firstName: "John", lastName: "Doe", age: 28 },
  { id: 2, firstName: "Jane", lastName: "Smith", age: 34 },
  { id: 3, firstName: "Alice", lastName: "Johnson", age: 45 },
];
