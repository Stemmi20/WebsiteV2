<script lang="ts">
	import Chart from 'chart.js/auto';
	import type { PageServerData } from './$types';
	import { onMount } from 'svelte';

	export let data: PageServerData;

	const baseOpts = {
		fill: true,
		backgroundColor: 'rgba(225, 204,230, .3)',
		borderCapStyle: 'butt',
		borderDash: [],
		borderDashOffset: 0.0,
		borderJoinStyle: 'miter',
		pointBorderColor: 'black',
		pointBackgroundColor: 'rgb(255, 255, 255)',
		pointBorderWidth: 10,
		pointHoverRadius: 5,
		pointHoverBackgroundColor: 'rgb(0, 0, 0)',
		pointHoverBorderColor: 'rgba(220, 220, 220,1)',
		pointHoverBorderWidth: 2,
		pointRadius: 1,
		pointHitRadius: 10,
		radius: 1,
		pointStyle: 'crossRot',
	};

	onMount(() => {
		new Chart(document.getElementById('CPU') as HTMLCanvasElement, {
			type: 'line',
			data: {
				labels: data.serverLoad.map((d) => new Date(d.timestamp).toLocaleTimeString()),
				datasets: [data.serverLoad.map((d) => d.cpuLoad / 10)].map((d) => ({
					borderColor: 'red',
					label: 'CPU',
					data: d,

					...(baseOpts as any),
				})),
			},
			options: {
				plugins: { legend: { labels: { color: '#fff' } } },
				scales: {
					x: {
						ticks: {
							color: 'white',
						},
						stacked: true,
						title: {
							color: "white",
							display: true,
							text: 'Date',
						},
					},
					y: {
						ticks: {
							color: 'white',
						},
						stacked: true,
						title: {
							color: "white",
							display: true,
							text: '%',
						},
					},
				},
			},
		});
		new Chart(document.getElementById('RAM') as HTMLCanvasElement, {
			type: 'line',
			data: {
				labels: data.serverLoad.map((d) => new Date(d.timestamp).toLocaleTimeString()),
				datasets: [data.serverLoad.map((d) => d.ramLoad / 1000)].map((d) => ({
					borderColor: 'blue',
					label: 'RAM',
					data: d,

					...(baseOpts as any),
				})),
			},
			options: {
				plugins: { legend: { labels: { color: '#fff' } } },
				scales: {
					x: {
						ticks: {
							color: 'white',
						},
						stacked: true,
						title: {
							display: true,
							text: 'Date',
						},
					},
					y: {
						ticks: {
							color: 'white',
						},
						stacked: true,
						title: {
							display: true,
							text: 'GB',
						},
					},
				},
			},
		});
	});
</script>

<div>
	<div class="color-white flex flex-center justify-center mt-10 font-size-7">Server Information</div>
	<div class="color-white flex flex-center justify-center mt-10 font-size-4">
		Server Provider:&nbsp<a href="https://www.hetzner.com/"> Hetzner</a>
	</div>
	<div class="color-white flex flex-center justify-center mt-10 mb-10 font-size-4">
		CPU: Intel Core i7-7700 <br />
		Ram: 4x RAM 16384 MB DDR4 <br />
		Storage: 2x SSD M.2 NVMe 512 GB
	</div>

	<div class="flex flex-row justify-center items-center gap-5 h-75lvh w-95lvw flex-wrap">
		<canvas id="CPU"></canvas>
		<canvas id="RAM"></canvas>
	</div>
</div>

<!-- 
	<iframe
		title=""
		src="https://grafana.stemm1.org/d/rYdddlPWk/node-exporter-full?orgId=1&refresh=1m"
		width="800"
		height="800"
	></iframe>
	<iframe
		title=""
		src="http://localhost:3000/dashboard/snapshot/RnFjhTa3mqMbePUqrtGvGX7fmwOWFLmi"
		width="800"
		height="800"
	></iframe>
	<iframe
		title=""
		src="http://localhost:3000/public-dashboards/7b08a03a7b594dfbb0c3c4b5eecfdf86"
		width="800"
		height="800"
	></iframe>
	<iframe
		title=""
		src="http://localhost:3000/public-dashboards/7b08a03a7b594dfbb0c3c4b5eecfdf86"
		width="800"
		height="800"
	></iframe>
	<img
		src="https://grafana.stemm1.org/d/rYdddlPWk/node-exporter-full?orgId=1&refresh=1m&from=1725956416520&to=1726042816520"
		alt="Grfana Dashboard"
	/>
	<iframe
		title=""
		src="https://grafana.stemm1.org/d/rYdddlPWk/node-exporter-full?orgId=1&refresh=1m&from=1726394377951&to=1726480777951&theme=dark"
		width="800"
		height="800"
	></iframe>

	<iframe
		title=""
		src="http://localhost:3000/dashboard/snapshot/V4HoDPc5vT9aoAnhLswKvpFVuarTlW7U"
		width="800"
		height="800"
	></iframe> -->
