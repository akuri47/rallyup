# ⚡ RallyUp — Spontaneous Campus Activity Coordination Engine

> **Problem Statement Response:** "Pick a real problem you’ve seen up close and design a digital app to solve it... The best product ideas start with someone you actually know, not a trend... watched someone struggle repeatedly... why an app is the right way... state your assumptions... what you verified vs what you're guessing."

---

## 📱 How to Run the App

### Option 1: Direct in Browser (Zero Setup)
Simply double-click or open **`index.html`** in Chrome, Edge, or Safari!
Path: `c:\Users\Lenovo\Downloads\deck\rallyup\index.html`

### Option 2: Run Local Python Flask Server
Run the included python server:
```bash
python server.py
```
Then visit: **`http://localhost:5050`** in your browser.

---

## 🎯 The Real Problem (Observed Up Close)
In any college hostel at 5:15 PM:
- Someone wants to play box cricket, badminton, study DSA, or grab late night chai.
- They broadcast across 3–4 WhatsApp groups. Messages get buried under memes, half-hearted replies ("maybe", "bro 10 min"), and no one commits.
- By 6:00 PM, daylight is gone, energy is dissipated, and everyone retreats to their screens.
- **The Core PM Insight:** The friction isn't lack of interest; it's the **coordination tax** and **unaccountable commitment**.

---

## 🚀 Key App Features Implemented in RallyUp

1. **The "Rally" (Atomic Unit)**:
   - Time-bound activity call (Sports, Academics, Travel, Food, Jamming, Hackathons).
   - Minimum headcount threshold (e.g. 6 players for cricket, 3 for group study).
   - Auto-confirmation the exact instant the threshold is hit!

2. **Live Headcount & Progress Bars**:
   - Visual progress showing `[||||||....] 5/6 players joined`.
   - Real-time "I'm In 🙋" / "Leave" logic with instant feedback.

3. **Anti-Ghosting "Show-Up Reliability Score"**:
   - Solves the #1 problem reported by students: *people saying yes and not showing up*.
   - GPS-verified venue check-in.
   - Gold Trust Ring & reliability percentages (e.g., ⭐ 94% Show-Up rate).

4. **Consensus Venue Voting**:
   - In-app live polls for venue selection (e.g., "Main Cricket Ground vs Hostel 7 Quad vs Turf").

5. **In-Rally Coordination Room**:
   - Focused, temporary coordination chat that unlocks upon reaching minimum players and auto-expires post-activity (no spam, no WhatsApp sprawl).

6. **Proactive "Ghost Rally" Nudge Engine**:
   - Detects when nearby peers with matching interests are free and auto-prompts a Rally before anyone has to manually organize.

7. **Persistent Communities ("Squads")**:
   - Permanent clubs and wings (e.g., "Hostel 7 Cricket XI", "DSA Placement Crackers '27", "Midnight Riders").
   - Recurring auto-posted rallies so users never have to set up games from scratch.

8. **Phone Simulation & Desktop View**:
   - Native mobile phone shell with toggle button for wide desktop viewing.
