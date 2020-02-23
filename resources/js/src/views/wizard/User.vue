<template>
  <div
    class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
    id="page-login"
  >
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div id="extra-component-form-wizard-demo">
          <registration-wizard></registration-wizard>
        </div>
      </vx-card>
    </div>
  </div>
</template>


<script>
import RegistrationWizard from "./RegistrationWizard.vue";
export default {
  components: {
    RegistrationWizard
  }
};
</script>

<style>
</style>