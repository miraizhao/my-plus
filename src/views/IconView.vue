<template>
    <h1 class="row-title">普通引入</h1>
    <div class="row">
        <MyIcon icon="user-secret" />
        <MyIcon icon="bars" />
        <MyIcon icon="shield-halved" />
        <MyIcon icon="file" />
        <MyIcon icon="filter" />
        <MyIcon icon="gear" />
        <MyIcon icon="barcode" />
        <MyIcon icon="folder" />
        <MyIcon icon="folder-open" />
    </div>
</template>

<script setup lang="ts">
import MyIcon from '@/components/Icon/Icon.vue'

</script>

<style scoped lang="scss">
.row-title {
    font-size: 20px;
    margin-bottom: 10px;

}

.row {
    display: flex;

    .my-icon {
        flex: 1
    }
}
</style>
