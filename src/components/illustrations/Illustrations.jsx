import React from 'react';

// 1. Welcome Screen: Confused doctor holding stethoscope upside down
export const UpsideDownDoctorSvg = ({ className = "w-64 h-64" }) => (
  <svg viewBox="0 0 320 320" className={`${className} animate-float`} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Comic background burst */}
    <circle cx="160" cy="160" r="140" fill="#FEF08A" stroke="#0F172A" strokeWidth="4" />
    <path d="M160 20 L170 50 L200 30 L190 60 L230 50 L210 80 L250 85 L220 110 L260 130 L220 145 L250 175 L210 180 L240 215 L200 210 L215 250 L180 235 L180 270 L150 245 L135 280 L120 245 L90 270 L95 235 L60 250 L75 210 L35 215 L65 180 L25 175 L55 145 L15 130 L55 110 L25 85 L65 80 L45 50 L85 60 L75 30 L105 50 Z" fill="#FDE047" opacity="0.6" />
    
    {/* Doctor Body - White Coat */}
    <path d="M110 240 Q160 260 210 240 L230 310 L90 310 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="4" />
    <path d="M140 245 L160 290 L180 245" stroke="#0F172A" strokeWidth="4" />
    {/* Blue scrub shirt underneath */}
    <path d="M145 240 L160 270 L175 240 Z" fill="#38BDF8" stroke="#0F172A" strokeWidth="3" />
    
    {/* Neck */}
    <rect x="145" y="190" width="30" height="30" fill="#FDBA74" stroke="#0F172A" strokeWidth="4" />
    
    {/* Doctor Face */}
    <ellipse cx="160" cy="140" rx="60" ry="65" fill="#FED7AA" stroke="#0F172A" strokeWidth="4" />
    {/* Ears */}
    <ellipse cx="98" cy="140" rx="10" ry="14" fill="#FDBA74" stroke="#0F172A" strokeWidth="3" />
    <ellipse cx="222" cy="140" rx="10" ry="14" fill="#FDBA74" stroke="#0F172A" strokeWidth="3" />
    {/* Hair */}
    <path d="M102 120 Q120 70 160 70 Q200 70 218 120 Q200 95 160 95 Q120 95 102 120 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="4" />
    {/* Doctor Mirror Headband */}
    <rect x="100" y="88" width="120" height="12" rx="4" fill="#64748B" stroke="#0F172A" strokeWidth="3" />
    <circle cx="160" cy="94" r="16" fill="#CBD5E1" stroke="#0F172A" strokeWidth="3" />
    <circle cx="160" cy="94" r="7" fill="#F8FAFC" />

    {/* Eyes - Wide & Perplexed */}
    <ellipse cx="138" cy="135" rx="15" ry="18" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
    <ellipse cx="182" cy="135" rx="15" ry="18" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
    {/* Pupils looking in opposite directions (hilarious squint) */}
    <circle cx="143" cy="135" r="7" fill="#0F172A" />
    <circle cx="177" cy="135" r="7" fill="#0F172A" />
    <circle cx="145" cy="132" r="2.5" fill="#FFFFFF" />
    <circle cx="179" cy="132" r="2.5" fill="#FFFFFF" />
    {/* Raised Brows */}
    <path d="M125 110 Q140 102 152 114" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
    <path d="M168 114 Q180 102 195 110" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />

    {/* Round Malayali Doctor Mustache */}
    <path d="M140 162 Q160 156 160 166 Q160 156 180 162 Q165 174 160 168 Q155 174 140 162 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
    {/* Confused wavy mouth */}
    <path d="M148 178 Q155 184 160 178 Q165 172 172 178" stroke="#0F172A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
    {/* Sweat drop */}
    <path d="M210 115 Q218 126 214 135 Q210 140 204 136 Q200 130 206 122 Z" fill="#38BDF8" stroke="#0F172A" strokeWidth="2" />

    {/* UPSIDE-DOWN STETHOSCOPE (He's holding chest piece near his ear and earpieces pointed into air!) */}
    <path d="M130 215 Q110 230 110 270 Q110 290 140 300 Q180 300 200 270 Q210 230 190 215" stroke="#475569" strokeWidth="6" fill="none" strokeLinecap="round" />
    {/* Chest piece stuck upside down in his own pocket */}
    <circle cx="160" cy="295" r="14" fill="#94A3B8" stroke="#0F172A" strokeWidth="4" />
    {/* Doctor holding the earpieces in hand pointing backwards */}
    <path d="M185 220 L215 190" stroke="#475569" strokeWidth="5" />
    <circle cx="218" cy="188" r="6" fill="#E2E8F0" stroke="#0F172A" strokeWidth="3" />
    
    {/* Question marks hovering */}
    <text x="75" y="105" fontSize="28" fontWeight="bold" fill="#DC2626" transform="rotate(-15 75 105)">?</text>
    <text x="235" y="115" fontSize="32" fontWeight="bold" fill="#DC2626" transform="rotate(15 235 115)">?</text>
  </svg>
);

