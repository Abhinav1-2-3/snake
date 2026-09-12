export const QUIZ_DISCLAIMER = "For fun only. For real health concerns, please see a doctor.";

export const STAGES = [
  {
    id: 1,
    title: "Stage One: You Are Doing Great",
    badge: "STAGE 1 • POSITIVE VIBES",
    colorTheme: "emerald",
    soundTheme: "cheerful",
    ambientNote: "Everything looks strangely peaceful...",
    questions: [
      {
        id: "q1",
        text: "Did you drink water today?",
        illustration: "happyDoctor",
        answers: [
          { text: "Yes, that is me", score: 1 },
          { text: "Only when tea was finished", score: 2 },
          { text: "I looked at water respectfully", score: 2 }
        ],
        reaction: "Excellent. You are doing better than expected."
      },
      {
        id: "q2",
        text: "Did you sleep for at least a few hours?",
        illustration: "teaUncle",
        answers: [
          { text: "Yes, like a peaceful baby", score: 1 },
          { text: "Does 3 AM to 7 AM count?", score: 2 },
          { text: "My phone battery slept before me", score: 3 }
        ],
        reaction: "Very responsible behaviour."
      },
      {
        id: "q3",
        text: "Did you eat something before opening Instagram?",
        illustration: "familyCelebrate",
        answers: [
          { text: "Yes, proper breakfast first", score: 1 },
          { text: "I fed my algorithm before my stomach", score: 2 },
          { text: "I have no proof", score: 3 }
        ],
        reaction: "The doctor is impressed. Rare healthy citizen detected."
      },
      {
        id: "q4",
        text: "Did you avoid fighting in the family WhatsApp group today?",
        illustration: "happyDoctor",
        answers: [
          { text: "Yes, 100% peace maintained", score: 1 },
          { text: "I replied only with a folding-hands emoji 🙏", score: 2 },
          { text: "My mother was right", score: 3 }
        ],
        reaction: "Your mother may finally be proud."
      },
      {
        id: "q5",
        text: "Did you charge your phone before leaving home?",
        illustration: "teaUncle",
        answers: [
          { text: "Yes, at solid 98%", score: 1 },
          { text: "12% and relying on pure confidence", score: 2 },
          { text: "Please do not expose me", score: 3 }
        ],
        reaction: "This is a rare healthy citizen. Let us proceed carefully."
      }
    ]
  },
  {
    id: 2,
    title: "Stage Two: Something Feels Suspicious",
    badge: "STAGE 2 • SUSPICIOUS ZONE",
    colorTheme: "amber",
    soundTheme: "suspense",
    ambientNote: "Wait... the pulse chart is getting weird...",
    questions: [
      {
        id: "q6",
        text: "Did you have more than three teas today?",
        illustration: "teaWarning",
        answers: [
          { text: "Yes, that is me", score: 2 },
          { text: "We are calling the tea department", score: 3 },
          { text: "Tea is running in my blood", score: 4 }
        ],
        reaction: "Hmm... interesting. We are calling the tea department."
      },
      {
        id: "q7",
        text: "Did you open the fridge and completely forget why?",
        illustration: "doctorRemovingGlasses",
        answers: [
          { text: "I just stood there staring into the cold void", score: 3 },
          { text: "This is personal", score: 2 },
          { text: "I blame my friends", score: 3 }
        ],
        reaction: "The doctor slowly removes glasses. This is not in the textbook."
      },
      {
        id: "q8",
        text: "Did you scroll for one hour after whispering 'just five minutes'?",
        illustration: "shoppingCartChaos",
        answers: [
          { text: "Yes, that is me", score: 3 },
          { text: "Please do not expose me", score: 3 },
          { text: "I need a lawyer", score: 4 }
        ],
        reaction: "The doctor needs to check this again. Time dilation confirmed."
      },
      {
        id: "q9",
        text: "Did you cancel weekend plans after getting fully ready with shoes on?",
        illustration: "doctorRemovingGlasses",
        answers: [
          { text: "The bed looked too welcoming", score: 3 },
          { text: "My mother was right", score: 3 },
          { text: "I have no proof", score: 2 }
        ],
        reaction: "Please remain calm. Or do not. Emergency consultation pending."
      },
      {
        id: "q10",
        text: "Did dramatic rain make you want to skip work, college, and all of life?",
        illustration: "dramaticRain",
        answers: [
          { text: "Heavy rain + hot tea = impossible to move", score: 4 },
          { text: "Yes, that is me", score: 3 },
          { text: "Nature commanded me to sleep", score: 3 }
        ],
        reaction: "Malayali monsoon response detected. Vital signs are getting lazy."
      },
      {
        id: "q11",
        text: "Did you buy something online only because it was on 70% offer?",
        illustration: "shoppingCartChaos",
        answers: [
          { text: "I saved money by spending money!", score: 4 },
          { text: "Please do not expose me", score: 3 },
          { text: "I need a lawyer", score: 3 }
        ],
        reaction: "Delivery parcel count is dangerously elevated."
      }
    ]
  },
  {
    id: 3,
    title: "Stage Three: The Case Is Becoming Serious",
    badge: "STAGE 3 • FULL CODE RED",
    colorTheme: "rose",
    soundTheme: "dramatic",
    ambientNote: "HOSPITAL ALARMS RINGING! KERALA CHAOS LEVEL 99!",
    questions: [
      {
        id: "q12",
        text: "Have you promised to start the gym 'from tomorrow' for more than six months?",
        illustration: "doctorPointingReport",
        answers: [
          { text: "Next Monday is definitely the day!", score: 4 },
          { text: "My mother was right", score: 4 },
          { text: "I need a lawyer", score: 5 }
        ],
        reaction: "Oh no. This is becoming a scene. The family WhatsApp group has been informed."
      },
      {
        id: "q13",
        text: "Did you say 'I am leaving now' while still lying completely flat on the bed?",
        illustration: "shockedAuntie",
        answers: [
          { text: "I was leaving mentally first", score: 5 },
          { text: "Please do not expose me", score: 4 },
          { text: "I blame my friends", score: 4 }
        ],
        reaction: "Collecting evidence from your friends. Severe procrastination detected."
      },
      {
        id: "q14",
        text: "Do you immediately hide near the food table during family wedding functions?",
        illustration: "foodTableChaos",
        answers: [
          { text: "I am only there for the hot biryani and payasam", score: 5 },
          { text: "Avoided 14 aunties asking about marriage", score: 5 },
          { text: "This is personal", score: 4 }
        ],
        reaction: "Doctor has requested an emergency tea. Survival tactics confirmed."
      },
      {
        id: "q15",
        text: "Do suspicious relatives make your phone suddenly 'lose all network'?",
        illustration: "shockedAuntie",
        answers: [
          { text: "'Hello? Hello? Uncle, your voice is breaking!'", score: 5 },
          { text: "Yes, that is me", score: 4 },
          { text: "I have no proof", score: 4 }
        ],
        reaction: "Signal jammer protocol activated. Auntie is deeply suspicious."
      },
      {
        id: "q16",
        text: "Have you missed a red KSRTC-style bus after running for your life in slippers?",
        illustration: "chasingBus",
        answers: [
          { text: "The conductor whistled twice and stared right at me", score: 5 },
          { text: "I pretended I was only jogging for fitness", score: 5 },
          { text: "I need a lawyer", score: 4 }
        ],
        reaction: "Cardio attempt failed. Slipper damage registered in system."
      },
      {
        id: "q17",
        text: "Did you order Swiggy/Zomato even though your mother made food at home?",
        illustration: "villainDoctor",
        answers: [
          { text: "I had to smuggle the food container like a criminal", score: 5 },
          { text: "My mother was right", score: 5 },
          { text: "Please do not expose me", score: 5 }
        ],
        reaction: "Your mother already warned us. Approaching final critical condition."
      },
      {
        id: "q18",
        text: "Do you get miraculous, life-changing motivation only at 11:45 PM?",
        illustration: "doctorPointingReport",
        answers: [
          { text: "Yes! I plan 5 startups and a workout routine in bed", score: 5 },
          { text: "Then morning happens and I cannot find my socks", score: 5 },
          { text: "This case needs background music", score: 5 }
        ],
        reaction: "This case needs dramatic cinematic background music immediately!"
      }
    ]
  }
];

