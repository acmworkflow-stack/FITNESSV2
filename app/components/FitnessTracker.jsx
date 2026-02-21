'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { Calendar, Plus, Dumbbell, Target, Check, X, Edit2, Trash2, Bell, ChevronRight, ChevronLeft, Copy, Upload, Search, Play, Info, Activity, LogOut } from 'lucide-react';
import sessionsSeed from '../data/sessions.json';
import { supabase } from '../lib/supabase';
import AuthModal from './AuthModal';

// Comprehensive food database (MyFitnessPal-style)
const FOOD_DATABASE = {
  'chicken breast': { calories: 165, protein: 31, carbs: 0, fats: 3.6, serving: '100g' },
  'brown rice': { calories: 112, protein: 2.6, carbs: 24, fats: 0.9, serving: '100g' },
  'white rice': { calories: 130, protein: 2.7, carbs: 28, fats: 0.3, serving: '100g' },
  'broccoli': { calories: 34, protein: 2.8, carbs: 7, fats: 0.4, serving: '100g' },
  'salmon': { calories: 208, protein: 20, carbs: 0, fats: 13, serving: '100g' },
  'eggs': { calories: 155, protein: 13, carbs: 1.1, fats: 11, serving: '2 large' },
  'egg whites': { calories: 52, protein: 11, carbs: 0.7, fats: 0.2, serving: '100g' },
  'oatmeal': { calories: 389, protein: 17, carbs: 66, fats: 7, serving: '100g' },
  'banana': { calories: 89, protein: 1.1, carbs: 23, fats: 0.3, serving: '1 medium' },
  'apple': { calories: 52, protein: 0.3, carbs: 14, fats: 0.2, serving: '1 medium' },
  'almonds': { calories: 579, protein: 21, carbs: 22, fats: 50, serving: '100g' },
  'peanut butter': { calories: 588, protein: 25, carbs: 20, fats: 50, serving: '100g' },
  'greek yogurt': { calories: 59, protein: 10, carbs: 3.6, fats: 0.4, serving: '100g' },
  'whole milk': { calories: 61, protein: 3.2, carbs: 5, fats: 3.3, serving: '100ml' },
  'skim milk': { calories: 34, protein: 3.4, carbs: 5, fats: 0.1, serving: '100ml' },
  'avocado': { calories: 160, protein: 2, carbs: 9, fats: 15, serving: '100g' },
  'sweet potato': { calories: 86, protein: 1.6, carbs: 20, fats: 0.1, serving: '100g' },
  'ground beef': { calories: 250, protein: 26, carbs: 0, fats: 15, serving: '100g' },
  'ground turkey': { calories: 150, protein: 20, carbs: 0, fats: 7, serving: '100g' },
  'tuna': { calories: 132, protein: 28, carbs: 0, fats: 1.3, serving: '100g' },
  'tilapia': { calories: 96, protein: 20, carbs: 0, fats: 1.7, serving: '100g' },
  'shrimp': { calories: 99, protein: 24, carbs: 0.2, fats: 0.3, serving: '100g' },
  'quinoa': { calories: 120, protein: 4.4, carbs: 21, fats: 1.9, serving: '100g' },
  'pasta': { calories: 131, protein: 5, carbs: 25, fats: 1.1, serving: '100g' },
  'bread': { calories: 265, protein: 9, carbs: 49, fats: 3.2, serving: '100g' },
  'cheese': { calories: 402, protein: 25, carbs: 1.3, fats: 33, serving: '100g' },
  'cottage cheese': { calories: 98, protein: 11, carbs: 3.4, fats: 4.3, serving: '100g' },
  'spinach': { calories: 23, protein: 2.9, carbs: 3.6, fats: 0.4, serving: '100g' },
  'tomato': { calories: 18, protein: 0.9, carbs: 3.9, fats: 0.2, serving: '100g' },
  'cucumber': { calories: 15, protein: 0.7, carbs: 3.6, fats: 0.1, serving: '100g' },
  'carrots': { calories: 41, protein: 0.9, carbs: 10, fats: 0.2, serving: '100g' },
  'olive oil': { calories: 884, protein: 0, carbs: 0, fats: 100, serving: '100ml' },
  'coconut oil': { calories: 862, protein: 0, carbs: 0, fats: 100, serving: '100ml' },
  'protein powder': { calories: 120, protein: 24, carbs: 3, fats: 1.5, serving: '1 scoop' },
  'honey': { calories: 304, protein: 0.3, carbs: 82, fats: 0, serving: '100g' },
  'orange': { calories: 47, protein: 0.9, carbs: 12, fats: 0.1, serving: '1 medium' },
  'strawberries': { calories: 32, protein: 0.7, carbs: 8, fats: 0.3, serving: '100g' },
  'blueberries': { calories: 57, protein: 0.7, carbs: 14, fats: 0.3, serving: '100g' },
  'bell pepper': { calories: 31, protein: 1, carbs: 6, fats: 0.3, serving: '100g' },
  'onion': { calories: 40, protein: 1.1, carbs: 9, fats: 0.1, serving: '100g' },
  'garlic': { calories: 149, protein: 6.4, carbs: 33, fats: 0.5, serving: '100g' }
};

// Running distance database for time trials
const RUNNING_DISTANCES = [
  { id: '100m', name: '100 Meter Sprint', distance: 100, unit: 'meters', category: 'Sprint' },
  { id: '200m', name: '200 Meter Sprint', distance: 200, unit: 'meters', category: 'Sprint' },
  { id: '400m', name: '400 Meter Sprint', distance: 400, unit: 'meters', category: 'Sprint' },
  { id: '800m', name: '800 Meter Run', distance: 800, unit: 'meters', category: 'Middle Distance' },
  { id: '1500m', name: '1500 Meter Run', distance: 1500, unit: 'meters', category: 'Middle Distance' },
  { id: '1mile', name: '1 Mile Run', distance: 1.0, unit: 'miles', category: 'Middle Distance' },
  { id: '5k', name: '5K Run', distance: 5, unit: 'km', category: 'Distance' },
  { id: '10k', name: '10K Run', distance: 10, unit: 'km', category: 'Distance' },
  { id: 'half', name: 'Half Marathon', distance: 21.1, unit: 'km', category: 'Long Distance' },
  { id: 'full', name: 'Full Marathon', distance: 42.2, unit: 'km', category: 'Long Distance' }
];

const SPRINT_DISTANCES = [
  '40 Yard Dash',
  '100m',
  '200m',
  'Mile / 1600m',
  'Custom'
];

const SESSION_TYPES = [
  'Day 1 - Upper Body',
  'Day 2 - Lower Body'
];

