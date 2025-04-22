"use client";

import {motion} from "framer-motion";
import {candidates} from "@/views/main/candidates/const";

import CandidateCard from "@/views/main/candidates/ui/components/candidates-section/components/candidate-card";

const CandidatesSection = () => {
    return (
        <div className="container mx-auto py-8 px-4">
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {opacity: 0},
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
                            hidden: {opacity: 0, y: 20},
                            visible: {opacity: 1, y: 0},
                        }}
                        whileHover={{
                            y: -5,
                            transition: {duration: 0.2},
                        }}
                    >
                        <CandidateCard candidate={candidate}/>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default CandidatesSection;