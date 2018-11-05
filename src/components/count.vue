<template>
  <div>
    <h2>{{ msg }}</h2>
    <hr/>
    <h3>{{ count }}</h3>
    <div>
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </div>
    <div>
      <custom-input v-model="searchText"></custom-input>
      <h2>{{ searchText }}</h2>
    </div>
    <div>
      <div :style="{ fontSize: postFontSize + 'em' }">
        <blog-post v-on:enlarge-text="enlargeText"
          v-for="post in posts"
          v-bind:key="post.id"
          v-bind:post="post"
        ></blog-post>
      </div>
    </div>
  </div>
</template>

<script>
import CustomInput from '@/components/customInput'
import BlogPost from '@/components/blogPost'
export default {
  components: {
    'custom-input': CustomInput,
    'blog-post': BlogPost
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  data () {
    return {
      msg: 'Hello Vuex',
      searchText: 'test Custom input',
      postFontSize: 2,
      posts: [{
        title: 'test1',
        content: 'test1'
      }]
    }
  },
  methods: {
    enlargeText: function (enlargeAmount) {
      this.postFontSize += enlargeAmount
    }
  }
}
</script>
