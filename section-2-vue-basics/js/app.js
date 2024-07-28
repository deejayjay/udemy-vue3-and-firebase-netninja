const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      showBooks: true,
      url: "https://www.google.com",
      books: [
        {
          title: "Name of the Wind",
          author: "Patrick Rothfuss",
          isFav: true
        },
        {
          title: "The Way of Kings",
          author: "Brandon Sanderson",
          isFav: false
        },
        {
          title: "Good Omens",
          author: "Terry Pratchett & Neil Gaiman",
          isFav: true
        }
      ]
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleIsFav(book) {
      book.isFav = !book.isFav;
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    }
  }
});

app.mount("#app");
