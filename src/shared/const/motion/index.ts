import {motion} from "framer-motion";

import {Card} from "@/shared/components/ui/card";
import {Badge} from "@/shared/components/ui/badge";
import {Avatar} from "@/shared/components/ui/avatar";

export const MotionAvatar = motion.create(Avatar);
export const MotionCard = motion.create(Card);
export const MotionBadge = motion.create(Badge);