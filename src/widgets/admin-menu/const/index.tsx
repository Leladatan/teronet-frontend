import { Briefcase, Users, FileText, BarChart3 } from 'lucide-react';

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

export const navItems: NavItem[] = [
  {
    title: 'Мониторинг',
    href: '/admin/monitoring',
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    title: 'Работодатели',
    href: '/admin/employers',
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    title: 'Соискатели',
    href: '/admin/job-seekers',
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: 'Заявки',
    href: '/admin/claims',
    icon: <FileText className="h-5 w-5" />,
  },
];
