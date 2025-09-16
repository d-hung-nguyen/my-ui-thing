<template>
  <div
    v-for="(_, fillIndex) in filledArray"
    :key="`${lineIndex}-${stepIndex}-${fillIndex}`"
    class="absolute top-0 left-1/2 h-[34px] w-[1px] -translate-x-1/2"
    :style="{
      transformOrigin: `50% ${circleWidth / 2}px`,
      transform: `rotate(${getAngle(fillIndex)}deg)`,
    }"
  >
    <div
      class="h-full w-full bg-[var(--placeholder-line-color,#a1a1a1)] dark:bg-[var(--placeholder-line-color,#737373)]"
      :style="{
        transformOrigin: 'center top',
        transform: `rotate(${-1 * getAngle(fillIndex) - circleContainerRotateDeg}deg)`,
      }"
    />
  </div>
</template>

<script lang="ts" setup>
  interface PlaceholderLinesProps {
    isFirstStep: boolean;
    angleBetweenMinorSteps: number;
    angle: number;
    lineCountFillBetweenSteps: number;
    boundaryPlaceholderLinesCount: number;
    isLastStep: boolean;
    lineIndex: number;
    stepIndex: number;
    circleWidth: number;
    circleContainerRotateDeg: number;
  }

  const props = withDefaults(defineProps<PlaceholderLinesProps>(), {});

  const getAngle = (index: number) => {
    if (props.isFirstStep) {
      return index * props.angleBetweenMinorSteps;
    } else {
      return props.angle + (index + 1) * props.angleBetweenMinorSteps;
    }
  };

  const filledArray = computed(() =>
    Array(
      props.isLastStep || props.isFirstStep
        ? props.boundaryPlaceholderLinesCount
        : props.lineCountFillBetweenSteps
    ).fill("")
  );
</script>
