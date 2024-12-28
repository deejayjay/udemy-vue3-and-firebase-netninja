<script>
export default {
  name: "SignupForm",
  data() {
    return {
      email: '',
      password: '',
      role: '',
      terms: false,
      tempSkill: '',
      skills: [],
      passwordError: ''
      // names: []
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === ',' && this.tempSkill) {
        const trimmedSkill = this.tempSkill.trim('').replace(',', '');
        if (!this.skills.includes(trimmedSkill)) {
          this.skills.push(trimmedSkill);
          this.tempSkill = '';
        }
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter(s => s !== skill);
    },
    handleSubmit() {
      // Validate Password
      this.passwordError = this.password.length < 6
        ? 'Password must be at least 6 characters long'
        : '';

      if (!this.passwordError) {
        console.log(`Email: ${this.email}`);
        console.log(`Password: ${this.password}`);
        console.log(`Role: ${this.role}`);
        console.log(`Terms Accepted: ${this.terms}`);
        console.log(`Skills: ${this.skills}`);
      }
    }
  }
};
</script>

<template>
  <form class="signup-form"
        @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label class="form-label"
             for="email">Email</label>
      <input v-model="email"
             class="form-control"
             type="email"
             name="email"
             id="email"
             required>
    </div>
    <div class="mb-3">
      <label class="form-label"
             for="password">Password</label>
      <input v-model="password"
             class="form-control"
             type="password"
             name="password"
             id="password"
             required>
      <p v-if="passwordError"
         class="text-danger">{{ passwordError }}</p>
    </div>

    <div class="mb-3">
      <label class="form-label"
             for="role">Role</label>
      <select v-model="role"
              class="form-select">
        <option value=""
                selected
                disabled>- Select -</option>
        <option value="developer">Web Developer</option>
        <option value="designer">Designer</option>
      </select>
    </div>

    <div class="form-check mb-3">
      <input v-model="terms"
             class="form-check-input"
             type="checkbox"
             name="terms"
             id="terms"
             required>
      <label class="form-check-label"
             for="terms">
        Accept terms and conditions
      </label>
    </div>

    <div class="mb-3">
      <label class="form-label"
             for="skills">Skills</label>
      <input v-model="tempSkill"
             @keyup="addSkill"
             class="form-control"
             type="text"
             name="skills"
             id="skills">
    </div>

    <span v-for="skill in skills"
          :key="skill"
          @click="deleteSkill(skill)"
          class="badge rounded-pill text-bg-secondary me-2">{{ skill }}</span>
    <!-- <div class="form-check mb-3">
      <input v-model="names"
             value="Deepak"
             class="form-check-input"
             type="checkbox">
      <label class="form-check-label">Deepak</label>
    </div>
    <div class="form-check mb-3">
      <input v-model="names"
             value="Deon"
             class="form-check-input"
             type="checkbox">
      <label class="form-check-label">Deon</label>
    </div>
    <div class="form-check mb-3">
      <input v-model="names"
             value="Anju"
             class="form-check-input"
             type="checkbox">
      <label class="form-check-label">Anju</label>
    </div> -->

    <div class="text-end">
      <button type="submit"
              class="btn btn-dark">Create an Account</button>
    </div>
  </form>

  <div class="text-center">
    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <p>Role: {{ role }}</p>
    <p>Terms Accepted: {{ terms }}</p>
    <p>Skills: {{ skills }}</p>
    <!-- <div>
      <p v-for="name in names">{{ name }}</p>
    </div> -->
  </div>
</template>

<style scoped>
.signup-form {
  max-width: 30rem;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 2.5rem;
  background-color: #fafafa;
}
</style>