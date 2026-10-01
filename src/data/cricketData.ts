export interface SkillCategory {
  id: string;
  name: string;
  shortDesc: string;
  description: string;
  icon: string;
  drillsCount: number;
  programsCount: number;
  keyFocus: string[];
  sampleDrill: string;
  statHighlight: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  tagline: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Elite";
  duration: string;
  drills: number;
  rating: number;
  reviewsCount: number;
  studentsEnrolled: number;
  category: string;
  coach: {
    name: string;
    role: string;
    badge: string;
    avatar: string;
  };
  highlights: string[];
  badgeColor: string;
}

export interface CoachingVideo {
  id: string;
  title: string;
  duration: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Elite";
  views: string;
  coach: string;
  coachRole: string;
  thumbnailTopic: string;
  keyTakeaway: string;
}

export interface Challenge {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  targetSkill: string;
  difficulty: string;
  activePlayers: number;
  completionRate: string;
  focusMetrics: string;
  milestones: string[];
  daysHighlight: {
    day1_10: string;
    day11_20: string;
    day21_30: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  team: string;
  avatar: string;
  quote: string;
  rating: number;
  metricsResult: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnualMonthly: number;
  description: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "batting",
    name: "Batting",
    shortDesc: "Master strokeplay, timing, and strike rotation against swing, seam, and spin.",
    description: "Build an unshakeable batting technique from solid defensive fundamentals to high-impact T20 range hitting. Learn bat speed acceleration, weight transfer, and shot selection under pressure.",
    icon: "Target",
    drillsCount: 84,
    programsCount: 12,
    keyFocus: ["Front-foot weight transfer", "Rotational bat speed (110+ km/h)", "Playing late under swinging conditions", "360° strike manipulation"],
    sampleDrill: "Drop-ball high-elbow drive & late-contact progression",
    statHighlight: "+14% average contact efficiency",
  },
  {
    id: "bowling",
    name: "Bowling",
    shortDesc: "Develop express pace, lethal swing, precise line-and-length, and subtle spin variations.",
    description: "Fine-tune your biomechanics, non-bowling arm leverage, seam orientation, and release point consistency. Train both red-ball persistence and white-ball death-over yorker execution.",
    icon: "Flame",
    drillsCount: 76,
    programsCount: 9,
    keyFocus: ["Seam presentation & wobble seam", "Release velocity optimization", "Death-over yorker target zones", "Dip, drift & disguise"],
    sampleDrill: "Non-bowling arm pull down & hip-shoulder separation",
    statHighlight: "+5.4 km/h release velocity average",
  },
  {
    id: "fielding",
    name: "Fielding",
    shortDesc: "Turn half-chances into wickets with explosive athleticism and pinpoint throws.",
    description: "Level up your reaction time, first-step agility, one-handed slide-and-flick pick-ups, high catching into the lights, and direct-hit accuracy from boundary ropes.",
    icon: "Shield",
    drillsCount: 52,
    programsCount: 6,
    keyFocus: ["Low center-of-gravity pick & throw", "Boundary diving & slide protection", "Slip cordon soft-hands technique", "0.22s reaction threshold"],
    sampleDrill: "Split-step reaction & inverted throw to stump targets",
    statHighlight: "88% direct-hit accuracy rate",
  },
  {
    id: "wicketkeeping",
    name: "Wicketkeeping",
    shortDesc: "Unrivaled glovework, razor-sharp reflexes, and commanding field presence.",
    description: "Train silent footwork, soft relaxed hands, standing up to quicks and mystery spinners, and lightning-fast leg-side stumpings that change matches.",
    icon: "HandMetal",
    drillsCount: 45,
    programsCount: 5,
    keyFocus: ["Standing up to seam & mystery spin", "Head stillness at point of impact", "Blind deflection glove reactions", "Leg-side stumping sweep"],
    sampleDrill: "Deflection ramp reaction & low-rising collection",
    statHighlight: "0.28s stumping execution window",
  },
  {
    id: "fitness",
    name: "Fitness",
    shortDesc: "Cricket-specific athletic conditioning, rotational power, and injury resilience.",
    description: "Tailored strength & conditioning routines designed by certified sports physiotherapists. Build shoulder durability, lumbar stability for pacers, and explosive sprint endurance.",
    icon: "Activity",
    drillsCount: 64,
    programsCount: 8,
    keyFocus: ["Rotational power & anti-rotational core", "Fast bowler lumbar & rotator cuff prehab", "Yo-Yo & Bronco endurance benchmarks", "Multi-directional sprint mechanics"],
    sampleDrill: "Medicine ball rotational slam & decelerative brake",
    statHighlight: "34% reduction in shoulder/back strain",
  },
  {
    id: "mental",
    name: "Mental Skills",
    shortDesc: "Elite composure, match awareness, pre-ball routines, and situational clarity.",
    description: "Train the psychological edge demanded at the highest levels: breath control between balls, facing 140km/h hostility, recovering from drop catches, and ice-cold death-over execution.",
    icon: "Brain",
    drillsCount: 38,
    programsCount: 4,
    keyFocus: ["Pre-delivery micro-reset routine", "Handling scoreboard pressure", "Visual focus & breath pacing", "Aggression vs calculation balance"],
    sampleDrill: "Heart-rate spike cognitive decision exercise",
    statHighlight: "+26% improved clutch situation outcomes",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Assessment",
    subtitle: "Identify your baseline",
    description: "Upload a video of your action or complete our 15-point cricket skill questionnaire. Our diagnostic engine pinpoints biomechanical leaks, timing flaws, and athletic strengths.",
    points: ["Video swing & release analysis", "Biomechanical posture mapping", "Skill benchmark vs pro cricketers"],
    metric: "15 min quick evaluation",
  },
  {
    step: "02",
    title: "Training Plan",
    subtitle: "Tailored to your role",
    description: "Receive a personalized, week-by-week training schedule calibrated to your playing level, position, match calendar, and seasonal preparation goals.",
    points: ["Dynamic schedule tailored to match days", "Balanced drill volume & recovery", "Targeted weakness correction"],
    metric: "Adaptive 4 to 12-week cycles",
  },
  {
    step: "03",
    title: "Expert Lesson",
    subtitle: "High-definition breakdown",
    description: "Learn technique nuances through 4K multi-angle demonstrations, slow-motion biomechanical overlays, and commentary by international coaches.",
    points: ["Slow-motion 240fps breakdowns", "Coaches explaining common mistakes", "Downloadable drill cheat sheets"],
    metric: "350+ masterclass modules",
  },
  {
    step: "04",
    title: "Practice",
    subtitle: "Deliberate repetitions",
    description: "Execute targeted drills in the nets or at home with clear repetition benchmarks, target cones, and measurable quality scorecards.",
    points: ["Solo, partner, & net session modes", "Auditory rhythm & cadence guides", "Structured rep & set tracking"],
    metric: "Actionable daily routines",
  },
  {
    step: "05",
    title: "Progress",
    subtitle: "Measurable performance gains",
    description: "Track bat speed, ball release velocity, wagon wheel scoring zones, and consistency metrics over time. Watch your match averages steadily rise.",
    points: ["Wagon wheel strike telemetry", "Release speed & seam angle trendlines", "Automated coach feedback alerts"],
    metric: "Data-backed player growth",
  },
];

