"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";
import { routes } from "@/shared/const/routes";
import { homeFindTeamCardVariants } from "@/views/main/home/ui/components/find-team-section/const/motion";

const FindTeamMain = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <motion.div custom={0} initial="hidden" animate="visible" variants={homeFindTeamCardVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Для Соискателей</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Создайте профиль и свяжитесь с потенциальными работодателями</p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button asChild className="w-full">
                <Link href={routes.vacancies.href}>Просмотреть Вакансии</Link>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div custom={1} initial="hidden" animate="visible" variants={homeFindTeamCardVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Для Работодателей</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Найдите квалифицированных кандидатов на ваши позиции</p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button asChild className="w-full">
                <Link href={routes.candidates.href}>Просмотреть Кандидатов</Link>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default FindTeamMain;