// 2. Stage 1: Happy Doctor Giving Thumbs Up
export const HappyDoctorThumbsUpSvg = ({ className = "w-56 h-56" }) => (
  <svg viewBox="0 0 300 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="150" r="130" fill="#DCFCE7" stroke="#0F172A" strokeWidth="4" />
    {/* Sparkles */}
    <path d="M60 70 L65 80 L75 85 L65 90 L60 100 L55 90 L45 85 L55 80 Z" fill="#FACC15" stroke="#0F172A" strokeWidth="2" />
    <path d="M235 60 L240 70 L250 75 L240 80 L235 90 L230 80 L220 75 L230 70 Z" fill="#FACC15" stroke="#0F172A" strokeWidth="2" />

    {/* Body */}
    <path d="M90 220 Q150 235 210 220 L220 290 L80 290 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="4" />
    <path d="M120 220 L150 260 L180 220" stroke="#0F172A" strokeWidth="3" />
    <path d="M135 220 L150 245 L165 220 Z" fill="#10B981" stroke="#0F172A" strokeWidth="2" />

    {/* Face */}
    <ellipse cx="150" cy="130" rx="52" ry="56" fill="#FED7AA" stroke="#0F172A" strokeWidth="4" />
    {/* Hair */}
    <path d="M102 110 Q120 65 150 65 Q180 65 198 110 Q180 85 150 85 Q120 85 102 110 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="4" />
    {/* Smiling eyes (curves) */}
    <path d="M125 125 Q135 115 145 125" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
    <path d="M155 125 Q165 115 175 125" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
    {/* Big happy smile with teeth */}
    <path d="M130 145 Q150 175 170 145 Z" fill="#EF4444" stroke="#0F172A" strokeWidth="3" />
    <path d="M135 147 Q150 152 165 147" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
    {/* Rosy cheeks */}
    <ellipse cx="120" cy="140" rx="8" ry="5" fill="#FCA5A5" />
    <ellipse cx="180" cy="140" rx="8" ry="5" fill="#FCA5A5" />

    {/* GIANT THUMBS UP HAND */}
    <g transform="translate(195, 140)">
      <circle cx="20" cy="30" r="28" fill="#FDBA74" stroke="#0F172A" strokeWidth="4" />
      {/* Thumb sticking high */}
      <rect x="8" y="-18" width="22" height="38" rx="11" fill="#FDBA74" stroke="#0F172A" strokeWidth="4" />
      {/* Fingers curled */}
      <path d="M30 20 Q44 22 40 32 Q44 42 36 48" stroke="#0F172A" strokeWidth="3.5" fill="none" />
      <text x="35" y="0" fontSize="20" fontWeight="bold" fill="#10B981">100%</text>
    </g>
  </svg>
);

// 3. Stage 1: Tea Shop Uncle looking impressed
export const TeaShopUncleSvg = ({ className = "w-56 h-56" }) => (
  <svg viewBox="0 0 300 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="150" r="130" fill="#FEF3C7" stroke="#0F172A" strokeWidth="4" />
    {/* Wooden tea shop bench backdrop */}
    <rect x="30" y="220" width="240" height="70" fill="#B45309" stroke="#0F172A" strokeWidth="4" />
    <rect x="50" y="240" width="200" height="8" fill="#78350F" />

    {/* Uncle Head */}
    <ellipse cx="140" cy="115" rx="46" ry="50" fill="#F59E0B" stroke="#0F172A" strokeWidth="4" />
    {/* Grey hair + sideburns */}
    <path d="M96 110 Q110 65 140 65 Q170 65 184 110 Q170 85 140 85 Q110 85 96 110 Z" fill="#475569" stroke="#0F172A" strokeWidth="4" />
    <rect x="94" y="115" width="8" height="20" fill="#475569" rx="3" />
    <rect x="178" y="115" width="8" height="20" fill="#475569" rx="3" />
    {/* Towel over shoulder (Thorthu mundu) */}
    <path d="M90 190 Q110 160 130 190 L125 240 L85 240 Z" fill="#F87171" stroke="#0F172A" strokeWidth="3" />
    <line x1="90" y1="205" x2="128" y2="205" stroke="#FFFFFF" strokeWidth="2" />
    <line x1="88" y1="220" x2="126" y2="220" stroke="#FFFFFF" strokeWidth="2" />

    {/* Eyes admiring */}
    <circle cx="126" cy="108" r="5" fill="#0F172A" />
    <circle cx="154" cy="108" r="5" fill="#0F172A" />
    {/* Malayali handle-bar mustache */}
    <path d="M112 130 Q140 125 140 135 Q140 125 168 130 Q178 140 170 146 Q140 138 110 146 Q102 140 112 130 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
    {/* Nodding smile */}
    <path d="M130 145 Q140 152 150 145" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />

    {/* METRE CHAI POUR: Brass kettle pouring high into transparent glass */}
    {/* Brass Kettle held high */}
    <path d="M190 40 L230 40 L240 75 L180 75 Z" fill="#EAB308" stroke="#0F172A" strokeWidth="3" />
    <path d="M185 55 L165 70" stroke="#EAB308" strokeWidth="6" strokeLinecap="round" />
    {/* Golden Tea Stream */}
    <path d="M165 72 Q180 140 190 200" stroke="#D97706" strokeWidth="6" strokeLinecap="round" />
    <path d="M165 72 Q180 140 190 200" stroke="#FDE047" strokeWidth="2" strokeDasharray="4 4" />
    {/* Glass Tumbler at bottom with frothy tea */}
    <polygon points="180,200 205,200 200,240 185,240" fill="#E0F2FE" stroke="#0F172A" strokeWidth="3" opacity="0.9" />
    <polygon points="182,210 203,210 199,238 186,238" fill="#B45309" />
    {/* Froth */}
    <ellipse cx="192" cy="210" rx="10" ry="3" fill="#FEF08A" />
    
    {/* Text bubble: "Kidilan!" */}
    <rect x="35" y="45" width="80" height="34" rx="8" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
    <text x="45" y="68" fontSize="13" fontWeight="bold" fill="#0F172A">SUPERB!</text>
  </svg>
);