export const FEATURED_PROGRAMS: TrainingProgram[] = [
  {
    id: "t20-power-hitting",
    title: "T20 Power Hitting & Range Hitting Blueprint",
    tagline: "Unlock 360-degree boundary hitting and explosive rotational swing mechanics.",
    level: "Advanced",
    duration: "6 Weeks",
    drills: 28,
    rating: 4.9,
    reviewsCount: 384,
    studentsEnrolled: 4210,
    category: "Batting",
    coach: {
      name: "Marcus Sterling",
      role: "High Performance Batting Coach, Ex-County Pro",
      badge: "IPL Consultant",
      avatar: "MS",
    },
    highlights: [
      "Rotational kinetic chain & bat speed drills",
      "Hitting through the line against 135+ kph bowling",
      "Clearing mid-wicket & down-the-ground power zones",
      "Death-over ramp & reverse-scoop execution",
    ],
    badgeColor: "emerald",
  },
  {
    id: "express-pace-velocity",
    title: "Express Pace Velocity & Seam Control 2.0",
    tagline: "Increase bowling speed by 5-8 km/h while protecting the lumbar spine.",
    level: "Elite",
    duration: "8 Weeks",
    drills: 36,
    rating: 4.95,
    reviewsCount: 512,
    studentsEnrolled: 3890,
    category: "Bowling",
    coach: {
      name: "Brett Henderson",
      role: "ICC Level 3 Specialist, Fast Bowling Bio-mechanist",
      badge: "150 kph Club",
      avatar: "BH",
    },
    highlights: [
      "Front-knee lockout & ground reaction force mechanics",
      "Non-bowling arm pull down for maximum whip",
      "Upright seam release & wobble seam deception",
      "Laser-targeted yorker & bouncer sequencing",
    ],
    badgeColor: "cyan",
  },
  {
    id: "spin-mastery",
    title: "Spin Masterclass: Drift, Dip & Subtle Variations",
    tagline: "Master finger spin & wrist spin fundamentals, revolutions, and match craft.",
    level: "Intermediate",
    duration: "6 Weeks",
    drills: 24,
    rating: 4.88,
    reviewsCount: 290,
    studentsEnrolled: 2750,
    category: "Bowling",
    coach: {
      name: "Ravi Chandran",
      role: "Former International Spinner & Elite Academy Director",
      badge: "Master Tactician",
      avatar: "RC",
    },
    highlights: [
      "Aerodynamic dip & late flight deception",
      "Finger snap torque & revolution optimization (2200+ rpm)",
      "Disguising the carrom ball & googly arm speed",
      "Setting up batters on deteriorating day-4 pitches",
    ],
    badgeColor: "amber",
  },
  {
    id: "red-ball-defense",
    title: "Red-Ball Batting: Defense to Dominance",
    tagline: "Build an impenetrable defense, judgment outside off-stump, and innings pacing.",
    level: "Intermediate",
    duration: "8 Weeks",
    drills: 32,
    rating: 4.92,
    reviewsCount: 440,
    studentsEnrolled: 3120,
    category: "Batting",
    coach: {
      name: "Alistair Clark",
      role: "First-Class Veteran, 18,000+ Professional Runs",
      badge: "Batting Mentor",
      avatar: "AC",
    },
    highlights: [
      "Head position over the ball & soft hands under swing",
      "Leaving the ball outside fourth stump with discipline",
      "Back-foot punch & rotation off genuine quicks",
      "Mental endurance for 200+ ball innings",
    ],
    badgeColor: "indigo",
  },
];

