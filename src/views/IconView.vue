<template>
    <h1 class="row-title">普通引入</h1>
    <div class="row">
        <MyIcon  icon="user-secret" />
        <MyIcon icon="bars" />
        <MyIcon icon="shield-halved" />
        <MyIcon icon="file" />
        <MyIcon icon="filter" />
        <MyIcon icon="gear" />
        <MyIcon icon="barcode" />
        <MyIcon icon="folder" />
        <MyIcon icon="folder-open" />
    </div>
    <h1 class="row-title">设置不同的大小</h1>
    <div class="row">
        <MyIcon icon="user-secret" size="2xs" />
        <MyIcon icon="bars" size="xs" />
        <MyIcon icon="shield-halved" size="sm" />
        <MyIcon icon="file" size="lg" />
        <MyIcon icon="filter" size="xl" />
        <MyIcon icon="gear" size="2xl" />
        <MyIcon icon="barcode" size="3x" />
        <MyIcon icon="folder" size="4x" />
        <MyIcon icon="folder-open" size="5x" />
    </div>
    <h1 class="row-title">旋转与翻转</h1>
    <div class="row">
        <MyIcon rotation="90" icon="user-secret" />
        <MyIcon rotation="180" icon="bars" />
        <MyIcon rotation="270" icon="shield-halved" />
        <MyIcon rotation="90" icon="file" />
        <MyIcon flip="horizontal" icon="filter" />
        <MyIcon flip="vertical" icon="gear" />
        <MyIcon rotation="180" icon="barcode" />
        <MyIcon rotation="90" icon="folder" />
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