// 4. Stage 1: Family Celebrating Dramatically
export const FamilyCelebrationSvg = ({ className = "w-56 h-56" }) => (
  <svg viewBox="0 0 300 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="150" r="130" fill="#ECFDF5" stroke="#0F172A" strokeWidth="4" />
    {/* Confetti in background */}
    <circle cx="50" cy="60" r="5" fill="#EF4444" />
    <circle cx="240" cy="50" r="6" fill="#3B82F6" />
    <rect x="70" y="80" width="8" height="8" fill="#F59E0B" transform="rotate(25 70 80)" />
    <rect x="220" y="90" width="8" height="8" fill="#10B981" transform="rotate(-20 220 90)" />

    {/* Mother Figure in Saree */}
    <ellipse cx="110" cy="130" rx="35" ry="40" fill="#FDBA74" stroke="#0F172A" strokeWidth="3.5" />
    <path d="M80 110 Q110 75 140 110" stroke="#0F172A" strokeWidth="4" fill="#1E293B" />
    <circle cx="110" cy="105" r="4" fill="#DC2626" /> {/* Red Bindi */}
    {/* Happy curved eyes */}
    <path d="M96 125 Q104 118 112 125" stroke="#0F172A" strokeWidth="3" />
    <path d="M98 140 Q110 155 122 140" stroke="#0F172A" strokeWidth="3" fill="#DC2626" />
    {/* Kasavu Gold Saree Pallu */}
    <path d="M80 170 Q110 160 140 170 L145 280 L75 280 Z" fill="#FEF08A" stroke="#0F172A" strokeWidth="3.5" />
    <line x1="80" y1="180" x2="140" y2="180" stroke="#CA8A04" strokeWidth="6" />

    {/* Cheering Relative on right */}
    <ellipse cx="190" cy="120" rx="32" ry="36" fill="#FDBA74" stroke="#0F172A" strokeWidth="3.5" />
    <circle cx="180" cy="115" r="4" fill="#0F172A" />
    <circle cx="200" cy="115" r="4" fill="#0F172A" />
    <path d="M178 132 Q190 148 202 132 Z" fill="#DC2626" stroke="#0F172A" strokeWidth="2.5" />
    {/* Hands raised high cheering */}
    <path d="M220 150 L250 100" stroke="#FDBA74" strokeWidth="12" strokeLinecap="round" />
    <path d="M220 150 L250 100" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" />
    {/* Plate of Kerala banana chips & payasam */}
    <ellipse cx="150" cy="220" rx="45" ry="18" fill="#CBD5E1" stroke="#0F172A" strokeWidth="3" />
    <ellipse cx="135" cy="216" rx="8" ry="4" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" />
    <ellipse cx="150" cy="218" rx="7" ry="4" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" />
    <ellipse cx="162" cy="215" rx="8" ry="4" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" />
    
    {/* Floating banner: "PROUD!" */}
    <rect x="100" y="30" width="100" height="32" rx="6" fill="#10B981" stroke="#0F172A" strokeWidth="3" />
    <text x="114" y="52" fontSize="14" fontWeight="bold" fill="#FFFFFF">PROUD MOM</text>
  </svg>
);

// 5. Stage 2: Doctor Slowly Removing Glasses in Shock
export const DoctorRemovingGlassesSvg = ({ className = "w-56 h-56" }) => (
  <svg viewBox="0 0 300 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="150" r="130" fill="#FEF3C7" stroke="#0F172A" strokeWidth="4" />
    {/* Dramatic yellow action stripes */}
    <path d="M40 80 L90 110 M260 80 L210 110 M30 180 L80 170 M270 180 L220 170" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />

    {/* Doctor Face */}
    <ellipse cx="150" cy="135" rx="55" ry="60" fill="#FED7AA" stroke="#0F172A" strokeWidth="4" />
    {/* Hair standing slightly on end */}
    <path d="M100 110 Q120 60 140 62 Q150 50 160 62 Q180 60 200 110 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="4" />
    
    {/* Huge wide shock eyes */}
    <ellipse cx="130" cy="130" rx="16" ry="20" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
    <ellipse cx="170" cy="130" rx="16" ry="20" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
    {/* Tiny shocked pin-drop pupils */}
    <circle cx="130" cy="130" r="4" fill="#0F172A" />
    <circle cx="170" cy="130" r="4" fill="#0F172A" />
    {/* Eyebrows raised way up */}
    <path d="M115 96 Q130 88 142 96" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
    <path d="M158 96 Q170 88 185 96" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />

    {/* Dropping jaw / open mouth in disbelief */}
    <ellipse cx="150" cy="172" rx="14" ry="18" fill="#450A0A" stroke="#0F172A" strokeWidth="3" />
    {/* Large sweat drop */}
    <path d="M198 110 Q208 125 202 135 Q196 142 190 136 Q186 128 194 118 Z" fill="#38BDF8" stroke="#0F172A" strokeWidth="2.5" />

    {/* HAND REMOVING GLASSES - pulled down to chin level */}
    <g transform="translate(0, 35)">
      {/* Hand fingers holding glass frame */}
      <circle cx="112" cy="140" r="10" fill="#FDBA74" stroke="#0F172A" strokeWidth="3" />
      {/* Glasses tilted down */}
      <rect x="110" y="130" width="35" height="24" rx="5" fill="#E0F2FE" stroke="#0F172A" strokeWidth="4" opacity="0.85" />
      <rect x="155" y="130" width="35" height="24" rx="5" fill="#E0F2FE" stroke="#0F172A" strokeWidth="4" opacity="0.85" />
      <line x1="145" y1="142" x2="155" y2="142" stroke="#0F172A" strokeWidth="4" />
      {/* Glare line on glasses */}
      <line x1="116" y1="135" x2="128" y2="148" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
    </g>

    {/* Sound effect comic text */}
    <text x="35" y="60" fontSize="20" fontWeight="900" fill="#DC2626" transform="rotate(-15 35 60)">WAIT WHAT?!</text>
  </svg>
);