export const ANALYSIS_STEPS = [
  { text: "Checking tea level in bloodstream...", icon: "☕" },
  { text: "Reviewing bad life decisions from 2018...", icon: "📜" },
  { text: "Reading deleted WhatsApp messages...", icon: "💬" },
  { text: "Checking family-function survival rate...", icon: "🍛" },
  { text: "Calculating Monday morning damage...", icon: "⏰" },
  { text: "Calling the final meme department...", icon: "🚨" }
];

export const SILLY_RESULTS = [
  {
    title: "Tea Powered Human",
    tagline: "85% Black Tea, 15% Nervous Energy",
    badge: "CERTIFIED TEA ENTHUSIAST",
    cause: "Severe addiction to roadside glass-tumbler tea and parippuvada.",
    causesList: ["Too much tea", "Rain and blanket combination", "Monday morning pressure"],
    suggestions: ["Drink some water", "Have another tea to balance the previous tea", "Take a 20-minute nap"]
  },
  {
    title: "Average Malayali Energy: 100%",
    tagline: "High Resistance to Auntie Questions & Monday Mornings",
    badge: "100% PURE MALAYALI VIBE",
    cause: "Overexposure to family WhatsApp forwards and KSRTC bus conductor whistles.",
    causesList: ["Too many family questions", "Too many unread messages", "Too much tea"],
    suggestions: ["Keep your phone away for five minutes", "Say sorry to your mother", "Drink some water"]
  },
  {
    title: "Professional Plan Canceller",
    tagline: "Ready by 6:00 PM, Asleep in Blanket by 6:15 PM",
    badge: "GOLD MEDAL IN AVOIDING PEOPLE",
    cause: "The bed gravitational pull was stronger than social obligations.",
    causesList: ["Rain and blanket combination", "Too many unread messages", "Monday morning pressure"],
    suggestions: ["Have a hot tea", "Take a nap without guilt", "Keep your phone on silent"]
  },
  {
    title: "Phone Scroll Champion",
    tagline: "Says '5 Minutes', Returns in Next Century",
    badge: "THUMB ENDURANCE LEGEND",
    cause: "Infinite Reels, online shopping flash sales, and midnight motivation spirals.",
    causesList: ["Too many unread messages", "Monday morning pressure", "Too much tea"],
    suggestions: ["Keep your phone away for five minutes", "Drink some water", "Say sorry to your mother"]
  },
  {
    title: "Your Mother Was Right Syndrome",
    tagline: "Everything she warned about has clinically come true",
    badge: "UNDENIABLE TRUTH DIAGNOSIS",
    cause: "Ignoring the jacket, staying up late, and ordering food when there was rice at home.",
    causesList: ["Too many family questions", "Too much tea", "Monday morning pressure"],
    suggestions: ["Say sorry to your mother immediately", "Eat the food in the fridge", "Have a tea"]
  },
  {
    title: "Family Function Escape Specialist",
    tagline: "Disappears during photos, reappears only near Biryani counter",
    badge: "STEALTH MARRIAGE DODGER",
    cause: "Extreme allergy to marriage inquiries and comparative marks discussions.",
    causesList: ["Too many family questions", "Too many unread messages", "Rain and blanket combination"],
    suggestions: ["Have a tea", "Drink some water", "Take a nap"]
  }
];

export const YOUTUBE_SHORT_ID = "tAiF8yQlbzs";
export const YOUTUBE_SHORT_URL = "https://www.youtube.com/shorts/tAiF8yQlbzs";
export const YOUTUBE_EMBED_URL = "https://www.youtube-nocookie.com/embed/tAiF8yQlbzs?autoplay=1&loop=1&playlist=tAiF8yQlbzs&playsinline=1&controls=1";
