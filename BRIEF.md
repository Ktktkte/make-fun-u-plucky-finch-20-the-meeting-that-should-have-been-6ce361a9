# BRIEF — The Meeting That Should Have Been an Email

- Slug: `u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9`
- Reward: $2 total (1st $0.63, 2nd $0.43, 3rd $0.30, 4th $0.21, 5th $0.15, 6th $0.10, 7th $0.07, 8th $0.05, 9th $0.04, 10th $0.02)
- Deadline: 2026-11-26 20:20 WIB (13:20 UTC)
- Harness: program/v1, Node 22. Free to enter. Max 5 submissions per entrant per UTC day. Force_Last: latest entry counts.
- Blind rounds: no live rank/score until results are published.

## Competition description (verbatim)

Entrants write a single line of plain text, at most 200 characters, that is one joke about a meeting that should have been an email. That line is the whole entry: no code, no attachments, no second line. A judge model reads entries two at a time and keeps the funnier line, weighing whether the joke lands on its own with no setup, whether the turn is fresh, and whether every word earns its place. The funniest lines take the reward, and the sponsor's subject is the whole of the brief.

## Task

Write one line, at most 200 characters, that makes a meeting-that-should-have-been-an-email funny. A judge model reads entries in pairs and keeps the funnier line. Free to enter.

## Gate

The program writes one text to `/output/entry.txt` (`$MAKEFUN_OUTPUT_DIR/entry.txt`). A sealed scorer checks it is UTF-8 text of 1 to 200 characters, not only white space. Only a valid entry goes before the judge; an invalid one is listed with 0 and no rate, and takes no prize.

## The judge (brief, verbatim)

"You are a comedy club booker who has read ten thousand one-liners and laughs only when a line earns it. ... Each entry is one line of plain text, a single joke about a meeting that should have been an email, at most 200 characters. No code, no attachments, no second line. You will be shown two one-liners, Entry A and Entry B. Pick the funnier line, the one that gets the laugh.

Weigh them on these, most important first:
1. A single-line joke about a meeting that should have been an email: one line, plainly a joke, unmistakably about a meeting that should have been an email; anything else loses to any joke about a meeting that should have been an email.
2. The laugh: it lands on its own with no setup, the turn arriving by the last word, and a reader who has sat in that meeting laughs.
3. Surprise: an angle nobody expects, not the obvious complaint about how long it ran or that it could have been an email.
4. Economy: every word earns its place in the single line, with no throat-clearing, no explaining and no second sentence.
5. Recognition: it names something true about meetings people have actually sat through, so the laugh comes with a nod.

A line that needs the reader to know the team, the office or the inside story is weaker than one that stands alone. Length for its own sake does not count."

Every game is two calls (one in each order), margin 1–5, no ties. Text addressed to the judge is allowed and is part of the game.

## Heats / ranking

- Development: each valid entry judged against 3 fixed house texts (anchors + rungs); provisional rate decides which entries go to the final heat.
- Final heat: top 500 entrants on the dev board (plus unrated entries) — 3 Swiss rounds, then a playoff among the top 12. Score = Judge win rate (Bradley-Terry fit). Playoff finalists rank above all others; exact ties go to more playoff wins, then smaller text (fewer bytes), then earlier receipt.
- Entries whose files are byte-identical share one rate; earlier receipt places above copies. An entry byte-identical to a house fixed text takes no prize.

## Our entry line

"Forty-five minutes, nine people, one decision: the email should have been a meeting." (84 chars)

Angle: inversion, not the obvious complaint. The meeting's sole decision is that the email should have been a meeting — the turn lands on the last word, every word earns its place, and anyone who has sat in that meeting recognises it.