// 6. Stage 2: Dramatic Rain Outside Window
export const DramaticRainSvg = ({ className = "w-56 h-56" }) => (
  <svg viewBox="0 0 300 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="150" r="130" fill="#E0F2FE" stroke="#0F172A" strokeWidth="4" />
    {/* Dark Kerala Monsoon Storm Clouds */}
    <path d="M50 80 Q70 50 100 65 Q130 45 160 65 Q190 45 220 65 Q250 50 260 85 Q260 110 220 110 L60 110 Q40 105 50 80 Z" fill="#475569" stroke="#0F172A" strokeWidth="3" />
    {/* Rain Streaks */}
    <line x1="70" y1="120" x2="55" y2="160" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
    <line x1="110" y1="115" x2="95" y2="165" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
    <line x1="150" y1="120" x2="135" y2="170" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
    <line x1="190" y1="115" x2="175" y2="165" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
    <line x1="230" y1="120" x2="215" y2="160" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />

    {/* Window Sill */}
    <rect x="50" y="170" width="200" height="90" fill="#92400E" stroke="#0F172A" strokeWidth="4" />
    <rect x="60" y="180" width="85" height="70" fill="#BAE6FD" stroke="#0F172A" strokeWidth="3" />
    <rect x="155" y="180" width="85" height="70" fill="#BAE6FD" stroke="#0F172A" strokeWidth="3" />
    
    {/* Hot Tea Glass sitting on window sill steaming */}
    <polygon points="135,210 165,210 160,255 140,255" fill="#F8FAFC" stroke="#0F172A" strokeWidth="3" />
    <polygon points="137,218 163,218 159,252 141,252" fill="#B45309" />
    {/* Steam curls */}
    <path d="M145 200 Q140 190 148 180" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" className="animate-steam" />
    <path d="M155 200 Q160 190 152 180" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" className="animate-steam" />

    {/* Cozy Blanket Sleeping Emoji in corner */}
    <rect x="70" y="210" width="60" height="35" rx="10" fill="#EC4899" stroke="#0F172A" strokeWidth="2.5" />
    <text x="82" y="233" fontSize="16">😴 Zzz</text>
  </svg>
);

// 7. Stage 2: Tea Cup with Flashing Warning Siren
export const TeaWarningSirenSvg = ({ className = "w-56 h-56" }) => (
  <svg viewBox="0 0 300 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="150" r="130" fill="#FEF2F2" stroke="#0F172A" strokeWidth="4" />
    {/* Siren warning glow waves */}
    <circle cx="150" cy="70" r="45" fill="#FCA5A5" opacity="0.4" className="animate-ping" />
    
    {/* Emergency Rotating Beacon on top */}
    <rect x="135" y="45" width="30" height="35" rx="8" fill="#EF4444" stroke="#0F172A" strokeWidth="4" />
    <circle cx="150" cy="58" r="8" fill="#FEF08A" />
    <line x1="125" y1="50" x2="105" y2="35" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
    <line x1="175" y1="50" x2="195" y2="35" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />

    {/* Giant Kerala Metre Tea Tumbler */}
    <polygon points="100,105 200,105 185,250 115,250" fill="#E2E8F0" stroke="#0F172A" strokeWidth="5" />
    {/* Dark Red Strong Chai Liquid */}
    <polygon points="105,130 195,130 182,245 118,245" fill="#991B1B" />
    {/* Thick Layer of Froth */}
    <ellipse cx="150" cy="130" rx="45" ry="12" fill="#FEF08A" stroke="#0F172A" strokeWidth="3" />
    
    {/* Digital Meter on the glass: "TEA OVERLOAD: 400%" */}
    <rect x="110" y="160" width="80" height="40" rx="4" fill="#0F172A" stroke="#E2E8F0" strokeWidth="2" />
    <text x="116" y="178" fontSize="10" fontWeight="bold" fill="#EF4444">TEA LEVEL</text>
    <text x="122" y="193" fontSize="13" fontWeight="900" fill="#22C55E">CRITICAL</text>

    {/* Danger Warning triangle badge */}
    <path d="M60 210 L85 160 L110 210 Z" fill="#FACC15" stroke="#0F172A" strokeWidth="3" />
    <text x="82" y="202" fontSize="20" fontWeight="bold" fill="#0F172A">!</text>
  </svg>
);

