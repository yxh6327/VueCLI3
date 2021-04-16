<template>
	<div v-if="Object.keys(paramInfo).length !== 0" class="param-info">
		<div class="param-top">
			<table class="table1">
	            <tr v-for="item in paramInfo.sizes[0]">
	            	<td v-for="iitem in item" class="param-top-td">{{iitem}}</td>
	            </tr>				
			</table>
		</div>
		<div class="param-bottom">
			<table class="table2">
				<tr v-for="item in paramInfo.infos">
					<td class="param-bottom-td1">{{item.key}}</td>
					<td class="param-bottom-td2">{{item.value}}</td>
				</tr>
			</table>
		</div>
		<div v-if="paramInfo.image.length !== 0" class="param-img">
			<img :src="paramInfo.image" alt="">
		</div>
	</div>
</template>

<style scoped>
	.param-info{
		font-size: 14px;
		width: 100%;
		border-bottom: 5px solid #f2f5f8;
	}
	.param-top{
		width: 100%;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	table{
		width: 90%;
		margin: 0 15px;
		border-collapse: collapse;
	}
	.table1{
		border-bottom: 3px solid #eee;
	}
	.param-top-td{
		height: 40px;
		line-height: 40px;
		border-bottom: 2px solid #f2f5f8;
	}
	.param-bottom{
        width: 100%;
        margin-bottom: 20px;
	}
	.param-bottom-td1{
		height: 40px;
		width: 100px;
		border-bottom: 2px solid #f2f5f8;
	}
	.param-bottom-td2{
		height: 40px;
		color: #ff8198;
		border-bottom: 2px solid #f2f5f8;
	}
</style>

<script>
	export default{
		name: 'DetailParamInfo',
		    props: {
			     paramInfo: {
			        type: Object,
			        default() {
			            return {}
			        }
			     }
			}
	}
</script>