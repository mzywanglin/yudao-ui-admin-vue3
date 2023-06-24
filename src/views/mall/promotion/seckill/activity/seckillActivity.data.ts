import type { CrudSchema } from '@/hooks/web/useCrudSchemas'
import { dateFormatter, dateFormatter2 } from '@/utils/formatTime'
import { getListAllSimple } from '@/api/mall/promotion/seckill/seckillConfig'

// 表单校验
export const rules = reactive({
  spuId: [required],
  name: [required],
  startTime: [required],
  endTime: [required],
  sort: [required],
  configIds: [required],
  totalLimitCount: [required],
  singleLimitCount: [required],
  totalStock: [required]
})

// CrudSchema https://doc.iocoder.cn/vue3/crud-schema/
// TODO @puhui999：table 宽度调整下，有点太长啦；部分字段可以隐藏哈，根据需求；
const crudSchemas = reactive<CrudSchema[]>([
  {
    label: '秒杀活动名称',
    field: 'name',
    isSearch: true,
    form: {
      colProps: {
        span: 24
      }
    },
    table: {
      width: 120
    }
  },
  {
    label: '活动开始时间',
    field: 'startTime',
    formatter: dateFormatter2,
    isSearch: true,
    search: {
      component: 'DatePicker',
      componentProps: {
        valueFormat: 'YYYY-MM-DD',
        type: 'daterange',
        defaultTime: [new Date('1 00:00:00'), new Date('1 23:59:59')]
      }
    },
    form: {
      component: 'DatePicker',
      componentProps: {
        type: 'date',
        valueFormat: 'x'
      }
    },
    table: {
      width: 300
    }
  },
  {
    label: '活动结束时间',
    field: 'endTime',
    formatter: dateFormatter2,
    isSearch: true,
    search: {
      component: 'DatePicker',
      componentProps: {
        valueFormat: 'YYYY-MM-DD',
        type: 'daterange',
        defaultTime: [new Date('1 00:00:00'), new Date('1 23:59:59')]
      }
    },
    form: {
      component: 'DatePicker',
      componentProps: {
        type: 'date',
        valueFormat: 'x'
      }
    },
    table: {
      width: 300
    }
  },
  {
    label: '秒杀时段', // todo @PUHUI999: 在列表界面，格式化不对
    field: 'configIds',
    form: {
      component: 'Select',
      componentProps: {
        multiple: true,
        optionsAlias: {
          labelField: 'name',
          valueField: 'id'
        }
      },
      api: getListAllSimple
    },
    table: {
      width: 300
    }
  },
  {
    label: '新增订单数',
    field: 'orderCount',
    isForm: false,
    form: {
      component: 'InputNumber',
      value: 0
    },
    table: {
      width: 300
    }
  },
  {
    label: '付款人数',
    field: 'userCount',
    isForm: false,
    form: {
      component: 'InputNumber',
      value: 0
    },
    table: {
      width: 300
    }
  },
  {
    label: '订单实付金额',
    field: 'totalPrice',
    isForm: false,
    form: {
      component: 'InputNumber',
      value: 0
    },
    table: {
      width: 300
    }
  },
  {
    label: '总限购数量',
    field: 'totalLimitCount',
    form: {
      component: 'InputNumber',
      value: 0
    },
    table: {
      width: 300
    }
  },
  {
    label: '单次限够数量',
    field: 'singleLimitCount',
    form: {
      component: 'InputNumber',
      value: 0
    },
    table: {
      width: 300
    }
  },
  {
    label: '秒杀库存',
    field: 'stock',
    isForm: false,
    form: {
      component: 'InputNumber',
      value: 0
    },
    table: {
      width: 300
    }
  },
  {
    label: '秒杀总库存',
    field: 'totalStock',
    form: {
      component: 'InputNumber',
      value: 0
    },
    table: {
      width: 300
    }
  },
  {
    label: '秒杀活动商品', // TODO @puhui999：格式化的商品不对；
    field: 'spuId',
    form: {
      colProps: {
        span: 24
      }
    },
    table: {
      width: 200
    }
  },
  {
    label: '创建时间',
    field: 'createTime',
    formatter: dateFormatter,
    search: {
      component: 'DatePicker',
      componentProps: {
        valueFormat: 'YYYY-MM-DD HH:mm:ss',
        type: 'daterange',
        defaultTime: [new Date('1 00:00:00'), new Date('1 23:59:59')]
      }
    },
    isForm: false,
    table: {
      width: 300
    }
  },
  {
    label: '排序',
    field: 'sort',
    form: {
      component: 'InputNumber',
      value: 0
    },
    table: {
      width: 300
    }
  },
  {
    label: '状态',
    field: 'status', // TODO @puhui999：状态在 table 格式化不对；
    dictType: DICT_TYPE.COMMON_STATUS,
    dictClass: 'number',
    isForm: false,
    isSearch: true,
    form: {
      component: 'Radio'
    },
    table: {
      width: 80
    }
  },
  {
    label: '备注',
    field: 'remark',
    form: {
      component: 'Input',
      componentProps: {
        type: 'textarea',
        rows: 4
      },
      colProps: {
        span: 24
      }
    },
    table: {
      width: 300
    }
  },
  {
    label: '操作',
    field: 'action',
    isForm: false,
    table: {
      width: 120,
      fixed: 'right'
    }
  }
])
export const { allSchemas } = useCrudSchemas(crudSchemas)
