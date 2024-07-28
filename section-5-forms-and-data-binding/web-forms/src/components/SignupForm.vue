<script>
export default {
  name: 'SignupForm',
  data() {
    return {
      model: {
        emailAddress: '',
        password: '',
        role: '',
        termsAccepted: false,
        skills: [],
        miscSkills: []

      },
      tempSkill: '',
      passwordError: ''
    };
  },
  methods: {
    addSkill(e) {
      const skillEntered = e.target.value.replace(",", "");

      if (e.key === "Enter" && !this.model.miscSkills.includes(skillEntered)) {
        this.model.miscSkills.push(skillEntered);
        this.tempSkill = '';
      }
    },
    deleteSkill(skill) {
      this.model.miscSkills = this.model.miscSkills.filter(s => s !== skill);
    },
    handleFormSubmit() {
      this.passwordError = this.model.password.length > 5 ? '' : 'Password must be at least 6 characters long';

      if (this.passwordError) {
        return;
      }

      console.log(this.model);
    }
  }
}
</script>


<template>
  <form @submit.prevent="handleFormSubmit">
    <div>
      <label for="emailAddress">Email:</label>
      <input type="email" name="emailAddress" id="emailAddress" v-model="model.emailAddress">
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" name="password" id="password" v-model="model.password">
      <div v-if="passwordError" class="error">{{ passwordError }}</div>
    </div>
    <div>
      <label for="role">Role:</label>
      <select name="role" id="role" v-model="model.role">
        <option value="developer">Web Developer</option>
        <option value="designer">Web Designer</option>
      </select>
    </div>
    <div class="skills">
      <div class="label-skills">Skills:</div>
      <div>
        <input type="checkbox" name="skills" value="html" id="html" v-model="model.skills">
        <label for="html">HTML</label>
      </div>
      <div>
        <input type="checkbox" name="skills" value="css" id="css" v-model="model.skills">
        <label for="css">CSS</label>
      </div>
      <div>
        <input type="checkbox" name="skills" value="javascript" id="javascript" v-model="model.skills">
        <label for="javascript">Javascript</label>
      </div>
    </div>
    <div>
      <label for="miscSkills">Misc Skills:</label>
      <input type="text" name="miscSkills" id="miscSkills" v-model="tempSkill" @keydown.enter.prevent="addSkill">
      <div class="misc-skills">
        <div v-for="skill in model.miscSkills" :key="skill" class="pill" @click="deleteSkill(skill)">{{ skill }}</div>
      </div>
    </div>
    <div class="terms">
      <input type="checkbox" name="terms" id="terms" required v-model="model.termsAccepted">
      <label for="terms">Accept terms and conditions</label>
    </div>
    <div class="submit">
      <button type="submit">Create an Account</button>
    </div>
  </form>
</template>


<style scoped>
.results {
  text-align: center;
}

form {
  max-width: 30rem;
  margin: 2rem auto;
  padding: 2.5rem;
  background-color: #fff;
  border-radius: 10px;
}

label:not(input[type=checkbox] ~ label),
input:not(input[type=checkbox]),
select {
  display: block;
  width: 100%;
}

label:not(input[type=checkbox] ~ label),
.label-skills {
  margin-bottom: 0.125rem;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.125em;
}

input:not(input[type=checkbox]) {
  padding: 0.6125rem 0.5rem;
  border: none;
  border-bottom: 1px solid #ddd;
  border-radius: 0;
  margin-bottom: 1.5rem;
  color: #555;
  background-color: #f0f0f0;
  font-size: 1rem;
}

select {
  padding: 0.6125rem 0.5rem;
  border: none;
  border-bottom: 1px solid #ddd;
  border-radius: 0;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: #555;
  background-color: #f0f0f0;
}

.skills input[type=checkbox] {
  margin-right: 0.5rem;
}

.skills {
  margin-bottom: 1.5rem;
}

.skills input {
  margin-left: 1rem;
  margin-bottom: 0.5rem;
}

.misc-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.misc-skills .pill {
  background-color: #00bd7e;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 500;
  color: #fafafa;
  border-radius: 1rem;
  transition: background-color 250ms;
}

.misc-skills .pill:hover {
  cursor: pointer;
  background-color: #db3768;
}

.terms {
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.submit {
  text-align: center
}

.submit button {
  background-color: #222;
  color: #fafafa;
  border: none;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.1em;
  padding: 0.5em 1em;
  border-radius: 10px;
  transition: background-color 250ms;
}

.submit button:hover {
  cursor: pointer;
  background-color: #444444;
}

.error {
  margin-top: -1.25rem;
  color: #db3768;
  font-size: 0.875rem;
}
</style>