<template>
  <div class="relative rounded border p-20">
    <div
      :style="{
        '--perspective': `${perspective}px`,
        '--grid-color': gridColor,
        '--beam-size': `${beamSize}%`,
      }"
      class="[container-type:size] pointer-events-none absolute top-0 left-0 size-full overflow-hidden [clipPath:inset(0)] [perspective:var(--perspective)] [transform-style:preserve-3d]"
    >
      <!-- top side -->
      <div
        class="[container-type:inline-size] absolute z-20 [height:100cqmax] [width:100cqi] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [transform-style:preserve-3d]"
      >
        <MagicWarpBackgroundBeam
          v-for="(beam, i) in topBeams"
          :key="`top-${i}`"
          :width="`${beamSize}%`"
          :x="`${beam.x * beamSize}%`"
          :delay="beam.delay"
          :duration="beamDuration"
        />
      </div>
      <!-- bottom side -->
      <div
        class="[container-type:inline-size] absolute top-full [height:100cqmax] [width:100cqi] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [transform-style:preserve-3d]"
      >
        <MagicWarpBackgroundBeam
          v-for="(beam, i) in bottomBeams"
          :key="`bottom-${i}`"
          :width="`${beamSize}%`"
          :x="`${beam.x * beamSize}%`"
          :delay="beam.delay"
          :duration="beamDuration"
        />
      </div>
      <!-- left side -->
      <div
        class="[container-type:inline-size] absolute top-0 left-0 [height:100cqmax] [width:100cqh] [transform-origin:0%_0%] [transform:rotate(90deg)_rotateX(-90deg)] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [transform-style:preserve-3d]"
      >
        <MagicWarpBackgroundBeam
          v-for="(beam, i) in leftBeams"
          :key="`left-${i}`"
          :width="`${beamSize}%`"
          :x="`${beam.x * beamSize}%`"
          :delay="beam.delay"
          :duration="beamDuration"
        />
      </div>
      <!-- right side -->
      <div
        class="[container-type:inline-size] absolute top-0 right-0 [height:100cqmax] [width:100cqh] [transform-origin:100%_0%] [transform:rotate(-90deg)_rotateX(-90deg)] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [transform-style:preserve-3d]"
      >
        <MagicWarpBackgroundBeam
          v-for="(beam, i) in rightBeams"
          :key="`right-${i}`"
          :width="`${beamSize}%`"
          :x="`${beam.x * beamSize}%`"
          :delay="beam.delay"
          :duration="beamDuration"
        />
      </div>
    </div>
    <div class="relative"><slot /></div>
  </div>
</template>

<script lang="ts" setup>
  interface WarpBackgroundProps {
    /**
     * The perspective of the 3D effect
     * @default 100
     */
    perspective?: number;
    /**
     * The number of beams per side
     * @default 3
     */
    beamsPerSide?: number;
    /**
     * The size of each beam as a percentage
     * @default 5
     */
    beamSize?: number;
    /**
     * The maximum delay for beam animation
     * @default 3
     */
    beamDelayMax?: number;
    /**
     * The minimum delay for beam animation
     * @default 0
     */
    beamDelayMin?: number;
    /**
     * The duration of the beam animation
     * @default 3
     */
    beamDuration?: number;
    /**
     * The color of the grid lines
     * @default "var(--border)"
     */
    gridColor?: string;
  }
  const props = withDefaults(defineProps<WarpBackgroundProps>(), {
    perspective: 100,
    beamsPerSide: 3,
    beamSize: 5,
    beamDelayMax: 3,
    beamDelayMin: 0,
    beamDuration: 3,
    gridColor: "var(--border)",
  });

  const generateBeams = () => {
    const beams = [];
    const cellsPerSide = Math.floor(100 / props.beamSize);
    const step = cellsPerSide / props.beamsPerSide;
    for (let i = 0; i < props.beamsPerSide; i++) {
      const x = Math.floor(i * step);
      const delay = Math.random() * (props.beamDelayMax - props.beamDelayMin) + props.beamDelayMin;
      beams.push({ x, delay });
    }
    return beams;
  };

  const topBeams = computed(() => generateBeams());
  const rightBeams = computed(() => generateBeams());
  const bottomBeams = computed(() => generateBeams());
  const leftBeams = computed(() => generateBeams());
</script>
