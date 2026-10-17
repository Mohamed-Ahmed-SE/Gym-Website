# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Prospective members comparing programs and memberships, plus active members returning to book sessions, check their schedule, and manage their account.

## Product Purpose

IronGym is a full-stack gym management experience for discovering training programs, selecting a membership, booking classes, and managing a member profile. Success means a visitor can understand the gym quickly and take the next useful action without getting lost.

## Positioning

The product connects public discovery and member self-service in one flow: the same experience that helps someone choose the right training path also gives existing members a clear way back to their next session.

## Operating Context

Visitors use the site on mobile and desktop before joining, while commuting, or before a workout. Active members need fast access to booking and profile actions. Gym staff manage the underlying programs, trainers, memberships, bookings, payments, and email notifications through the existing backend APIs.

## Capabilities and Constraints

The existing app includes React 18, Vite, TailwindCSS, React Router, authentication, programs, trainers, memberships, booking, payments, profile, and contact routes. Program and trainer content is fetched from the backend with local fallback data available in the frontend. Preserve the existing routes and API contracts while improving the experience. Do not invent prices, member counts, testimonials, or performance claims.

## Evidence on Hand

Existing program and trainer records, Unsplash image assets in `frontend/src/data/`, and backend routes/models for programs, trainers, memberships, bookings, payments, and users. No verified customer testimonials or commercial benchmark evidence is present.

## Product Principles

- Make the next useful action obvious.
- Help members choose by goal, effort, and time—not by jargon.
- Show enough real detail to build confidence before asking for commitment.
- Keep public discovery and member self-service connected.
- Design for a fast, calm decision on a phone as well as a richer desktop browse.

## Accessibility & Inclusion

Use semantic landmarks, visible keyboard focus, readable contrast, reduced-motion support, descriptive image alt text, touch-friendly controls, and clear recovery copy for loading and empty states.
