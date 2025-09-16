<template>
  <div class="relative h-[380px] w-full overflow-hidden" :class="props.class">
    <div
      :style="{
        transform: `translateX(-50%) rotate(${circleContainerRotateDeg}deg)`,
        width: `${arcConfig.circleWidth}px`,
      }"
      class="absolute top-28 left-1/2 aspect-square origin-center rounded-full transition-all duration-500 ease-in-out"
    >
      <template v-for="(line, lineIndex) in data" :key="lineIndex">
        <div>
          <template v-for="(step, stepIndex) in line.steps" :key="`${lineIndex}-${stepIndex}`">
            <template v-if="isFirstStep(lineIndex, stepIndex)">
              <!--  Add placeholder lines -->
              <MagicArcTimelinePlaceholderLines
                :is-first-step="true"
                :is-last-step="false"
                :angle="calculateStepAngle(lineIndex, stepIndex)"
                :angle-between-minor-steps="arcConfig.angleBetweenMinorSteps || 0.35"
                :line-count-fill-between-steps="arcConfig.lineCountFillBetweenSteps || 10"
                :boundary-placeholder-lines-count="arcConfig.boundaryPlaceholderLinesCount || 50"
                :line-index="lineIndex"
                :step-index="stepIndex"
                :circle-width="arcConfig.circleWidth || 5000"
                :circle-container-rotate-deg="circleContainerRotateDeg"
              />
            </template>
            <div
              :class="[
                'absolute top-0 left-1/2 -translate-x-1/2 cursor-pointer transition-all duration-200',
                isActive(calculateStepAngle(lineIndex, stepIndex))
                  ? 'h-[120px] w-[2px]'
                  : 'h-16 w-[1.5px]',
              ]"
              :style="{
                transformOrigin: `50% ${(arcConfig?.circleWidth || 0) / 2}px`,
                transform: `rotate(${calculateStepAngle(lineIndex, stepIndex)}deg)`,
              }"
              @click="
                () => {
                  circleContainerRotateDeg = -1 * calculateStepAngle(lineIndex, stepIndex);
                }
              "
            >
              <div
                :class="[
                  'h-full w-full transition-colors duration-200',
                  isActive(calculateStepAngle(lineIndex, stepIndex))
                    ? 'bg-[var(--step-line-active-color,#888888)] dark:bg-[var(--step-line-active-color,#9780ff)]'
                    : 'bg-[var(--step-line-inactive-color,#b1b1b1)] dark:bg-[var(--step-line-inactive-color,#737373)]',
                ]"
                :style="{
                  transformOrigin: 'center top',
                  transform: `rotate(${
                    -1 * calculateStepAngle(lineIndex, stepIndex) - circleContainerRotateDeg
                  }deg)`,
                }"
              >
                <div
                  :class="[
                    'absolute bottom-0 left-1/2 aspect-square -translate-x-1/2',
                    isActive(calculateStepAngle(lineIndex, stepIndex))
                      ? 'translate-y-[calc(100%_+_14px)] scale-[1.2] text-[var(--icon-active-color,#555555)] dark:text-[var(--icon-active-color,#d4d4d4)]'
                      : 'translate-y-[calc(100%_+_4px)] scale-100 text-[var(--icon-inactive-color,#a3a3a3)] dark:text-[var(--icon-inactive-color,#a3a3a3)]',
                  ]"
                >
                  <slot name="icon" :step="step" :line="line">
                    <Icon v-if="typeof step.icon === 'string'" :name="step.icon" />
                    <component :is="step.icon" v-else />
                  </slot>
                </div>
                <p
                  :class="[
                    'absolute bottom-0 left-1/2 line-clamp-3 flex w-[240px] -translate-x-1/2 translate-y-[calc(100%_+_42px)] items-center justify-center text-center text-sm transition-opacity duration-300 ease-in',
                    'text-[var(--description-color,#555555)] dark:text-[var(--description-color,#d4d4d4)]',
                    isActive(calculateStepAngle(lineIndex, stepIndex))
                      ? 'opacity-100'
                      : 'opacity-0',
                  ]"
                >
                  <slot name="content" :step="step" :line="line">
                    <span v-if="typeof step.content === 'string'">{{ step.content }}</span>
                    <component :is="step.content" v-else />
                  </slot>
                </p>
              </div>
              <div
                v-if="stepIndex == 0"
                :class="[
                  'absolute top-0 left-1/2 z-10 -translate-x-1/2 translate-y-[calc(-100%-24px)] whitespace-nowrap',
                  isActive(calculateStepAngle(lineIndex, stepIndex))
                    ? 'text-[var(--time-active-color,#555555)] dark:text-[var(--time-active-color,#d4d4d4)]'
                    : 'text-[var(--time-inactive-color,#a3a3a3)] dark:text-[var(--time-inactive-color,#a3a3a3)]',
                ]"
              >
                <slot name="time" :line="line">
                  <span v-if="typeof line.time === 'string' || typeof line.time === 'number'">
                    {{ line.time }}
                  </span>
                  <component :is="line.time" v-else />
                </slot>
              </div>
            </div>
            <!--  fill lines between steps, in the last step, fill the placeholder lines -->
            <MagicArcTimelinePlaceholderLines
              :is-first-step="false"
              :is-last-step="isLastStep(lineIndex, stepIndex, line)"
              :angle="calculateStepAngle(lineIndex, stepIndex)"
              :angle-between-minor-steps="arcConfig.angleBetweenMinorSteps || 0.35"
              :line-count-fill-between-steps="arcConfig.lineCountFillBetweenSteps || 10"
              :boundary-placeholder-lines-count="arcConfig.boundaryPlaceholderLinesCount || 50"
              :line-index="lineIndex"
              :step-index="stepIndex"
              :circle-width="arcConfig.circleWidth || 5000"
              :circle-container-rotate-deg="circleContainerRotateDeg"
            />
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
  import type { HtmlHTMLAttributes, VNode } from "vue";

  export interface ArcTimelineItem {
    time: string | number | VNode;
    steps: Array<{
      icon: string | VNode;
      content: string | VNode;
    }>;
  }

  export interface ArcTimelineProps {
    /**
     * Optional CSS class name to apply custom styles
     */
    class?: HtmlHTMLAttributes["class"];
    /**
     * The data of the arc timeline
     */
    data: ArcTimelineItem[];
    /**
     * The configuration of the arc timeline
     */
    arcConfig?: {
      /**
       * The width of the circle, default is 5000
       */
      circleWidth?: number;
      /**
       * The angle between minor steps, default is 0.35
       */
      angleBetweenMinorSteps?: number;
      /**
       * The number of lines to fill between steps, default is 10
       */
      lineCountFillBetweenSteps?: number;
      /**
       * The number of lines to fill in before the first step and after the last step
       */
      boundaryPlaceholderLinesCount?: number;
    };
    /**
     * The default active step
     */
    defaultActiveStep?: {
      /**
       * The time of the default active step
       */
      time?: string | number | VNode;
      /**
       * The index of the default active step
       */
      stepIndex?: number;
    };
  }
