const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      books: [
        {
          title: "Tom Sawyer",
          author: "Mark Twain",
          img: "./assets/1.jpg",
          isFav: true
        },
        {
          title: "Oliver Twist",
          author: "Charles Dickens",
          img: "./assets/2.jpg",
          isFav: false
        },
        {
          title: "The Old Man and The Sea",
          author: "Ernest Hemingway",
          img: "./assets/3.jpg",
          isFav: true
        }
      ],
      showDetails: false,
      url: "https://google.com",
      x: 0,
      y: 0
    };
  },
  methods: {
    resetYear() {
      this.yearOfBirth = 1835;
    },
    handleEvent(e) {
      console.log(e);
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter((b) => b.isFav);
    }
  }
});

app.mount("#app");
