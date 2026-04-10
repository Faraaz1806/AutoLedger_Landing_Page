# Design System Specification

## 1. Overview & Creative North Star: "The Neon Ledger"
This design system is built to transform the mundane task of expense tracking into a high-stakes, premium digital experience. We move beyond the "utilitarian spreadsheet" look, embracing a **Creative North Star of "Cyber-Editorial."** This aesthetic blends the aggressive clarity of high-tech interfaces with the sophisticated whitespace of a luxury fashion magazine.

To achieve this, the system breaks the "template" look through:
*   **Intentional Asymmetry:** Utilizing staggered grid layouts for dashboard cards.
*   **High-Contrast Scale:** Pairing massive, low-kerning displays with tiny, high-utility labels.
*   **Tonal Depth:** Replacing flat surfaces with layered, textured environments that feel like a physical, illuminated cockpit.

---

## 2. Colors
The palette is rooted in a high-contrast relationship between deep obsidian tones and a "radioactive" lime primary. 

### Color Tokens
*   **Primary (`#daf38d`):** Use for critical calls to action and primary brand accents.
*   **Secondary (`#ede855`):** Use for secondary trends or alternate data categories.
*   **Surface (`#0e0e0e`):** The foundational canvas.
*   **Surface Container (Highest) (`#262626`):** For prominent interactive cards.
*   **Error (`#ff7351`):** To highlight over-budget alerts or negative cash flow.

### Stylistic Directives
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Boundaries must be defined solely through background color shifts. For instance, a `surface-container-low` section should sit on a `surface` background to create a "pave" effect without structural lines.
*   **The Glass & Gradient Rule:** Floating elements (like navigation bars or action sheets) must use **Glassmorphism**. Apply a semi-transparent `surface-variant` with a 20px backdrop-blur. 
*   **Signature Textures:** Interactive cards must utilize a **Dotted Matrix Background**. This is achieved by overlaying a repeating 2px dot pattern at 5% opacity over a subtle linear gradient (from `surface-container-high` to `surface-container-low`).

---

## 3. Typography
We utilize **Plus Jakarta Sans** for its geometric precision and modern "tech" feel.

*   **Display Large (3.5rem):** Used for total balance figures. Letter-spacing should be set to -0.04em for a tight, editorial look.
*   **Headline Medium (1.75rem):** For screen titles and major section headers.
*   **Title Small (1rem):** For category names and card titles. Use Semi-Bold weight.
*   **Body Medium (0.875rem):** The workhorse for transaction descriptions.
*   **Label Small (0.6875rem):** For metadata (timestamps, currency codes). Use All-Caps with +0.05em tracking for a "technical readout" vibe.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering**, mimicking the behavior of light on dark materials.

*   **The Layering Principle:** Stacking follows a logic of luminance. The most interactive or "top-level" items are the brightest. 
    *   *Level 0:* `surface` (Background)
    *   *Level 1:* `surface-container-low` (Content groupings)
    *   *Level 2:* `surface-container-highest` (Floating cards)
*   **Ambient Shadows:** Use shadows sparingly. When required, use a diffused 40px blur at 8% opacity using the `primary` color as the shadow tint. This creates a "glow" rather than a "drop shadow."
*   **The "Ghost Border":** For high-density data where separation is vital, use an `outline-variant` at 15% opacity. This provides a "hint" of a boundary that disappears into the darkness.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary` (`#daf38d`) background with `on-primary` (`#495c02`) text. 40px height, `full` roundedness.
*   **Tertiary/Ghost:** No background. Text in `primary`. For "Add Note" or "View All" actions.

### The "Pulse" Card
*   **Visuals:** Specifically for the expense dashboard. Use the dotted texture from the reference. The top edge should have a 1px "inner glow" (a top-only border) of `primary` at 20% opacity.
*   **Layout:** No dividers. Use `xl` (1.5rem) vertical padding to separate the merchant name from the amount.

### Input Fields
*   **Style:** Minimalist. A single `surface-variant` container with `md` (0.75rem) roundedness. 
*   **Focus State:** The container remains dark, but the "Ghost Border" increases to 40% opacity in `primary`, accompanied by a subtle outer glow.

### Chips
*   **Filter Chips:** Use `surface-container-high` with `on-surface-variant` text. When selected, flip to `primary` background.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical margins (e.g., 24px left, 16px right) on certain dashboard elements to create a bespoke, non-standard layout.
*   **Do** use a "Lime Glow" (radial gradient) behind the primary wallet balance to draw the eye.
*   **Do** favor icons over text for mobile-first navigation labels.

### Don't
*   **Don't** use 100% white text on a black background. Use `on-surface` (pure white) only for headlines; use `on-surface-variant` (grey) for body text to reduce eye strain.
*   **Don't** use standard "Drop Shadows" (Black/Grey). They look muddy on dark themes. Always tint shadows with the primary brand color.
*   **Don't** use sharp corners. Every interactive element must have at least a `md` (0.75rem) corner radius to feel premium and tactile.