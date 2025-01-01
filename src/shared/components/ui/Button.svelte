<script lang="ts">
    interface ButtonProps {
      variant?: "primary" | "secondary";
      size?: "sm" | "md" | "lg";
      disabled?: boolean;
    }
  
    export let variant: ButtonProps["variant"] = "primary";
    export let size: ButtonProps["size"] = "md";
    export let disabled: ButtonProps["disabled"] = false;
  </script>
  
  <button class={variant} {disabled} data-size={size}>
    <slot></slot>
  </button>