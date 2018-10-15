import ApiController from "../controllers/api.controller";
import * as KoaRouter from 'koa-router'


const router = new KoaRouter({ prefix: '/api' })
router.get('/test', ApiController.test)


export default router