<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Home page" />
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'Home',
	created() {
		console.log(this.$options.name, this)
	},
	mounted() {
		console.log('keep-Alive')
	},
	components: {
		HelloWorld,
	},
}
</script>