export const COACHING_VIDEOS: CoachingVideo[] = [
  {
    id: "v1",
    title: "Anatomy of the 140 km/h Inswinger: Wrist Position & Seam Angle",
    duration: "14:25",
    category: "Bowling",
    difficulty: "Advanced",
    views: "42.8k",
    coach: "Brett Henderson",
    coachRole: "Fast Bowling Specialist",
    thumbnailTopic: "Fast Bowling Biomechanics",
    keyTakeaway: "How a 12-degree wrist tilt creates aerodynamic laminar flow and late swing into right-handers.",
  },
  {
    id: "v2",
    title: "Mastering the Cover Drive Under Lateral Swing: Head Lead & Late Contact",
    duration: "18:40",
    category: "Batting",
    difficulty: "Intermediate",
    views: "58.1k",
    coach: "Alistair Clark",
    coachRole: "Master Batting Coach",
    thumbnailTopic: "Strokeplay Mechanics",
    keyTakeaway: "Ensuring your nose leads your front toe so you make contact directly beneath your eye line.",
  },
  {
    id: "v3",
    title: "The Deceptive Googly: Matching Arm Speed to Finger Spin Release",
    duration: "12:15",
    category: "Bowling",
    difficulty: "Intermediate",
    views: "36.4k",
    coach: "Ravi Chandran",
    coachRole: "Spin Bowling Master",
    thumbnailTopic: "Wrist Spin Variations",
    keyTakeaway: "Maintaining full arm rotation speed without tipping the ball with a low bowling shoulder.",
  },
  {
    id: "v4",
    title: "Standing Up to Quick Bowlers: Footwork Split & Glove Softness",
    duration: "16:10",
    category: "Wicketkeeping",
    difficulty: "Advanced",
    views: "19.3k",
    coach: "Mark Campbell",
    coachRole: "Head Glovework Coach",
    thumbnailTopic: "Wicketkeeping Precision",
    keyTakeaway: "Eliminating tension in the elbows to absorb nicked edges without rebounding off the gloves.",
  },
  {
    id: "v5",
    title: "T20 Power Hitting: Ground Reaction Force & Clearing the Front Leg",
    duration: "21:05",
    category: "Batting",
    difficulty: "Elite",
    views: "64.2k",
    coach: "Marcus Sterling",
    coachRole: "Power Hitting Specialist",
    thumbnailTopic: "Boundary Hitting",
    keyTakeaway: "Opening the front hip 0.1s prior to impact to clear the bat path for high ball exit velocities.",
  },
  {
    id: "v6",
    title: "Pre-Ball Micro-Reset: Controlling Arousal & Heart Rate Under Pressure",
    duration: "10:50",
    category: "Mental Skills",
    difficulty: "Beginner",
    views: "27.5k",
    coach: "Dr. Sarah Jenkins",
    coachRole: "Performance Psychologist",
    thumbnailTopic: "Pressure Management",
    keyTakeaway: "A 4-second box breath protocol you can execute right on the pitch between deliveries.",
  },
];