// 8. Stage 2: Shopping Cart Chaos (Online parcels piling up)
export const ShoppingCartChaosSvg = ({ className = "w-56 h-56" }) => (
  <svg viewBox="0 0 300 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="150" r="130" fill="#FFFBEB" stroke="#0F172A" strokeWidth="4" />
    
    {/* Parcels toppling over */}
    <g transform="rotate(-12 120 120)">
      <rect x="80" y="80" width="80" height="50" fill="#D97706" stroke="#0F172A" strokeWidth="4" />
      <line x1="80" y1="105" x2="160" y2="105" stroke="#78350F" strokeWidth="3" />
      <rect x="100" y="90" width="30" height="15" fill="#FFFFFF" />
      <text x="105" y="102" fontSize="9" fontWeight="bold" fill="#DC2626">70% OFF</text>
    </g>

    <g transform="rotate(15 170 140)">
      <rect x="130" y="110" width="90" height="55" fill="#B45309" stroke="#0F172A" strokeWidth="4" />
      <line x1="175" y1="110" x2="175" y2="165" stroke="#78350F" strokeWidth="3" />
      <text x="145" y="140" fontSize="11" fontWeight="bold" fill="#FFFFFF">DELIVERY</text>
    </g>

    {/* Giant Shopping Cart at bottom */}
    <path d="M60 210 L90 210 L120 250 L220 250 L240 180 L80 180" stroke="#0F172A" strokeWidth="5" fill="none" strokeLinecap="round" />
    <circle cx="125" cy="265" r="14" fill="#64748B" stroke="#0F172A" strokeWidth="4" />
    <circle cx="205" cy="265" r="14" fill="#64748B" stroke="#0F172A" strokeWidth="4" />

    {/* Currency notes flying away */}
    <rect x="50" y="110" width="35" height="20" rx="3" fill="#86EFAC" stroke="#0F172A" strokeWidth="2" transform="rotate(-30 50 110)" />
    <text x="58" y="125" fontSize="12" fontWeight="bold" fill="#15803D" transform="rotate(-30 50 110)">₹₹</text>

    {/* Empty Wallet crying */}
    <ellipse cx="230" cy="90" rx="25" ry="18" fill="#78350F" stroke="#0F172A" strokeWidth="3" />
    <text x="218" y="96" fontSize="18">💸</text>
  </svg>
);

// 9. Stage 3: Doctor Pointing Dramatically at Report
export const DoctorPointingReportSvg = ({ className = "w-56 h-56" }) => (
  <svg viewBox="0 0 300 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="150" r="130" fill="#FEE2E2" stroke="#0F172A" strokeWidth="4" />
    {/* Manga dramatic speed lines */}
    <line x1="20" y1="30" x2="90" y2="70" stroke="#EF4444" strokeWidth="4" />
    <line x1="280" y1="30" x2="210" y2="70" stroke="#EF4444" strokeWidth="4" />
    <line x1="10" y1="150" x2="70" y2="150" stroke="#EF4444" strokeWidth="4" />

    {/* Doctor Head - Intense Frown */}
    <ellipse cx="120" cy="120" rx="45" ry="50" fill="#FED7AA" stroke="#0F172A" strokeWidth="4" />
    <path d="M80 100 Q120 60 155 100" stroke="#0F172A" strokeWidth="5" fill="#1E293B" />
    {/* Severe angry eyebrows */}
    <line x1="95" y1="105" x2="118" y2="116" stroke="#0F172A" strokeWidth="5" strokeLinecap="round" />
    <line x1="145" y1="105" x2="122" y2="116" stroke="#0F172A" strokeWidth="5" strokeLinecap="round" />
    <circle cx="110" cy="120" r="5" fill="#0F172A" />
    <circle cx="132" cy="120" r="5" fill="#0F172A" />
    {/* Mouth shouting */}
    <path d="M110 142 Q122 165 134 142 Z" fill="#7F1D1D" stroke="#0F172A" strokeWidth="3" />

    {/* DOCTOR HAND POINTING ACCUSING FINGER */}
    <path d="M145 155 L215 135" stroke="#FED7AA" strokeWidth="20" strokeLinecap="round" />
    <path d="M145 155 L215 135" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
    {/* Pointing finger */}
    <rect x="210" y="125" width="30" height="12" rx="6" fill="#FDBA74" stroke="#0F172A" strokeWidth="3" />

    {/* Medical Report Clipboard with ZIG ZAG FLATLINE */}
    <rect x="180" y="150" width="95" height="120" rx="8" fill="#FFFFFF" stroke="#0F172A" strokeWidth="4" />
    <rect x="210" y="142" width="35" height="14" rx="3" fill="#64748B" stroke="#0F172A" strokeWidth="2" />
    {/* Report Title */}
    <text x="190" y="172" fontSize="9" fontWeight="bold" fill="#DC2626">FATAL LAZINESS</text>
    {/* Red ECG Graph going wild */}
    <path d="M190 205 L205 205 L212 185 L220 230 L228 175 L235 215 L265 215" stroke="#DC2626" strokeWidth="3" fill="none" />
    {/* Stamp: "IRREVERSIBLE" */}
    <rect x="192" y="235" width="70" height="20" rx="4" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2" />
    <text x="198" y="250" fontSize="9" fontWeight="900" fill="#DC2626">DANGER!</text>
  </svg>
);

