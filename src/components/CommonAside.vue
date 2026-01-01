<template>
    <el-aside width="180px">
        <el-menu background-color="#535c64" text-color="#fff" :collapse="false">
            <h3>通用后台管理系统</h3>
            <el-sub-menu v-for="item in hasChildren" :key="item.path" :index="item.path">
                <template #title>
                    <el-icon>
                        <component class="icons" :is="item.icon"></component>
                    </el-icon>
                    <span>{{ item.label }}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item v-for="child in item.children" :key="child.path" :index="child.path"
                        @click="clickMenu(child)">
                        <el-icon>
                            <component class="icons" :is="child.icon"></component>
                        </el-icon>
                        <span>{{ child.label }}</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>

            <el-menu-item v-for="item in noChildren" :key="item.path" :index="item.path" @click="clickMenu(item)">
                <el-icon>
                    <component class="icons" :is="item.icon"></component>
                </el-icon>
                <span>{{ item.label }}</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import {
    House,
    VideoPlay,
    User,
    Location,
    Setting,
    Coffee,
} from "@element-plus/icons-vue";

const router = useRouter();

const list = ref([
    {
        path: "/home",
        name: "home",
        label: "首页",
        icon: House,
        url: "Home",
    },
    {
        path: "/mall",
        name: "mall",
        label: "商品管理",
        icon: VideoPlay,
        url: "Mall",
    },
    {
        path: "/user",
        name: "user",
        label: "用户管理",
        icon: User,
        url: "User",
    },
    {
        path: "/mixin",
        name: "mixin",
        label: "Mixin示例",
        icon: Coffee,
        url: "Mixin",
    },
    {
        path: "other",
        label: "其他",
        icon: Location,
        children: [
            {
                path: "/page1",
                name: "page1",
                label: "页面1",
                icon: Setting,
                url: "Page1",
            },
            {
                path: "/page2",
                name: "page2",
                label: "页面2",
                icon: Setting,
                url: "Page2",
            },
        ],
    },
]);

const noChildren = computed(() => list.value.filter((item) => !item.children));
const hasChildren = computed(() => list.value.filter((item) => item.children));

const clickMenu = (item) => {
    router.push({ name: item.name });
};
</script>

<style lang="less" scoped>
.icons {
    width: 18px;
    height: 18px;
    margin-right: 5px;
}

.el-menu {
    border-right: none;
    background-color: #535c64;

    h3 {
        color: white;
        text-align: center;
        line-height: 48px;
    }
}

.el-aside {
    height: 100%;
    background-color: #535c64;
}
</style>
