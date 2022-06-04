export default class BookstoreService {
  data = [
    {
      id: 0,
      name: "Run, Rose, Run",
      author: "James Patterson",
      price: {
        currency: "$",
        value: 28
      },
      coverImage: "https://m.media-amazon.com/images/I/51h7odRtGhL.jpg"
    },
    {
      id: 1,
      name: "The Paris Apartment",
      author: "Lucy Foley",
      price: {
        currency: "$",
        value: 28
      },
      coverImage: "https://m.media-amazon.com/images/I/51GcplNSIjL.jpg"
    },
    {
      id: 2,
      name: "The Book of Lost and Found",
      author: "Lucy Foley",
      price: {
        currency: "$",
        value: 22
      },
      coverImage: "https://m.media-amazon.com/images/I/51fFekDfUoS.jpg"
    },
    {
      id: 3,
      name: "One by One",
      author: "Ruth Ware",
      price: {
        currency: "$",
        value: 24
      },
      coverImage: "https://m.media-amazon.com/images/I/51-OvuENfAL.jpg"
    },
    {
      id: 4,
      name: "A Flicker in the Dark",
      author: "Stacy Willingham",
      price: {
        currency: "$",
        value: 16
      },
      coverImage: "https://m.media-amazon.com/images/I/41c93y7LqjL.jpg"
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.9) {
          resolve(this.data);
        } else {
          reject( new Error("Произошла ошибка при загрузке книг. Перезагрузите приложение.") );
        }
      }, 700);
    });
  }
}