const initialState = {
  products: [
    {
      id: 1,
      name: "Vajra Ritual Bell",
      price: 20,
      imageSrc: import("../../images/Dorje-Dilbu.jpeg"),
    },
    {
      id: 2,
      name: "Hand Wheel",
      price: 30,
      imageSrc: import("../../images/Hand-Mani.jpeg"),
    },
    {
      id: 3,
      name: "Mala",
      price: 30,
      imageSrc: import("../../images/Mala-108.jpeg"),
    },
    {
      id: 4,
      name: "Singing Bowl",
      price: 30,
      imageSrc: import("../../images/Singing-bowl.jpeg"),
    },
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // Handle actions if needed
    default:
      return state;
  }
};

export default productReducer;