export const CHALLENGES: Challenge[] = [
  {
    id: "ch-bat-speed",
    title: "30-Day Bat Speed & Power Accelerator",
    subtitle: "Build blistering hand speed, rotational torque, and effortless boundary clearance.",
    duration: "30 Days",
    targetSkill: "Batting & Kinetic Power",
    difficulty: "Intermediate to Pro",
    activePlayers: 1840,
    completionRate: "91%",
    focusMetrics: "Target: +7 to +12 km/h bat speed",
    milestones: ["Baseline speed audit", "Weighted overload/underload bat drills", "Hip-lead timing", "Match situation power test"],
    daysHighlight: {
      day1_10: "Foundation: Core rotational mobility, dry-swing overload routines, grip pressure calibrations.",
      day11_20: "Acceleration: Short-arm pull-downs, front-foot plant stabilization, high-velocity tee work.",
      day21_30: "Integration: Live feed power zones, reaction timing drills, death-over boundary simulation.",
    },
  },
  {
    id: "ch-yorker-accuracy",
    title: "30-Day Death Overs Yorker Precision",
    subtitle: "Master the most unhittable delivery in white-ball cricket through deliberate target drills.",
    duration: "30 Days",
    targetSkill: "Fast Bowling Execution",
    difficulty: "Advanced",
    activePlayers: 1420,
    completionRate: "88%",
    focusMetrics: "Target: 75%+ landing in 6-inch yorker box",
    milestones: ["Crease mark consistency", "Wrist lock at release", "Shoe-box landing drills", "Crowd noise pressure tests"],
    daysHighlight: {
      day1_10: "Alignment: Run-up cadence consistency, gathered posture, bowling at visual floor targets.",
      day11_20: "Velocity + Control: Bowling at match pace into 30cm target mats with batters moving across.",
      day21_30: "Under Pressure: 6 consecutive balls under fatigue, simulating 12 runs required off the final over.",
    },
  },
  {
    id: "ch-reflex-catching",
    title: "30-Day Reflex Catching & Slip Hands",
    subtitle: "Turn half-chances into wickets with elite hand-eye coordination and slip reactions.",
    duration: "30 Days",
    targetSkill: "Fielding & Wicketkeeping",
    difficulty: "All Levels",
    activePlayers: 1190,
    completionRate: "94%",
    focusMetrics: "Target: <0.24s visual reaction latency",
    milestones: ["Crazy ball reflex training", "Low slip cordon stance", "One-handed diving recovery", "Flick & throw speed"],
    daysHighlight: {
      day1_10: "Hand-Eye Activation: Tennis ball wall deflection, peripheral vision tracking, soft finger pads.",
      day11_20: "Slip Cordon Simulation: Rapid nickboard catches, split-step timing, dive-and-roll cushion.",
      day21_30: "Match Intensity: High ball judgment under floodlights, closing boundary catches under pressure.",
    },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Devon Tremlett",
    role: "County 2nd XI & Premier League Captain",
    team: "Middlesex Premier League",
    avatar: "DT",
    quote: "The video breakdown on head position in the cover drive cured my tendency to nick outside off. My season batting average jumped from 29.4 to 51.2 in just four months.",
    rating: 5,
    metricsResult: "+21.8 season batting average",
  },
  {
    id: "t2",
    name: "Arjun Singhal",
    role: "U-19 State Pace Bowler",
    team: "Delhi State Cricket Association",
    avatar: "AS",
    quote: "I was stuck at 124 km/h for two seasons. The Express Pace module completely transformed my front knee lockout. I was clocked at 134.8 km/h at our recent state selection trials.",
    rating: 5,
    metricsResult: "+10.8 km/h bowling velocity",
  },
  {
    id: "t3",
    name: "Kavitha Raman",
    role: "Top-Order Batter & Wicketkeeper",
    team: "Western Australian Grade Cricket",
    avatar: "KR",
    quote: "CricketLab's 30-Day Bat Speed Challenge gave me the confidence to clear the ropes in death overs. It is genuinely like having an international elite coach in your pocket every single day.",
    rating: 5,
    metricsResult: "+14 km/h bat exit speed",
  },
  {
    id: "t4",
    name: "Nate Gallagher",
    role: "Club All-Rounder",
    team: "Sydney Grade Club",
    avatar: "NG",
    quote: "The mental skills pre-ball routine alone won us the semi-final. Staying calm in the 19th over when you're defending 8 runs is something traditional coaching never taught me.",
    rating: 5,
    metricsResult: "Player of the Final 2025",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Academy Core",
    priceMonthly: 19,
    priceAnnualMonthly: 14,
    description: "Ideal for aspiring club players and juniors building technical foundations.",
    popular: false,
    ctaText: "Start 14-Day Free Trial",
    features: [
      "Access to 100+ foundational drills across 6 skills",
      "Comprehensive 15-point skill assessment",
      "Personalized 4-week structured training plan",
      "Mobile drill timer & rep counter",
      "Community discussion & challenge boards",
      "Standard HD coaching videos (720p)",
    ],
  },
  {
    id: "pro",
    name: "Pro Academy",
    priceMonthly: 39,
    priceAnnualMonthly: 29,
    description: "The complete training system for competitive cricketers chasing serious milestones.",
    popular: true,
    ctaText: "Get Pro Access",
    features: [
      "Everything in Academy Core, plus:",
      "Full library of 350+ 4K masterclasses & slow-mo guides",
      "All 30-Day challenges with streak tracking & badges",
      "Biomechanical telemetry & bat speed analysis tools",
      "Weekly live Q&A with ex-international coaching staff",
      "Custom match-day warm-up & tactical gameplans",
      "Downloadable offline drill cheat sheets & net guides",
    ],
  },
  {
    id: "elite",
    name: "Elite Mentorship",
    priceMonthly: 89,
    priceAnnualMonthly: 69,
    description: "Direct 1-on-1 video feedback and tailored mentorship from elite coaches.",
    popular: false,
    ctaText: "Apply for Elite Mentorship",
    features: [
      "Everything in Pro Academy, plus:",
      "Monthly 1-on-1 video review of your batting/bowling action",
      "Voiceover biomechanical telestrator breakdown",
      "Custom seasonal periodization & match prep plan",
      "Direct coach chat messaging with 24-hour turnaround",
      "Pro Scout & Academy Pathway recommendation letter",
    ],
  },
];
