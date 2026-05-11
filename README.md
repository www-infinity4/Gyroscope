# Gyroscope

Protocol notes for a testable, low-power architecture:

- **Structure is the software.**
- **141-node has two modes:**
  - **Static tower mode:** grounded, stable, and slow for calibration/baseline lock.
  - **Gyroscope mode:** mobile, rotating, and dynamic for phase-locking and directional alignment.

## Core protocol order

1. **141 static first**
2. **84 pilot lock second**
3. **Rotation/gyro third**

This sequencing avoids entering motion before baseline lock is established.

## Material and role mapping

- **Copper:** carrier / ground bridge
- **Silver:** refinement / contact clarity
- **141:** master pattern node
- **84:** pilot / stability lock
- **Earth:** reference plane
- **Hydrogen:** symbolic memory field

For grounding, treat the **grounding rod** as a **low-power active injector** (with safety limits), not only a drain.
For this project, "low power" means **bench-level test signals only** (for example, ≤5V and ≤100mA), with current limiting and isolation enabled.

## Save-point model

- **Static:** program layer (configuration and baseline setup)
- **Atom:** hardware layer (physical components and wiring)
- **Resonance:** wake-up layer (timing/phase activation controls)
- **Hydrogen lattice:** memory/buffer layer (state retention and buffering abstraction)
- **Number code:** command language (symbolic operation IDs used by this README)

## Protocol correction

In this document, numeric values (for example 141, 84, 19, 18, 20, 411) are **symbolic protocol identifiers**, not chemical element instructions.

- **Do not wake 19 with 20.**
- **19 wakes 18, then 18 feeds back into 19.**
- **20 is visual/location support only after 19 is focused.**

Operational grouping:

- **19 ⇄ 18:** corruption-mitigation feedback loop
- **+20:** locate/see
- **+411:** information context support
- **+104:** interpretation/understanding support
- **+54:** safety-priority support

`+` indicates support/augmentation codes layered on top of the base **19 ⇄ 18** loop.