// 10. Stage 3: Shocked Auntie Holding Smartphone (99+ WhatsApp notifications)
export const ShockedAuntieSvg = ({ className = "w-56 h-56" }) => (
  <svg viewBox="0 0 300 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="150" r="130" fill="#FCE7F3" stroke="#0F172A" strokeWidth="4" />
    
    {/* Auntie Head */}
    <ellipse cx="140" cy="120" rx="50" ry="54" fill="#FDBA74" stroke="#0F172A" strokeWidth="4" />
    {/* Big Hair Bun (Kuduma) on top */}
    <circle cx="140" cy="65" r="28" fill="#1E293B" stroke="#0F172A" strokeWidth="4" />
    <path d="M95 105 Q140 70 185 105" stroke="#0F172A" strokeWidth="4" fill="#1E293B" />
    {/* Jasmine flower garland (Mulla poo) around hair bun */}
    <circle cx="120" cy="65" r="5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
    <circle cx="130" cy="55" r="5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
    <circle cx="145" cy="53" r="5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
    <circle cx="160" cy="62" r="5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />

    {/* Auntie Spectacles perched on nose */}
    <circle cx="125" cy="118" r="14" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
    <circle cx="155" cy="118" r="14" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
    <line x1="139" y1="118" x2="141" y2="118" stroke="#0F172A" strokeWidth="3" />
    {/* Wide gasping pupils */}
    <circle cx="125" cy="118" r="5" fill="#0F172A" />
    <circle cx="155" cy="118" r="5" fill="#0F172A" />

    {/* O-shaped gasp mouth */}
    <ellipse cx="140" cy="148" rx="10" ry="12" fill="#831843" stroke="#0F172A" strokeWidth="2.5" />

    {/* Smartphone held in front with green WhatsApp UI */}
    <g transform="translate(165, 130) rotate(-10)">
      <rect x="0" y="0" width="75" height="120" rx="10" fill="#0F172A" stroke="#FFFFFF" strokeWidth="3" />
      <rect x="4" y="8" width="67" height="104" rx="6" fill="#075E54" />
      {/* WhatsApp Chat Bubbles */}
      <rect x="8" y="16" width="45" height="16" rx="4" fill="#DCF8C6" />
      <text x="12" y="28" fontSize="8" fill="#000000">Marriage?</text>
      <rect x="15" y="38" width="50" height="16" rx="4" fill="#FFFFFF" />
      <text x="18" y="50" fontSize="8" fill="#000000">Salary kit?</text>
      {/* Red notification bubble: 99+ */}
      <circle cx="68" cy="10" r="14" fill="#EF4444" stroke="#FFFFFF" strokeWidth="2" />
      <text x="59" y="14" fontSize="10" fontWeight="900" fill="#FFFFFF">99+</text>
    </g>

    {/* Malayalam cinema dramatic exclamation */}
    <text x="25" y="70" fontSize="18" fontWeight="900" fill="#BE185D" transform="rotate(-20 25 70)">ENTHOOTU?!</text>
  </svg>
);

// 11. Stage 3: User Chasing KSRTC-Style Bus in Slippers
export const ChasingBusSvg = ({ className = "w-56 h-56" }) => (
  <svg viewBox="0 0 300 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="150" r="130" fill="#FEF3C7" stroke="#0F172A" strokeWidth="4" />
    
    {/* Iconic Red & Yellow KSRTC Bus speeding ahead */}
    <rect x="120" y="70" width="140" height="90" rx="10" fill="#DC2626" stroke="#0F172A" strokeWidth="4" />
    <rect x="120" y="105" width="140" height="25" fill="#FACC15" stroke="#0F172A" strokeWidth="2" />
    {/* Bus Windows */}
    <rect x="135" y="78" width="25" height="22" rx="3" fill="#BAE6FD" stroke="#0F172A" strokeWidth="2" />
    <rect x="170" y="78" width="25" height="22" rx="3" fill="#BAE6FD" stroke="#0F172A" strokeWidth="2" />
    <rect x="205" y="78" width="25" height="22" rx="3" fill="#BAE6FD" stroke="#0F172A" strokeWidth="2" />
    {/* Destination Board: "FAST PASSENGER" */}
    <rect x="150" y="55" width="80" height="18" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
    <text x="156" y="68" fontSize="8" fontWeight="900" fill="#DC2626">FAST PASSENGER</text>
    {/* Conductor whistling from back footboard */}
    <circle cx="128" cy="125" r="7" fill="#FDBA74" stroke="#0F172A" strokeWidth="1.5" />
    <text x="105" y="118" fontSize="12">🎵 PEEEEEP!</text>
    {/* Wheels */}
    <circle cx="150" cy="160" r="16" fill="#1E293B" stroke="#0F172A" strokeWidth="4" />
    <circle cx="230" cy="160" r="16" fill="#1E293B" stroke="#0F172A" strokeWidth="4" />
    {/* Exhaust puff */}
    <circle cx="105" cy="155" r="12" fill="#94A3B8" opacity="0.6" />
    <circle cx="90" cy="150" r="8" fill="#CBD5E1" opacity="0.5" />

    {/* DESPERATE RUNNER AT BOTTOM LEFT */}
    <ellipse cx="60" cy="190" rx="16" ry="18" fill="#FDBA74" stroke="#0F172A" strokeWidth="3" />
    {/* Running legs */}
    <path d="M60 210 L45 250 L30 260" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
    <path d="M60 210 L80 235 L105 240" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
    {/* Flying Hawaii slipper (chappal) in air */}
    <path d="M75 270 Q90 260 100 272" stroke="#2563EB" strokeWidth="6" strokeLinecap="round" />
    <line x1="85" y1="262" x2="88" y2="267" stroke="#DC2626" strokeWidth="2" />
    
    {/* Desperate shouting text */}
    <text x="25" y="165" fontSize="14" fontWeight="900" fill="#DC2626">NILKKU!</text>
  </svg>
);

