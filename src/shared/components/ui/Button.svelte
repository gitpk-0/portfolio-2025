<script lang="ts">
  interface ButtonProps {
    variant?: "primary" | "secondary" | "retro";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
  }

  export let variant: ButtonProps["variant"] = "primary";
  export let size: ButtonProps["size"] = "md";
  export let disabled: ButtonProps["disabled"] = false;
</script>

<button
  class="bg-modern-primary hover:bg-modern-primary-hover text-white font-bold py-2 px-4 rounded"
  class:retro-crt={variant === "retro"}
  {...$$restProps}
>
  <slot></slot>
</button>
