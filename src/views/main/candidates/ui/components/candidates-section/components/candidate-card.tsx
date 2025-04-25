'use client';

import { JobSeeker } from '@/entities/job-seekers/types';

import { motion } from 'framer-motion';

import { Mail, MessageCircle } from 'lucide-react';
import { Badge } from '@/shared/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/shared/components/ui/card';

interface Props {
  candidate: JobSeeker;
}

const CandidateCard = ({ candidate }: Props) => {
  return (
    <Card className="h-full overflow-hidden border-none shadow-lg">
      <CardHeader className="pb-2 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="flex flex-col space-y-1.5">
          <h2 className="text-2xl font-semibold text-gray-800">
            {candidate.lastName} {candidate.firstName}
          </h2>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 pt-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-purple-500" />
            <a href={`mailto:${candidate.email}`} className="text-sm hover:underline text-gray-700">
              {candidate.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4 text-purple-500" />
            <a
              href={`https://t.me/${candidate.telegram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline text-gray-700"
            >
              {candidate.telegram}
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2 text-gray-700">Софт-скиллы:</h3>
          <div className="flex flex-wrap gap-2">
            {candidate.softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2 text-gray-700">Хард-скиллы:</h3>
          <div className="flex flex-wrap gap-2">
            {candidate.hardSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge
                  variant="secondary"
                  className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-colors"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CandidateCard;