const parseNumberValue = (value) => {
  if (value === null || value === undefined) return null;
  const match = String(value).match(/\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : null;
};

const parseTimeToSeconds = (value) => {
  if (value === null || value === undefined) return null;
  const raw = String(value).trim();
  if (!raw) return null;
  if (raw.includes(':')) {
    const [minutes, seconds] = raw.split(':');
    const mins = parseNumberValue(minutes);
    const secs = parseNumberValue(seconds);
    if (mins === null || secs === null) return null;
    return mins * 60 + secs;
  }
  const asNumber = parseNumberValue(raw);
  return asNumber === null ? null : asNumber;
};

const formatSeconds = (seconds) => {
  if (seconds === null || seconds === undefined) return '';
  if (seconds >= 60) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.round(seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }
  const rounded = Math.round(seconds * 10) / 10;
  return `${rounded}s`;
};

const toIsoDate = (value) => {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return date.toISOString().split('T')[0];
};

const getWeekStart = (dateString) => {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return null;
  const day = date.getDay();
  const diff = (day === 0 ? -6 : 1) - day;
  date.setDate(date.getDate() + diff);
  return toIsoDate(date);
};

const downloadFile = (content, filename, type) => {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
};

const toCsvValue = (value) => {
  if (value === null || value === undefined) return '';
  const stringValue = String(value).replace(/"/g, '""');
  return `"${stringValue}"`;
};

const computeSessionPRs = (sessions) => {
  const strengthMap = new Map();
  const sprintMap = new Map();

  sessions.forEach((session) => {
    const athlete = session.athlete || 'Unknown';

    (session.exercises || []).forEach((exercise) => {
      const weight = parseNumberValue(exercise.weight);
      if (weight === null) return;

      const key = `${athlete}::${exercise.name}`;
      const existing = strengthMap.get(key);
      if (!existing || weight > existing.value) {
        strengthMap.set(key, {
          athlete,
          exercise: exercise.name,
          value: weight,
          reps: exercise.reps || '',
          date: session.date
        });
      }
    });

    (session.sprints || []).forEach((sprint) => {
      const attempts = [sprint.attempt1, sprint.attempt2, sprint.attempt3]
        .map(parseTimeToSeconds)
        .filter((time) => time !== null);
      if (attempts.length === 0) return;

      const best = Math.min(...attempts);
      const key = `${athlete}::${sprint.distance}`;
      const existing = sprintMap.get(key);
      if (!existing || best < existing.value) {
        sprintMap.set(key, {
          athlete,
          distance: sprint.distance,
          value: best,
          date: session.date
        });
      }
    });
  });

  return {
    strength: Array.from(strengthMap.values()),
    sprints: Array.from(sprintMap.values())
  };
};

const buildSessionCsv = (sessions) => {
  const headers = [
    'date',
    'athlete',
    'session_name',
    'session_type',
    'energy_level',
    'duration_minutes',
    'exercise_name',
    'exercise_sets',
    'exercise_reps',
    'exercise_weight',
    'sprint_distance',
    'sprint_attempt_1',
    'sprint_attempt_2',
    'sprint_attempt_3',
    'cardio_type',
    'cardio_distance',
    'cardio_unit',
    'cardio_duration',
    'notes',
    'coach_notes'
  ];

  const rows = [headers.map(toCsvValue).join(',')];

  sessions.forEach((session) => {
    const exercises = session.exercises && session.exercises.length > 0 ? session.exercises : [null];
    const sprints = session.sprints && session.sprints.length > 0 ? session.sprints : [null];
    const cardio = session.cardio && session.cardio.length > 0 ? session.cardio : [null];

    const maxRows = Math.max(exercises.length, sprints.length, cardio.length);
    for (let index = 0; index < maxRows; index += 1) {
      const exercise = exercises[index] || {};
      const sprint = sprints[index] || {};
      const cardioItem = cardio[index] || {};
      const row = [
        session.date,
        session.athlete,
        session.name,
        session.sessionType,
        session.energyLevel,
        session.duration,
        exercise.name,
        exercise.sets,
        exercise.reps,
        exercise.weight,
        sprint.distance,
        sprint.attempt1,
        sprint.attempt2,
        sprint.attempt3,
        cardioItem.type,
        cardioItem.distance,
        cardioItem.unit,
        cardioItem.duration,
        session.notes,
        session.coachNotes
      ];
      rows.push(row.map(toCsvValue).join(','));
    }
  });

  return rows.join('\n');
};

const createEmptyWorkoutForm = () => ({
  name: '',
  athlete: '',
  sessionType: SESSION_TYPES[0],
  energyLevel: '',
  exercises: [],
  cardio: [],
  sprints: [],
  date: new Date().toISOString().split('T')[0],
  duration: '',
  notes: '',
  coachNotes: '',
  fromTemplate: false
});

const createEmptySessionRow = () => ({
  id: `${Date.now()}-${Math.random()}`,
  athlete: '',
  date: new Date().toISOString().split('T')[0],
  sessionType: SESSION_TYPES[0],
  name: '',
  energyLevel: '',
  exercisesText: '',
  sprintsText: '',
  duration: ''
});

// Muscle group mapping with recovery times
const MUSCLE_GROUPS = {
  // Upper Body Front
  'chest': { name: 'Chest', location: 'front', recovery: 48 },
  'front-delts': { name: 'Front Deltoids', location: 'front', recovery: 48 },
  'biceps': { name: 'Biceps', location: 'front', recovery: 48 },
  'abs': { name: 'Abdominals', location: 'front', recovery: 24 },
  'obliques': { name: 'Obliques', location: 'front', recovery: 24 },
  'quads': { name: 'Quadriceps', location: 'front', recovery: 72 },
  'hip-flexors': { name: 'Hip Flexors', location: 'front', recovery: 48 },
  
  // Upper Body Back
  'traps': { name: 'Trapezius', location: 'back', recovery: 48 },
  'rear-delts': { name: 'Rear Deltoids', location: 'back', recovery: 48 },
  'lats': { name: 'Latissimus Dorsi', location: 'back', recovery: 72 },
  'lower-back': { name: 'Lower Back', location: 'back', recovery: 72 },
  'triceps': { name: 'Triceps', location: 'back', recovery: 48 },
  'glutes': { name: 'Glutes', location: 'back', recovery: 72 },
  'hamstrings': { name: 'Hamstrings', location: 'back', recovery: 72 },
  'calves': { name: 'Calves', location: 'back', recovery: 48 }
};

// Exercise to muscle mapping
const EXERCISE_MUSCLE_MAP = {
  'barbell back squat': ['quads', 'glutes', 'hamstrings', 'lower-back'],
  'barbell bench press': ['chest', 'front-delts', 'triceps'],
  'barbell deadlift': ['hamstrings', 'glutes', 'lower-back', 'traps', 'lats'],
  'barbell row': ['lats', 'traps', 'rear-delts', 'biceps'],
  'overhead press': ['front-delts', 'triceps', 'traps'],
  'pull-ups': ['lats', 'biceps', 'traps'],
  'pull ups': ['lats', 'biceps', 'traps'],
  'dumbbell bench press': ['chest', 'front-delts', 'triceps'],
  'lunges': ['quads', 'glutes', 'hamstrings'],
  'romanian deadlift': ['hamstrings', 'glutes', 'lower-back'],
  'dumbbell shoulder press': ['front-delts', 'triceps'],
  'leg press': ['quads', 'glutes'],
  'bicep curls': ['biceps'],
  'tricep dips': ['triceps', 'chest'],
  'plank': ['abs', 'obliques'],
  'lat pulldown': ['lats', 'biceps'],
  'face pulls': ['rear-delts', 'traps'],
  'leg curl': ['hamstrings'],
  'calf raises': ['calves'],
  'cable flyes': ['chest'],
  'farmers walk': ['traps', 'abs', 'calves']
};

// Comprehensive exercise database with video links
const EXERCISE_DATABASE = [
  {
    id: 1,
    name: 'Barbell Back Squat',
    category: 'Legs',
    muscleGroup: 'Quads, Glutes, Hamstrings',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    videoUrl: 'https://www.youtube.com/watch?v=ultWZbUMPL8',
    gifUrl: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2VzYWtlZmhhNWM0d3F1ZTZrOTBuMGVxOTFsYXNhZGZhc2RmYXNk/example1.gif',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Place barbell on upper back',
      'Lower by bending knees and hips',
      'Keep chest up and core tight',
      'Push through heels to return to start'
    ]
  },
  {
    id: 2,
    name: 'Barbell Bench Press',
    category: 'Chest',
    muscleGroup: 'Chest, Triceps, Shoulders',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    videoUrl: 'https://www.youtube.com/watch?v=rT7DgCr-3pg',
    instructions: [
      'Lie flat on bench with feet planted',
      'Grip barbell slightly wider than shoulders',
      'Lower bar to mid-chest',
      'Press bar up until arms fully extended',
      'Keep shoulder blades retracted'
    ]
  },
  {
    id: 3,
    name: 'Barbell Deadlift',
    category: 'Back',
    muscleGroup: 'Back, Glutes, Hamstrings',
    equipment: 'Barbell',
    difficulty: 'Advanced',
    videoUrl: 'https://www.youtube.com/watch?v=op9kVnSso6Q',
    instructions: [
      'Stand with feet hip-width apart',
      'Grip barbell just outside legs',
      'Keep back straight, chest up',
      'Drive through heels to stand',
      'Lower with control'
    ]
  },
  {
    id: 4,
    name: 'Barbell Row',
    category: 'Back',
    muscleGroup: 'Lats, Rhomboids, Traps',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    videoUrl: 'https://www.youtube.com/watch?v=FWJR5Ve8bnQ',
    instructions: [
      'Bend at hips, keep back straight',
      'Pull bar to lower chest',
      'Squeeze shoulder blades together',
      'Lower with control',
      'Keep core engaged'
    ]
  },
  {
    id: 5,
    name: 'Overhead Press',
    category: 'Shoulders',
    muscleGroup: 'Shoulders, Triceps',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    videoUrl: 'https://www.youtube.com/watch?v=2yjwXTZQDDI',
    instructions: [
      'Start with bar at shoulder height',
      'Press bar straight overhead',
      'Lock out arms at top',
      'Lower with control',
      'Keep core tight'
    ]
  },
  {
    id: 6,
    name: 'Pull-ups',
    category: 'Back',
    muscleGroup: 'Lats, Biceps',
    equipment: 'Pull-up Bar',
    difficulty: 'Intermediate',
    videoUrl: 'https://www.youtube.com/watch?v=eGo4IYlbE5g',
    instructions: [
      'Hang from bar with overhand grip',
      'Pull chest to bar',
      'Lower with control',
      'Full extension at bottom',
      'Engage lats throughout'
    ]
  },
  {
    id: 7,
    name: 'Dumbbell Bench Press',
    category: 'Chest',
    muscleGroup: 'Chest, Triceps, Shoulders',
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=VmB1G1K7v94',
    instructions: [
      'Lie on bench with dumbbells',
      'Start with weights at chest level',
      'Press up until arms extended',
      'Lower with control',
      'Keep elbows at 45 degrees'
    ]
  },
  {
    id: 8,
    name: 'Lunges',
    category: 'Legs',
    muscleGroup: 'Quads, Glutes',
    equipment: 'Bodyweight/Dumbbells',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=QOVaHwm-Q6U',
    instructions: [
      'Step forward with one leg',
      'Lower hips until both knees bent 90°',
      'Push back to starting position',
      'Alternate legs',
      'Keep torso upright'
    ]
  },
  {
    id: 9,
    name: 'Romanian Deadlift',
    category: 'Legs',
    muscleGroup: 'Hamstrings, Glutes',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    videoUrl: 'https://www.youtube.com/watch?v=2SHsk9AzdjA',
    instructions: [
      'Hold barbell at hip level',
      'Hinge at hips, push hips back',
      'Lower bar along legs',
      'Feel stretch in hamstrings',
      'Return to standing'
    ]
  },
  {
    id: 10,
    name: 'Dumbbell Shoulder Press',
    category: 'Shoulders',
    muscleGroup: 'Shoulders, Triceps',
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=qEwKCR5JCog',
    instructions: [
      'Sit or stand with dumbbells at shoulders',
      'Press weights overhead',
      'Fully extend arms',
      'Lower with control',
      'Keep core engaged'
    ]
  },
  {
    id: 11,
    name: 'Leg Press',
    category: 'Legs',
    muscleGroup: 'Quads, Glutes',
    equipment: 'Machine',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=IZxyjW7MPJQ',
    instructions: [
      'Sit in machine, feet on platform',
      'Release safety, lower weight',
      'Push through heels',
      'Extend legs fully',
      'Control the descent'
    ]
  },
  {
    id: 12,
    name: 'Bicep Curls',
    category: 'Arms',
    muscleGroup: 'Biceps',
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=ykJmrZ5v0Oo',
    instructions: [
      'Stand with dumbbells at sides',
      'Curl weights to shoulders',
      'Keep elbows stationary',
      'Lower with control',
      'No swinging'
    ]
  },
  {
    id: 13,
    name: 'Tricep Dips',
    category: 'Arms',
    muscleGroup: 'Triceps',
    equipment: 'Bench/Bars',
    difficulty: 'Intermediate',
    videoUrl: 'https://www.youtube.com/watch?v=6kALZikXxLc',
    instructions: [
      'Position hands on bars or bench',
      'Lower body by bending elbows',
      'Go until 90 degree angle',
      'Push back up',
      'Keep body upright'
    ]
  },
  {
    id: 14,
    name: 'Plank',
    category: 'Core',
    muscleGroup: 'Abs, Core',
    equipment: 'Bodyweight',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c',
    instructions: [
      'Start in forearm position',
      'Keep body in straight line',
      'Engage core',
      'Hold position',
      'Breathe normally'
    ]
  },
  {
    id: 15,
    name: 'Lat Pulldown',
    category: 'Back',
    muscleGroup: 'Lats, Biceps',
    equipment: 'Machine',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=CAwf7n6Luuc',
    instructions: [
      'Sit at machine, grab bar wide',
      'Pull bar to upper chest',
      'Squeeze shoulder blades',
      'Return with control',
      'Lean back slightly'
    ]
  },
  {
    id: 16,
    name: 'Face Pulls',
    category: 'Shoulders',
    muscleGroup: 'Rear Delts, Traps',
    equipment: 'Cable',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=rep-qVOkqgk',
    instructions: [
      'Set cable at face height',
      'Pull rope towards face',
      'Separate hands at end',
      'Squeeze rear delts',
      'Return with control'
    ]
  },
  {
    id: 17,
    name: 'Leg Curl',
    category: 'Legs',
    muscleGroup: 'Hamstrings',
    equipment: 'Machine',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=ELOCsoDSmrg',
    instructions: [
      'Lie face down on machine',
      'Curl legs toward glutes',
      'Squeeze hamstrings',
      'Lower with control',
      'Full range of motion'
    ]
  },
  {
    id: 18,
    name: 'Calf Raises',
    category: 'Legs',
    muscleGroup: 'Calves',
    equipment: 'Machine/Bodyweight',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=gwLzBJYoWlI',
    instructions: [
      'Stand with balls of feet on edge',
      'Raise heels as high as possible',
      'Hold at top',
      'Lower with control',
      'Full stretch at bottom'
    ]
  },
  {
    id: 19,
    name: 'Cable Flyes',
    category: 'Chest',
    muscleGroup: 'Chest',
    equipment: 'Cable',
    difficulty: 'Intermediate',
    videoUrl: 'https://www.youtube.com/watch?v=Iwe6AmxVf7o',
    instructions: [
      'Set cables at chest height',
      'Bring hands together',
      'Slight bend in elbows',
      'Squeeze chest',
      'Return with control'
    ]
  },
  {
    id: 20,
    name: 'Farmers Walk',
    category: 'Full Body',
    muscleGroup: 'Grip, Core, Traps',
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=rt17lmnaLSM',
    instructions: [
      'Hold heavy dumbbells at sides',
      'Walk forward with good posture',
      'Keep shoulders back',
      'Engage core',
      'Walk for distance or time'
    ]
  }
];

export default function FitnessTracker() {
  const [activeTab, setActiveTab] = useState('home');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [workouts, setWorkouts] = useState([]);
  const [workoutTemplates, setWorkoutTemplates] = useState([]);
  const [showWorkoutModal, setShowWorkoutModal] = useState(false);
  const [editWorkoutId, setEditWorkoutId] = useState(null);
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [showExerciseLibrary, setShowExerciseLibrary] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0]);
  const [userName, setUserName] = useState('Milli');
  const [selectedAthlete, setSelectedAthlete] = useState('');
  const [sessionFilterAthlete, setSessionFilterAthlete] = useState('');
  const [sessionFilterStart, setSessionFilterStart] = useState('');
  const [sessionFilterEnd, setSessionFilterEnd] = useState('');
  const [sessionFilterQuery, setSessionFilterQuery] = useState('');
  const [sessionFilterType, setSessionFilterType] = useState('all');
  const [calendarView, setCalendarView] = useState('week'); // 'week', 'month', or 'day'
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [draggedWorkout, setDraggedWorkout] = useState(null);
  
  // NEW: Difficulty rating and PRs
  const [showDifficultyModal, setShowDifficultyModal] = useState(false);
  const [workoutToRate, setWorkoutToRate] = useState(null);
  const [personalRecords, setPersonalRecords] = useState([]);
  const [archivedDays, setArchivedDays] = useState([]);
  const [allUsersPRs, setAllUsersPRs] = useState([]); // Mock data for leaderboard

  // Workout form state
  const [workoutForm, setWorkoutForm] = useState(createEmptyWorkoutForm());
  const [sessionSheetRows, setSessionSheetRows] = useState([createEmptySessionRow()]);

  // Cardio form state
  const [cardioForm, setCardioForm] = useState({
    type: 'running',
    distance: '',
    unit: 'miles',
    duration: '',
    intensity: 'moderate'
  });

  const [sprintForm, setSprintForm] = useState({
    distance: SPRINT_DISTANCES[0],
    attempt1: '',
    attempt2: '',
    attempt3: '',
    notes: ''
  });

  // Exercise being added
  const [exerciseForm, setExerciseForm] = useState({
    name: '',
    sets: '',
    reps: '',
    weight: '',
    weightChange: '',
    restTime: '3m'
  });

  // Unit conversion constants
  const UNIT_CONVERSIONS = {
    grams: { factor: 1, label: 'g' },
    ounces: { factor: 28.3495, label: 'oz' },
    milliliters: { factor: 1, label: 'ml' }
  };


  // Template form state
  const [templateForm, setTemplateForm] = useState({
    name: '',
    exercises: [],
    description: ''
  });

  // Import text
  const [importText, setImportText] = useState('');
  

  const athleteOptions = useMemo(() => {
    const fromSessions = workouts.map((workout) => workout.athlete).filter(Boolean);
    return Array.from(new Set([userName, ...fromSessions])).filter(Boolean);
  }, [workouts, userName]);

  const activeAthlete = selectedAthlete || athleteOptions[0] || userName;
  const derivedPRs = useMemo(() => computeSessionPRs(workouts), [workouts]);
  const isEditingWorkout = Boolean(editWorkoutId);
  const filteredSessions = useMemo(() => {
    return workouts.filter((session) => {
      if (sessionFilterAthlete && session.athlete !== sessionFilterAthlete) return false;
      if (sessionFilterType !== 'all' && session.sessionType !== sessionFilterType) return false;
      if (sessionFilterStart && session.date < sessionFilterStart) return false;
      if (sessionFilterEnd && session.date > sessionFilterEnd) return false;

      const query = sessionFilterQuery.trim().toLowerCase();
      if (!query) return true;

      const inName = (session.name || '').toLowerCase().includes(query);
      const inNotes = (session.notes || '').toLowerCase().includes(query);
      const inCoach = (session.coachNotes || '').toLowerCase().includes(query);
      const inExercises = (session.exercises || []).some((exercise) =>
        (exercise.name || '').toLowerCase().includes(query)
      );
      const inSprints = (session.sprints || []).some((sprint) =>
        (sprint.distance || '').toLowerCase().includes(query)
      );

      return inName || inNotes || inCoach || inExercises || inSprints;
    });
  }, [workouts, sessionFilterAthlete, sessionFilterType, sessionFilterStart, sessionFilterEnd, sessionFilterQuery]);

  const sessionDashboardStats = useMemo(() => {
    return filteredSessions.reduce(
      (totals, session) => {
        totals.sessions += 1;
        totals.exercises += (session.exercises || []).length;
        totals.sprints += (session.sprints || []).length;
        totals.cardio += (session.cardio || []).length;
        if (session.duration) {
          totals.duration += Number(session.duration) || 0;
        }
        return totals;
      },
      { sessions: 0, exercises: 0, sprints: 0, cardio: 0, duration: 0 }
    );
  }, [filteredSessions]);

  const athleteForDashboard = sessionFilterAthlete || activeAthlete;
  const sessionsByWeek = useMemo(() => {
    const buckets = new Map();
    filteredSessions.forEach((session) => {
      const week = getWeekStart(session.date);
      if (!week) return;
      const current = buckets.get(week) || 0;
      buckets.set(week, current + 1);
    });
    const ordered = Array.from(buckets.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([week, count]) => ({ week, count }));
    return ordered.slice(-8);
  }, [filteredSessions]);

  const sprintTrends = useMemo(() => {
    const trends = new Map();
    filteredSessions
      .filter((session) => !athleteForDashboard || session.athlete === athleteForDashboard)
      .forEach((session) => {
        (session.sprints || []).forEach((sprint) => {
          const attempts = [sprint.attempt1, sprint.attempt2, sprint.attempt3]
            .map(parseTimeToSeconds)
            .filter((time) => time !== null);
          if (attempts.length === 0) return;
          const best = Math.min(...attempts);
          const key = sprint.distance || 'Unknown';
          if (!trends.has(key)) trends.set(key, []);
          trends.get(key).push({ date: session.date, value: best });
        });
      });

    return Array.from(trends.entries())
      .map(([distance, points]) => {
        const sorted = points
          .sort((a, b) => a.date.localeCompare(b.date))
          .slice(-8);
        return { distance, points: sorted };
      })
      .sort((a, b) => a.distance.localeCompare(b.distance));
  }, [filteredSessions, athleteForDashboard]);

  const sessionPrHits = useMemo(() => {
    const strengthMap = new Map();
    const sprintMap = new Map();
    derivedPRs.strength.forEach((pr) => {
      strengthMap.set(`${pr.athlete}::${pr.exercise}`, pr.value);
    });
    derivedPRs.sprints.forEach((pr) => {
      sprintMap.set(`${pr.athlete}::${pr.distance}`, pr.value);
    });

    return filteredSessions.map((session) => {
      const hits = [];
      (session.exercises || []).forEach((exercise) => {
        const weight = parseNumberValue(exercise.weight);
        if (weight === null) return;
        const key = `${session.athlete}::${exercise.name}`;
        if (strengthMap.get(key) === weight) {
          hits.push(`PR: ${exercise.name} ${weight} lbs`);
        }
      });

      (session.sprints || []).forEach((sprint) => {
        const attempts = [sprint.attempt1, sprint.attempt2, sprint.attempt3]
          .map(parseTimeToSeconds)
          .filter((time) => time !== null);
        if (attempts.length === 0) return;
        const best = Math.min(...attempts);
        const key = `${session.athlete}::${sprint.distance}`;
        const pr = sprintMap.get(key);
        if (pr !== undefined && Math.abs(pr - best) < 0.01) {
          hits.push(`PR: ${sprint.distance} ${formatSeconds(best)}`);
        }
      });

      return { id: session.id, hits };
    });
  }, [filteredSessions, derivedPRs]);

  const sessionPrHitMap = useMemo(() => {
    return new Map(sessionPrHits.map((entry) => [entry.id, entry.hits]));
  }, [sessionPrHits]);

  const buildLinePath = (points, width, height) => {
    if (!points || points.length === 0) return '';
    const values = points.map((point) => point.value);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;

    return points
      .map((point, index) => {
        const x = (index / Math.max(points.length - 1, 1)) * width;
        const y = height - ((point.value - min) / range) * height;
        return `${index === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(' ');
  };

  // Load data and check authentication
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Check if user is logged in
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
          setUser(session.user);
          
          // Load workouts from Supabase
          const { data: workoutsData, error } = await supabase
            .from('workouts')
            .select('*')
            .eq('user_id', session.user.id)
            .order('date', { ascending: false });
          
          if (error) {
            console.error('Error loading workouts:', error);
            setWorkouts(Array.isArray(sessionsSeed) ? sessionsSeed : []);
          } else {
            setWorkouts(workoutsData || []);
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Error initializing app:', error);
        setWorkouts(Array.isArray(sessionsSeed) ? sessionsSeed : []);
      } finally {
        setLoading(false);
      }
    };

    initializeApp();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription?.unsubscribe();
  }, []);


  // Save workouts to Supabase
  const saveWorkouts = async (newWorkouts) => {
    setWorkouts(newWorkouts);
    if (!user) return;

    try {
      for (const workout of newWorkouts) {
        // Check if this is a new workout (ID is a number/timestamp) or existing (UUID string)
        const isNewWorkout = typeof workout.id === 'number';
        
        if (isNewWorkout) {
          // Insert new workout
          const { data, error } = await supabase
            .from('workouts')
            .insert([{ 
              ...workout, 
              user_id: user.id,
              id: undefined // Let Supabase generate UUID
            }])
            .select();
          
          if (error) {
            console.error('Error inserting workout:', error);
          } else if (data && data[0]) {
            // Update the local workout with the new UUID from Supabase
            const workoutIndex = newWorkouts.findIndex(w => w.id === workout.id);
            if (workoutIndex !== -1) {
              newWorkouts[workoutIndex].id = data[0].id;
            }
          }
        } else {
          // Update existing workout
          const { error } = await supabase
            .from('workouts')
            .update(workout)
            .eq('id', workout.id)
            .eq('user_id', user.id);
          
          if (error) {
            console.error('Error updating workout:', error);
          }
        }
      }
      // Update state with potentially new IDs
      setWorkouts(newWorkouts);
    } catch (error) {
      console.error('Error saving workouts:', error);
    }
  };

  // Save templates
  const saveTemplates = (newTemplates) => {
    setWorkoutTemplates(newTemplates);
    try {
      localStorage.setItem('templates', JSON.stringify(newTemplates));
    } catch (error) {
      console.error('Error saving templates:', error);
    }
  };

  // NEW: Save personal records
  const savePersonalRecords = (newPRs) => {
    setPersonalRecords(newPRs);
    try {
      localStorage.setItem('personalRecords', JSON.stringify(newPRs));
    } catch (error) {
      console.error('Error saving PRs:', error);
    }
  };

  // NEW: Save archived days
  const saveArchivedDays = (newArchived) => {
    setArchivedDays(newArchived);
    try {
      localStorage.setItem('archivedDays', JSON.stringify(newArchived));
    } catch (error) {
      console.error('Error saving archived days:', error);
    }
  };

  // NEW: Archive a day
  const archiveDay = (date) => {
    if (!archivedDays.includes(date)) {
      saveArchivedDays([...archivedDays, date]);
    }
  };

  // NEW: Update workout with difficulty rating
  const updateWorkoutWithDifficulty = (id, difficulty) => {
    const updated = workouts.map(w =>
      w.id === id ? { ...w, completed: true, difficulty: difficulty, completedDate: new Date().toISOString() } : w
    );
    saveWorkouts(updated);
  };

  // Add exercise from library
  const addExerciseFromLibrary = (exercise) => {
    setExerciseForm({
      ...exerciseForm,
      name: exercise.name
    });
    setShowExerciseLibrary(false);
  };

  // Add exercise to workout
  const addExercise = () => {
    if (exerciseForm.name && exerciseForm.sets && exerciseForm.reps) {
      setWorkoutForm({
        ...workoutForm,
        exercises: [...workoutForm.exercises, { ...exerciseForm, id: Date.now() }]
      });
      setExerciseForm({ name: '', sets: '', reps: '', weight: '', weightChange: '', restTime: '3m' });
    }
  };

  // NEW: Add cardio to workout
  const addCardio = () => {
    if (cardioForm.type && cardioForm.distance && cardioForm.duration) {
      setWorkoutForm({
        ...workoutForm,
        cardio: [...workoutForm.cardio, { ...cardioForm, id: Date.now() }]
      });
      setCardioForm({ type: 'running', distance: '', unit: 'miles', duration: '', intensity: 'moderate' });
    }
  };

  // NEW: Remove cardio from workout
  const removeCardio = (id) => {
    setWorkoutForm({
      ...workoutForm,
      cardio: workoutForm.cardio.filter(c => c.id !== id)
    });
  };

  const addSprint = () => {
    if (!sprintForm.distance) return;
    setWorkoutForm({
      ...workoutForm,
      sprints: [...workoutForm.sprints, { ...sprintForm, id: Date.now() }]
    });
    setSprintForm({
      distance: SPRINT_DISTANCES[0],
      attempt1: '',
      attempt2: '',
      attempt3: '',
      notes: ''
    });
  };

  const removeSprint = (id) => {
    setWorkoutForm({
      ...workoutForm,
      sprints: workoutForm.sprints.filter(sprint => sprint.id !== id)
    });
  };

  const updateSessionSheetRow = (id, patch) => {
    setSessionSheetRows((rows) => rows.map((row) => (row.id === id ? { ...row, ...patch } : row)));
  };

  const addSessionSheetRow = () => {
    setSessionSheetRows((rows) => [...rows, createEmptySessionRow()]);
  };

  const removeSessionSheetRow = (id) => {
    setSessionSheetRows((rows) => (rows.length > 1 ? rows.filter((row) => row.id !== id) : rows));
  };

  const parseDelimitedLine = (line) => {
    const trimmed = line.trim();
    if (!trimmed) return [];
    const separator = trimmed.includes('|') ? '|' : ',';
    return trimmed.split(separator).map((part) => part.trim()).filter(Boolean);
  };

  const parseExercisesFromText = (text) => {
    return text
      .split('\n')
      .map(parseDelimitedLine)
      .filter((parts) => parts.length > 0)
      .map((parts, index) => ({
        id: `${Date.now()}-${index}`,
        name: parts[0] || '',
        sets: parts[1] || '',
        reps: parts[2] || '',
        weight: parts[3] || ''
      }))
      .filter((exercise) => exercise.name);
  };

  const parseSprintsFromText = (text) => {
    return text
      .split('\n')
      .map(parseDelimitedLine)
      .filter((parts) => parts.length > 0)
      .map((parts, index) => ({
        id: `${Date.now()}-${index}`,
        distance: parts[0] || 'Custom',
        attempt1: parts[1] || '',
        attempt2: parts[2] || '',
        attempt3: parts[3] || ''
      }))
      .filter((sprint) => sprint.distance);
  };

  const saveSessionSheetRows = () => {
    const newSessions = sessionSheetRows.flatMap((row, index) => {
      if (!row.athlete || !row.date) return [];
      const exercises = parseExercisesFromText(row.exercisesText || '');
      const sprints = parseSprintsFromText(row.sprintsText || '');
      if (exercises.length === 0 && sprints.length === 0) return [];

      return [{
        id: Date.now() + index,
        name: row.name || row.sessionType || 'Session',
        athlete: row.athlete,
        sessionType: row.sessionType || SESSION_TYPES[0],
        energyLevel: row.energyLevel || '',
        exercises,
        sprints,
        cardio: [],
        date: row.date,
        duration: row.duration || '',
        notes: '',
        coachNotes: '',
        completed: false,
        fromTemplate: false
      }];
    });

    if (newSessions.length === 0) {
      alert('Add at least one valid session row with exercises or sprints.');
      return;
    }

    saveWorkouts([...workouts, ...newSessions]);
    setSessionSheetRows([createEmptySessionRow()]);
    alert('Sessions saved successfully!');
  };

  const startNewWorkout = () => {
    setEditWorkoutId(null);
    setWorkoutForm(createEmptyWorkoutForm());
    setShowWorkoutModal(true);
  };

  const startEditWorkout = (workout) => {
    setEditWorkoutId(workout.id);
    setWorkoutForm({
      name: workout.name || '',
      athlete: workout.athlete || '',
      sessionType: workout.sessionType || SESSION_TYPES[0],
      energyLevel: workout.energyLevel || '',
      exercises: workout.exercises || [],
      cardio: workout.cardio || [],
      sprints: workout.sprints || [],
      date: workout.date || new Date().toISOString().split('T')[0],
      duration: workout.duration || '',
      notes: workout.notes || '',
      coachNotes: workout.coachNotes || '',
      fromTemplate: false
    });
    setShowWorkoutModal(true);
  };

  const closeWorkoutModal = () => {
    setShowWorkoutModal(false);
    setEditWorkoutId(null);
    setWorkoutForm(createEmptyWorkoutForm());
  };

  const exportSessionsJson = () => {
    const content = JSON.stringify(filteredSessions, null, 2);
    downloadFile(content, 'sessions-export.json', 'application/json');
  };

  const exportSessionsCsv = () => {
    const content = buildSessionCsv(filteredSessions);
    downloadFile(content, 'sessions-export.csv', 'text/csv');
  };

  // Add exercise to template
  const addExerciseToTemplate = () => {
    if (exerciseForm.name && exerciseForm.sets && exerciseForm.reps) {
      setTemplateForm({
        ...templateForm,
        exercises: [...templateForm.exercises, { ...exerciseForm, id: Date.now() }]
      });
      setExerciseForm({ name: '', sets: '', reps: '', weight: '', weightChange: '', restTime: '3m' });
    }
  };

  // Remove exercise from workout
  const removeExercise = (id) => {
    setWorkoutForm({
      ...workoutForm,
      exercises: workoutForm.exercises.filter(ex => ex.id !== id)
    });
  };

  // Remove exercise from template
  const removeExerciseFromTemplate = (id) => {
    setTemplateForm({
      ...templateForm,
      exercises: templateForm.exercises.filter(ex => ex.id !== id)
    });
  };

  // Save template
  const saveTemplate = () => {
    if (templateForm.name && templateForm.exercises.length > 0) {
      const newTemplate = {
        ...templateForm,
        id: Date.now()
      };
      saveTemplates([...workoutTemplates, newTemplate]);
      setTemplateForm({ name: '', exercises: [], description: '' });
      setShowTemplateModal(false);
    }
  };

  // Load template into workout
  const loadTemplate = (template) => {
    setWorkoutForm({
      ...workoutForm,
      name: template.name,
      exercises: template.exercises.map(ex => ({ ...ex, id: Date.now() + Math.random() })),
      fromTemplate: true
    });
    setShowWorkoutModal(true);
  };

  // Delete template
  const deleteTemplate = (id) => {
    saveTemplates(workoutTemplates.filter(t => t.id !== id));
  };

  // Import workout from text
  const importWorkout = () => {
    try {
      const parsed = JSON.parse(importText);
      if (parsed.exercises && Array.isArray(parsed.exercises)) {
        const newTemplate = {
          ...parsed,
          id: Date.now()
        };
        saveTemplates([...workoutTemplates, newTemplate]);
        setImportText('');
        setShowImportModal(false);
      }
    } catch (error) {
      alert('Invalid format. Please paste valid JSON.');
    }
  };

  // Export template
  const exportTemplate = (template) => {
    const json = JSON.stringify(template, null, 2);
    navigator.clipboard.writeText(json);
    alert('Template copied to clipboard!');
  };

  // Save workout
  const saveWorkout = () => {
    if (!workoutForm.name) {
      alert('Please enter a session name');
      return;
    }
    if (!workoutForm.athlete) {
      alert('Please enter an athlete name');
      return;
    }
    if (workoutForm.exercises.length === 0 && workoutForm.cardio.length === 0 && workoutForm.sprints.length === 0) {
      alert('Please add at least one exercise, sprint, or cardio item');
      return;
    }
    if (isEditingWorkout) {
      const updated = workouts.map((workout) => {
        if (workout.id !== editWorkoutId) return workout;
        return {
          ...workout,
          ...workoutForm,
          id: editWorkoutId,
          completed: workout.completed,
          difficulty: workout.difficulty,
          completedDate: workout.completedDate,
          fromTemplate: false
        };
      });
      saveWorkouts(updated);
      closeWorkoutModal();
      alert('Session updated successfully!');
      return;
    }

    const newWorkout = {
      ...workoutForm,
      id: Date.now(),
      completed: false,
      fromTemplate: false
    };
    saveWorkouts([...workouts, newWorkout]);
    closeWorkoutModal();
    alert('Session saved successfully!');
  };

  const deleteCurrentWorkout = () => {
    if (!isEditingWorkout) return;
    if (!window.confirm('Are you sure you want to delete this session? This cannot be undone.')) {
      return;
    }
    saveWorkouts(workouts.filter(w => w.id !== editWorkoutId));
    closeWorkoutModal();
    alert('Session deleted successfully!');
  };

  // Toggle workout completion
  const toggleWorkoutComplete = (id) => {
    const workout = workouts.find(w => w.id === id);
    if (!workout.completed) {
      // Show difficulty modal when marking as complete
      setWorkoutToRate(id);
      setShowDifficultyModal(true);
    } else {
      // Just toggle off if already completed
      const updated = workouts.map(w => 
        w.id === id ? { ...w, completed: false, difficulty: null } : w
      );
      saveWorkouts(updated);
    }
  };

  // Delete workout
  const deleteWorkout = async (id) => {
    if (!user) return;
    
    try {
      const { error } = await supabase
        .from('workouts')
        .delete()
        .eq('id', id)
        .eq('user_id', user.id);
      
      if (error) throw error;
      
      // Update local state
      setWorkouts(workouts.filter(w => w.id !== id));
    } catch (error) {
      console.error('Error deleting workout:', error);
      alert('Failed to delete workout');
    }
  };

  // Move workout to different date
  const moveWorkout = (workoutId, newDate) => {
    const updated = workouts.map(w =>
      w.id === workoutId ? { ...w, date: newDate } : w
    );
    saveWorkouts(updated);
  };

  // Drag and drop handlers
  const handleDragStart = (workout) => {
    setDraggedWorkout(workout);
  };

  const handleDrop = (date) => {
    if (draggedWorkout) {
      moveWorkout(draggedWorkout.id, date);
      setDraggedWorkout(null);
    }
  };

  // Get today's stats
  const getTodayStats = () => {
    const today = new Date().toISOString().split('T')[0];
    const todayWorkouts = workouts.filter(w => w.date === today);
    const completedWorkouts = todayWorkouts.filter(w => w.completed).length;

    return { completedWorkouts, totalWorkouts: todayWorkouts.length };
  };

  // Get next 7 days
  const getNext7Days = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push({
        date: date.toISOString().split('T')[0],
        day: date.getDate(),
        dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
        isToday: i === 0
      });
    }
    return days;
  };

  // Get calendar days for month view
  const getMonthDays = () => {
    const year = calendarDate.getFullYear();
    const month = calendarDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Previous month days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonthLastDay - i).toISOString().split('T')[0],
        day: prevMonthLastDay - i,
        isCurrentMonth: false
      });
    }
    
    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: new Date(year, month, i).toISOString().split('T')[0],
        day: i,
        isCurrentMonth: true
      });
    }
    
    // Next month days
    const remainingDays = 42 - days.length; // 6 weeks * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i).toISOString().split('T')[0],
        day: i,
        isCurrentMonth: false
      });
    }
    
    return days;
  };

  // Render calendar day
  const renderCalendarDay = (day) => {
    const dayWorkouts = workouts.filter(w => w.date === day.date);
    
    return (
      <div key={day.date} className={`min-h-[100px] p-3 border border-gray-700 ${day.isCurrentMonth ? 'bg-gray-800' : 'bg-gray-800'} hover:bg-gray-700 cursor-pointer transition-colors`}>
        <div className="text-lg font-bold text-white mb-2">{day.day}</div>
        <div className="space-y-1">
          {dayWorkouts.map(workout => (
            <div
              key={workout.id}
              onClick={() => startEditWorkout(workout)}
              className={`text-sm font-semibold p-1.5 rounded cursor-pointer ${workout.completed ? 'bg-green-800 text-green-100' : 'bg-blue-800 text-blue-100'}`}
            >
              {workout.name}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // NEW: Render day view
  const renderDayView = () => {
    const dayWorkouts = workouts.filter(w => w.date === currentDate);
    const displayDate = new Date(currentDate);
    
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-3xl font-bold text-white">{displayDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</h3>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentDate(new Date(new Date(currentDate).setDate(new Date(currentDate).getDate() - 1)).toISOString().split('T')[0])}
              className="px-3 py-2 border border-gray-600 rounded-md hover:bg-gray-800"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setCurrentDate(new Date().toISOString().split('T')[0])}
              className="px-4 py-2 border border-gray-600 rounded-md text-sm hover:bg-gray-800"
            >
              Today
            </button>
            <button
              onClick={() => setCurrentDate(new Date(new Date(currentDate).setDate(new Date(currentDate).getDate() + 1)).toISOString().split('T')[0])}
              className="px-3 py-2 border border-gray-600 rounded-md hover:bg-gray-800"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Workouts Section */}
          <div className="bg-gray-800 rounded-lg shadow p-6">
            <h4 className="text-2xl font-bold text-white mb-4">Workouts</h4>
            {dayWorkouts.length > 0 ? (
              <div className="space-y-3">
                {dayWorkouts.map(workout => (
                  <div
                    key={workout.id}
                    onClick={() => startEditWorkout(workout)}
                    className={`p-4 rounded-lg border cursor-pointer ${workout.completed ? 'bg-green-900 border-green-700' : 'bg-blue-900 border-blue-700'}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="text-lg font-bold text-white">{workout.name}</h5>
                      <button
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleWorkoutComplete(workout.id);
                        }}
                        className={`p-1 rounded ${workout.completed ? 'text-green-600' : 'text-gray-400'}`}
                      >
                        <Check className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="space-y-1 text-sm font-semibold text-gray-200 mb-2">
                      {workout.exercises && workout.exercises.map(exercise => (
                        <div key={exercise.id} className="flex justify-between items-center">
                          <span className="text-gray-100">{exercise.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-400">{exercise.sets}×{exercise.reps}</span>
                            {exercise.weight && <span className="text-xs text-gray-400">{exercise.weight}</span>}
                            {exercise.weightChange && <span className={`text-xs font-medium ${parseInt(exercise.weightChange) > 0 ? 'text-green-600' : 'text-orange-400'}`}>{parseInt(exercise.weightChange) > 0 ? '+' : ''}{exercise.weightChange}</span>}
                          </div>
                        </div>
                      ))}
                      {workout.cardio && workout.cardio.map(cardio => (
                        <div key={cardio.id} className="flex justify-between text-orange-400">
                          <span className="capitalize">{cardio.type}: {cardio.distance} {cardio.unit}</span>
                          <span className="text-orange-500">{cardio.duration} min</span>
                        </div>
                      ))}
                    </div>
                    {workout.completed && workout.difficulty && (
                      <div className="text-sm text-green-200 p-2 bg-green-800 rounded">Difficulty: {workout.difficulty}/10</div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">No workouts scheduled</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Render week view
  const renderWeekView = () => {
    const days = getNext7Days();
    
    return (
      <div className="grid grid-cols-7 gap-4">
        {days.map(day => {
          const dayWorkouts = workouts.filter(w => w.date === day.date);
          
          return (
            <div key={day.date} className={`min-h-[200px] p-4 border border-gray-700 rounded-lg ${day.isToday ? 'bg-blue-900 border-blue-300' : 'bg-gray-800'} hover:shadow-md transition-shadow cursor-pointer`} onClick={() => { setCalendarView('day'); setCurrentDate(day.date); }} onDrop={() => handleDrop(day.date)} onDragOver={(e) => e.preventDefault()}>
              <div className="text-2xl font-bold text-white mb-1">{day.dayName}</div>
              <div className="text-lg font-semibold text-gray-200 mb-4">{day.day}</div>
              
              <div className="space-y-2">
                {dayWorkouts.map(workout => (
                  <div
                    key={workout.id}
                    draggable
                    onDragStart={() => handleDragStart(workout)}
                    onClick={(event) => {
                      event.stopPropagation();
                      startEditWorkout(workout);
                    }}
                    className={`p-3 rounded-lg text-sm font-semibold cursor-pointer ${workout.completed ? 'bg-green-800 text-green-100 border border-green-700' : 'bg-blue-800 text-blue-100 border border-blue-700'} hover:shadow-md transition-shadow`}
                  >
                    <div className="font-bold text-base">{workout.name}</div>
                    <div className="text-sm opacity-90">{workout.exercises.length} exercises</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Render month view
  const renderMonthView = () => {
    const days = getMonthDays();
    
    return (
      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="p-3 text-center font-bold text-lg text-white bg-gray-700">
            {day}
          </div>
        ))}
        {days.map(renderCalendarDay)}
      </div>
    );
  };

  const strengthPRs = derivedPRs.strength
    .filter((pr) => pr.athlete === activeAthlete)
    .sort((a, b) => a.exercise.localeCompare(b.exercise));
  const sprintPRs = derivedPRs.sprints
    .filter((pr) => pr.athlete === activeAthlete)
    .sort((a, b) => a.distance.localeCompare(b.distance));

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-white">Loading...</p>
        </div>
      </div>
    );
  }

  // Show auth modal if not logged in
  if (!user) {
    return <AuthModal onAuthSuccess={() => window.location.reload()} />;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 shadow-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Dumbbell className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-white">Fitness Tracker</h1>
              </div>
              <div className="text-sm text-gray-400">
                {user?.email}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={startNewWorkout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Session
              </button>
              
              <button
                onClick={async () => {
                  await supabase.auth.signOut();
                  window.location.reload();
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'home', label: 'Home', icon: Target },
              { id: 'workouts', label: 'Sessions', icon: Dumbbell },
              { id: 'sessions-table', label: 'Session Sheet', icon: Edit2 },
              { id: 'sessions-dashboard', label: 'Dashboard', icon: Info },
              { id: 'prs', label: 'PRs', icon: Activity },
              { id: 'templates', label: 'Templates', icon: Copy }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-1 py-4 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600'
                }`}
              >
                <tab.icon className="h-4 w-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {activeTab === 'home' && (
          <div className="space-y-6">
            {/* Today's Stats */}
            <div className="bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Today's Stats</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{getTodayStats().completedWorkouts}</div>
                  <div className="text-sm text-gray-300">Sessions Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{getTodayStats().totalWorkouts}</div>
                  <div className="text-sm text-gray-300">Sessions Scheduled</div>
                </div>
              </div>
            </div>

            {/* Calendar */}
            <div className="bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-white">Calendar</h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setCalendarView('day')}
                    className={`px-3 py-1 text-sm rounded ${calendarView === 'day' ? 'bg-blue-800 text-blue-800' : 'bg-gray-100 text-gray-300'}`}
                  >
                    Day
                  </button>
                  <button
                    onClick={() => setCalendarView('week')}
                    className={`px-3 py-1 text-sm rounded ${calendarView === 'week' ? 'bg-blue-800 text-blue-800' : 'bg-gray-100 text-gray-300'}`}
                  >
                    Week
                  </button>
                  <button
                    onClick={() => setCalendarView('month')}
                    className={`px-3 py-1 text-sm rounded ${calendarView === 'month' ? 'bg-blue-800 text-blue-800' : 'bg-gray-100 text-gray-300'}`}
                  >
                    Month
                  </button>
                </div>
              </div>
              
              {calendarView === 'day' && renderDayView()}
              {calendarView === 'week' && renderWeekView()}
              {calendarView === 'month' && renderMonthView()}
            </div>
          </div>
        )}

        {activeTab === 'workouts' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-white">Sessions</h2>
                <p className="text-sm text-gray-300 mt-1">Showing workouts for: <strong>{new Date(currentDate).toLocaleDateString()}</strong></p>
              </div>
              <div className="flex space-x-2">
                <input
                  type="date"
                  value={currentDate}
                  onChange={(e) => setCurrentDate(e.target.value)}
                  className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={startNewWorkout}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  New Session
                </button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {workouts.filter(w => w.date === currentDate).map(workout => (
                <div key={workout.id} className="bg-gray-800 rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{workout.name}</h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => startEditWorkout(workout)}
                        className="p-1 rounded text-blue-600 hover:bg-blue-900"
                      >
                        <Edit2 className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => toggleWorkoutComplete(workout.id)}
                        className={`p-1 rounded ${workout.completed ? 'text-green-600' : 'text-gray-400'}`}
                      >
                        <Check className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => deleteWorkout(workout.id)}
                        className="p-1 rounded text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <div className="text-sm text-gray-300 mb-4">
                    <div><strong>Athlete:</strong> {workout.athlete || 'Unknown'}</div>
                    <div><strong>Session:</strong> {workout.sessionType || 'Session'}</div>
                    {workout.energyLevel && <div><strong>Energy:</strong> {workout.energyLevel}/10</div>}
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {workout.exercises.map(exercise => (
                      <div key={exercise.id} className="flex justify-between items-center text-sm">
                        <span className="text-white">{exercise.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-300">{exercise.sets}×{exercise.reps}</span>
                          {exercise.weight && <span className="text-xs text-gray-400">{exercise.weight}</span>}
                          {exercise.weightChange && <span className={`text-xs font-medium ${parseInt(exercise.weightChange) > 0 ? 'text-green-600' : 'text-orange-400'}`}>{parseInt(exercise.weightChange) > 0 ? '+' : ''}{exercise.weightChange}</span>}
                        </div>
                      </div>
                    ))}
                  </div>

                  {workout.sprints && workout.sprints.length > 0 && (
                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-200 mb-2">Sprint Times</div>
                      <div className="space-y-1">
                        {workout.sprints.map((sprint) => (
                          <div key={sprint.id} className="text-xs text-gray-300">
                            {sprint.distance}: {sprint.attempt1 || '-'} / {sprint.attempt2 || '-'} / {sprint.attempt3 || '-'}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {workout.coachNotes && (
                    <div className="mb-4 text-sm text-gray-200">
                      <span className="font-medium">Coach Notes:</span> {workout.coachNotes}
                    </div>
                  )}
                  
                  {workout.completed && (
                    <div className="mb-2 p-2 bg-green-900 rounded">
                      <div className="text-sm text-green-200">
                        Difficulty: <strong>{workout.difficulty}/10</strong>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-sm text-gray-300">
                    {new Date(workout.date).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
            
            {workouts.filter(w => w.date === currentDate).length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400">No workouts for this date</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'sessions-table' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white">Session Sheet</h2>
                <p className="text-sm text-gray-300 mt-1">Log multiple athletes at once. Use one row per session.</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={addSessionSheetRow}
                  className="inline-flex items-center px-3 py-2 border border-gray-600 rounded-md text-sm text-gray-200 bg-gray-800 hover:bg-gray-800"
                >
                  + Row
                </button>
                <button
                  onClick={saveSessionSheetRows}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Save Rows
                </button>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow p-4">
              <div className="text-xs text-gray-400 mb-4">
                Exercises format: Name | Sets | Reps | Weight. Sprint format: Distance | Attempt1 | Attempt2 | Attempt3. Use one line per entry.
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-300 border-b">
                      <th className="py-2 px-2">Athlete</th>
                      <th className="py-2 px-2">Date</th>
                      <th className="py-2 px-2">Session Type</th>
                      <th className="py-2 px-2">Session Name</th>
                      <th className="py-2 px-2">Energy</th>
                      <th className="py-2 px-2">Exercises</th>
                      <th className="py-2 px-2">Sprints</th>
                      <th className="py-2 px-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sessionSheetRows.map((row) => (
                      <tr key={row.id} className="border-b align-top">
                        <td className="py-2 px-2">
                          <input
                            type="text"
                            value={row.athlete}
                            onChange={(e) => updateSessionSheetRow(row.id, { athlete: e.target.value })}
                            className="w-32 px-2 py-1 border border-gray-600 rounded"
                            list="athlete-options"
                            placeholder="Athlete"
                          />
                        </td>
                        <td className="py-2 px-2">
                          <input
                            type="date"
                            value={row.date}
                            onChange={(e) => updateSessionSheetRow(row.id, { date: e.target.value })}
                            className="px-2 py-1 border border-gray-600 rounded"
                          />
                        </td>
                        <td className="py-2 px-2">
                          <select
                            value={row.sessionType}
                            onChange={(e) => updateSessionSheetRow(row.id, { sessionType: e.target.value })}
                            className="px-2 py-1 border border-gray-600 rounded"
                          >
                            {SESSION_TYPES.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </td>
                        <td className="py-2 px-2">
                          <input
                            type="text"
                            value={row.name}
                            onChange={(e) => updateSessionSheetRow(row.id, { name: e.target.value })}
                            className="w-40 px-2 py-1 border border-gray-600 rounded"
                            placeholder="Optional"
                          />
                        </td>
                        <td className="py-2 px-2">
                          <input
                            type="number"
                            min="1"
                            max="10"
                            value={row.energyLevel}
                            onChange={(e) => updateSessionSheetRow(row.id, { energyLevel: e.target.value })}
                            className="w-20 px-2 py-1 border border-gray-600 rounded"
                            placeholder="1-10"
                          />
                        </td>
                        <td className="py-2 px-2">
                          <textarea
                            value={row.exercisesText}
                            onChange={(e) => updateSessionSheetRow(row.id, { exercisesText: e.target.value })}
                            className="w-64 h-24 px-2 py-1 border border-gray-600 rounded"
                            placeholder="Bench Press | 5 | 5 | 135"
                          />
                        </td>
                        <td className="py-2 px-2">
                          <textarea
                            value={row.sprintsText}
                            onChange={(e) => updateSessionSheetRow(row.id, { sprintsText: e.target.value })}
                            className="w-56 h-24 px-2 py-1 border border-gray-600 rounded"
                            placeholder="100m | 12.4 | 12.1 | 11.9"
                          />
                        </td>
                        <td className="py-2 px-2">
                          <button
                            onClick={() => removeSessionSheetRow(row.id)}
                            className="text-red-600 hover:text-red-800 text-xs"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sessions-dashboard' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white">Session Dashboard</h2>
                <p className="text-sm text-gray-300 mt-1">Filter sessions and review key totals.</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={exportSessionsJson}
                  className="inline-flex items-center px-3 py-2 border border-gray-600 rounded-md text-sm text-gray-200 bg-gray-800 hover:bg-gray-800"
                >
                  Export JSON
                </button>
                <button
                  onClick={exportSessionsCsv}
                  className="inline-flex items-center px-3 py-2 border border-gray-600 rounded-md text-sm text-gray-200 bg-gray-800 hover:bg-gray-800"
                >
                  Export CSV
                </button>
                <select
                  value={sessionFilterAthlete}
                  onChange={(e) => setSessionFilterAthlete(e.target.value)}
                  className="px-3 py-2 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Athletes</option>
                  {athleteOptions.map((athlete) => (
                    <option key={athlete} value={athlete}>{athlete}</option>
                  ))}
                </select>
                <select
                  value={sessionFilterType}
                  onChange={(e) => setSessionFilterType(e.target.value)}
                  className="px-3 py-2 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Sessions</option>
                  {SESSION_TYPES.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <input
                  type="date"
                  value={sessionFilterStart}
                  onChange={(e) => setSessionFilterStart(e.target.value)}
                  className="px-3 py-2 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="date"
                  value={sessionFilterEnd}
                  onChange={(e) => setSessionFilterEnd(e.target.value)}
                  className="px-3 py-2 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  value={sessionFilterQuery}
                  onChange={(e) => setSessionFilterQuery(e.target.value)}
                  className="px-3 py-2 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search sessions..."
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              <div className="bg-gray-800 rounded-lg shadow p-4">
                <div className="text-sm text-gray-400">Sessions</div>
                <div className="text-2xl font-bold text-white">{sessionDashboardStats.sessions}</div>
              </div>
              <div className="bg-gray-800 rounded-lg shadow p-4">
                <div className="text-sm text-gray-400">Exercises</div>
                <div className="text-2xl font-bold text-white">{sessionDashboardStats.exercises}</div>
              </div>
              <div className="bg-gray-800 rounded-lg shadow p-4">
                <div className="text-sm text-gray-400">Sprints</div>
                <div className="text-2xl font-bold text-white">{sessionDashboardStats.sprints}</div>
              </div>
              <div className="bg-gray-800 rounded-lg shadow p-4">
                <div className="text-sm text-gray-400">Cardio</div>
                <div className="text-2xl font-bold text-white">{sessionDashboardStats.cardio}</div>
              </div>
              <div className="bg-gray-800 rounded-lg shadow p-4">
                <div className="text-sm text-gray-400">Minutes</div>
                <div className="text-2xl font-bold text-white">{sessionDashboardStats.duration}</div>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <div className="bg-gray-800 rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Sessions Per Week</h3>
                <div className="h-40 flex items-end gap-2">
                  {sessionsByWeek.length > 0 ? (
                    sessionsByWeek.map((bucket) => (
                      <div key={bucket.week} className="flex-1 flex flex-col items-center gap-2">
                        <div
                          className="w-full rounded-md bg-blue-9000"
                          style={{ height: `${Math.max(bucket.count * 12, 8)}px` }}
                          title={`${bucket.count} sessions`}
                        />
                        <div className="text-xs text-gray-400">{bucket.week.slice(5)}</div>
                      </div>
                    ))
                  ) : (
                    <div className="text-sm text-gray-400">No sessions to chart.</div>
                  )}
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">Sprint Trends</h3>
                  <div className="text-xs text-gray-400">Athlete: {athleteForDashboard || 'All'}</div>
                </div>
                <div className="space-y-4">
                  {sprintTrends.length > 0 ? (
                    sprintTrends.map((trend) => (
                      <div key={trend.distance} className="border border-gray-700 rounded-lg p-3">
                        <div className="text-sm font-medium text-gray-200 mb-2">{trend.distance}</div>
                        {trend.points.length > 1 ? (
                          <svg viewBox="0 0 120 40" className="w-full h-12">
                            <path
                              d={buildLinePath(trend.points, 120, 40)}
                              fill="none"
                              stroke="#2563eb"
                              strokeWidth="2"
                            />
                          </svg>
                        ) : (
                          <div className="text-xs text-gray-400">Not enough data yet.</div>
                        )}
                        {trend.points.length > 0 && (
                          <div className="text-xs text-gray-400 mt-1">
                            Latest: {formatSeconds(trend.points[trend.points.length - 1].value)}
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="text-sm text-gray-400">No sprint data to chart.</div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Filtered Sessions</h3>
              {filteredSessions.length > 0 ? (
                <div className="space-y-4">
                  {filteredSessions.map((session) => (
                    <div key={session.id} onClick={() => startEditWorkout(session)} className="border border-gray-700 rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow hover:border-blue-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <div className="text-sm text-gray-400">{new Date(session.date).toLocaleDateString()}</div>
                          <div className="text-lg font-semibold text-white">{session.name}</div>
                          <div className="text-sm text-gray-300">{session.athlete} • {session.sessionType || 'Session'}</div>
                        </div>
                        <div className="text-sm text-gray-300">
                          {session.duration ? `${session.duration} min` : 'No duration'}
                        </div>
                      </div>
                      <div className="mt-3 text-sm text-gray-300">
                        {session.exercises?.length || 0} exercises • {session.sprints?.length || 0} sprints • {session.cardio?.length || 0} cardio
                      </div>
                      {sessionPrHitMap.get(session.id)?.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {sessionPrHitMap.get(session.id).map((hit) => (
                            <span key={hit} className="text-xs font-medium text-blue-300 bg-blue-900 border border-blue-700 px-2 py-1 rounded-full">
                              {hit}
                            </span>
                          ))}
                        </div>
                      )}
                      {session.coachNotes && (
                        <div className="mt-2 text-sm text-gray-200">Coach Notes: {session.coachNotes}</div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-400">No sessions match these filters.</p>
              )}
            </div>
          </div>
        )}

        {activeTab === 'prs' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Personal Records</h2>
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-200">Athlete</label>
                <select
                  value={selectedAthlete || activeAthlete}
                  onChange={(e) => setSelectedAthlete(e.target.value)}
                  className="px-3 py-2 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {athleteOptions.map((athlete) => (
                    <option key={athlete} value={athlete}>{athlete}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Strength PRs */}
            <div className="bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Strength PRs</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {strengthPRs.length > 0 ? (
                  strengthPRs.map(pr => (
                    <div key={`${pr.athlete}-${pr.exercise}`} className="border border-blue-700 bg-blue-900 rounded-lg p-4">
                      <h4 className="font-medium text-white mb-2">{pr.exercise}</h4>
                      <div className="text-2xl font-bold text-blue-600 mb-2">{pr.value} lbs</div>
                      <div className="text-sm text-gray-300">
                        {new Date(pr.date).toLocaleDateString()}
                      </div>
                      {pr.reps && <div className="text-sm text-gray-300">Reps: {pr.reps}</div>}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400">No strength PRs yet. Log a session to start tracking.</p>
                )}
              </div>
            </div>

            {/* Sprint PRs */}
            <div className="bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Sprint PRs</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {sprintPRs.length > 0 ? (
                  sprintPRs.map(pr => (
                    <div key={`${pr.athlete}-${pr.distance}`} className="border border-gray-700 bg-gray-800 rounded-lg p-4">
                      <h4 className="font-medium text-white mb-2">{pr.distance}</h4>
                      <div className="text-2xl font-bold text-white mb-2">{formatSeconds(pr.value)}</div>
                      <div className="text-sm text-gray-300">
                        {new Date(pr.date).toLocaleDateString()}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400">No sprint PRs yet. Add sprint times in a session.</p>
                )}
              </div>
            </div>
            
            {/* Competitive Leaderboard - All Users */}
            <div className="bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Competitive Leaderboard</h3>
              
              <div className="space-y-6">
                {['Barbell Back Squat', 'Barbell Bench Press', 'Barbell Deadlift', 'Overhead Press'].map(exercise => {
                  const exercisePRs = allUsersPRs
                    .filter(pr => pr.exercise === exercise)
                    .sort((a, b) => {
                      const aWeight = parseInt(a.weight);
                      const bWeight = parseInt(b.weight);
                      return bWeight - aWeight;
                    });
                  
                  return (
                    <div key={exercise}>
                      <h4 className="font-semibold text-white mb-3">{exercise}</h4>
                      <div className="space-y-2">
                        {exercisePRs.map((pr, index) => (
                          <div key={pr.userId} className={`flex items-center justify-between p-3 rounded-lg ${index === 0 ? 'bg-yellow-50 border border-yellow-200' : index === 1 ? 'bg-gray-100 border border-gray-700' : index === 2 ? 'bg-orange-900 border border-orange-700' : 'bg-gray-800 border border-gray-700'}`}>
                            <div className="flex items-center space-x-3">
                              <div className="text-lg font-bold text-gray-300 w-8">#{index + 1}</div>
                              <div>
                                <div className="font-medium text-white">{pr.userName}</div>
                                <div className="text-sm text-gray-300">{new Date(pr.date).toLocaleDateString()}</div>
                              </div>
                            </div>
                            <div className="text-2xl font-bold text-white">{pr.weight}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'templates' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Workout Templates</h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => setShowTemplateModal(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  New Template
                </button>
                <button
                  onClick={() => setShowImportModal(true)}
                  className="inline-flex items-center px-4 py-2 border border-gray-600 text-sm font-medium rounded-md text-gray-200 bg-gray-800 hover:bg-gray-800"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Import
                </button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {workoutTemplates.map(template => (
                <div key={template.id} className="bg-gray-800 rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{template.name}</h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => loadTemplate(template)}
                        className="p-1 rounded text-blue-600 hover:bg-blue-900"
                      >
                        <Play className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => exportTemplate(template)}
                        className="p-1 rounded text-gray-300 hover:bg-gray-800"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => deleteTemplate(template.id)}
                        className="p-1 rounded text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {template.exercises.map(exercise => (
                      <div key={exercise.id} className="flex justify-between text-sm">
                        <span className="text-white">{exercise.name}</span>
                        <span className="text-gray-300">{exercise.sets}×{exercise.reps}</span>
                      </div>
                    ))}
                  </div>
                  
                  {template.description && (
                    <p className="text-sm text-gray-300">{template.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* Workout Modal */}
      {showWorkoutModal && (
        <div className="fixed inset-0 bg-gray-950 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 max-w-2xl shadow-lg rounded-md bg-gray-800">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{isEditingWorkout ? 'Edit Session' : 'Add Session'}</h3>
                <button
                  onClick={closeWorkoutModal}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Session Name</label>
                  <input
                    type="text"
                    value={workoutForm.name}
                    onChange={(e) => setWorkoutForm({...workoutForm, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Upper Body, Lower Body"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Date</label>
                  <input
                    type="date"
                    value={workoutForm.date}
                    onChange={(e) => setWorkoutForm({...workoutForm, date: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Athlete</label>
                  <input
                    type="text"
                    value={workoutForm.athlete}
                    onChange={(e) => setWorkoutForm({...workoutForm, athlete: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Xavier"
                    list="athlete-options"
                  />
                  <datalist id="athlete-options">
                    {athleteOptions.map((athlete) => (
                      <option key={athlete} value={athlete} />
                    ))}
                  </datalist>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-1">Session Type</label>
                    <select
                      value={workoutForm.sessionType}
                      onChange={(e) => setWorkoutForm({...workoutForm, sessionType: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {SESSION_TYPES.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-1">Energy Level (1-10)</label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={workoutForm.energyLevel}
                      onChange={(e) => setWorkoutForm({...workoutForm, energyLevel: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 8"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Exercises</label>
                  <div className="space-y-2 mb-4">
                    {workoutForm.exercises.map(exercise => (
                      <div key={exercise.id} className="flex items-center space-x-2 p-2 bg-gray-800 rounded">
                        <span className="flex-1">{exercise.name}</span>
                        <span>{exercise.sets}×{exercise.reps}</span>
                        {exercise.weight && <span className="text-xs text-gray-300">{exercise.weight}</span>}
                        {exercise.weightChange && <span className={`text-xs font-medium ${parseInt(exercise.weightChange) > 0 ? 'text-green-600' : 'text-orange-400'}`}>{parseInt(exercise.weightChange) > 0 ? '+' : ''}{exercise.weightChange}</span>}
                        <button
                          onClick={() => removeExercise(exercise.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-4">
                    <input
                      type="text"
                      value={exerciseForm.name}
                      onChange={(e) => setExerciseForm({...exerciseForm, name: e.target.value})}
                      className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Exercise name"
                    />
                    <input
                      type="number"
                      value={exerciseForm.sets}
                      onChange={(e) => setExerciseForm({...exerciseForm, sets: e.target.value})}
                      className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Sets"
                    />
                    <input
                      type="text"
                      value={exerciseForm.reps}
                      onChange={(e) => setExerciseForm({...exerciseForm, reps: e.target.value})}
                      className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Reps"
                    />
                    <input
                      type="text"
                      value={exerciseForm.weight}
                      onChange={(e) => setExerciseForm({...exerciseForm, weight: e.target.value})}
                      className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Weight"
                    />
                    <input
                      type="number"
                      value={exerciseForm.weightChange}
                      onChange={(e) => setExerciseForm({...exerciseForm, weightChange: e.target.value})}
                      className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Weight change (+ or -)"
                    />
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={addExercise}
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Exercise
                    </button>
                    <button
                      onClick={() => setShowExerciseLibrary(true)}
                      className="inline-flex items-center px-3 py-2 border border-gray-600 text-sm font-medium rounded-md text-gray-200 bg-gray-800 hover:bg-gray-800"
                    >
                      <Search className="h-4 w-4 mr-2" />
                      Browse Library
                    </button>
                  </div>
                </div>

                {/* Cardio Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Cardio</label>
                  <div className="space-y-2 mb-4">
                    {workoutForm.cardio && workoutForm.cardio.map(cardio => (
                      <div key={cardio.id} className="flex items-center space-x-2 p-2 bg-orange-900 rounded border border-orange-700">
                        <span className="flex-1">
                          <span className="font-medium capitalize">{cardio.type}</span> - {cardio.distance} {cardio.unit}
                        </span>
                        <span className="text-sm text-gray-300">{cardio.duration} min</span>
                        <button
                          onClick={() => removeCardio(cardio.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-4">
                    <select
                      value={cardioForm.type}
                      onChange={(e) => setCardioForm({...cardioForm, type: e.target.value})}
                      className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="running">Running</option>
                      <option value="cycling">Cycling</option>
                      <option value="swimming">Swimming</option>
                      <option value="rowing">Rowing</option>
                      <option value="walking">Walking</option>
                    </select>
                    <input
                      type="number"
                      value={cardioForm.distance}
                      onChange={(e) => setCardioForm({...cardioForm, distance: e.target.value})}
                      className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Distance"
                      step="0.1"
                    />
                    <select
                      value={cardioForm.unit}
                      onChange={(e) => setCardioForm({...cardioForm, unit: e.target.value})}
                      className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="miles">Miles</option>
                      <option value="km">KM</option>
                    </select>
                    <input
                      type="number"
                      value={cardioForm.duration}
                      onChange={(e) => setCardioForm({...cardioForm, duration: e.target.value})}
                      className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Duration (min)"
                    />
                    <select
                      value={cardioForm.intensity}
                      onChange={(e) => setCardioForm({...cardioForm, intensity: e.target.value})}
                      className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="easy">Easy</option>
                      <option value="moderate">Moderate</option>
                      <option value="intense">Intense</option>
                    </select>
                  </div>
                  
                  <button
                    onClick={addCardio}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Cardio
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Sprint Times</label>
                  <div className="space-y-2 mb-4">
                    {workoutForm.sprints.map((sprint) => (
                      <div key={sprint.id} className="grid grid-cols-1 md:grid-cols-6 gap-2 p-2 bg-gray-800 rounded border">
                        <div className="md:col-span-2 font-medium text-white">{sprint.distance}</div>
                        <div className="text-sm text-gray-300">A1: {sprint.attempt1 || '-'}</div>
                        <div className="text-sm text-gray-300">A2: {sprint.attempt2 || '-'}</div>
                        <div className="text-sm text-gray-300">A3: {sprint.attempt3 || '-'}</div>
                        <button
                          onClick={() => removeSprint(sprint.id)}
                          className="text-red-600 hover:text-red-800 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-6 gap-2 mb-4">
                    <select
                      value={sprintForm.distance}
                      onChange={(e) => setSprintForm({...sprintForm, distance: e.target.value})}
                      className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
                    >
                      {SPRINT_DISTANCES.map((distance) => (
                        <option key={distance} value={distance}>{distance}</option>
                      ))}
                    </select>
                    <input
                      type="text"
                      value={sprintForm.attempt1}
                      onChange={(e) => setSprintForm({...sprintForm, attempt1: e.target.value})}
                      className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Attempt 1"
                    />
                    <input
                      type="text"
                      value={sprintForm.attempt2}
                      onChange={(e) => setSprintForm({...sprintForm, attempt2: e.target.value})}
                      className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Attempt 2"
                    />
                    <input
                      type="text"
                      value={sprintForm.attempt3}
                      onChange={(e) => setSprintForm({...sprintForm, attempt3: e.target.value})}
                      className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Attempt 3"
                    />
                    <input
                      type="text"
                      value={sprintForm.notes}
                      onChange={(e) => setSprintForm({...sprintForm, notes: e.target.value})}
                      className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Notes"
                    />
                  </div>

                  <button
                    onClick={addSprint}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Sprint
                  </button>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Duration (minutes)</label>
                  <input
                    type="number"
                    value={workoutForm.duration}
                    onChange={(e) => setWorkoutForm({...workoutForm, duration: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 60"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Coach Notes</label>
                  <textarea
                    value={workoutForm.coachNotes}
                    onChange={(e) => setWorkoutForm({...workoutForm, coachNotes: e.target.value})}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Form observations, focus next session, PRs hit..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Notes</label>
                  <textarea
                    value={workoutForm.notes}
                    onChange={(e) => setWorkoutForm({...workoutForm, notes: e.target.value})}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Any additional notes..."
                  />
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-6">
                <div>
                  {isEditingWorkout && (
                    <button
                      onClick={deleteCurrentWorkout}
                      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 inline-flex items-center"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Session
                    </button>
                  )}
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={closeWorkoutModal}
                    className="px-4 py-2 border border-gray-600 rounded-md text-gray-200 hover:bg-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={saveWorkout}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    {isEditingWorkout ? 'Save Changes' : 'Save Session'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Template Modal */}
      {showTemplateModal && (
        <div className="fixed inset-0 bg-gray-950 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 max-w-2xl shadow-lg rounded-md bg-gray-800">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Create Template</h3>
                <button
                  onClick={() => setShowTemplateModal(false)}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Template Name</label>
                  <input
                    type="text"
                    value={templateForm.name}
                    onChange={(e) => setTemplateForm({...templateForm, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Push Day Template"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Description</label>
                  <textarea
                    value={templateForm.description}
                    onChange={(e) => setTemplateForm({...templateForm, description: e.target.value})}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Template description..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Exercises</label>
                  <div className="space-y-2 mb-4">
                    {templateForm.exercises.map(exercise => (
                      <div key={exercise.id} className="flex items-center space-x-2 p-2 bg-gray-800 rounded">
                        <span className="flex-1">{exercise.name}</span>
                        <span>{exercise.sets}×{exercise.reps}</span>
                        {exercise.weight && <span className="text-xs text-gray-300">{exercise.weight}</span>}
                        {exercise.weightChange && <span className={`text-xs font-medium ${parseInt(exercise.weightChange) > 0 ? 'text-green-600' : 'text-orange-400'}`}>{parseInt(exercise.weightChange) > 0 ? '+' : ''}{exercise.weightChange}</span>}
                        <button
                          onClick={() => removeExerciseFromTemplate(exercise.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-4">
                    <input
                      type="text"
                      value={exerciseForm.name}
                      onChange={(e) => setExerciseForm({...exerciseForm, name: e.target.value})}
                      className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Exercise name"
                    />
                    <input
                      type="number"
                      value={exerciseForm.sets}
                      onChange={(e) => setExerciseForm({...exerciseForm, sets: e.target.value})}
                      className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Sets"
                    />
                    <input
                      type="text"
                      value={exerciseForm.reps}
                      onChange={(e) => setExerciseForm({...exerciseForm, reps: e.target.value})}
                      className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Reps"
                    />
                    <input
                      type="text"
                      value={exerciseForm.weight}
                      onChange={(e) => setExerciseForm({...exerciseForm, weight: e.target.value})}
                      className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Weight"
                    />
                    <input
                      type="number"
                      value={exerciseForm.weightChange}
                      onChange={(e) => setExerciseForm({...exerciseForm, weightChange: e.target.value})}
                      className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Weight change (+ or -)"
                    />
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={addExerciseToTemplate}
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Exercise
                    </button>
                    <button
                      onClick={() => setShowExerciseLibrary(true)}
                      className="inline-flex items-center px-3 py-2 border border-gray-600 text-sm font-medium rounded-md text-gray-200 bg-gray-800 hover:bg-gray-800"
                    >
                      <Search className="h-4 w-4 mr-2" />
                      Browse Library
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowTemplateModal(false)}
                  className="px-4 py-2 border border-gray-600 rounded-md text-gray-200 hover:bg-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={saveTemplate}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Save Template
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Import Modal */}
      {showImportModal && (
        <div className="fixed inset-0 bg-gray-950 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 max-w-2xl shadow-lg rounded-md bg-gray-800">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Import Template</h3>
                <button
                  onClick={() => setShowImportModal(false)}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">JSON Template</label>
                  <textarea
                    value={importText}
                    onChange={(e) => setImportText(e.target.value)}
                    rows={10}
                    className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                    placeholder="Paste JSON template here..."
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowImportModal(false)}
                  className="px-4 py-2 border border-gray-600 rounded-md text-gray-200 hover:bg-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={importWorkout}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Import
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Exercise Library Modal */}
      {showExerciseLibrary && (
        <div className="fixed inset-0 bg-gray-950 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 max-w-4xl shadow-lg rounded-md bg-gray-800">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Exercise Library</h3>
                <button
                  onClick={() => setShowExerciseLibrary(false)}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-h-96 overflow-y-auto">
                {EXERCISE_DATABASE.map(exercise => (
                  <div key={exercise.id} className="border border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white">{exercise.name}</h4>
                      <button
                        onClick={() => addExerciseFromLibrary(exercise)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Plus className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <div className="text-sm text-gray-300 mb-2">
                      {exercise.category} • {exercise.equipment}
                    </div>
                    
                    <div className="text-sm text-gray-300 mb-2">
                      Difficulty: {exercise.difficulty}
                    </div>
                    
                    <div className="text-sm text-gray-200">
                      <strong>Muscle Groups:</strong> {exercise.muscleGroup}
                    </div>
                    
                    {exercise.instructions && (
                      <div className="mt-2">
                        <details className="text-sm">
                          <summary className="cursor-pointer text-blue-600 hover:text-blue-800">Instructions</summary>
                          <ol className="mt-2 list-decimal list-inside space-y-1">
                            {exercise.instructions.map((instruction, index) => (
                              <li key={index} className="text-gray-200">{instruction}</li>
                            ))}
                          </ol>
                        </details>
                      </div>
                    )}
                    
                    {exercise.videoUrl && (
                      <div className="mt-2">
                        <a
                          href={exercise.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                        >
                          <Play className="h-4 w-4 mr-1" />
                          Watch Video
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Difficulty Rating Modal */}
      {showDifficultyModal && (
        <div className="fixed inset-0 bg-gray-950 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-1/3 mx-auto p-5 border w-11/12 max-w-md shadow-lg rounded-md bg-gray-800">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">How hard was this workout?</h3>
                <button
                  onClick={() => {
                    setShowDifficultyModal(false);
                    setWorkoutToRate(null);
                  }}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <p className="text-gray-300 mb-6">Rate the difficulty level of your workout on a scale of 1-10:</p>
              
              <div className="grid grid-cols-5 gap-2 mb-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <button
                    key={num}
                    onClick={() => {
                      if (workoutToRate) {
                        updateWorkoutWithDifficulty(workoutToRate, num);
                        setShowDifficultyModal(false);
                        setWorkoutToRate(null);
                      }
                    }}
                    className="p-3 rounded-lg font-semibold text-white transition-all hover:scale-105 focus:outline-none"
                    style={{
                      backgroundColor: num <= 3 ? '#10b981' : num <= 6 ? '#f59e0b' : '#ef4444'
                    }}
                  >
                    {num}
                  </button>
                ))}
              </div>
              
              <div className="text-sm text-gray-300 p-3 bg-gray-800 rounded">
                <p><strong>1-3:</strong> Easy • <strong>4-6:</strong> Moderate • <strong>7-10:</strong> Hard</p>
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => {
                    setShowDifficultyModal(false);
                    setWorkoutToRate(null);
                  }}
                  className="px-4 py-2 border border-gray-600 rounded-md text-gray-200 hover:bg-gray-800"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}