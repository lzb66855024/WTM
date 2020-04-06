﻿import Request from '@leng/public/src/utils/request';
import lodash from 'lodash';
import { CreateElement } from 'vue';
import { onGetController } from "../store";
import { EntitiesItems } from 'components/utils/type';
/**
 * label  标识
 * rules   校验规则，参考下方文档  https://ant.design/components/form-cn/#components-form-demo-validate-other
 * children  表单组件
 * 验证消息 https://github.com/yiminghe/async-validator#messages
 */
export default {
    /**
     * 表单模型 
     * @param props 
     */
    editEntities(props?): EntitiesItems {
        return {
            /** 唯一标识 的隐藏域 */
            "Entity.ID": {
                label: "ID",
                options: {},
                children: `<a-input v-decorator />`
            },
            /** 内部地址 */
            "Entity.IsInside": {
                label: "地址类型",
                span: 24,
                options: { rules: [{ required: true }] },
                dataSource: [
                    { Text: "内部地址", Value: true },
                    { Text: "外部地址", Value: false },
                ],
                children: `<a-radio-group v-decorator />`
            },
            /** 页面名称 */
            "Entity.PageName": {
                label: "页面名称",
                span: 24,
                options: { rules: [{ required: true }] },
                children: `<a-input v-decorator />`
            },
            /** 模块名称 */
            "SelectedModule": {
                label: "模块名称",
                span: 24,
                options: {},
                dataSource: () => onGetController(),
                children: `<a-select v-decorator />`
            },
            /** 动作名称 */
            "SelectedActionIDs": {
                label: "动作名称",
                span: 24,
                children: `<a-input v-decorator />`
            },
            /** 目录 */
            "Entity.FolderOnly": {
                label: "目录",
                span: 24,
                children: `<a-input v-decorator />`
            },
            /** 继承 */
            "Entity.IsInherit": {
                label: "继承",
                span: 24,
                children: `<a-input v-decorator />`
            },
            /** 菜单显示 */
            "Entity.ShowOnMenu": {
                label: "菜单显示",
                span: 24,
                children: `<a-input v-decorator />`
            },
            /** 公开 */
            "Entity.IsPublic": {
                label: "公开",
                span: 24,
                children: `<a-input v-decorator />`
            },
            /** 顺序 */
            "Entity.DisplayOrder": {
                label: "顺序",
                span: 24,
                options: { rules: [{ required: true }] },
                children: `<a-input v-decorator />`
            },

            /** Url */
            "Entity.Url": {
                label: "Url",
                span: 24,
                children: `<a-input v-decorator />`
            },
            "Entity.ICon": {
                label: "图标",
                span: 24,
                children: `<a-input v-decorator />`
            },
            /** 父目录 */
            "Entity.ParentId": {
                label: "父目录",
                span: 24,
                children: `<a-input v-decorator />`
            },
        }
    },
    /**
     * 搜索 模型 
     * @param props 
     */
    filterEntities(props?, h?: CreateElement): EntitiesItems {
        return {

        }
    },
}