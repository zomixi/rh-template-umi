import { RhTableMeta } from 'packages/rh-components/src/RhTable/types';

const tableMeta: RhTableMeta = {
  headerTitle: 'LeekHub/leek-fund 仓库',
  api: '/repos/LeekHub/leek-fund/issues',
  searchPlacement: 'toolbar',
  columns: [
    {
      title: '标题',
      dataIndex: 'title',
      ellipsis: true,
      searchType: 'query',
      tip: '韭菜盒子插件issue标题',
    },
    {
      title: '状态',
      dataIndex: 'state',
      valueType: 'select',
      valueEnum: {
        all: { text: '全部', status: 'Default' },
        open: {
          text: '未解决',
          status: 'Error',
        },
        closed: {
          text: '已解决',
          status: 'Success',
        },
        processing: {
          text: '解决中',
          disabled: true,
          status: 'Processing',
        },
      },
    },
    {
      title: '创建人',
      dataIndex: 'user.login',
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      valueType: 'dateTime',
    },
  ],
  toolbar: {
    settings: undefined,
    actions: [
      {
        name: '下拉按钮',
        action: 'batch',
        disabled: false,
        type: 'primary',
        ghost: true,
        children: [
          { name: '全部启动', action: 'startAll' },
          { name: '全部停止', action: 'stopAll' },
          { name: '批量启动', action: 'batchStart' },
          { name: '批量停止', action: 'batchStop' },
        ],
      },
      {
        name: '复杂表单',
        action: 'add-complex',
      },
      {
        name: '简单表单',
        action: 'add',
      },
    ],
  },
  // 行操作列按钮
  optionActions: [
    {
      name: '外部链接',
      action: 'view',
      link: '${html_url}', // 表示用row.html_url 赋值
      targetBlank: true,
    },
    {
      name: '路由',
      action: 'view',
      link: '/form/basic', // 如果要传参：'/form/basic/${id}'，id 为当前row.id
    },
    { name: '复制', action: 'copy', isMore: true },
    { name: '删除', action: 'delete', isMore: true, danger: true },
  ],
};

export default tableMeta;
