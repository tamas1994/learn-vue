<template>
	<div>
		<h1>Hello Vue World I'm TopBar Component</h1>
    <h2>{{subTitle}} </h2>
		
	</div>
</template>

<script>
	export default {
    data () {
      return {
        subTitle: '你好世界'
      }
    }
  }

</script>