<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>Client IP: {data.ipAddress}</p>
