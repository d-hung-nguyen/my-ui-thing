<template>
  <div ref="containerRef" :class="styles({ class: props.class })">
    <canvas
      ref="canvasRef"
      class="pointer-events-none"
      :style="{
        width: `${canvasSize.width}px`,
        height: `${canvasSize.height}px`,
      }"
    />
    <slot />
  </div>
</template>

<script lang="ts" setup>
  import type { HTMLAttributes } from "vue";

  interface FlickeringGridProps {
    squareSize?: number;
    gridGap?: number;
    flickerChance?: number;
    color?: string;
    width?: number;
    height?: number;
    class?: HTMLAttributes["class"];
    maxOpacity?: number;
  }

  const styles = tv({ base: "relative size-full" });

  const props = withDefaults(defineProps<FlickeringGridProps>(), {
    squareSize: 4,
    gridGap: 6,
    flickerChance: 0.3,
    color: "rgb(0, 0, 0)",
    width: 0,
    height: 0,
    maxOpacity: 0.3,
  });

  const canvasRef = useTemplateRef("canvasRef");
  const containerRef = useTemplateRef("containerRef");

  const isInView = ref(false);
  const canvasSize = ref({ width: 0, height: 0 });

  const memoizedColor = computed(() => {
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 1;
    const ctx = canvas.getContext("2d");
    if (!ctx) return "rgba(255, 0, 0,";
    ctx.fillStyle = props.color;
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data);
    return `rgba(${r}, ${g}, ${b},`;
  });

  const setupCanvas = (canvas: HTMLCanvasElement, width: number, height: number) => {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const cols = Math.floor(width / (props.squareSize + props.gridGap));
    const rows = Math.floor(height / (props.squareSize + props.gridGap));
    const squares = new Float32Array(cols * rows);
    for (let i = 0; i < squares.length; i++) {
      squares[i] = Math.random() * props.maxOpacity;
    }
    return { cols, rows, squares, dpr };
  };

  const updateSquares = (squares: Float32Array, deltaTime: number) => {
    for (let i = 0; i < squares.length; i++) {
      if (Math.random() < props.flickerChance * deltaTime) {
        squares[i] = Math.random() * props.maxOpacity;
      }
    }
  };

  const drawGrid = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    cols: number,
    rows: number,
    squares: Float32Array,
    dpr: number
  ) => {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "transparent";
    ctx.fillRect(0, 0, width, height);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const opacity = squares[i * rows + j];
        ctx.fillStyle = `${memoizedColor.value}${opacity})`;
        ctx.fillRect(
          i * (props.squareSize + props.gridGap) * dpr,
          j * (props.squareSize + props.gridGap) * dpr,
          props.squareSize * dpr,
          props.squareSize * dpr
        );
      }
    }
  };

  watchEffect(() => {
    const canvas = canvasRef.value;
    const container = containerRef.value;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationFrameId: number;
    let gridParams: ReturnType<typeof setupCanvas>;
    const updateCanvasSize = () => {
      const newWidth = props.width || container.clientWidth;
      const newHeight = props.height || container.clientHeight;
      canvasSize.value = { width: newWidth, height: newHeight };
      gridParams = setupCanvas(canvas, newWidth, newHeight);
    };
    updateCanvasSize();
    let lastTime = 0;
    const animate = (time: number) => {
      if (!isInView.value) return;
      const deltaTime = (time - lastTime) / 1000;
      lastTime = time;
      updateSquares(gridParams.squares, deltaTime);
      drawGrid(
        ctx,
        canvas.width,
        canvas.height,
        gridParams.cols,
        gridParams.rows,
        gridParams.squares,
        gridParams.dpr
      );
      animationFrameId = requestAnimationFrame(animate);
    };
    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });
    resizeObserver.observe(container);
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isInView.value = entry?.isIntersecting || false;
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(canvas);
    if (isInView.value) {
      animationFrameId = requestAnimationFrame(animate);
    }
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  });
</script>
