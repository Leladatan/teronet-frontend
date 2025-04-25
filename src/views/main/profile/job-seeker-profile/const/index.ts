export const jobSeeker = {
  fullName: "Иванов Иван Иванович",
  university: "Московский государственный университет",
  studyProgram: "Графический дизайн",
  graduationYear: 2024,
  availability: [
    "Постоянная работа",
    "Работа с непостоянным графиком",
    "Удаленная работа",
    "Работа по заказу",
  ],
  portfolio: [
    {
      clientType: "Крупная корпорация",
      companyName: "ТехноПром",
      projectType: "Брендинг",
      description:
        "Разработка фирменного стиля и брендбука для технологической компании. Проект включал создание логотипа, цветовой палитры, типографики и элементов корпоративной идентичности.",
      presentationLink: "https://cloud-storage.com/presentation1",
      competition: "Конкурс молодых дизайнеров 2024, 2-е место",
    },
    {
      clientType: "Стартап",
      companyName: "EcoFresh",
      projectType: "Упаковка",
      description:
        "Дизайн экологичной упаковки для линейки органических продуктов. Разработка концепции, создание макетов и подготовка файлов для производства.",
      presentationLink: "https://cloud-storage.com/presentation2",
      competition: null,
    },
    {
      clientType: "Государственное учреждение",
      companyName: "Городской музей современного искусства",
      projectType: "Полиграфия",
      description:
        "Разработка визуальной концепции и дизайн полиграфических материалов для выставки современного искусства. Создание афиш, каталогов и информационных материалов.",
      presentationLink: "https://cloud-storage.com/presentation3",
      competition: "Биеннале графического дизайна, финалист",
    },
  ],
  softSkills: [
    "Коммуникабельность",
    "Креативное мышление",
    "Работа в команде",
    "Управление временем",
    "Адаптивность",
    "Критическое мышление",
  ],
  hardSkills: [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Figma",
    "Sketch",
    "Adobe InDesign",
    "Типографика",
    "UI/UX дизайн",
    "HTML/CSS базовый уровень",
  ],
};

export const invitations = [
  {
    id: 1,
    companyName: "ТехноСофт",
    position: "Senior UX/UI Designer",
    message:
      "Нам понравилось ваше портфолио и опыт работы. Хотели бы обсудить возможность сотрудничества над нашим новым проектом.",
    date: "01.03.2025",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    companyName: "Дизайн Студия 'Креатив'",
    position: "Графический дизайнер",
    message:
      "Ищем талантливого дизайнера для работы над брендингом. Ваш стиль идеально подходит для нашего проекта.",
    date: "28.02.2025",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    companyName: "ИнноваТех",
    position: "Product Designer",
    message:
      "Приглашаем вас присоединиться к нашей команде для работы над инновационным продуктом в сфере финтех.",
    date: "25.02.2025",
    logo: "/placeholder.svg?height=40&width=40",
  },
];
