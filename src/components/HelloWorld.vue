<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <br />
    <p>Education isn't simply about achieving a “higher state of knowledge”</p>
    <p>
      it’s about equipping our students with the tools they need to go out into
      the world and shape it for themselves.
    </p>

    <h3>system</h3>
    <ul>
      <li>
        <a href="https://www.edumaterials.org/" target="_blank" rel="noopener"
          >Edu materals</a
        >
      </li>
      <li>
        <a
          href="https://www.brookings.edu/research/skills-for-a-changing-world/"
          target="_blank"
          rel="noopener"
          >Skills for a changing world</a
        >
      </li>
      <li>
        <a
          href="https://www.greenpeace.org.uk/all-resources/education-resources/"
          target="_blank"
          rel="noopener"
          >Spread World</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
