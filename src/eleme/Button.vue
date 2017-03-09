<template>
	<div>
		<div>
			<el-button>默认按钮</el-button>
			<el-button type="primary">主要按钮</el-button>
			<el-button type="text">文字按钮</el-button>
		</div>

		<!-- 禁用 -->
		<div>
			<el-button :plain="true" :disabled="true">主要按钮</el-button>
			<el-button type="primary" :disabled="true">主要按钮</el-button>
			<el-button type="text" :disabled="true">文字按钮</el-button>
		</div>
	</div>
	
</template>
