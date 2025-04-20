import {motion} from "framer-motion";

import {employer} from "@/views/main/profile/employer-profile/const";
import {employerCardVariants} from "@/views/main/profile/employer-profile/const/motion";

import {Badge} from "@/shared/components/ui/badge";
import {MotionCard} from "@/shared/const/motion";
import {CardContent, CardHeader, CardTitle} from "@/shared/components/ui/card";

const EmployerOverviewSection = () => {
    return (
        <>
            <MotionCard
                variants={employerCardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <CardHeader>
                    <CardTitle>О компании</CardTitle>
                </CardHeader>
                <CardContent>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {employer.description}
                    </motion.p>
                </CardContent>
            </MotionCard>

            <MotionCard
                variants={employerCardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ delay: 0.2 }}
            >
                <CardHeader>
                    <CardTitle>Бренды</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        {employer.brandNames.map((brand, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05, type: "spring" }}
                            >
                                <Badge className="px-3 py-1">{brand}</Badge>
                            </motion.div>
                        ))}
                    </div>
                </CardContent>
            </MotionCard>
        </>
    );
};

export default EmployerOverviewSection;