<script setup>
import PostList from '@/components/PostList.vue';
import { computed, reactive, ref, watch, watchEffect } from 'vue';

const name = ref("Deepak");
const age = ref(36);
const ninjaOne = ref({ name: "Marko", age: 36 });
const search = ref('');
const names = ref(['Deepak', 'Marko', 'Brad', 'Ryan', 'Ryu', 'Ken']);

const ninjaTwo = reactive({ name: "Brad", age: 47 });

// ref() returns a reactive object, so we need to update the value property
const updateNinjaOne = () => {
  ninjaOne.value.name = "Ryu";
  ninjaOne.value.age = 30;
};

// reactive() returns a proxy object, so we can directly update the properties
const updateNinjaTwo = () => {
  ninjaTwo.name = "Ryan";
  ninjaTwo.age = 17;
};

const incrementAge = () => {
  age.value++;
};

// Computed property
const status = computed(() => (ninjaTwo.age >= 18) ? 'adult' : 'minor');
const filteredNames = computed(() => {
  return names.value.filter(name => name.toLowerCase().includes(search.value.toLowerCase()));
});

// watch()
watch(search, () => {
  console.log(`watch() - Search value changed to: ${search.value}`);
});

// watchEffect() is similar to watch() but it doesn't require a source. 
// It automatically tracks the reactive objects and refs used inside the callback
watchEffect(() => {
  console.log(`watchEffect() - Search value changed to: ${search.value}`);
});

const posts = ref([
  {
    title: "Welcome to the blog",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime porro perspiciatis distinctio commodi, totam unde deleniti? Blanditiis, aspernatur id. Doloremque repellat aperiam eligendi tempore doloribus aut perspiciatis tenetur velit expedita.",
    id: 1
  },
  {
    title: "Top 5 CSS tips",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime porro perspiciatis distinctio commodi, totam unde deleniti? Blanditiis, aspernatur id. Doloremque repellat aperiam eligendi tempore doloribus aut perspiciatis tenetur velit expedita.",
    id: 2
  },
]);
</script>

<template>
  <h1>{{ name }}</h1>
  <p>{{ age }}</p>
  <div>
    <label for="name">Name:</label>
    <br>
    <input type="text"
           id="name"
           v-model="name" />
  </div>
  <br>
  <button type="button"
          @click="incrementAge">Increment Age</button>
  <br>
  <div>
    <h2>Ref - {{ ninjaOne.name }}</h2>
    <p>{{ ninjaOne.age }}</p>
  </div>
  <button type="button"
          @click="updateNinjaOne">Update Ninja One</button>
  <br>
  <div>
    <h2>Reactive - {{ ninjaTwo.name }} ({{ status }})</h2>
    <p>{{ ninjaTwo.age }}</p>
  </div>
  <button type="button"
          @click="updateNinjaTwo">Update Ninja Two</button>

  <br><br>
  <div>
    <label for="search">Search Name:</label>
    <input type="text"
           id="search"
           v-model="search" />
    <ul>
      <li v-for="name in filteredNames">{{ name }}</li>
    </ul>
  </div>
  <br>
  <hr>
  <br>
  <PostList :posts="posts" />
</template>
