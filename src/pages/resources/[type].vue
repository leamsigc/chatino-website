<script lang="ts" setup>

/**
 *
 * Component Description:Desc
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
import { VNode } from 'vue';
import LoadingComponent from "@/components/LoadingComponent.vue"
import PodcastListView from "@/components/PodcastListView.vue"


interface ComponentMapper {
	podcast: typeof defineAsyncComponent
}


const PodcastComponent = defineAsyncComponent({
	loader: () => import('@/components/PodcastListView.vue'),
	loadingComponent: LoadingComponent
})
const VideoComponent = defineAsyncComponent({
	loader: () => import('@/components/VideoListView.vue'),
	loadingComponent: LoadingComponent
})
const BooksComponent = defineAsyncComponent({
	loader: () => import('@/components/BooksListView.vue'),
	loadingComponent: LoadingComponent
})


const componentMapper = {
	podcast: PodcastComponent,
	video: VideoComponent,
	books: BooksComponent
}
const route = useRoute()
const activeComponent = ref<keyof ComponentMapper>('podcast')
watch(route, () => {
	if ((route.params as any).type as keyof ComponentMapper) {
		activeComponent.value = (route.params as any).type as keyof ComponentMapper
	}
}, { immediate: true })



</script>

<template>
	<component :is="componentMapper[activeComponent]"></component>
</template>
<style scoped >

</style>
