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

For grounding, treat the rod as a **low-power active injector** (with safety limits), not only a drain.

## Save-point model

- **Static:** program layer
- **Atom:** hardware layer
- **Resonance:** wake-up layer
- **Hydrogen lattice:** memory/buffer layer
- **Number code:** command language

## Protocol correction

- **Do not wake 19 with 20.**
- **19 wakes 18, then 18 feeds back into 19.**
- **20 is visual/location support only after 19 is focused.**

Operational grouping:

- **19 ⇄ 18:** corruption-fight engine
- **+20:** locate/see
- **+411:** information
- **+104:** understanding
- **+54:** save lives