// 12. Stage 3: Family-Function Food-Table Scene (Biryani Chaos)
export const FoodTableChaosSvg = ({ className = "w-56 h-56" }) => (
  <svg viewBox="0 0 300 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="150" r="130" fill="#FEF3C7" stroke="#0F172A" strokeWidth="4" />
    
    {/* Long wedding banquet table */}
    <rect x="30" y="170" width="240" height="90" rx="6" fill="#D97706" stroke="#0F172A" strokeWidth="4" />
    <rect x="30" y="170" width="240" height="15" fill="#F59E0B" />

    {/* Mountain of Dum Biryani in large stainless degh */}
    <ellipse cx="150" cy="170" rx="60" ry="24" fill="#E2E8F0" stroke="#0F172A" strokeWidth="3.5" />
    <path d="M105 168 Q150 120 195 168 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
    {/* Chicken piece / egg on top */}
    <ellipse cx="150" cy="140" rx="14" ry="10" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
    <ellipse cx="150" cy="140" rx="6" ry="6" fill="#F59E0B" />
    <path d="M135 155 Q145 145 160 152" stroke="#78350F" strokeWidth="5" strokeLinecap="round" />

    {/* Sneaky Hands grabbing food from all directions */}
    <path d="M40 140 L100 160" stroke="#FDBA74" strokeWidth="12" strokeLinecap="round" />
    <path d="M40 140 L100 160" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
    <path d="M260 140 L200 160" stroke="#FDBA74" strokeWidth="12" strokeLinecap="round" />
    <path d="M260 140 L200 160" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />

    {/* Relative in background whispering gossip */}
    <ellipse cx="70" cy="100" rx="20" ry="22" fill="#FDBA74" stroke="#0F172A" strokeWidth="3" />
    <circle cx="65" cy="98" r="3" fill="#0F172A" />
    <circle cx="75" cy="98" r="3" fill="#0F172A" />
    <text x="50" y="65" fontSize="11" fontWeight="bold" fill="#B45309">"3rd round?!"</text>

    {/* Payasam Glass */}
    <rect x="220" y="165" width="25" height="35" rx="3" fill="#FEF08A" stroke="#0F172A" strokeWidth="2.5" />
    <text x="222" y="188" fontSize="10">🍮</text>
  </svg>
);

// 13. Stage 3: Villain-Style Silhouette Entering Tea Shop
export const VillainDoctorSvg = ({ className = "w-56 h-56" }) => (
  <svg viewBox="0 0 300 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="150" r="130" fill="#0F172A" stroke="#EF4444" strokeWidth="4" />
    
    {/* Red cinema spotlight from behind */}
    <circle cx="150" cy="130" r="90" fill="#7F1D1D" />
    <line x1="80" y1="20" x2="130" y2="120" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" />
    <line x1="220" y1="20" x2="170" y2="120" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" />

    {/* Dark dramatic silhouette of doctor stepping forward */}
    <path d="M120 90 Q150 70 180 90 L195 180 L230 280 L70 280 L105 180 Z" fill="#020617" stroke="#DC2626" strokeWidth="3" />
    {/* Glowing red glowing eyes through dark silhouette */}
    <ellipse cx="140" cy="100" rx="8" ry="4" fill="#EF4444" />
    <ellipse cx="160" cy="100" rx="8" ry="4" fill="#EF4444" />
    <circle cx="140" cy="100" r="2" fill="#FFFFFF" />
    <circle cx="160" cy="100" r="2" fill="#FFFFFF" />

    {/* Stethoscope swinging like a weapon */}
    <path d="M150 130 Q190 170 180 220" stroke="#94A3B8" strokeWidth="5" fill="none" />
    <circle cx="180" cy="225" r="12" fill="#CBD5E1" stroke="#EF4444" strokeWidth="3" />

    {/* Cinema Bass Drop Sound Effect Text */}
    <text x="65" y="270" fontSize="22" fontWeight="900" fill="#EF4444" letterSpacing="4">DHUM... DHUM...</text>
  </svg>
);

// 14. Final Analysis Loading Screen Illustration
export const AnalyzingLoadingSvg = ({ className = "w-60 h-60" }) => (
  <svg viewBox="0 0 320 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="160" cy="160" r="140" fill="#0F172A" stroke="#38BDF8" strokeWidth="4" />
    {/* Glowing radar rings */}
    <circle cx="160" cy="160" r="110" stroke="#0284C7" strokeWidth="2" strokeDasharray="6 6" opacity="0.4" />
    <circle cx="160" cy="160" r="70" stroke="#0284C7" strokeWidth="2" strokeDasharray="4 4" opacity="0.4" />

    {/* Heartbeat EKG monitor going completely haywire */}
    <path d="M30 160 L80 160 L95 120 L110 200 L125 70 L140 250 L155 130 L170 190 L185 150 L210 160 L290 160" stroke="#22C55E" strokeWidth="4" strokeLinecap="round" fill="none" className="animate-pulse" />

    {/* Center Spinning Tea Tumbler */}
    <g transform="translate(140, 120)">
      <polygon points="10,0 30,0 26,40 14,40" fill="#FEF08A" stroke="#F59E0B" strokeWidth="2" />
      <text x="15" y="-8" fontSize="16" className="animate-bounce">☕</text>
    </g>

    {/* Status dials */}
    <text x="50" y="270" fontSize="14" fontWeight="bold" fill="#38BDF8">CALCULATING DAMAGE...</text>
  </svg>
);

