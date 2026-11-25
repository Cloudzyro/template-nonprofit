# Unslop pass (November 25, 2026)

Done with the unslop skill by Damir Sokolovsky (@heydamir), CC BY 4.0. Built new in wave 2, then audited against `references/signs.md` before shipping.

## Audit

Light slop on the first build. Signs found and fixed:

- Impact figures that could read as real claims (`src/data/site.ts`, Impact); they're samples in a template
- A stray dot at the head of the creek, where a zero-length planted stretch drew a round cap (`src/components/CreekMap.astro`)
- Map markers stacked in the top-left corner before the script placed them
- Developer wording ("Update `raised` in the data file") showing on the live page under the fundraiser bar
- No other signs: no pill above the headline, no gradients, glows or blobs, no uppercase tracked labels, no emoji, no hype words, headings 500, no looping motion

## Direction

- Product: the website of a small volunteer group restoring a 23-mile creek in Iowa, for neighbors deciding to give a Saturday or a gift
- Character: patient, local, practical
- World: a field notebook and a county survey map; contour lines, creek water, willow whips, test kits
- Moments: the creek map in the hero, showing exactly what's been replanted, where the water is tested and where the dams still stand
- Signature: creek-water teal as the only accent, used for the giving actions, the program numbers and the planted progress

## Changes

- Copy: impact figures carry a dashed "Sample figures" note; the fundraiser total says it's a sample; no instructions to developers on the page
- Visuals: planted stretches drawn with a dash offset so the creek starts clean; markers stay hidden until placed on the creek's real length
- Layout: programs as numbered rows, impact as one band of four figures with hairlines, stories as one featured quote beside a short list, rather than card grids
- Type: Source Serif 4 at 500 for headings and figures, Public Sans for text; tabular figures for money and counts

screenshot-2: Impact figures (marked as samples) and the start of Stories
screenshot-3: Creek Run fundraiser with its goal, and the donate amounts