</script>

<script lang="ts" setup>
  const props = withDefaults(defineProps<ArcTimelineProps>(), {
    arcConfig: () => ({
      circleWidth: 5000,
      angleBetweenMinorSteps: 0.35,
      lineCountFillBetweenSteps: 10,
      boundaryPlaceholderLinesCount: 50,
    }),
    defaultActiveStep: () => ({
      time: "",
      stepIndex: 0,
    }),
  });

  const defaultActiveTime = ref(props.data[0]?.time || "");
  const defaultActiveStepIndex = ref(0);

  function calcRotate() {
    const {
      angleBetweenMinorSteps = 0.35,
      lineCountFillBetweenSteps = 10,
      boundaryPlaceholderLinesCount = 50,
    } = props.arcConfig ?? {};

    let count = 0;
    for (const timelineItem of props.data || []) {
      if (timelineItem.time === defaultActiveTime.value) {
        count += defaultActiveStepIndex.value;
        break;
      } else {
        count += timelineItem.steps?.length ?? 0;
      }
    }

    return (
      -1 * count * angleBetweenMinorSteps * (lineCountFillBetweenSteps + 1) -
      angleBetweenMinorSteps * boundaryPlaceholderLinesCount
    );
  }

  const circleContainerRotateDeg = ref(calcRotate());

  // update when inputs change
  watch(
    () => [props.data, props.arcConfig, defaultActiveTime.value, defaultActiveStepIndex.value],
    () => {
      circleContainerRotateDeg.value = calcRotate();
    },
    { deep: true }
  );

  // calc the angle of the step
  const calculateStepAngle = (lineIndex: number, stepIndex: number) => {
    return (
      (props.arcConfig.angleBetweenMinorSteps || 0) *
        ((props.arcConfig.lineCountFillBetweenSteps || 0) + 1) *
        (props.data
          .slice(0, lineIndex)
          .map((item) => item.steps.length)
          .reduce((prev, current) => prev + current, 0) +
          stepIndex) +
      (props.arcConfig.angleBetweenMinorSteps || 0) *
        (props.arcConfig.boundaryPlaceholderLinesCount || 0)
    );
  };

  const isLastStep = (lineIndex: number, stepIndex: number, line: ArcTimelineItem) =>
    lineIndex === props.data.length - 1 && stepIndex === line.steps.length - 1;

  const isFirstStep = (lineIndex: number, stepIndex: number) => lineIndex === 0 && stepIndex === 0;

  const isActive = (angle: number) => Math.abs(angle + circleContainerRotateDeg.value) < 0.01;
</script>
