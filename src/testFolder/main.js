var app = new Vue({
  el: '#app',
  data: {
    product: "Socks",
    image: "../assets/bluesocks.png",
    url: "https://vuejs.org/v2/guide/",
    inStock: true,
    inventory: 100,
    details: ["80% cottton, 20% polyester, Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantImage: "../assets/vmSocks-green-onWhite.jpeg",
        variantColor: "green"
      },
      {
        variantId: 2235,
        variantImage: "../assets/bluesocks.png",
        variantColor: "blue"
      },
    ],
    cart: 0
  },
  methods: {
    addToCart: function () {
      this.cart += 1
    }
  }
})