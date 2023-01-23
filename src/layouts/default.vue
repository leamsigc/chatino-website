<script setup lang="ts"></script>
<template>
	<main class="min-h-screen">
		<n-layout position="absolute">
			<n-layout-header style="height: 64px; padding: 10px" bordered >
				<div class="flex items-center">
					<n-avatar round :size="48" src="/img/CHATINOLOGO.png" class="inline-block" />
					<span class="inline-block ml-3">
						chatino Podcast
					</span>
				</div>
			</n-layout-header>
			<n-layout
				has-sider
				position="absolute"
				style="top: 64px; bottom: 64px"
			>
				<n-layout-sider bordered content-style="padding: 24px;">
					Handian Bridge
				</n-layout-sider>
				<n-layout content-style="padding: 24px;">
					<router-view />
				</n-layout>
			</n-layout>
			<n-layout-footer
				bordered
				position="absolute"
				style="height: 64px; padding: 24px"
			>
				城府路
			</n-layout-footer>
		</n-layout>
	</main>
</template>
