import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { UNITS } from '../data/lessons';
import { LessonPlayer } from '../components/LessonPlayer';
import { ArrowLeft, BookOpen } from 'lucide-react';

export const Lesson: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();

  // Find the lesson across all units
  const allLessons = UNITS.flatMap(u => u.lessons);
  const foundLesson = allLessons.find(l => l.id === lessonId);

  if (!foundLesson) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-rose-100 text-maroon flex items-center justify-center mb-4">
          <BookOpen className="w-8 h-8" />
        </div>
        <h2 className="font-serif text-2xl font-bold text-maroon mb-2">Lesson Not Found</h2>
        <p className="text-sm text-ink-secondary mb-6 max-w-sm">
          The requested lesson could not be located in the current curriculum.
        </p>
        <Link
          to="/learn"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-maroon text-ivory text-sm font-semibold hover:bg-maroon-light transition-all shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Sanskrit Learning Path</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory">
      <LessonPlayer lesson={foundLesson} />
    </div>
  );
};
