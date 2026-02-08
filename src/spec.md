# Specification

## Summary
**Goal:** Add a playful, purely visual/motion micro-interaction to the existing roses Yes/No flow on `frontend/src/pages/ValentinePage.tsx` to make it feel more fun, without changing any required user-facing strings or branching outcomes.

**Planned changes:**
- Add a non-blocking micro-interaction to the Yes/No choice UI (e.g., brief wiggle/bounce/dodge and/or a short sparkle burst) that preserves mouse and keyboard accessibility.
- Ensure the existing flow remains identical (No shows the existing No-branch message with a single Yes button; Yes opens the existing success modal) and that build/type checks continue to pass.

**User-visible outcome:** The Yes/No interaction feels more playful via a brief visual/motion effect, while the same choices and outcomes work exactly as before.