// 15. Final Climax: Doctor Fainting Backwards
export const DoctorFaintingSvg = ({ className = "w-64 h-64" }) => (
  <svg viewBox="0 0 320 320" className={`${className} animate-dramatic-shake`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="160" cy="160" r="140" fill="#FEE2E2" stroke="#DC2626" strokeWidth="4" />
    {/* Stars spinning around dizzy head */}
    <text x="80" y="60" fontSize="24" className="animate-spin">⭐</text>
    <text x="140" y="45" fontSize="28" className="animate-spin">💫</text>
    <text x="210" y="65" fontSize="24" className="animate-spin">⭐</text>

    {/* Doctor Tilted 45 degrees backwards fainting */}
    <g transform="rotate(35 160 160)">
      {/* Body */}
      <path d="M120 180 L180 180 L195 270 L105 270 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="4" />
      {/* Head */}
      <ellipse cx="150" cy="110" rx="45" ry="50" fill="#FED7AA" stroke="#0F172A" strokeWidth="4" />
      {/* Tongue sticking out sideways */}
      <path d="M140 145 Q150 165 165 155" stroke="#EF4444" strokeWidth="8" strokeLinecap="round" />
      {/* Spiral dizzy eyes */}
      <circle cx="132" cy="105" r="12" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
      <circle cx="168" cy="105" r="12" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
      <text x="126" y="112" fontSize="16" fontWeight="bold">🌀</text>
      <text x="162" y="112" fontSize="16" fontWeight="bold">🌀</text>
      {/* Hair disheveled */}
      <path d="M105 90 Q150 50 195 90" stroke="#0F172A" strokeWidth="4" fill="#1E293B" />
      {/* Stethoscope flying off into the air */}
      <path d="M110 130 Q80 100 60 140" stroke="#475569" strokeWidth="4" fill="none" />
      <circle cx="58" cy="145" r="10" fill="#CBD5E1" stroke="#0F172A" strokeWidth="2" />
    </g>

    {/* Flying prescription papers */}
    <rect x="40" y="160" width="30" height="40" rx="2" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" transform="rotate(-25 40 160)" />
    <rect x="250" y="180" width="30" height="40" rx="2" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" transform="rotate(35 250 180)" />

    <text x="60" y="300" fontSize="18" fontWeight="900" fill="#DC2626">DOCTOR HAS FAINTED!</text>
  </svg>
);

// 16. Final Climax: Dancing Skeleton with Sunglasses
export const DancingSkeletonSvg = ({ className = "w-60 h-60" }) => (
  <svg viewBox="0 0 300 300" className={`${className} animate-skeleton`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="150" r="130" fill="#FEF9C3" stroke="#0F172A" strokeWidth="4" />
    
    {/* Disco lights in background */}
    <circle cx="60" cy="60" r="12" fill="#A855F7" opacity="0.7" />
    <circle cx="240" cy="60" r="12" fill="#EC4899" opacity="0.7" />
    <circle cx="60" cy="240" r="10" fill="#3B82F6" opacity="0.7" />
    <circle cx="240" cy="240" r="10" fill="#10B981" opacity="0.7" />

    {/* Skeleton Skull */}
    <path d="M120 70 C120 40 180 40 180 70 C180 85 175 95 168 100 L168 115 L132 115 L132 100 C125 95 120 85 120 70 Z" fill="#F8FAFC" stroke="#0F172A" strokeWidth="4" />
    
    {/* Cool Sunglasses on skeleton */}
    <polygon points="122,70 148,70 144,88 126,88" fill="#0F172A" />
    <polygon points="152,70 178,70 174,88 156,88" fill="#0F172A" />
    <line x1="144" y1="74" x2="156" y2="74" stroke="#0F172A" strokeWidth="3" />
    {/* Sunglasses glare */}
    <line x1="126" y1="74" x2="136" y2="84" stroke="#FFFFFF" strokeWidth="2" />
    <line x1="156" y1="74" x2="166" y2="84" stroke="#FFFFFF" strokeWidth="2" />

    {/* Grinning Skeleton Teeth */}
    <rect x="138" y="102" width="24" height="8" rx="2" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
    <line x1="144" y1="102" x2="144" y2="110" stroke="#0F172A" strokeWidth="2" />
    <line x1="150" y1="102" x2="150" y2="110" stroke="#0F172A" strokeWidth="2" />
    <line x1="156" y1="102" x2="156" y2="110" stroke="#0F172A" strokeWidth="2" />

    {/* Ribcage */}
    <line x1="150" y1="115" x2="150" y2="190" stroke="#0F172A" strokeWidth="5" />
    <path d="M125 135 Q150 125 175 135" stroke="#0F172A" strokeWidth="4" fill="none" />
    <path d="M120 150 Q150 140 180 150" stroke="#0F172A" strokeWidth="4" fill="none" />
    <path d="M125 165 Q150 155 175 165" stroke="#0F172A" strokeWidth="4" fill="none" />
    {/* Pelvis */}
    <path d="M130 185 Q150 200 170 185 Z" fill="#F8FAFC" stroke="#0F172A" strokeWidth="3" />

    {/* Groovy Dancing Arms */}
    <path d="M130 135 L90 100 L75 120" stroke="#0F172A" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M170 135 L210 100 L225 80" stroke="#0F172A" strokeWidth="4.5" strokeLinecap="round" />

    {/* Groovy Dancing Legs */}
    <path d="M140 195 L115 240 L90 245" stroke="#0F172A" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M160 195 L185 240 L210 245" stroke="#0F172A" strokeWidth="4.5" strokeLinecap="round" />

    {/* Music notes floating */}
    <text x="50" y="140" fontSize="20" fill="#9333EA">🎵</text>
    <text x="230" y="140" fontSize="22" fill="#E11D48">🎶</text>
  </svg>
);
