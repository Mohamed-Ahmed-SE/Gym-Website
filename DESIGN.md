# IronGym Design System

## Direction

IronGym is a working training desk built from the visual language of a coach’s field notebook and a live class board. The interface is direct, useful, and editorial: visitors choose by goal, understand the session, and move to booking without a marketing maze.

## Color

- Ink `#191B1A`: primary surface and high-contrast navigation.
- Bone `#F4F1E9`: reading surface for program discovery and schedules.
- Acid lime `#B7F34A`: action, active state, availability, and emphasis.
- Signal orange `#FF7A45`: heat / high-energy class moments.
- Muted `#A8AAA3`: secondary copy on dark surfaces.

## Type

`Barlow Condensed` is the display voice: uppercase, compressed, and heavy. `DM Sans` is the utility voice for body copy, controls, and supporting metadata. Display typography is oversized with tight tracking and short line lengths; body text stays readable and calm.

## Composition

The home surface uses asymmetrical editorial grids, large documentary photography, thin rules, and coach-note labels. The first viewport is a split hero with the primary booking action left and an “On the floor” session board right. Program tiles are image-led and goal filters sit directly above them. Schedules use rows rather than cards so time, coach, intensity, and action scan together.

## Interaction

Use direct links for navigation and booking. Goal filters update visible programs immediately. Session actions provide an in-context status toast before the member continues into booking. Mobile navigation collapses to a clear task list; touch targets remain generous. Respect `prefers-reduced-motion`.

## Imagery

Use high-contrast, documentary gym photography with a slightly desaturated treatment. Prefer one decisive full-bleed image with a caption over decorative image grids. Existing Unsplash assets in `frontend/src/data/` are the current visual source and should be replaced with licensed gym photography before production launch.

## Accessibility

Keep visible focus states, semantic headings and landmarks, descriptive alt text, readable contrast, keyboard-operable filters, and concise state feedback. Never rely on color alone to communicate a program state.
