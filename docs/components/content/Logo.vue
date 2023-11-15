<template>
  <div class="logo">
    <img src="/icon.svg" alt="">
    <span>
      Nuxt
      <i>Cron</i>
    </span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
  .logo {
    display: flex;
    align-items: center;
    gap: var(--space-2);

    img {
      height: 1.8rem;
    }

    span {
      font-size: var(--fontSize-2xl);
      font-weight: var(--fontWeight-bold);

      i {
        color: var(--color-primary-500);
        font-style: normal;
      }
    }
  }
</style>
