import request from '@/config/axios'
import { Sku, SpuRespVO } from '@/api/mall/product/spu'

export interface SeckillActivityVO {
  id: number
  spuIds: number[]
  name: string
  status: number
  remark: string
  startTime: Date
  endTime: Date
  sort: number
  configIds: string
  orderCount: number
  userCount: number
  totalPrice: number
  totalLimitCount: number
  singleLimitCount: number
  stock: number
  totalStock: number
  products: SeckillProductVO[]
}

export interface SeckillProductVO {
  spuId: number
  skuId: number
  seckillPrice: number
  stock: number
}

type SkuExtension = Sku & {
  productConfig: SeckillProductVO
}

export interface SpuExtension extends SpuRespVO {
  skus: SkuExtension[] // 重写类型
}

// 查询秒杀活动列表
export const getSeckillActivityPage = async (params) => {
  return await request.get({ url: '/promotion/seckill-activity/page', params })
}

// 查询秒杀活动详情
export const getSeckillActivity = async (id: number) => {
  return await request.get({ url: '/promotion/seckill-activity/get?id=' + id })
}

// 新增秒杀活动
export const createSeckillActivity = async (data: SeckillActivityVO) => {
  return await request.post({ url: '/promotion/seckill-activity/create', data })
}

// 修改秒杀活动
export const updateSeckillActivity = async (data: SeckillActivityVO) => {
  return await request.put({ url: '/promotion/seckill-activity/update', data })
}

// 删除秒杀活动
export const deleteSeckillActivity = async (id: number) => {
  return await request.delete({ url: '/promotion/seckill-activity/delete?id=' + id })
}
